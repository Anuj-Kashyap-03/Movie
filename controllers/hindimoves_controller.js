
const Hindi = require("../db/models/Hindi")
const catchAsynerror = require("../middlewares/catchaAsynerror")
const MovieFeatures = require('./features/moviefeatures')


exports.gethindimovies = catchAsynerror(async (req, res, next) => {
    // console.log(req.query)
    // console.log(req.find_user)

    const total=await Hindi.countDocuments()
    const apifeature = new MovieFeatures(Hindi.find(), req.query)
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
