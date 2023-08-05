const express = require('express');
const { userValidation } = require('../validation/userValidation');
const registerUser = require('../controllers/userController');
const userRoutes = express.Router();

userRoutes.post('/register', userValidation, registerUser);

module.exports = userRoutes;
