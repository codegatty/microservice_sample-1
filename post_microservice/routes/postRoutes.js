const express=  require('express');
const router=express.Router();


const tokenValidator=require("../middleware/tokenValidator")
const {
    getAllPosts,
    getOnePost,
    createPost,
    deletePost,
    updatePost
}=require("../controller/postController")

router.use(tokenValidator);

router.get("/",getAllPosts);

router.get("/:id",getOnePost);

router.post("/",createPost);

router.delete("/:id",deletePost);

router.put("/:id",updatePost);

module.exports = router;