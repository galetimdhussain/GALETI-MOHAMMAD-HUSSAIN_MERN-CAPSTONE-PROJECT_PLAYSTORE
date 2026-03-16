const asyncHandler = require('../utils/asyncHandler');
const { sendResponse } = require('../utils/apiResponse');
const userService = require('../services/userService');

const listUsers = asyncHandler(async (req, res) => {
  const users = await userService.listUsers();

  return sendResponse(res, 200, {
    data: users,
  });
});

const updateUserRole = asyncHandler(async (req, res) => {
  const user = await userService.updateUserRole(req.params.id, req.body.role);

  return sendResponse(res, 200, {
    message: 'User role updated successfully.',
    data: user,
  });
});

const deleteUser = asyncHandler(async (req, res) => {
  await userService.deleteUser(req.params.id);

  return sendResponse(res, 200, {
    message: 'User deleted successfully.',
  });
});

module.exports = {
  listUsers,
  updateUserRole,
  deleteUser,
};
