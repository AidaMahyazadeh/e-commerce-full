const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const dotenv = require ('dotenv').config();
const User = require ('../models/user');

const loginController = async (req,res) =>{
    const {username,password} = req.body;
    const user = await User.findOne ({username});
    if (!user) {
        return res.status (404).send({
            message : 'user not found'
        })
    }
    if ( !await bcrypt.compare(password,user.password)){
        return res.status (400).send ({
            message : 'invalid username or password.'
        })
    }
   res.send (user);
    //  const secret = process.env.JWT_KEY;
    //  const token = jwt.sign({_id :user._id,secret});
    //  res.cookie('jwt', token, {
    //     httpOnly: true,
    //     maxAge: 24 * 60 * 60 * 1000 // 1 day
    // })

    //  res.send ({
    //    message :'SUCCESS',
    //  })
}

module.exports = loginController;