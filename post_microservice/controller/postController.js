const asyncHandler =require("express-async-handler");
const User=require("../model/post");

const getAllPosts=asyncHandler((req,res)=>{

})

const getOnePost=asyncHandler((req,res)=>{
    
})

const createPost=asyncHandler(async (req,res)=>{
    console.log("createpost controller");

    const {title,content}=req.body;

    if(!title || !content){
        res.status(400);
        res.json({message: "Error creating post"});
    }
    let post=await User.create({
        title,
        content
    });
    if(post){
        res.status(201).json({message:"post uploaded"})
    }
    
})

const deletePost=asyncHandler((req,res)=>{
    
})

const updatePost=asyncHandler((req,res)=>{
    
})

module.exports={getAllPosts,getOnePost,createPost,deletePost,updatePost};