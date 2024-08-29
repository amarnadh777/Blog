const mongoose = require('mongoose')
const rSchema = mongoose.Schema({title:{type:String}})
module.exports = mongoose.model("resttstst",rSchema)