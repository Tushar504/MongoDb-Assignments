const express=require("express")

const app=express()
const { body } = require('express-validator');
app.use(express.json())

const {register,login}=require("./controllers/auth.controller")
app.post("/register",
body("name")
.notEmpty(),
body("type")
.not()
.isEmpty(),
body("email")
.isEmail(),
body("password")
.not()
.isEmpty()
.isLength({min:5,max:8}),register)

 app.post("/login",body("name")
 .notEmpty(),
 body("type")
 .not()
 .isEmpty(),
 body("email")
 .isEmail(),
 body("password")
 .not()
 .isEmpty(),login)

 const productController=require("./controllers/product.controller")

 app.use("/product",productController)

const passport=require("./configs/google-oauth");
const { session } = require("passport/lib");
 
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login',session:false}),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports=app