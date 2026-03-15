const Joi = require('joi');
const { ROLES } = require('../utils/constants');

const passwordRule = Joi.string()
  .min(8)
  .max(50)
  .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
  .messages({
    'string.pattern.base': 'Password must include uppercase, lowercase, and a number.',
  });

const registerSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100).required(),
  email: Joi.string().email().required(),
  password: passwordRule.required(),
  role: Joi.string()
    .valid(ROLES.USER, ROLES.OWNER)
    .required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: passwordRule.required(),
});

module.exports = {
  registerSchema,
  loginSchema,
};
