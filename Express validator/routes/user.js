const express = require('express');
const { userValidation } = require('../validation/userValidation');
const registerUser = require('../controllers/userController');
const { userSingUpValidator } = require('../validation/auth');
const userRoutes = express.Router();

userRoutes.post('/register', userSingUpValidator, userValidation, registerUser);

module.exports = userRoutes;
