const Joi = require('joi');
const { APP_VISIBILITY } = require('../utils/constants');

const createAppSchema = Joi.object({
  name: Joi.string().trim().min(2).max(120).required(),
  description: Joi.string().trim().min(10).required(),
  version: Joi.string().trim().required(),
  releaseDate: Joi.date().required(),
  category: Joi.string().hex().length(24).required(),
  genre: Joi.string().trim().required(),
  visibility: Joi.string().valid(...Object.values(APP_VISIBILITY)).default(APP_VISIBILITY.PUBLIC),
  iconUrl: Joi.string().allow('').uri({ allowRelative: false }).optional(),
  featureHighlights: Joi.array().items(Joi.string().trim().min(2)).max(8).default([]),
});

const updateAppSchema = Joi.object({
  name: Joi.string().trim().min(2).max(120),
  description: Joi.string().trim().min(10),
  version: Joi.string().trim(),
  releaseDate: Joi.date(),
  category: Joi.string().hex().length(24),
  genre: Joi.string().trim(),
  visibility: Joi.string().valid(...Object.values(APP_VISIBILITY)),
  iconUrl: Joi.string().allow('').uri({ allowRelative: false }).optional(),
  featureHighlights: Joi.array().items(Joi.string().trim().min(2)).max(8),
}).min(1);

const listAppsQuerySchema = Joi.object({
  search: Joi.string().allow('', null),
  category: Joi.string().allow('', null),
  rating: Joi.alternatives().try(Joi.number().min(0).max(5), Joi.string().valid('', null)),
  visibility: Joi.string().valid(...Object.values(APP_VISIBILITY)),
  ownerOnly: Joi.alternatives().try(Joi.boolean(), Joi.string().valid('', null)),
});

const visibilitySchema = Joi.object({
  visibility: Joi.string().valid(...Object.values(APP_VISIBILITY)).required(),
});

const announceUpdateSchema = Joi.object({
  version: Joi.string().trim().required(),
  message: Joi.string().trim().min(5).max(500).required(),
});

module.exports = {
  createAppSchema,
  updateAppSchema,
  listAppsQuerySchema,
  visibilitySchema,
  announceUpdateSchema,
};
