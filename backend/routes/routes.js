const express = require ('express');
const router = express.Router();
const signupController = require ('../controllers/signUpController');
const loginController = require ('../controllers/loginController');



router.post ('/signup', signupController)

router.post ('/login', loginController)

router.get ('/user',(req,res) =>{
    const cookie = req.cookies ['jwt'];
    res.send (cookie)
})

module.exports = router;