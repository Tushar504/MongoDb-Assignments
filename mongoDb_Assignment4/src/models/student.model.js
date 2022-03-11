
const mongoose=require ("mongoose")
// creating schema for Student

const studentsSchema=new mongoose.Schema({
    rollId:{type:Number,required:true},
    batchId:{type: mongoose.Schema.Types.ObjectId,
        ref:"batch",
        required:true
    },
    userId:{type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
},{
    timestamps:true
})

// creating model for students
const Students=mongoose.model("student",studentsSchema)

module.exports=Students