const English = require("../db/models/English")
const Hindi = require("../db/models/Hindi")
const catchAsynerror = require("../middlewares/catchaAsynerror")




exports.get_latest_movies = catchAsynerror(async (req,res,next)=>{
    const Hindi_movies=await Hindi.find().limit(5)
    const English_movies=await English.find().limit(5)
    const movies= Hindi_movies.concat(English_movies)

    res.status(200).json({
        success:true,
        data:movies
    })


})