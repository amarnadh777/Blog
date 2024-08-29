const express = require("express")
const router =  express.Router()
const upload = require("../utils/mutler")
const {register,login,tester,getAuthorbyid,editAuthor} = require("../controllers/author")
router.post("/register",upload.single("image"),register)
router.post("/login",login)
router.get("/myprofile/:id",getAuthorbyid)
router.post("/editprofile",upload.single("image"),editAuthor)



router.get("/test",tester) 
module.exports =router