const mongoose=require ("mongoose")
// creating Users schema
const usersSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    gender:{type:String,required:true},
    dataOfBirth:{type:String,required:true},
    type:{type:String,required:true}
},{
    timestamps:true
})

// creating model
const Users=mongoose.model("user",usersSchema)

module.exports=Users