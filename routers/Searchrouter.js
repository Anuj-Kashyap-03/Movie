const express= require('express')
const { getsearchedmovies } = require('../controllers/SearchController')

const router=express.Router()

router.get('/search',getsearchedmovies)


module.exports = router
