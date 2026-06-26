require('dotenv').config();
const express=require("express");
const app=express();
const path=require("path");
const cookieParser = require("cookie-parser");
const verifyUser=require("./middlewares/user.js");
const port=process.env.Port;
const {connectMongodb}=require("./connection.js");
connectMongodb(process.env.MONGODB)
.then(()=>console.log("mongodb connected")
);
const UrlRouter=require("./routes/url.js");
const AuthRouter=require("./routes/user.js");
const Url=require("./models/url.js");
//middle wares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false})); 
//initial routes
app.use("/",AuthRouter);
app.use("/url",verifyUser,UrlRouter);
//initialising serverside rendering
app.set("view engine","ejs");
app.set('views',path.resolve("./views"));
//initializing the or stating the server
app.listen(port,()=>{
    console.log("server started at port:7001");
})


