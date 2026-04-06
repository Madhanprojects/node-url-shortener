const jwt = require("jsonwebtoken");
const {GetUser}=require("../services/auth");
function verifyUser(req, res, next) {
    const token = req.cookies.uid;

    if (!token) {
        return res.redirect("/login"); 
    }

    try {
        const decoded = GetUser(token);
        if(decoded){
            return next()
        }
        return res.redirect("/login");
    }
    catch(err){
        return res.redirect("/login"); 
    }
}

module.exports = verifyUser;