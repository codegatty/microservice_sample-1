const mongoose= require('mongoose')

const createConnection=async ()=>{
    try{
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("connected to Mongodb from auth microservice");
    }catch(e){
        console.log("couldnt connect to Mongodb from auth microservice");
        console.log(e);
        process.exit(1);
    }
}

module.exports=createConnection;