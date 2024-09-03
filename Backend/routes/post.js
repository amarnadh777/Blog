const express = require("express");
const router = express.Router();
const upload = require("../utils/mutler");

const {
  getallpost,
  getpostbyid,
  createpost,
  getpostbyauthor,
  editpostByid,
  deletepostByid,
  addcomment,
  getPostcomment,
  givePostlike,
  getpostbycategory,
} = require("../controllers/post");
router.post("/createpost", upload.single("image"), createpost);
router.get("/getallpost", getallpost);
router.get("/getpostbyid/:id", getpostbyid);
router.get("/getpostbyauthor/:id", getpostbyauthor);
router.put("/editpostbyid",upload.single("image"), editpostByid);

router.get("/deletepostbyid/:id", deletepostByid);
router.get("/getpostbycategory", getpostbycategory);

router.post("/addcomment", addcomment);
router.get("/getpostcomment/:id", getPostcomment);
router.post("/givelike", givePostlike);

module.exports = router;
