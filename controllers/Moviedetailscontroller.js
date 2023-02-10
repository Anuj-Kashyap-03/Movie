const English = require("../db/models/English")
const Hindi = require("../db/models/Hindi")
const catchAsynerror = require("../middlewares/catchaAsynerror")


exports.get_movieby_id = catchAsynerror(async (req, res, next) => {
    // console.log('yes')

    const Hindi_movies = await Hindi.findOne({Id:req.params.id})
    const English_movies = await English.findOne({Id:req.params.id})
    const Moviedetails= Hindi_movies||English_movies
    // console.log('yes')
    res.json({
        success:true,
        data:Moviedetails
    })
})