const express=require("express")
const Students=require("../models/student.model")

const router=express.Router()
router.post("",async (req,res)=>{
    try {
        let student=await Students.create(req.body);
        return res.send(student)
    } catch (error) {
        return res.send({Error:error})
    }
})

module.exports=router