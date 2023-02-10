
exports.send_login_token=async(user,res)=>{
    const login_token=await user.getJWTtoken()

    res.cookie("user",login_token,{
        expires: new Date (Date.now()+Number(process.env.USER_COOKIE_EXPIRY)*24*60*60*1000),
        httpOnly: true,
    })
    .status(201).
    json({
        sucess:true, 
        message:"login sucessful",
    })

}

