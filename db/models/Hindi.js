const mongoose=require('mongoose')
const Schema = require('../schemas/Movieschema')


const Hindi=mongoose.model('hindi',Schema)

module.exports=Hindi