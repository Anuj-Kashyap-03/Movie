const catchaAsynerror = require("./catchaAsynerror");
const jwt=require('jsonwebtoken');
const send_errror_responser = require("../utils/send_error");

const User = require('../db/models/User');



exports.Check_User_login=catchaAsynerror(async(req,res,next)=>{
    const cookies=req.cookies
    const user=cookies.user

    if (!user) {
        return send_errror_responser(req,res,next,"Please login",401);
    }
    // console.log(user)

    const user_id=await jwt.verify(user,process.env.SECRIT_KEY);
    const find_user=await User.findById(user_id.id);

    if(!find_user){
        return send_errror_responser(req,res,next,"Please login",401);
    }    
    req.find_user=await find_user
    next()
})