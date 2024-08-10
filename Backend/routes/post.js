const express = require("express")
const router =  express.Router()
const {getallpost} = require("../controllers/post")
router.get("/getallpost",getallpost)
module.exports = router