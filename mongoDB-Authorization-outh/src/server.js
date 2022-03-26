const app=require("./index")
const connect=require("./configs/db")

app.listen(1500,async(req,res)=>{
    try {
        await connect()
        console.log("listening on port 1500")
    } 
    catch (error) {
        console.log(error.message)
    }
})