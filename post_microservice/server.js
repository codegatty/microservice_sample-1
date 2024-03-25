require("dotenv").config();

const express=require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/post",require("./routes/postRoutes"));


app.listen(process.env.PORT,()=>{
    console.log("post microservice started at port "+process.env.PORT);
})