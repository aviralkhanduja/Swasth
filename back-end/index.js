const express=require("express");
const port=8800;
const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors');
const db=require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
//const passportJWT = require('./config/passport-jwt-strategy');
const passportGoogle = require('./config/passport-google-oauth2-strategy');
const cookieParser=require('cookie-parser');
const MongoStore=require('connect-mongo');
const cookie_parser=require('cookie-parser');
const app=express();
app.use(cookie_parser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}));
app.use(session({
    name: 'Swasth',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    //to store the cookie even if the server restarts or is undergoing integrations
    store:MongoStore.create({
        mongoUrl: 'mongodb://localhost/Swasth'
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use("/uploads",express.static(__dirname+'/uploads'));
app.use('/swasth',require('./routers'));
app.listen(port,(err)=>{
    if(err){
        return console.log("Sorry coudn't bind the server to the port");
    }
    console.log(`Server bound to ${port}, Server is available now`);
});
