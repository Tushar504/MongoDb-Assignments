const express=require("express")

const router=express.Router();

const Post=require("../models/post.model")
const authenticate=require("../middlewares/authenticate")
router.post("/insert",authenticate,async(req,res)=>{
    try {
         let post=await Post.create(req.body)
         return res.send(post)
    } 
    catch (error) {
        return res.send(error)
    }
})

module.exports=router