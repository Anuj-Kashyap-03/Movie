
const send_errror_responser=(req,res,next,message,status)=>{
    let statuscode=status||  400
    res.status(statuscode).json({
        sucess:false,
        message
    })
}

module.exports=send_errror_responser