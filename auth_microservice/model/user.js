const mongoose= require('mongoose');

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"enter the name of user"]
    },
    email:{
        type:String,
        required:[true,"enter the email of user"]
    },
    password:{
        type:String,
        required:[true,"enter the password of user"]
    }
},{timestamps:true})

module.exports=mongoose.model('Users',userSchema);