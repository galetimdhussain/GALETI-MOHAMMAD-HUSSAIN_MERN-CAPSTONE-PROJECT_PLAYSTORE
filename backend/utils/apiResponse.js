function sendResponse(res, statusCode, payload) {
  return res.status(statusCode).json({
    success: statusCode < 400,
    ...payload,
  });
}

module.exports = {
  sendResponse,
};
