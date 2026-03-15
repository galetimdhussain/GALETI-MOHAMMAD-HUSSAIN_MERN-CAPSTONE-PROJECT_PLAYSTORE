const ApiError = require('../utils/ApiError');
const User = require('../models/User');
const { signToken } = require('../utils/jwt');
const { serializeUser } = require('../utils/serializers');

async function registerUser(payload) {
  const existingUser = await User.findOne({ email: payload.email.toLowerCase() });

  if (existingUser) {
    throw new ApiError(409, 'An account with this email already exists.');
  }

  const user = await User.create({
    ...payload,
    email: payload.email.toLowerCase(),
  });

  const token = signToken({ userId: user._id, role: user.role });

  return {
    token,
    user: serializeUser(user),
  };
}

async function loginUser(payload) {
  const user = await User.findOne({ email: payload.email.toLowerCase() }).select('+password');

  if (!user) {
    throw new ApiError(401, 'Invalid email or password.');
  }

  const isMatch = await user.comparePassword(payload.password);

  if (!isMatch) {
    throw new ApiError(401, 'Invalid email or password.');
  }

  const token = signToken({ userId: user._id, role: user.role });

  return {
    token,
    user: serializeUser(user),
  };
}

async function logoutUser(userId) {
  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, 'User not found.');
  }

  return {
    message: 'Logout successful.',
  };
}

async function getProfile(userId) {
  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, 'User not found.');
  }

  return serializeUser(user);
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getProfile,
};
