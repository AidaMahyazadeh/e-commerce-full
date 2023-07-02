const jwt = require ('jsonwebtoken');
const dotenv = require ('dotenv').config();
const User = require ('../models/user');

const userController = async  (req,res) => {
    try{

   const allUsers = await User.find ()
   const {password,role ,...data} = allUsers
   
    return res.status(200).json ({
    message : 'SUCCESS',
    data
   })
}catch (err){
    return res.status (401).json ({
        message : 'unauthenticated.' 
    })
 }
}

module.exports = userController;