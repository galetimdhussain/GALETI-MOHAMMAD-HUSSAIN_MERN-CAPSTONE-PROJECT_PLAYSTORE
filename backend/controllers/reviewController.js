const asyncHandler = require('../utils/asyncHandler');
const { sendResponse } = require('../utils/apiResponse');
const reviewService = require('../services/reviewService');

const createReview = asyncHandler(async (req, res) => {
  const review = await reviewService.createReview(req.user._id, req.body);
  return sendResponse(res, 201, {
    message: 'Review added successfully.',
    data: review,
  });
});

const getReviewsByApp = asyncHandler(async (req, res) => {
  const reviews = await reviewService.listReviewsByApp(req.params.id);
  return sendResponse(res, 200, { data: reviews });
});

const deleteReview = asyncHandler(async (req, res) => {
  await reviewService.deleteReview(req.params.id, req.user);
  return sendResponse(res, 200, { message: 'Review deleted successfully.' });
});

module.exports = {
  createReview,
  getReviewsByApp,
  deleteReview,
};
