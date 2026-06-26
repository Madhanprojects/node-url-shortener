const express=require("express");
const verifyUser=require("../middlewares/user.js");
const {generateNewUrl,GetTheWeb,showHome}=require("../controllers/url.js");
const router=express.Router();
router.get("/home",verifyUser,showHome);
router.post("/newUrl",verifyUser,generateNewUrl);
router.get("/:surl",verifyUser,GetTheWeb);
module.exports=router;