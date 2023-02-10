const send_errror_responser = require("../utils/send_error")

const ErrorMiddleware = (err, req, res, next) => {
  console.error(err.message)

  // for handling key error 
  if (err.code === 11000) {
    return send_errror_responser(req, res, next, "Email already exits")
  }

  if (err.message==="jwt expired"){
    return send_errror_responser(req,res,next,"Please login",401)
  }

  else{
    return send_errror_responser(req,res,next,"Server Error ",500)
  }

}

module.exports = ErrorMiddleware                       