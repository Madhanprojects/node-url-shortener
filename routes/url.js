const express=require("express");
const {generateNewUrl,GetTheWeb}=require("../controllers/url.js");
const router=express.Router();
router.post("/",generateNewUrl);
router.get("/:surl",GetTheWeb);
module.exports=router;