const passport=require('passport');
const googleStrategy=require('passport-google-oauth').OAuth2Strategy;
const crypto=require('crypto');
const User=require('../models/user');
passport.use(new googleStrategy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: "http://localhost:8800/swasth/user/auth/google/callback",
    scope: ['profile', 'email']
},(accessToken,refresToken,profile,done)=>{
    console.log('Profile from google=',profile);
    User.findOne({email: profile.emails[0].value}).exec(function(err,user){
        if(err){console.log('Error in google strategy-passport: ',err);return;}
        console.log('User=',user);
        if(user){
            return done(null,user);
        }
        else{
            User.create({
                name:profile.displayName,
                email:profile.emails[0].value,
                password:crypto.randomBytes(20).toString('hex'),
                isadmin:false
            },function(err,newuser){
                if(err){console.log('Error in creating user: ',err);return;}
                return done(null,newuser);
            });
        }
    });
}));
passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
done(null, user);
});
module.exports=passport;