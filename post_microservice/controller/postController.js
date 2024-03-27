const asyncHandler =require("express-async-handler");
const Post=require("../model/post");
console.log("get all data");

const getAllPosts=asyncHandler(async (req,res)=>{
    
    const allposts=await Post.find({userid:req.user.userid});
    res.status(200).json(allposts);
})

const getOnePost=asyncHandler(async (req,res)=>{
    console.log("get single post id: "+req.params.id);
    const post=await Post.findById(req.params.id);
    if(post){
        res.status(200).json(post);
    }else{
        res.status(404).json({message:"post not found"});
    }

})

const createPost=asyncHandler(async (req,res)=>{
    console.log("createpost controller");
    
    const {title,content}=req.body;

    if(!title || !content){
        res.status(400);
        res.json({message: "Error creating post"});
    }
    let post=await Post.create({
        title,
        content,
        userid:req.user.userid
    });
    if(post){
        res.status(201).json(post);
    }else{
        res.status(400).json({message:"Error creating post"});
    }
    
})

const deletePost=asyncHandler(async (req,res)=>{
    const post=Post.findById(req.params.id);
    if(!post){
        res.status(404).json({message:"post not found"});
    }
    console.log("deleting post id: "+req.params.id);
    await Post.deleteOne({_id:req.params.id})
        res.status(200).json({message:"deleted successfully"});

})

const updatePost=asyncHandler(async(req,res)=>{
     const post=await Post.findById(req.params.id);
     if(!post){
         res.status(404).json({message:"post not found"});
    }else{
    console.log("updating post id: "+req.params.id);
    const updated=await Post.findByIdAndUpdate(req.params.id, req.body,{new:true});
    res.status(200).json(updated);
    }
})

module.exports={getAllPosts,getOnePost,createPost,deletePost,updatePost};