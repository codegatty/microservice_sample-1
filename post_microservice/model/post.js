const mongoose= require('mongoose');

const userSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true,"enter the title of user"]
    },
    content:{
        type:String,
        required:[true,"enter the content of user"]
    }
},{timestamps:true});
module.exports=mongoose.model("Post",userSchema);