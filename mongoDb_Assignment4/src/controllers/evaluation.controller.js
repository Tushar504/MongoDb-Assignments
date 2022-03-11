const express=require("express")

const Evaluation=require("../models/evaluation.model")

const router=express.Router()
router.post("",async (req,res)=>{
    try {
        let evaluation=await Evaluation.create(req.body)
        return res.send(evaluation)
    } catch (error) {
        return res.send({Error:error})
    }
})

module.exports=router
