const express=require("express")
const fs=require("fs")
const router=express.Router();
const uploads=require("../middleware/upload")
const User=require("../models/user.model")



router.post("/createuser",uploads.single("profile_pic"),async(req,res)=>{
    try {
        const user = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            profile_pic: req.file.path,
          });
          return res.send(user)
    } 
    catch (error) {
        return res.send(error.message)
    }
})
router.post("/update/:id",uploads.single("profile_pic"),async(req,res)=>{
    try {
        let user=await User.find({_id:{$eq:req.params.id}})
        
        fs.unlink(user[0].profile_pic,(err)=>{
             if(err){
                 throw new Error("Not removed")
             }
             else{
                 console.log("removed")
             }
         })
       
        User.findByIdAndUpdate(req.params.id,{"profile_pic":req.file.path},function(err,docs){
            if(err){
                console.log(err)
            }
            else{
                console.log("updated",docs)
            }
        })
      
        } 
    catch (error) {
        return res.send(error)
    }
})


router.delete("/delete/:id",async(req,res)=>{
    try {
      
        let user=await User.find({_id:{$eq:req.params.id}})
        fs.unlink(user[0].profile_pic,(err)=>{
            if(err){
                throw new Error("Not removed")
            }
            else{
                console.log("removed")
            }
        })
       User.findByIdAndDelete(req.params.id,(err,docs)=>{
           if(err){
               console.log(err)
           }
           else{
               console.log("Deleted")
           }
       })
  
    
    } 
    catch (error) {
        
    }
})
module.exports=router
