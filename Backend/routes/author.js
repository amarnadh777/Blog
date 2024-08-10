const express = require("express")
const router =  express.Router()
const upload = require("../utils/mutler")
const {register,login,createpost} = require("../controllers/author")
router.post("/register",upload.single("image"),register)
router.post("/login",login)
router.post("/createpost",upload.single('image'),createpost)
module.exports =router