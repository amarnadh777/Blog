const mongoose = require('mongoose')
const authorSchmea = mongoose.Schema({authorId:{type:String},username:{type:String},password:{type:String},authorname:{type:String},profileurl:{type:String,
    },savedpostes:[String]})
const author = mongoose.model('author',authorSchmea)
module.exports  = author