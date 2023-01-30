const { min } = require('lodash');
const multer=require('multer');
const mongoose=require('mongoose');
const path=require('path');
const AVATAR_PATH=path.join('uploads/users/avatars');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number  
    },
    password:{
        type:String,
        required:true,
        min:8
    },
    gender:{
        type:String,
    },
    avatar:{
        type:String
    },
    feedbacks:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Feedback'
        }
    ],
    isadmin:{
        type:Boolean,
        required:true
    }
},{
    timestamps:true
});
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..', AVATAR_PATH));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now());
    }
  });

// static
userSchema.statics.uploadedAvatar = multer({storage:  storage}).single('avatar');
userSchema.statics.avatarPath = AVATAR_PATH;
const User = mongoose.model('User', userSchema);
module.exports = User;

