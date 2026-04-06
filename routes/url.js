const express=require("express");
const {generateNewUrl,GetTheWeb,showHome}=require("../controllers/url.js");
const router=express.Router();
router.get("/home",showHome);
router.post("/newUrl",generateNewUrl);
router.get("/:surl",GetTheWeb);

module.exports=router;