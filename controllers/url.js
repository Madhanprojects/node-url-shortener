const { nanoid } = require("nanoid");
const URL = require("../models/url.js");
const User=require("../models/user.js");
const jwt = require("jsonwebtoken");
const { GetUser } = require("../services/auth.js");
const axios = require("axios");

async function isReachable(url) {
    try {
        const response = await axios.get(url, {
            timeout: 3000, // avoid long wait
        });

        if(response.status >= 200 && response.status < 400){
            return true;
        }
        else{
            return false;
        }
    } catch (err) {
        return false;
    }
}
async function GetTheWeb(req, res) {
    try {
        const surl = req.params.surl;   // get shortId from URL
        console.log(surl);
        const data = await URL.findOne({ shortId: surl });
        console.log(data);
        if (!data) {
            return res.status(404).send("URL not found");
        }
        // Redirect to original URL
        res.redirect(data.originalUrl);

    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
}
async function generateNewUrl(req, res) {
    const body = req.body;
    const token = req.cookies.uid;
    const decoded = jwt.verify(token, "madhan");
    const user_id = decoded._id;
    if (!body.url) {
        return res.status(400).json({ error: "No URL is entered" });
    }
    let oUrl = body.url;
    if (!oUrl.startsWith("http")) {
        oUrl = "https://" + oUrl;
    }
    oUrl=oUrl.trim().toLowerCase();
    const valid_url=await isReachable(oUrl);
    console.log(valid_url);
    if(!valid_url){
        return res.status(404).send({message:"an invalid URL is enter, enter an valid URL"})
    }
    const isThere=await URL.findOne({CreatedBy:user_id,originalUrl: oUrl});
    if(isThere){
        return res.redirect("/url/home");
    }
    console.log(isThere);
    const id = nanoid(8);
    await URL.create({
        CreatedBy: user_id,
        shortId: id,
        originalUrl: oUrl,
    });
    res.redirect("/url/home");
}
async function showHome(req,res){
    const token = req.cookies.uid;
    const decoded = GetUser(token);
    const user_id = decoded._id;
    const AllUrls=await URL.find({CreatedBy:user_id });
    res.render("home",{urls:AllUrls});
}

module.exports = {
    generateNewUrl,
    GetTheWeb,
    showHome,
};