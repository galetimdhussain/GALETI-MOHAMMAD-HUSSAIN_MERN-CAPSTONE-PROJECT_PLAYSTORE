const asyncHandler = require('../utils/asyncHandler');
const { sendResponse } = require('../utils/apiResponse');
const authService = require('../services/authService');

const register = asyncHandler(async (req, res) => {
  const data = await authService.registerUser(req.body);
  return sendResponse(res, 201, {
    message: 'Account created successfully.',
    data,
  });
});

const login = asyncHandler(async (req, res) => {
  const data = await authService.loginUser(req.body);
  return sendResponse(res, 200, {
    message: 'Login successful.',
    data,
  });
});

const logout = asyncHandler(async (req, res) => {
  const data = await authService.logoutUser(req.user._id);
  return sendResponse(res, 200, data);
});

const me = asyncHandler(async (req, res) => {
  const user = await authService.getProfile(req.user._id);
  return sendResponse(res, 200, {
    data: user,
  });
});

module.exports = {
  register,
  login,
  logout,
  me,
};
