const mongoose = require('mongoose');
const { APP_VISIBILITY } = require('../utils/constants');

const applicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    version: {
      type: String,
      required: true,
      trim: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    reviewCount: {
      type: Number,
      default: 0,
      min: 0,
    },
    visibility: {
      type: String,
      enum: Object.values(APP_VISIBILITY),
      default: APP_VISIBILITY.PUBLIC,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    iconUrl: {
      type: String,
      default: '',
    },
    featureHighlights: {
      type: [String],
      default: [],
    },
    downloadCount: {
      type: Number,
      default: 0,
      min: 0,
    },
    lastAnnouncement: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

applicationSchema.index({ name: 'text', description: 'text', genre: 'text' });

module.exports = mongoose.model('Application', applicationSchema);
