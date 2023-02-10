
const English = require("../db/models/English")
const catchaAsynerror = require("../middlewares/catchaAsynerror")
const MovieFeatures = require('./features/moviefeatures')


exports.getEnglishmovies = catchaAsynerror(async (req, res, next) => {
    // console.log(req.query)
    const total=await English.countDocuments()
    const apifeature = new MovieFeatures(English.find(), req.query)
        .send_document_according_page()

    const data=await apifeature.quary
    // console.log(data)
    res.status(200).json({
        sucess: true,
        total:total,
        data:data,
        page:req.query.page || 1
        
    })
})