const express=require("express")

const router=express.Router()
const authorize=require("../middlewares/authorize")
const Product=require("../models/products.model")
const authenticate=require("../middlewares/authenticate")

router.post("/",authenticate,async(req,res)=>{
    try {
        req.body.user_id=req.user
       
        const product=await Product.create(req.body)
        return res.status(200).send(product)
    } 
    catch (error) {
        return res.status(400).send(error.message)
    }
})

router.patch("/update/:id",authenticate,authorize(["seller","admin"]),async(req,res)=>{
    try {
       
        let product=await Product.findOne({_id:req.params.id})
         if(product.user_id==req.user._id){
            product=await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
        
        
            return res.status(200).send(product)
         }
         else{
            return res.status(401).send({message : "You are not authorised to perform this operation"})
         }
        
      
    
    } 
    catch (error) {
        return res.status(400).send(error.message)
    }
})


router.delete("/delete/:id",authenticate,authorize(["seller","admin"]),async(req,res)=>{
    try {
        let product=await Product.findOne({_id:req.params.id})
        if(product){
        if(product.user_id==req.user._id){
            product=await Product.findByIdAndDelete(req.params.id)
        
        
            return res.status(200).send(product)
         }
         else{
            return res.status(401).send({message : "You are not authorised to perform this operation"})
         }
        }
        else{
            res.status(400).send({message:"Product not found"})
        }
    
    } 
    catch (error) {
        
    }
})
module.exports=router