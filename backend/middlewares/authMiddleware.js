const User = require('../models/User');
const ApiError = require('../utils/ApiError');
const { verifyToken } = require('../utils/jwt');

async function attachUserFromToken(req) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.split(' ')[1];
  const payload = verifyToken(token);
  const user = await User.findById(payload.userId);
  return user || null;
}

async function authenticate(req, res, next) {
  try {
    const user = await attachUserFromToken(req);

    if (!user) {
      return next(new ApiError(401, 'Authentication token is required.'));
    }

    req.user = user;
    next();
  } catch (error) {
    next(new ApiError(401, 'Invalid or expired authentication token.'));
  }
}

async function optionalAuthenticate(req, res, next) {
  try {
    const user = await attachUserFromToken(req);
    req.user = user;
    next();
  } catch (error) {
    next();
  }
}

function authorizeRoles(...roles) {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return next(new ApiError(403, 'You are not authorized to perform this action.'));
    }

    next();
  };
}

module.exports = {
  authenticate,
  optionalAuthenticate,
  authorizeRoles,
};
