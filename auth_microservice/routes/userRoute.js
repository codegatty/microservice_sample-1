const express= require('express');
const router=express.Router();
const tokenValidator=require("../middleware/tokenValidator")

const {currentUser,registerUser,loginUser}=require("../controller/userController");
router.post("/login",loginUser);

router.post("/register",registerUser);

router.get("/current",tokenValidator,currentUser);

module.exports=router;

