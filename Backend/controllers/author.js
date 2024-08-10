const ShortUniqueId = require("short-unique-id")
const author = require("../models/author")
const post = require("../models/post")
const { randomUUID} = new ShortUniqueId({length: 10})
const cloudinary = require("cloudinary").v2
const cloudinaryconfig = require("../utils/cloudinary")

const register =  async(req,res) =>
{
    const {authorname , username,password}  = req.body
    const imgpath = req.file.path
    if(!authorname || !username ||!password )
    {
        return res.json("enter all feilds")

    }
    
    const userexist = await author.findOne({username:username})
  
    if(userexist)
    {
        return res.json({status:"user alreday exist try another username"})
    }

    try {
        const profileimg = await cloudinary.uploader.upload(req.file.path)
        const authorId = randomUUID()
        const newAuhor = new author({authorId:authorId,authorname:authorname,username:username,password:password,profileurl:profileimg.url})
         await newAuhor.save()
        
         res.status(200).json({username:username,authorid:authorId,profileimg:profileimg.url})
    } catch (error) {
      console.log(error)   
    }
    
}
const login = async (req,res) =>
{
    try {
        res.send("login")
        
    } catch (error) {
        
    }
}
const createpost = async(req,res) =>
{
    const {postTitle,postcontent} = req.body
    try { 

        const postimg = await cloudinary.uploader.upload(req.file.path)
        const postimgurl = postimg.url
        const newpost  = new post({postTitle:postTitle,postcontent:postcontent,postimgurl:postimgurl})
        const respoose = await newpost.save()
        res.json(respoose)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {register,login,createpost}