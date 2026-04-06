const express=require("express");
const router=express.Router();
const {createUser,showsignup,showloginpage,verifyUser,logoutUser}=require("../controllers/user.js");
router.post("/",createUser);
router.get("/",showsignup);
router.get("/login",showloginpage);
router.post("/login",verifyUser);
router.get("/logout",logoutUser);
module.exports=router;