const express = require('express');
const reviewController = require('../controllers/reviewController');
const validate = require('../middlewares/validate');
const { authenticate, authorizeRoles } = require('../middlewares/authMiddleware');
const { ROLES } = require('../utils/constants');
const { createReviewSchema } = require('../validators/reviewValidators');

const router = express.Router();

router.post('/', authenticate, authorizeRoles(ROLES.USER), validate(createReviewSchema), reviewController.createReview);
router.get('/app/:id', reviewController.getReviewsByApp);
router.delete('/:id', authenticate, authorizeRoles(ROLES.USER), reviewController.deleteReview);

module.exports = router;
