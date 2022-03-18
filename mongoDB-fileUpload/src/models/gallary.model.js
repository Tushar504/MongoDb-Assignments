const mongoose=require("mongoose")

const gallarySchema=new mongoose.Schema({
    picture:{type:Array,required:false},
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        src:"user",
        required:true
    }
})

const Gallary=mongoose.model("gallary",gallarySchema);

module.exports=Gallary