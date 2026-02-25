const express=require("express");
const app=express();
const port=7001;
const {connectMongodb}=require("./connection.js");
connectMongodb("mongodb://127.0.0.1:27017/shorturl")
.then(()=>console.log("mongodb connected")
);
const UrlRouter=require("./routes/url.js");
app.use(express.json());
app.use("/use",UrlRouter);


app.listen(port,()=>{
    console.log("server started at port:7001");
})