const User=require("../models/user.model")
var jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { findOne } = require("../models/user.model");
const generateToken=(user)=>{
    return jwt.sign({ user }, 'tush')
}

const register=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        let user=await User.findOne({email:req.body.email})
        if(user){
            return res.status(400).send({message:"Email already exists"})
        }
        user =await User.create(req.body)
       const token=generateToken(user)
       return res.status(200).send({user,token})
    } 
    catch (error) {
        return res.status(400).send(error.message)
    }


}

const login=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        let user=await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).send({message:"Email not registered"})
        }
        const match=user.checkpassword(req.body.password)
        if(!match){
            return res.status(400).send({message:"Incorrect password"})
        }
        const token=generateToken(user)

        return res.status(200).send({user,token})
    } 
    catch (error) {
        return res.status(400).send(error)
    }
}

module.exports={register,login}