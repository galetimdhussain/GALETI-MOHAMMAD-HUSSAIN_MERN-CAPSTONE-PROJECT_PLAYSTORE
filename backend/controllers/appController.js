const asyncHandler = require('../utils/asyncHandler');
const { sendResponse } = require('../utils/apiResponse');
const applicationService = require('../services/applicationService');

const listApps = asyncHandler(async (req, res) => {
  const apps = await applicationService.listApplications(req.query, req.user || null);
  return sendResponse(res, 200, { data: apps });
});

const searchApps = asyncHandler(async (req, res) => {
  const apps = await applicationService.listApplications(req.query, req.user || null);
  return sendResponse(res, 200, { data: apps });
});

const getAppById = asyncHandler(async (req, res) => {
  const app = await applicationService.getApplicationById(req.params.id, req.user || null);
  return sendResponse(res, 200, { data: app });
});

const createApp = asyncHandler(async (req, res) => {
  const app = await applicationService.createApplication(req.user._id, req.body);
  return sendResponse(res, 201, {
    message: 'Application created successfully.',
    data: app,
  });
});

const updateApp = asyncHandler(async (req, res) => {
  const app = await applicationService.updateApplication(req.params.id, req.user._id, req.body);
  return sendResponse(res, 200, {
    message: 'Application updated successfully.',
    data: app,
  });
});

const updateAppVisibility = asyncHandler(async (req, res) => {
  const app = await applicationService.updateVisibility(req.params.id, req.user._id, req.body.visibility);
  return sendResponse(res, 200, {
    message: 'Application visibility updated successfully.',
    data: app,
  });
});

const deleteApp = asyncHandler(async (req, res) => {
  await applicationService.deleteApplication(req.params.id, req.user._id);
  return sendResponse(res, 200, { message: 'Application deleted successfully.' });
});

const getOwnerDashboardSummary = asyncHandler(async (req, res) => {
  const data = await applicationService.getOwnerDashboardSummary(req.user._id);
  return sendResponse(res, 200, { data });
});

const announceUpdate = asyncHandler(async (req, res) => {
  const app = await applicationService.announceUpdate(req.params.id, req.user._id, req.body);
  return sendResponse(res, 200, {
    message: 'Update announcement sent successfully.',
    data: app,
  });
});

module.exports = {
  listApps,
  searchApps,
  getAppById,
  createApp,
  updateApp,
  updateAppVisibility,
  deleteApp,
  getOwnerDashboardSummary,
  announceUpdate,
};
