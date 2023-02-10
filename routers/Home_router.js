const express= require('express')
const { get_latest_movies } = require('../controllers/home_controller')

const router=express.Router()

router.get('/latest',get_latest_movies)


module.exports = router
