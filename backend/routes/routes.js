const express = require ('express');
const router = express.Router();
const signupController = require ('../controllers/signUpController');
const loginController = require ('../controllers/loginController');
const logoutController = require('../controllers/logoutController');
const userController = require('../controllers/userController');





router.post ('/signup', signupController);

router.post ('/login', loginController);

router.post ('/logout',logoutController);

router.get ('/users', userController);


module.exports = router;