const mongoose = require('mongoose')
const postSchema = mongoose.Schema({postId:{type:String},postcontent:{type:String},postTitle:{type:String},postimgurl:{type:String},authorId:{type:String},category:{type:String},createdat:{type:String},authorId:{type:String},authorname:{type:String},authorProfileurl:{type:String}})
module.exports = mongoose.model("post",postSchema)
