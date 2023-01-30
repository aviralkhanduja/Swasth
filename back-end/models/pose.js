const mongoose=require('mongoose');
const poseSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    calorieph:{
        type:Number,
        required:true
    }
});
const Pose = mongoose.model('Pose', poseSchema);
module.exports = Pose;
//so the thing is multer.diskstorage will just store the file in the way I want and we have to add the path as per our choice in schema
