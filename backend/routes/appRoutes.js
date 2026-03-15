const express = require('express');
const appController = require('../controllers/appController');
const validate = require('../middlewares/validate');
const { authenticate, optionalAuthenticate, authorizeRoles } = require('../middlewares/authMiddleware');
const { ROLES } = require('../utils/constants');
const {
  createAppSchema,
  updateAppSchema,
  listAppsQuerySchema,
  visibilitySchema,
  announceUpdateSchema,
} = require('../validators/appValidators');

const router = express.Router();

router.get('/', optionalAuthenticate, validate(listAppsQuerySchema, 'query'), appController.listApps);
router.get('/search', optionalAuthenticate, validate(listAppsQuerySchema, 'query'), appController.searchApps);
router.get('/owner/dashboard/summary', authenticate, authorizeRoles(ROLES.OWNER), appController.getOwnerDashboardSummary);
router.get('/:id', optionalAuthenticate, appController.getAppById);
router.post('/', authenticate, authorizeRoles(ROLES.OWNER), validate(createAppSchema), appController.createApp);
router.put('/:id', authenticate, authorizeRoles(ROLES.OWNER), validate(updateAppSchema), appController.updateApp);
router.patch('/:id/visibility', authenticate, authorizeRoles(ROLES.OWNER), validate(visibilitySchema), appController.updateAppVisibility);
router.delete('/:id', authenticate, authorizeRoles(ROLES.OWNER), appController.deleteApp);
router.post('/:id/announce-update', authenticate, authorizeRoles(ROLES.OWNER), validate(announceUpdateSchema), appController.announceUpdate);

module.exports = router;
