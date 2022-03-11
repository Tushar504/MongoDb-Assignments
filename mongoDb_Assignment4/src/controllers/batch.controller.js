const express=require("express")

const Batch=require("../models/batch.model")
const router=express.Router();

router.post("",async(req,res)=>{
    try {
        let batch=await Batch.create(req.body);
        return res.send(batch)
    } 
    catch (error) {
        return res.send({Error:error})
    }
})

module.exports=router