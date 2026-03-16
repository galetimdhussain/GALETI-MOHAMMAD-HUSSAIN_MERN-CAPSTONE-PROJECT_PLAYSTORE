const ApiError = require('../utils/ApiError');
const User = require('../models/User');
const Review = require('../models/Review');
const Download = require('../models/Download');
const Notification = require('../models/Notification');
const Application = require('../models/Application');
const { ROLES } = require('../utils/constants');
const { serializeUser } = require('../utils/serializers');

async function listUsers() {
  const users = await User.find({}).sort({ createdAt: -1 });
  return users.map(serializeUser);
}

async function updateUserRole(userId, role) {
  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, 'User not found.');
  }

  if (user.role === ROLES.OWNER) {
    throw new ApiError(400, 'This user is already an owner.');
  }

  user.role = role;
  await user.save();

  return serializeUser(user);
}

async function recalculateApps(appIds) {
  const uniqueIds = [...new Set(appIds.map((appId) => String(appId)))];

  for (const appId of uniqueIds) {
    const appReviews = await Review.find({ appId });
    const downloadCount = await Download.countDocuments({ appId });
    const reviewCount = appReviews.length;
    const averageRating = reviewCount
      ? Number((appReviews.reduce((sum, review) => sum + review.rating, 0) / reviewCount).toFixed(1))
      : 0;

    await Application.findByIdAndUpdate(appId, {
      reviewCount,
      downloadCount,
      averageRating,
      rating: averageRating,
    });
  }
}

async function deleteUser(userId) {
  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, 'User not found.');
  }

  if (user.role === ROLES.OWNER) {
    throw new ApiError(400, 'Owner accounts cannot be deleted from this panel.');
  }

  const [reviews, downloads] = await Promise.all([
    Review.find({ userId: user._id }).select('appId'),
    Download.find({ userId: user._id }).select('appId'),
  ]);

  const affectedAppIds = [
    ...reviews.map((review) => review.appId),
    ...downloads.map((download) => download.appId),
  ];

  await Promise.all([
    Review.deleteMany({ userId: user._id }),
    Download.deleteMany({ userId: user._id }),
    Notification.deleteMany({ recipientId: user._id }),
    User.findByIdAndDelete(user._id),
  ]);

  await recalculateApps(affectedAppIds);
}

module.exports = {
  listUsers,
  updateUserRole,
  deleteUser,
};
