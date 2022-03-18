const express=require("express")

const app=express();

app.use(express.json())

const userController=require("./controllers/user.controller")
const gallaryController=require("./controllers/gallary.controller") 

app.use("/user",userController)
app.use("/gallary",gallaryController)


module.exports=app