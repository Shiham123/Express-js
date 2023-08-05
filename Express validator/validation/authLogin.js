const { check } = require('express-validator');

exports.userLoginRules = [
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
];
