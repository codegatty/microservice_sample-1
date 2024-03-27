const mongoose=require("mongoose");


const connectDb=async ()=>{
    try{
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Successfully connected to Mongodb from post microservice");

    }catch(e){
        console.log("couldnt connect to Mongodb from post microservice");
        console.log(e);
        process.exit(1);
    }
}

module.exports=connectDb;