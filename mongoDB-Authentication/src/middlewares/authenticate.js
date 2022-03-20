const { promise } = require("bcrypt/promises")
const jwt=require("jsonwebtoken")

function checktoken(token){
    return new Promise((resolve,reject) => {
        jwt.verify(token, "tushar", (err,decoded) => {
            if(err) {
                return reject(err)
            }
            return resolve(decoded)
        });
    })
    
}

const authenticate=async(req,res,next)=>{
    if(!req.headers.authorization){
        return res.send("login required")
    }
    if(!req.headers.authorization.startsWith("Bearer ")){
    return res.status(400).send({message : "Authorization token not found or incorrect"})
    }
    let decoded;
    const token=req.headers.authorization.trim().split(" ")[1]
     try {
         decoded=await checktoken(token)
         console.log(decoded)
          return next()
     } catch (error) {
         return res.send(error)
     }
}
module.exports=authenticate