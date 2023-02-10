const mongoose = require('mongoose')
const { Schema } = mongoose;

const movieSchema = new Schema({
    Id:{
        type:String,
        unique:true
    },
    name:String,
    image:String,
    link:String,
    description:String,
    time:String,
    Sub_title:String
});




module.exports = movieSchema;