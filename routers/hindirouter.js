const express= require('express')
const { gethindimovies } = require('../controllers/hindimoves_controller')
const { Check_User_login } = require('../middlewares/auth')

const router= express.Router()


router.get('/movies/hindi',gethindimovies)



module.exports = router