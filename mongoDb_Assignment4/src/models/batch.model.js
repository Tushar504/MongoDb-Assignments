const mongoose=require ("mongoose")

// creating schema for batch
const batchSchema=new mongoose.Schema({
    batch_name:{type:String,required:true}
},{
    timestamps:true
})

// creating model for batch
const Batch=mongoose.model("batch",batchSchema)

module.exports=Batch