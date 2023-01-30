const User=require('../models/user');
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports.createUser=async function(req,res){
    try{
        User.uploadedAvatar(req,res,async ()=>{
        //check for passwords equivalency
        if(req.body.password!=req.body.confirm_password){
            return res.status(422).send({
                success:false,
                message:"Unmatched Passwords in the body"
            });
        }
        //check if the user already exists
        let existUser;
        if(req.body.phone)
        existUser=await User.findOne({$or:[{email:req.body.email},{phone:req.body.phone}]}).exec();
        else
        existUser=await User.findOne({email:req.body.email}).exec();
        if(existUser){
            return res.status(422).send({
                success:false,
                message:"This identity is already registered. Kindly Login!"
            });
        }
        else{
            req.body.password=bcrypt.hashSync(req.body.password, 10);
            req.body.isadmin=false;
            let new_user=await User.create(req.body);
            if(req.file){
                new_user.avatar=User.avatarPath+'/'+req.file.filename;
                new_user.save();
            }
            return res.status(200).send({
                success:true,
                message:`Welcome to Swasth ${new_user.name}. Kindly Login!`
            });
        }
        });
    }
    catch(err){
        console.log('******',err);
        return res.status(500).send({
            message: "Internal Server Error"
        });
    }
}
module.exports.createSession=async function(req,res){
    try{
        console.log('ETHA AGAYA',req.body);
        let user = await User.findOne({email: req.body.email});

        if (!user || !bcrypt.compareSync(req.body.password, user.password)){
            return res.status(422).send({
                message: "Invalid username or password"
            });
        }
        const token=jwt.sign(user.toJSON(), process.env.jwt);
        const {password,isadmin, ...otherdetails}=user._doc;
        return res.cookie("access_token",token,{
            httpOnly:true,
        }).status(200).send({
            message: 'Hi SwaasthCautious! Logged in successfully',
            user:otherdetails
        });

    }catch(err){
        console.log('********', err);
        console.log(process.env.jwt);
        return res.status(500).send({
            message: "Internal Server Error"
        });
    }
}