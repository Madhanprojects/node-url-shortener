const JWT=require("jsonwebtoken");
const secret=process.env.secret;
function SetUser(user){
    return JWT.sign(
        {
            _id:user._id,
            name:user.name,
        },secret);
}
function GetUser(token){
    return JWT.verify(token,secret);
}
module.exports={SetUser,GetUser}