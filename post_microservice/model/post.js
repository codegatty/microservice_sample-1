const mongoose= require('mongoose');

const postSchema=mongoose.Schema({
    userid:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    title:{
        type:String,
        required:[true,"enter the title of user"]
    },
    content:{
        type:String,
        required:[true,"enter the content of user"]
    }
},{timestamps:true});
module.exports=mongoose.model("Post",postSchema);