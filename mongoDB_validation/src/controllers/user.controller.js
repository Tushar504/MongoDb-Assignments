const express=require("express")
const {body,validationResult}=require("express-validator")
const router=express.Router();

const User=require("../models/user.model")

router.post("",body("first_name")
.not()
.isEmpty()
.withMessage("first_name is required"),
body("last_name")
.not()
.isEmpty()
.withMessage("last_name is required"),
body("email")
.not()
.isEmpty()
.withMessage("email is required")
.isEmail()
.withMessage("Enter correct email"),
body("pincode")
.not()
.isEmpty()
.withMessage("pincode is required")
.bail()
.isLength(6)
.withMessage("pincode must have 6 char"),
body("age")
.not()
.isEmpty()
.withMessage("age is required")
.custom((value)=>{
    if(value<1 || value>100){
        throw new Error("enter valid age")
    }
    return true
}),
body("gender")
.not()
.isEmpty()
.custom((value)=>{
    if( value == "Male" || value == "Female" || value =="Other" || value == "male" || value == "female" || value =="other"){
      
       return true
    }
    throw new Error("valid gender required")
}),async(req,res)=>{
    try {
        const error=validationResult(req)
        if(!error.isEmpty()){
            return res.send({errors:error.array()})
        }
        const user=await User.create(req.body)
         return res.send(user)
    } 
    catch (error) {
        return res.send({Error:error})
    }
})

module.exports=router