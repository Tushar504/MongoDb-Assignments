
const app=require("./index")
const connect=require("./configs/db")
app.listen(1400,async()=>{
    try {
        await connect()
        console.log("listening on port 1400")
    } 
    catch (error) {
        
    }
})