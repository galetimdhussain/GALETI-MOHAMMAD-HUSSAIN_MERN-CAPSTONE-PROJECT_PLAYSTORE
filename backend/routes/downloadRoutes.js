const express = require('express');
const downloadController = require('../controllers/downloadController');
const validate = require('../middlewares/validate');
const { authenticate, authorizeRoles } = require('../middlewares/authMiddleware');
const { ROLES } = require('../utils/constants');
const { createDownloadSchema } = require('../validators/downloadValidators');

const router = express.Router();

router.post('/', authenticate, authorizeRoles(ROLES.USER), validate(createDownloadSchema), downloadController.createDownload);
router.get('/owner', authenticate, authorizeRoles(ROLES.OWNER), downloadController.listOwnerDownloads);

module.exports = router;
