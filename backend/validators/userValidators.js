const Joi = require('joi');
const { ROLES } = require('../utils/constants');

const updateUserRoleSchema = Joi.object({
  role: Joi.string().valid(ROLES.OWNER).required(),
});

module.exports = {
  updateUserRoleSchema,
};
