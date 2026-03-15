const asyncHandler = require('../utils/asyncHandler');
const { sendResponse } = require('../utils/apiResponse');
const categoryService = require('../services/categoryService');

const getCategories = asyncHandler(async (req, res) => {
  const categories = await categoryService.getCategories();
  return sendResponse(res, 200, { data: categories });
});

module.exports = {
  getCategories,
};
