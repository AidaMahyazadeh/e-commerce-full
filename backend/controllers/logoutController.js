const jwt = require ('jsonwebtoken');

const logoutController = (req,res) =>{
    res.cookie ('jwt' ,'',{
        maxAge : 0
    })

    res.json ( {
        message : 'You logged out of your account.'
    })
}

module.exports = logoutController;