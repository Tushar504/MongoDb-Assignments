const express=require("express")

const Submission=require("../models/submission.model")

const router=express.Router()

router.post("",async(req,res)=>{
    try {
        let submission=await Submission.create(req.body)
        return res.send(submission)
    } 
    catch (error) {
        return res.send({Error:error})
    }
})
router.get("/evaluation/:id",async(req,res)=>{
     try {
         let data=await Submission.find({evaluationId:{$eq:req.params.id}}).populate({path:"evaluationId",
         populate:{path:"instructor"},
         populate:{path:"batchId"}}).populate("studentId").lean().exec()
          return res.send(data)
        } 
     catch (error) {
        return res.send({Error:error})
     }
 })

 router.get("/evaluation",async(req,res)=>{
     try {
         let data=await Submission.find({}).sort({marks:-1}).populate("studentId").limit(1).lean().exec()
    
         return res.send(data)
        }
      catch (error) {
        return res.send({Error:error})
     }
 })

 module.exports=router