const mongoose = require('mongoose');
const Application = require('../models/Application');
const Category = require('../models/Category');
const Download = require('../models/Download');
const Review = require('../models/Review');
const User = require('../models/User');
const ApiError = require('../utils/ApiError');
const { APP_VISIBILITY, ROLES } = require('../utils/constants');
const { serializeApplication, serializeReview, serializeDownload } = require('../utils/serializers');
const notificationService = require('./notificationService');

function createCategoryMatcher(categoryValue) {
  if (!categoryValue) {
    return null;
  }

  if (mongoose.Types.ObjectId.isValid(categoryValue)) {
    return [{ _id: categoryValue }, { slug: categoryValue.toLowerCase() }];
  }

  return [{ slug: categoryValue.toLowerCase() }];
}

async function resolveCategoryId(categoryValue) {
  if (!categoryValue) {
    return null;
  }

  const category = await Category.findOne({ $or: createCategoryMatcher(categoryValue) });
  return category ? category._id : 'NO_MATCH';
}

async function listApplications(query = {}, currentUser = null) {
  const filter = {};

  if (currentUser && currentUser.role === ROLES.OWNER && query.ownerOnly) {
    filter.ownerId = currentUser._id;
  } else {
    filter.visibility = APP_VISIBILITY.PUBLIC;
  }

  if (query.search) {
    filter.name = { $regex: query.search, $options: 'i' };
  }

  if (query.rating) {
    filter.rating = { $gte: Number(query.rating) };
  }

  if (query.category) {
    const categoryId = await resolveCategoryId(query.category);

    if (categoryId === 'NO_MATCH') {
      return [];
    }

    filter.category = categoryId;
  }

  const apps = await Application.find(filter)
    .populate('category')
    .populate('ownerId', 'name email')
    .sort({ createdAt: -1 });

  return apps.map(serializeApplication);
}

async function getApplicationById(appId, currentUser = null) {
  const app = await Application.findById(appId).populate('category').populate('ownerId', 'name email');

  if (!app) {
    throw new ApiError(404, 'Application not found.');
  }

  const isOwner = currentUser && String(app.ownerId._id) === String(currentUser._id);

  if (app.visibility === APP_VISIBILITY.HIDDEN && !isOwner) {
    throw new ApiError(404, 'Application not found.');
  }

  return serializeApplication(app);
}

async function createApplication(ownerId, payload) {
  const category = await Category.findById(payload.category);

  if (!category) {
    throw new ApiError(400, 'Selected category does not exist.');
  }

  const application = await Application.create({
    ...payload,
    ownerId,
  });

  const populatedApplication = await Application.findById(application._id)
    .populate('category')
    .populate('ownerId', 'name email');

  return serializeApplication(populatedApplication);
}

async function updateApplication(appId, ownerId, payload) {
  const app = await Application.findById(appId);

  if (!app) {
    throw new ApiError(404, 'Application not found.');
  }

  if (String(app.ownerId) !== String(ownerId)) {
    throw new ApiError(403, 'You can only update your own applications.');
  }

  if (payload.category) {
    const category = await Category.findById(payload.category);

    if (!category) {
      throw new ApiError(400, 'Selected category does not exist.');
    }
  }

  Object.assign(app, payload);
  await app.save();

  const updatedApplication = await Application.findById(app._id)
    .populate('category')
    .populate('ownerId', 'name email');

  return serializeApplication(updatedApplication);
}

async function deleteApplication(appId, ownerId) {
  const app = await Application.findById(appId);

  if (!app) {
    throw new ApiError(404, 'Application not found.');
  }

  if (String(app.ownerId) !== String(ownerId)) {
    throw new ApiError(403, 'You can only delete your own applications.');
  }

  await Promise.all([
    Review.deleteMany({ appId: app._id }),
    Download.deleteMany({ appId: app._id }),
    app.deleteOne(),
  ]);
}

async function updateVisibility(appId, ownerId, visibility) {
  return updateApplication(appId, ownerId, { visibility });
}

async function getOwnerDashboardSummary(ownerId) {
  const applications = await Application.find({ ownerId })
    .populate('category')
    .populate('ownerId', 'name email')
    .sort({ createdAt: -1 });

  const appIds = applications.map((app) => app._id);
  const [downloads, reviews] = await Promise.all([
    Download.find({ appId: { $in: appIds } }).populate('userId', 'name email').populate('appId', 'name').sort({ downloadDate: -1 }).limit(10),
    Review.find({ appId: { $in: appIds } }).populate('userId', 'name').populate('appId', 'name').sort({ timestamp: -1 }).limit(10),
  ]);

  return {
    stats: {
      totalApps: applications.length,
      visibleApps: applications.filter((app) => app.visibility === APP_VISIBILITY.PUBLIC).length,
      hiddenApps: applications.filter((app) => app.visibility === APP_VISIBILITY.HIDDEN).length,
      totalDownloads: applications.reduce((total, app) => total + app.downloadCount, 0),
      totalReviews: applications.reduce((total, app) => total + app.reviewCount, 0),
    },
    applications: applications.map(serializeApplication),
    recentDownloads: downloads.map(serializeDownload),
    recentReviews: reviews.map(serializeReview),
  };
}

async function announceUpdate(appId, ownerId, payload) {
  const app = await Application.findById(appId).populate('ownerId', 'name email');

  if (!app) {
    throw new ApiError(404, 'Application not found.');
  }

  if (String(app.ownerId._id) !== String(ownerId)) {
    throw new ApiError(403, 'You can only announce updates for your own applications.');
  }

  app.version = payload.version;
  app.releaseDate = new Date();
  app.lastAnnouncement = payload.message;
  await app.save();

  await notificationService.notifyUsersAboutUpdate({
    app,
    owner: app.ownerId,
    version: payload.version,
    message: payload.message,
  });

  const updatedApplication = await Application.findById(app._id)
    .populate('category')
    .populate('ownerId', 'name email');

  return serializeApplication(updatedApplication);
}

async function recomputeApplicationRatings(appId) {
  const result = await Review.aggregate([
    { $match: { appId: new mongoose.Types.ObjectId(appId) } },
    {
      $group: {
        _id: '$appId',
        averageRating: { $avg: '$rating' },
        reviewCount: { $sum: 1 },
      },
    },
  ]);

  const nextValues = result[0]
    ? {
        averageRating: Number(result[0].averageRating.toFixed(1)),
        rating: Number(result[0].averageRating.toFixed(1)),
        reviewCount: result[0].reviewCount,
      }
    : {
        averageRating: 0,
        rating: 0,
        reviewCount: 0,
      };

  await Application.findByIdAndUpdate(appId, nextValues);
}

module.exports = {
  listApplications,
  getApplicationById,
  createApplication,
  updateApplication,
  deleteApplication,
  updateVisibility,
  getOwnerDashboardSummary,
  announceUpdate,
  recomputeApplicationRatings,
};
