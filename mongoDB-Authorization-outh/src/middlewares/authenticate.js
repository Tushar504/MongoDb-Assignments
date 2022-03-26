
const jwt = require("jsonwebtoken")

const verifyToken = (token) => {
    return jwt.verify(token, "tush")
           
}
const authenticate=async(req,res,next)=>{
    try {
        if(!req.headers.authorization)
        return res.status(400).send({message : "Authorization token not found or incorrect"})
    
        if(!req.headers.authorization.startsWith("Bearer "))
        return res.status(400).send({message : "Authorization token not found or incorrect"})
    
        const token = req.headers.authorization.trim().split(" ")[1]
        decoded = await verifyToken(token)  
       
        if(decoded){
        req.user=decoded.user
        return next()  
        }
        return res.status(400).send({message : "Authorization token not found or incorrect"})
    } catch (error) {
        return res.status(400).send({message : "Authorization token not found or incorrect"})
    }
}
module.exports=authenticate