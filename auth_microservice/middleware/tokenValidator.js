const jwt=require("jsonwebtoken");
const asyncHandler=require("express-async-handler");


const tokenValidator=asyncHandler(async (req,res,next)=>{
let token ;
let authHeader=req.headers.authorization||req.headers.Authorization;
token=authHeader.split(' ')[1];
console.log(process.env.SECRET_KEY)
await jwt.verify(token,process.env.SECRET_KEY,(err,decodedInfo)=>{
    if(err){
       res.status(400); 
    }

        console.log(decodedInfo);
        req.user=decodedInfo.user;
        next();
})

if(!token){
    res.status(401);
    res.json({message:"unauthorized"});
}

})

module.exports=tokenValidator;