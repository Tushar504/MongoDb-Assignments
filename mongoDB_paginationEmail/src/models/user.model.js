const mongoose=require("mongoose")

// creating schema for user
const userSchema=mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true},
},{
    timestamps:true
})

// creating model for user
const User=mongoose.model("user",userSchema)

module.exports=User