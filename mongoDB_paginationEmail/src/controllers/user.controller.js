const path = require("path");
const express=require("express")
const router=express.Router();
const User=require("../models/user.model")
const transporter=require("../configs/mails")

// creating post requist for user

router.post("",async(req,res)=>{
    try {
        let user=await User.create(req.body)
        transporter.sendMail({
            from: '"Tushar Ahire" <admin@amazon.com>', // sender address
            to: user.email, // list of receivers
            subject: `Welcome to ABC system ${user.first_name}` , // Subject line
            text: `Hi${user.first_name} `, // plain text body
            //   html: "<b>Hello sir/madam your product is successfully created</b>", // html body
            // alternatives: [
            //   {
            //     contentType: "text/html",
            //     path: path.join(__dirname, "../mailers/product-created.mail.html"),
            //   },
            //   {
            //     filename: "product.txt",
            //     path: path.join(__dirname, "../mailers/product-details.txt"),
            //   },
            // ],
          });
      
        return res.send(user)
    } 
    catch (error) {
        return res.send({Error:error})
    }
})

// creating pagination
router.get("/data",async(req,res)=>{
    try {
        let page=req.query.page ||1
        let pagesize=req.query.pagesize||100

        const skip=(page-1)*pagesize;
        const users=await User.find({}).skip(skip).limit(pagesize).lean().exec()
        const total_pages=Math.ceil((await User.find({}).countDocuments())/pagesize)
        return res.send({total_pages,
        users})
    } 
    catch (error) {
        res.send({Error:error})
    }
})

module.exports=router
