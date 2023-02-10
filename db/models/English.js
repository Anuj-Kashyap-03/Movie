const mongoose=require('mongoose')
const Schema = require('../schemas/Movieschema')



const English=mongoose.model('english',Schema)

module.exports=English;