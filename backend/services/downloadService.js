const Application = require('../models/Application');
const Download = require('../models/Download');
const User = require('../models/User');
const ApiError = require('../utils/ApiError');
const { APP_VISIBILITY } = require('../utils/constants');
const { serializeDownload } = require('../utils/serializers');
const notificationService = require('./notificationService');

async function createDownload(user, appId) {
  const app = await Application.findById(appId).populate('ownerId', 'name email');

  if (!app || app.visibility !== APP_VISIBILITY.PUBLIC) {
    throw new ApiError(404, 'Application not found.');
  }

  const existingDownload = await Download.findOne({ userId: user._id, appId });

  if (existingDownload) {
    throw new ApiError(409, 'Application already downloaded by this user.');
  }

  const download = await Download.create({
    userId: user._id,
    appId,
  });

  await Promise.all([
    Application.findByIdAndUpdate(appId, { $inc: { downloadCount: 1 } }),
    User.findByIdAndUpdate(user._id, { $addToSet: { subscribedApps: appId } }),
    notificationService.notifyOwnerAboutDownload({
      ownerId: app.ownerId._id,
      appId: app._id,
      appName: app.name,
      user,
    }),
  ]);

  const populatedDownload = await Download.findById(download._id)
    .populate('userId', 'name')
    .populate('appId', 'name');

  return serializeDownload(populatedDownload);
}

async function listOwnerDownloads(ownerId) {
  const applications = await Application.find({ ownerId }).select('_id');
  const appIds = applications.map((app) => app._id);
  const downloads = await Download.find({ appId: { $in: appIds } })
    .populate('userId', 'name email')
    .populate('appId', 'name')
    .sort({ downloadDate: -1 });

  return downloads.map(serializeDownload);
}

module.exports = {
  createDownload,
  listOwnerDownloads,
};
