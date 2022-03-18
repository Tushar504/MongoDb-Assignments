const app=require("./index")
const connect=require("./configs/db")
app.listen(1600,async()=>{
    try {
        await connect()
        console.log("listening on 1600")
    } 
    catch (error) {
        console.log(error.message)
    }
})