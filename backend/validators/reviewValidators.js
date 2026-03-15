const Joi = require('joi');

const createReviewSchema = Joi.object({
  appId: Joi.string().hex().length(24).required(),
  rating: Joi.number().min(1).max(5).required(),
  comment: Joi.string().trim().min(3).max(500).required(),
});

module.exports = {
  createReviewSchema,
};
