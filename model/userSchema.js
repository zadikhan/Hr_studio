const mongoose = require("mongoose")
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        required:true
    },
})
const User=mongoose.model("USER",userSchema);

module.exports=User;