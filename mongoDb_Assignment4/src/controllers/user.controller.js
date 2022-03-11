const express=require("express")
const Users=require("../models/user.model")
const router=express.Router()

// crud for User
router.post("",async (req,res)=>{
    try {
        let user=await Users.create(req.body)
        return res.send(user)
    } 
    catch (error) {
        return res.send({Error:error})
    }
})

module.exports=router

