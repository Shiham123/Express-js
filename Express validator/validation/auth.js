const { check } = require('express-validator');

exports.userSingUpValidator = [
  check('name')
    .trim()
    .notEmpty()
    .withMessage('Name is missing here')
    .isLength({ min: 5 })
    .withMessage('Name must have 5 character'),
  check('email')
    .trim()
    .notEmpty()
    .withMessage('fill the email')
    .isEmail()
    .withMessage('must require a valid email'),
  check('password')
    .trim()
    .notEmpty()
    .withMessage('must provide password')
    .isLength({ min: 10 })
    .withMessage('must provide above 10 character'),
  check('dob')
    .trim()
    .notEmpty()
    .withMessage('date is must have to be provided')
    .isISO8601()
    .toDate()
    .withMessage('must provide a valid date'),
];
