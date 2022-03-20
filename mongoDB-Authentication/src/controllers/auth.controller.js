const User=require("../models/user.model")
const jwt = require('jsonwebtoken')
const {validationResult } = require("express-validator")

const generateToken=(user)=>{
    return jwt.sign({user}, "tushar")
}

const register=async(req,res)=>{
try {
       const errors=validationResult(req)
       if(!errors.isEmpty()){
           return res.send(errors.array())
       }
       let user=await User.findOne({email:req.body.email})

       if(user){
           return res.send({message:"email id already registerd"})
       }

       user=await User.create(req.body)
       console.log(user)
       const token=generateToken(user)

       return res.send({user,token})
      
} 

catch (error) {
    return res.send(error.message)
}
}

const login=async(req,res)=>{
   try {
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.send({error:errors.array()})
    }
       let user=await User.findOne({email:req.body.email})
       if(!user){
           return res.send("user not registered")
       }
       const match=user.checkpassword(req.body.password)
       if(!match){
           return res.send({Message:"Wrong password"})
       }
        
       const token=generateToken(user)
       return res.send({user,token})
 } 
   
   catch (error) {
       return res.send(error.message)
   }
}

module.exports={register,login}