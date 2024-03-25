const express=  require('express');
const router=express.Router();

const {
    getAllPosts,
    getOnePost,
    createPost,
    deletePost,
    updatePost
}=require("../controller/postController")
router.get("/",getAllPosts);

router.get("/:id",getOnePost);

router.post("/",createPost);

router.delete("/:id",deletePost);

router.put("/:id",updatePost);

module.exports = router;