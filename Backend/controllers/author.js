const ShortUniqueId = require("short-unique-id");
const author = require("../models/author");
const post = require("../models/post");
const r = require("../models/r");
const { randomUUID } = new ShortUniqueId({ length: 10 });
const cloudinary = require("cloudinary").v2;
const cloudinaryconfig = require("../utils/cloudinary");
var bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { authorname, username, password } = req.body;
  /*    const imgpath = req.file.path */

  if (!authorname || !username || !password) {
    return res.json("enter all feilds");
  }

  const userexist = await author.findOne({ username: username });

  if (userexist) {
    return res.json({ status: "user alreday exist try another username" });
  }

  try {
    const salt = await bcrypt.genSalt(10);

    const authorId = randomUUID();
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const profileimage = await cloudinary.uploader.upload(req.file.path);
    const newAuhor = new author({
      authorId: authorId,
      authorname: authorname,
      username: username,
      password: hashPassword,
      profileurl: profileimage.secure_url,
    });
    await newAuhor.save();

    res.status(200).json({
      message: "author successfully created",
      username: username,
      authorId: authorId,
      profileurl: profileimage.url,
      authorname: authorname,
    });
  } catch (error) {
    console.log(error);
  }
};
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userExist = await author.findOne({ username: req.body.username });

    if (!userExist) {
      return res.status(404).json({ message: "user not found" });
    }
    const checkpassword = await bcrypt.compare(password, userExist.password);

    if (checkpassword) {
      return res.status(200).json({
        message: "login successfully",
        authorname: userExist.authorname,
        authorId: userExist.authorId,
        username: userExist.username,
        profileurl: userExist.profileurl,
      });
    }

    res.status(401).json({ message: "Pass word or username incorrect" });
  } catch (error) {}
};
const getAuthorbyid = async (req, res) => {
  try {
    const findauthor = await author.findOne(
      { authorId: req.params.id },
      "authorId authorname profileurl username  "
    );
    if (!findauthor) {
      res.json({ message: "enter a valid authorid" });
    }
    res.json(findauthor);
  } catch (error) {}
};
const editAuthor = async (req, res) => {
  const { authorId, username, authoname, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const profileimage = await cloudinary.uploader.upload(req.file.path);

    const findauthor = await author.findOneAndUpdate(
      { authorId: authorId },
      {
        username: username,
        authoname: authoname,
        password: hashPassword,
        profileurl: profileimage.secure_url,
      }
    );
    if (!findauthor) {
      res.json({ message: "enter a valid authorid" });
    }
    res.json(findauthor);
  } catch (error) {}
};
const tester = async (req, res) => {
  console.log("tester");
  try {
    //  const test = await author.findOne({authorId:"XbhxHfouLz"})

    const newrest = await r.create({ title: "ttttt" });

    res.json({ message: "sonnn" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register, login, tester, getAuthorbyid, editAuthor };
