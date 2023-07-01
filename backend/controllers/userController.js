const jwt = require ('jsonwebtoken');
const dotenv = require ('dotenv').config();
const User = require ('../models/user');

const userController = async (req,res) => {
    try{
   const cookie = req.cookies ['jwt'];
   const secret = process.env.JWT_KEY;
   const claim = jwt.verify (cookie , secret);
   
   if (!claim){
    return res.status (401).json ({
        message :'unauthenticated'
    })
   }

   const user = await User.findOne ({_id : claim._id})
   const {password , ...data} = user.toJSON(); 
   res.json ({
    message : 'SUCCESS',
    data
   })
}catch (err){
    return res.status (401).json ({
        message : 'unauthenticated.',
    })
 }
}

module.exports = userController;