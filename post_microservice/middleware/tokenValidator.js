const jwt=require("jsonwebtoken");
const asyncHandler=require("express-async-handler");

const tokenValidator=asyncHandler(async (req,res,next)=>{
    let token;
    let authHeader=req.headers.authorization||req.headers.Authorization;
    token=authHeader?.split(" ")[1];

    if(!token){
        res.status(401);
        res.json({message:"unauthorized"});
    }else{

    await jwt.verify(token,process.env.SECRET_KEY,(err,decodedInfo)=>{
        if(err){
            res.status(400); 
        }

        req.user=decodedInfo.user;
        next();
    })}
})

module.exports=tokenValidator;