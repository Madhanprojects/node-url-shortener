const bcrypt = require('bcrypt');
const {v4:uuidv4}=require("uuid");
const {SetUser,GetUser}=require("../services/auth");
const Auth=require("../models/user");
const User=require("../models/user.js");
const jwt=require("jsonwebtoken");
async function createUser(req,res){
    try{
        const { name, email, password } = req.body;
        const bryptpassword=await bcrypt.hash(password,10);
        const newUser = await Auth.create({ name, email, password:bryptpassword });
        console.log(name," named user was created");
        res.render("login");
    }
    catch(err){
        console.log("error while creating the user");
        console.log(err);
        res.status(404).send("Error creating user");;
    }
}
async function showsignup(req,res){
    res.render("signup");
}
async function showloginpage(req,res){
    res.render("login");
}
async function verifyUser(req,res){
    try{
        const {email,password}=req.body;
        const user=await Auth.findOne({email});
        if(!user){
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const ismatch=await bcrypt.compare(password,user.password);
        if(!ismatch){
            return res.redirect("/login");
        }
        console.log("user found: ",user);
        const token=SetUser(user);
        res.cookie("uid",token);
        res.redirect("url/home");
    }
    catch(err){
        console.log("got an error at user bcrypting: ",err);
    }
}
function logoutUser(req, res) {
    res.clearCookie("uid"); 
    res.redirect("/login"); 
}
module.exports={createUser,showsignup,showloginpage,verifyUser,logoutUser};
