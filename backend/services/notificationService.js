const Notification = require('../models/Notification');
const User = require('../models/User');
const { NOTIFICATION_TYPES } = require('../utils/constants');
const { serializeNotification } = require('../utils/serializers');

async function createNotification(payload) {
  const notification = await Notification.create(payload);
  return serializeNotification(notification);
}

async function createManyNotifications(payloads) {
  if (!payloads.length) {
    return [];
  }

  const notifications = await Notification.insertMany(payloads);
  return notifications.map(serializeNotification);
}

async function notifyOwnerAboutDownload({ ownerId, appId, appName, user }) {
  return createNotification({
    recipientId: ownerId,
    recipientRole: 'owner',
    type: NOTIFICATION_TYPES.APP_DOWNLOADED,
    title: 'New app download',
    message: `${user.name} downloaded ${appName}.`,
    relatedAppId: appId,
    metadata: {
      downloadedBy: user._id,
      downloadedByName: user.name,
      downloadedByEmail: user.email,
    },
  });
}

async function notifyUsersAboutUpdate({ app, owner, version, message }) {
  const users = await User.find({ subscribedApps: app._id });

  return createManyNotifications(
    users.map((user) => ({
      recipientId: user._id,
      recipientRole: user.role,
      type: NOTIFICATION_TYPES.APP_UPDATED,
      title: `${app.name} has a new update`,
      message: `${owner.name} published version ${version}. ${message}`,
      relatedAppId: app._id,
      metadata: {
        version,
      },
    }))
  );
}

async function listNotifications(userId) {
  const notifications = await Notification.find({ recipientId: userId }).sort({ createdAt: -1 });
  return notifications.map(serializeNotification);
}

async function markNotificationRead(notificationId, userId) {
  const notification = await Notification.findOneAndUpdate(
    { _id: notificationId, recipientId: userId },
    { isRead: true },
    { new: true }
  );

  return notification ? serializeNotification(notification) : null;
}

async function markAllNotificationsRead(userId) {
  await Notification.updateMany({ recipientId: userId, isRead: false }, { isRead: true });
}

module.exports = {
  createNotification,
  createManyNotifications,
  notifyOwnerAboutDownload,
  notifyUsersAboutUpdate,
  listNotifications,
  markNotificationRead,
  markAllNotificationsRead,
};
