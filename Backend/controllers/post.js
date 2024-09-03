const post = require("../models/post");
const author = require("../models/author");
const comment = require("../models/comment");
const ShortUniqueId = require("short-unique-id");
const { randomUUID } = new ShortUniqueId({ length: 10 });
const cloudinary = require("cloudinary").v2;
const cloudinaryconfig = require("../utils/cloudinary");

const createpost = async (req, res) => {
  const { postTitle, postcontent, authorId } = req.body;
  try {

    const findauthor = await author.findOne({ authorId: authorId });

    const authorname = findauthor.authorname;
    const authorProfileurl = findauthor.profileurl;
    console.log(authorId, authorname, authorProfileurl);
    const createdat = Date.now();
    const postId = randomUUID();
    const postimg = await cloudinary.uploader.upload(req.file.path);
     console.log(postimg)
   const postimgurl = postimg.secure_url;
    const newpost = new post({
      postTitle: postTitle,
      postcontent: postcontent,
      postimgurl: postimgurl,
      postId: postId,
      category: "no categoty",
      createdat: createdat,
      authorId: authorId,
      authorname: authorname,
      authorProfileurl: authorProfileurl,
    });
    const respoose = await newpost.save();
   res.status(200).json(respoose);
   res.end()
  } catch (error) {
    console.log(error);
  }
};
const getallpost = async (req, res) => {
  try {
    const postes = await post.find({}).sort({createdat:-1});
    res.json({ data: postes });
  } catch (error) {
    console.log(error);
  }
};
const getpostbyid = async (req, res) => {
  try {
    const postId = req.params.id;
    const getpost = await post.findOne({ postId: postId });
    res.status(200).json({ data: getpost });
  } catch (error) {}
};
const getpostbycategory = async (req, res) => {
    try {
      if(req.query.category == "All")
      {
        const getAllpost = await post.find({}).sort({createdat:-1})
        return res.status(200).json({data:getAllpost})
      }
      
      const getpost = await post.find({category:req.query.category}).sort({createdat:-1});
      res.status(200).json({ data: getpost });
    } catch (error) {}
  };
const getpostbyauthor = async (req, res) => {
  try {
    const authorId = req.params.id;
    const getpost = await post.find({ authorId: authorId }).sort({createdat:-1});

    res.status(200).json({ data: getpost });
  } catch (error) {
    res.status(400).json({ message: "some thing went wrong" });
  }
};
const editpostByid = async (req, res) => {
  try {
  
    
    const {postId,postTitle,postcontent} = req.body
    const postimg = await cloudinary.uploader.upload(req.file.path);
    const postimgurl = postimg.secure_url;
    const editpost = await post.findOneAndUpdate({ postId: postId },{postTitle:postTitle,postcontent:postcontent,postimgurl:postimgurl});

    res.status(200).json({ message: "post edited" });
  } catch (error) {
    res.status(400).json({ message: "some thing went wrong" });
    console.log(error)
  }
};
const deletepostByid = async (req, res) => {
  try {
    const postId = req.params.id;
    const deletepost = await post.deleteOne({ postId: postId });

    res.status(200).json({ message: "post deleted" });
  } catch (error) {
    res.status(400).json({ message: "some thing went wrong" });
  }
};
const addcomment = async (req, res) => {
  const { postId, authorId, commentText } = req.body;
  try {
    const findAuthor = await author.findOne(
      { authorId: authorId },
      "authorname username profileurl"
    );
    const findpost = await post.findOne({ postId: postId });
    if (!findAuthor) {
      return res.json({ message: "enter a valid authorId" });
    }
    if (!findpost) {
      return res.json({ message: "enter a valid postId" });
    }
    const newComment = new comment({
      authorId: authorId,
      postId: postId,
      commentBody: commentText,
      postedBy: findAuthor,
      createdat:Date.now()
    });
    await newComment.save();

    res.status(200).json({ message: "add comment succefully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "some thing went wrong" });
  }
};

const getPostcomment = async (req, res) => {
  const postId = req.params.id;
  try {
    const findcomment = await comment.find({ postId: postId }).sort({createdat:-1});

    res.status(200).json({ data: findcomment });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "some thing went wrong" });
  }
};
const givePostlike = async (req, res) => {
    const {postId,authorId} = req.body;
    try {
      const findpost = await  post.findOneAndUpdate({ postId: postId },{$push:{likes:"i likde agaain"}  });
     
        
      res.status(200).json({ message:"like" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "some thing went wrong" });
    }
  };
  
  


module.exports = {
  getallpost,
  getpostbyid,
  createpost,
  getpostbyauthor,
  editpostByid,
  deletepostByid,
  addcomment,
  getPostcomment,
  givePostlike,getpostbycategory 
};
