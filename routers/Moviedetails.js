const express = require('express')

const Hindi = require("../db/models/Hindi")
const English = require("../db/models/English")
const { get_movieby_id } = require('../controllers/Moviedetailscontroller')




const route = express.Router()

route.get('/:id',get_movieby_id)

module.exports = route