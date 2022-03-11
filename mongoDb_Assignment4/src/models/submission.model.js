const mongoose=require("mongoose")

// creating schema for submission
const submissionSchema=new mongoose.Schema({
    marks:{type:Number,required:true},
    
     evaluationId:{type:mongoose.Schema.Types.ObjectId,
     ref:"evaluation",
 required:true},
     studentId:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"user",
         required:true
     }
 },{
     timestamps:true
 })
 
 // creating model for submission
 const Submission=mongoose.model("submission",submissionSchema)

 module.exports=Submission