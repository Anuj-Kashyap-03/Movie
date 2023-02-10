
const send_errror_responser = require("../utils/send_error");
const English = require("../db/models/English")
const Hindi = require("../db/models/Hindi")
const catchAsynerror = require("../middlewares/catchaAsynerror")
const  Search  = require("./features/Search")


exports.getsearchedmovies = catchAsynerror(async (req, res, next) => {
    // console.log(req.query)
    // console.log(req.find_user)
    const search = req.query.search
    if (!search || (search.trim()==='')) {
        return send_errror_responser(req,res,next,"please provide a valid string for search",400)
    }
    const search_from_hindi = new Search(Hindi.find(),search).search()
    const search_from_english = new Search(English.find(),search).search()

    const search_from_english_data=await search_from_english.query
    const search_from_hindi_data=await search_from_hindi.query

    const data = [...search_from_english_data,...search_from_hindi_data]
    res.status(200).json({
        sucess: true,
        data,
        search
    })

})
