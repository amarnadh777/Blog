const mongoose = require('mongoose')
const postSchema = mongoose.Schema({postId:{type:String},postcontent:{type:String},postTitle:{type:String},postimgurl:{type:String},authorId:{type:String}})
module.exports = mongoose.model("post",postSchema)
