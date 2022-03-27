const mongoose=require("mongoose")


const productSchema=new mongoose.Schema({
    product_name:{type:String,required:true},
    price:{type:Number,required:true}
},{
    timestamps:true,
    versionKey:false
})

const Product=mongoose.model("product",productSchema)

module.exports=Product