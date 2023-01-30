const User=require('../models/user');
const Pose=require('../models/pose');
const Feedback=require('../models/feedback');
module.exports.addFeedback=async function(req,res){
    try{
        const pose=await Pose.findById(req.body.pose);
        if(req.user&&req.body.user==req.user._id&&pose&&req.body.calorielost){
            const newFeedback=await Feedback.create(req.body);
            const user=await User.findById(req.user._id).exec();
            user.feedbacks.push(newFeedback);
            user.save();
            //console.log('USER=',user);
            //console.log(req.body.user,req.user._id,req.user.id);
            return res.status(200).send({
                success:true,
                message:"Feedback successfully added!",
                feedback:newFeedback
            });
        }
        return res.status(422).send({
            success:false,
            message:"Invalid operation!",
        });
    }
    catch(err){
        console.log('******',err);
        return res.status(500).send({
            message: "Internal Server Error"
        });
    }
}
module.exports.delFeedback=async function(req,res){
    try{
        //req.body||req.query
        const existFeedback=await Feedback.findById(req.body.feedback);
        if(existFeedback&&existFeedback.user.equals(req.user._id))
        {
            existFeedback.remove();
            let user = await User.findByIdAndUpdate(req.user._id, { $pull: {feedbacks: req.body.feedback}});
            return res.status(200).send({
                success:true,
                message:"Feedback successfully deleted!",
                feedback:existFeedback,
            });
        }
        //console.log(existFeedback,existFeedback.user,req.user._id,existFeedback.user==req.user._id);
        return res.status(422).send({
            success:false,
            message:"Not a valid operation"
        });
    }
    catch(err){
        console.log('******',err);
        return res.status(500).send({
            message: "Internal Server Error"
        });
    }
}
module.exports.getFeedback=async function(req,res){
    try{
        const existFeedback=await Feedback.findById(req.body.feedback);
        if(existFeedback&&existFeedback.user.equals(req.user._id))
        {
            return res.status(200).send({
                success:true,
                message:"Here is the Feedback:",
                feedback:existFeedback
            });
        }
        return res.status(422).send({
            success:false,
            message:"Not a valid operation"
        });
    }
    catch(err){
        console.log('******',err);
        return res.status(500).send({
            message: "Internal Server Error"
        });
    }
}
module.exports.getFeedbacks=async function(req,res){
    try{
        //console.log(req.user);
        const user=req.user;
        let popuser=await User.findById(req.user._id);
        popuser= await popuser.populate('feedbacks');
        //console.log(popuser)
        return res.status(200).send({
            success:true,
            message:"Here is the list of all feedbacks",
            feedbacks:popuser.feedbacks,
        });
    }
    catch(err){
        console.log('******',err);
        return res.status(500).send({
            message: "Internal Server Error"
        });
    }
}