const express= require('express')
const { getEnglishmovies } = require('../controllers/englishcontroller')

const router= express.Router()


router.get('/movies/english',getEnglishmovies)



module.exports = router