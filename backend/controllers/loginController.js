const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const dotenv = require ('dotenv').config();
const User = require ('../models/user');

const loginController = async (req,res) =>{
    const {username,password} = req.body;
    const user = await User.findOne ({username});
    if (!user) {
        return res.status (404).json({
            message : 'There is no account with this username, you should create  an acount.'
        })
    }
    if ( !await bcrypt.compare(password,user.password)){
        return res.status (400).json ({
            message : 'password is not correct.'
        })
    }
          const {_id,role} = await user.toJSON();
          const secret = process.env.JWT_KEY;
          const token = jwt.sign({_id,role},secret);
          res.cookie('jwt',token,{
            httpOnly :true,
            maxAge : 24* 60 * 60 * 1000 //1day
          })
        
   res.json ({
    token,
    user
   })
}

module.exports = loginController;