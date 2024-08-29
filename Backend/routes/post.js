const express = require("express")
const router =  express.Router()
const upload = require("../utils/mutler")

const {getallpost,getpostbyid,createpost,getpostbyauthor,deletepostByid} = require("../controllers/post")
router.post("/createpost",upload.single('image'),createpost)
router.get("/getallpost",getallpost)
router.get("/getpostbyid/:id",getpostbyid)
router.get("/getpostbyauthor/:id",getpostbyauthor)
router.get("/deletepostbyid/:id",deletepostByid)
module.exports = router