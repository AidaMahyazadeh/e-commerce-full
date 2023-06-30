const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const dotenv = require ('dotenv').config();
const User = require ('../models/user');

const loginController = async (req,res) =>{
    const {username,password} = req.body;
    const user = await User.findOne ({username});
    if (!user) {
        return res.status (404).json({
            message : 'user not found'
        })
    }
    if ( !await bcrypt.compare(password,user.password)){
        return res.status (400).json ({
            message : 'password is not correct.'
        })
    }
   res.send (user);
}

module.exports = loginController;