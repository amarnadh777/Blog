const mongoose = require('mongoose')
const commentSchema = mongoose.Schema({authorId:{type:String},postedBy:{type:Object}, postId:{type:String}, commentBody:{type:String},createdat:{type:String} } )
module.exports = mongoose.model("comment",commentSchema)