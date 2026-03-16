const express = require('express');
const userController = require('../controllers/userController');
const validate = require('../middlewares/validate');
const { authenticate, authorizeRoles } = require('../middlewares/authMiddleware');
const { ROLES } = require('../utils/constants');
const { updateUserRoleSchema } = require('../validators/userValidators');

const router = express.Router();

router.get('/', authenticate, authorizeRoles(ROLES.OWNER), userController.listUsers);
router.put('/:id/role', authenticate, authorizeRoles(ROLES.OWNER), validate(updateUserRoleSchema), userController.updateUserRole);
router.delete('/:id', authenticate, authorizeRoles(ROLES.OWNER), userController.deleteUser);

module.exports = router;
