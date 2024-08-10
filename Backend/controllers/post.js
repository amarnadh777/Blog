const post = require("../models/post")
const getallpost = async(req,res) =>
{
    try {
        const postes = await post.find({})
        res.json({data:postes})
        
    } catch (error) {
        console.log(error);
        
    }
    
}
module.exports = {getallpost}