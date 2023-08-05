const { check, validationResult } = require('express-validator');

exports.loginValidation = () => {
  check('email')
    .trim()
    .notEmpty()
    .withMessage('must provide a email')
    .isEmail()
    .withMessage('must a valid email'),
    check('password')
      .trim()
      .notEmpty()
      .withMessage('must provided a password')
      .isLength({ min: 3 })
      .withMessage('must be a 3 length password'),
    (request, response, next) => {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(503).json({ errors: errors.array() });
      }
      next();
    };
};
