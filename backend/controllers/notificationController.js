const asyncHandler = require('../utils/asyncHandler');
const { sendResponse } = require('../utils/apiResponse');
const notificationService = require('../services/notificationService');
const ApiError = require('../utils/ApiError');

const getNotifications = asyncHandler(async (req, res) => {
  const notifications = await notificationService.listNotifications(req.user._id);
  return sendResponse(res, 200, { data: notifications });
});

const markRead = asyncHandler(async (req, res) => {
  const notification = await notificationService.markNotificationRead(req.params.id, req.user._id);

  if (!notification) {
    throw new ApiError(404, 'Notification not found.');
  }

  return sendResponse(res, 200, {
    message: 'Notification marked as read.',
    data: notification,
  });
});

const markAllRead = asyncHandler(async (req, res) => {
  await notificationService.markAllNotificationsRead(req.user._id);
  return sendResponse(res, 200, { message: 'All notifications marked as read.' });
});

module.exports = {
  getNotifications,
  markRead,
  markAllRead,
};
