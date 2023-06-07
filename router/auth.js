const express= require('express')
const router = express.Router();
const User = require("../model/userSchema")

const Empl = require("../model/emplSchema")
router.post('/add',async(req,res)=>{
    
    const{email,ename,pnumber,salary,processed,leaves,comments} = req.body;

   if(!email||!ename||!pnumber||!salary||!processed||!leaves||!comments)
{
   console.log("incomplete ");
res.render("error");
}

try{
const emplExist = await Empl.findOne({email:email});
if(emplExist){

    res.render("error")

}
else{
   const empl = new Empl({email,ename,pnumber,salary,processed,leaves,comments})
 await empl.save();
   res.render("welcom");
   
}} catch(err){
   console.log(err);
   
}
});

router.get('/employe',(req,res)=>{
    Empl.find().then(result=>{
        res.render("employe",{result});
      
    })
})
router.get('/welcom',(req,res)=>{
    res.render("welcom");
})

router.get('/add',(req,res)=>{
        res.render("add");
})

router.post('/login', async(req,res)=>{
    // console.log(req.body);
// res.json({message:"awesome tag here "})
try{
        
        const email = req.body.email;
        const password=req.body.password;
        if(!email||!password){
            console.log("no data");
       res.render("error");
 
        }
       const userLogin = await User.findOne({email:email});

      if(userLogin){
        res.render("welcom");
      }
      else{
    
        console.log("wrong details ");
        res.render("error")
    }
        

    }catch(err){
        console.log(err);
        res.render("error");
    }
})
module.exports = router;