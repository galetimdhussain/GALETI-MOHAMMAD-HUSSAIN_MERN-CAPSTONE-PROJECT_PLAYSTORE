const asyncHandler = require('../utils/asyncHandler');
const { sendResponse } = require('../utils/apiResponse');
const downloadService = require('../services/downloadService');

const createDownload = asyncHandler(async (req, res) => {
  const download = await downloadService.createDownload(req.user, req.body.appId);
  return sendResponse(res, 201, {
    message: 'Application downloaded successfully.',
    data: download,
  });
});

const listOwnerDownloads = asyncHandler(async (req, res) => {
  const downloads = await downloadService.listOwnerDownloads(req.user._id);
  return sendResponse(res, 200, { data: downloads });
});

module.exports = {
  createDownload,
  listOwnerDownloads,
};
