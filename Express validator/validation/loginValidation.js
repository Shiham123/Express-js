const { validationResult } = require('express-validator');

exports.loginValidation = (request, response, next) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(503).json({ errors: errors.array() });
  }
  next();
};
