const Application = require('../models/Application');
const Review = require('../models/Review');
const User = require('../models/User');
const ApiError = require('../utils/ApiError');
const { serializeReview } = require('../utils/serializers');
const { APP_VISIBILITY } = require('../utils/constants');
const applicationService = require('./applicationService');

async function createReview(userId, payload) {
  const app = await Application.findById(payload.appId);

  if (!app || app.visibility !== APP_VISIBILITY.PUBLIC) {
    throw new ApiError(404, 'Application not found.');
  }

  const existingReview = await Review.findOne({ userId, appId: payload.appId });

  if (existingReview) {
    throw new ApiError(409, 'You have already reviewed this application.');
  }

  const review = await Review.create({
    ...payload,
    userId,
  });

  await Promise.all([
    applicationService.recomputeApplicationRatings(payload.appId),
    User.findByIdAndUpdate(userId, { $addToSet: { subscribedApps: payload.appId } }),
  ]);

  const populatedReview = await Review.findById(review._id).populate('userId', 'name').populate('appId', 'name');

  return serializeReview(populatedReview);
}

async function listReviewsByApp(appId) {
  const reviews = await Review.find({ appId }).populate('userId', 'name').sort({ timestamp: -1 });
  return reviews.map(serializeReview);
}

async function deleteReview(reviewId, user) {
  const review = await Review.findById(reviewId).populate('appId');

  if (!review) {
    throw new ApiError(404, 'Review not found.');
  }

  if (String(review.userId) !== String(user._id)) {
    throw new ApiError(403, 'You can only delete your own reviews.');
  }

  const appId = review.appId._id;
  await review.deleteOne();
  await applicationService.recomputeApplicationRatings(appId);
}

module.exports = {
  createReview,
  listReviewsByApp,
  deleteReview,
};
