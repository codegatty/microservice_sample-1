require('dotenv').config();
const express=require('express');
const app = express();

//user defined methods
const connect=require('./config/dbConfig')

//inbuild middlewares
app.use(express.json())
app.use(express.urlencoded({ extended   : true }));


connect();
app.use('/api/users',require('./routes/userRoute'))

app.listen(process.env.PORT,()=>{
    console.log("sever is open at port number"+process.env.PORT);
});




app.get("/",(req,res)=>{
    res.json({message:"success"});
})