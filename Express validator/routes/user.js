const express = require('express');

// ! sing up folder
const { userValidation } = require('../validation/userValidation');
const registerUser = require('../controllers/userController');
const { userSingUpValidator } = require('../validation/auth');
const { loginValidation } = require('../validation/loginValidation');
const loginController = require('../controllers/loginController');
const { userLoginRules } = require('../validation/authLogin');
const userRoutes = express.Router();

userRoutes.post('/register', userSingUpValidator, userValidation, registerUser);
userRoutes.post('/login', userLoginRules, loginValidation, loginController);

module.exports = userRoutes;
