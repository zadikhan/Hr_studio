const mongoose= require("mongoose");

const emplSchema=new mongoose.Schema({
  email:{
        type:String,
        required:true
    },
    ename:{
        type:String,
        required:true
     },
     
     pnumber:{
        type:Number,
        required:true
  
      },
      salary:{
        type:String,
        required:true

    },
    processed:{
        type:String,
        required:true

    },
    leaves:{
        type:String,
        required:true

    },
    comments:{
        type:String,
        required:true
    },
}
)
const Empl = mongoose.model("EMPL",emplSchema);
module.exports=Empl;