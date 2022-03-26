const GoogleStrategy = require('passport-google-oauth20').Strategy;
 const passport=require("passport")
 require('dotenv').config()
 const { v4: uuidv4 } = require('uuid');
const User = require('../models/user.model');
 


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:1500/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    let user=await User.findOne({email:profile?._json?.email})
      if(!user){
          user= await User.create({
               name:profile._json.name,
               type:"customer",
               email:profile._json.email,
               password: uuidv4()
          })
      }
    console.log(user)
    return cb(null, user);

  }
));
module.exports=passport