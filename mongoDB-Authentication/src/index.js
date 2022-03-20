const express=require("express")
const {register,login}=require("./controllers/auth.controller")
const app=express();
const {body}=require("express-validator")

app.use(express.json())
app.post("/register",body("name").not().isEmpty(),body("email").not().isEmpty().isEmail(),body("password").not().isEmpty().isLength(5),register)
app.post("/login",body("email").isEmail().not().isEmpty(),body("password").not().isEmpty().isLength(5),login)

const postController=require("./controllers/post.controller")

app.use("/post",postController)

module.exports=app