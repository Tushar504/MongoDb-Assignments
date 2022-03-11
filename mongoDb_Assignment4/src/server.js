
const app=require("./index.js")
const connect=require("./configs/db")
app.listen(1200,async()=>{
    try {
        await connect()
        console.log("listening on 1200")
    } catch (error) {
        console.log("Error :",error)
    }
})
