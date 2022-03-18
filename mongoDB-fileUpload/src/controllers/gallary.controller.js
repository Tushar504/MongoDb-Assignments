const express=require("express")

const router=express.Router()
const uploads=require("../middleware/upload")
const Gallary = require("../models/gallary.model")

router.post("/add",uploads.array("picture",[5]),async(req,res)=>{
    try {
        let gallary=await Gallary.create({
            picture:req.files,
            user_id:req.body.user_id
        })
        
        res.send(gallary)
    } 
    catch (error) {
        return res.send(error)
    }
})


module.exports=router