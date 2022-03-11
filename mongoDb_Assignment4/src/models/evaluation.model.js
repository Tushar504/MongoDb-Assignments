const mongoose=require("mongoose")
// creating schema for evaluation 
const evaluationSchema=new mongoose.Schema({
    date:{type:String,required:true},
   
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    batchId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"batch",
        required:true
    }
})
// creating evaluation model
const Evaluation=mongoose.model("evaluation",evaluationSchema)

module.exports=Evaluation