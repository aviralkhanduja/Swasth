const mongoose=require('mongoose');
const feedbackSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    pose:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Pose'
    },
    calorielost:{
        type:Number
    }
});
const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;

