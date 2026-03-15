const Joi = require('joi');

const createDownloadSchema = Joi.object({
  appId: Joi.string().hex().length(24).required(),
});

module.exports = {
  createDownloadSchema,
};
