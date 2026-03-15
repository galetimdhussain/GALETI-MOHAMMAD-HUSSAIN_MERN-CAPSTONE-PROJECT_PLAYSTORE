function serializeUser(user) {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    subscribedApps: user.subscribedApps || [],
    createdAt: user.createdAt,
  };
}

function serializeCategory(category) {
  return {
    id: category._id,
    name: category.name,
    slug: category.slug,
    description: category.description,
    isActive: category.isActive,
  };
}

function serializeApplication(app) {
  return {
    id: app._id,
    name: app.name,
    description: app.description,
    version: app.version,
    releaseDate: app.releaseDate,
    category: app.category && app.category._id ? serializeCategory(app.category) : app.category,
    genre: app.genre,
    rating: app.rating,
    averageRating: app.averageRating,
    reviewCount: app.reviewCount,
    visibility: app.visibility,
    ownerId: app.ownerId && app.ownerId._id ? app.ownerId._id : app.ownerId,
    ownerName: app.ownerId && app.ownerId.name ? app.ownerId.name : undefined,
    iconUrl: app.iconUrl,
    featureHighlights: app.featureHighlights,
    downloadCount: app.downloadCount,
    lastAnnouncement: app.lastAnnouncement,
    createdAt: app.createdAt,
    updatedAt: app.updatedAt,
  };
}

function serializeReview(review) {
  return {
    id: review._id,
    userId: review.userId && review.userId._id ? review.userId._id : review.userId,
    userName: review.userId && review.userId.name ? review.userId.name : undefined,
    appId: review.appId && review.appId._id ? review.appId._id : review.appId,
    appName: review.appId && review.appId.name ? review.appId.name : undefined,
    rating: review.rating,
    comment: review.comment,
    timestamp: review.timestamp,
    createdAt: review.createdAt,
  };
}

function serializeDownload(download) {
  return {
    id: download._id,
    userId: download.userId && download.userId._id ? download.userId._id : download.userId,
    userName: download.userId && download.userId.name ? download.userId.name : undefined,
    appId: download.appId && download.appId._id ? download.appId._id : download.appId,
    appName: download.appId && download.appId.name ? download.appId.name : undefined,
    downloadDate: download.downloadDate,
  };
}

function serializeNotification(notification) {
  return {
    id: notification._id,
    recipientId: notification.recipientId,
    recipientRole: notification.recipientRole,
    type: notification.type,
    title: notification.title,
    message: notification.message,
    relatedAppId: notification.relatedAppId,
    isRead: notification.isRead,
    metadata: notification.metadata,
    createdAt: notification.createdAt,
  };
}

module.exports = {
  serializeUser,
  serializeCategory,
  serializeApplication,
  serializeReview,
  serializeDownload,
  serializeNotification,
};
