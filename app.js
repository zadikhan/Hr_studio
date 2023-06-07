const express = require("express")
const dotenv=require("dotenv")
const app = express();
const mongoose=require("mongoose")
const hbs=require("hbs")
const path= require("path")


const tempelatePath=path.join(__dirname,'./templetes')
app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'./public')));




// const User= require('./model/userSchema');
//Middleware
dotenv.config({path:'./config.env'})
require("./db/conn");
const PORT=process.env.PORT;

app.use(express.json()); 
app.use(require('./router/auth'));


const middleware=(req,res,next)=>{
console.log("hello my middleware")
next()
}



app.get("/",(req,res)=>{
    res.render("front");

})
app.get("/about",middleware,(req,res)=>{
    res.send("helloo world from about side ")

})
app.listen(PORT,()=>{
    console.log("serving is running on port 3000");
})