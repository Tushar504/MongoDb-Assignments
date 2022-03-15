
const app=require("./index")
const connect=require("./configs/db")

app.listen(1300,async()=>{
    try {
        await connect()
        console.log("Listening on 1300")
    } 
    catch (error) {
        console.log("Error:",error)
    }
})