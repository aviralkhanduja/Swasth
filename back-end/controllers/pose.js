const Pose=require('../models/pose');
module.exports.addPose=async function(req,res){
    try{
        if(req.body.name&&req.body.calorieph){
            const existPose=await Pose.findOne({name:req.body.name});
            if(existPose){
                return res.status(400).send({
                    success:false,
                    message:"Pose already exists!",
                    pose:existPose
                });
            }
            const newPose=await Pose.create(req.body);
            return res.status(200).send({
                success:true,
                message:"Pose successfully added!",
                pose:newPose
            });
        }
        return res.status(400).send({
            success:false,
            message:"Missing Information for the task!"
        });
    }
    catch(err){
        console.log('******',err);
        return res.status(500).send({
            message: "Internal Server Error"
        });
    }
}
module.exports.delPose=async function(req,res){
    try{
        if(req.body.name){
            const pose=await Pose.findOne({name:req.body.name});
            if(pose){
                await pose.remove();
                return res.status(200).send({
                    success:true,
                    message:"Pose deleted!"
                });
            }
            else{
                return res.status(422).send({
                    success:false,
                    message:"Pose doesn't exist!"
                });
            }
        }
        return res.status(400).send({
            success:false,
            message:"Missing Information for the task!"
        });
    }
    catch(err){
        console.log('******',err);
        return res.status(500).send({
            message: "Internal Server Error"
        });
    }
}
module.exports.getPose=async function(req,res){
    try{
        if(req.body.name){
            const pose=await Pose.findOne({name:req.body.name});
            if(pose){
                return res.status(200).send({
                    success:true,
                    message:"Here is the Pose info:",
                    pose
                });
            }
            return res.status(422).send({
                success:false,
                message:"Pose doesn't exist!"
            });
        }
        return res.status(400).send({
            success:false,
            message:"Missing Information for the task!"
        });
    }
    catch(err){
        console.log('******',err);
        return res.status(500).send({
            message: "Internal Server Error"
        });
    }
}
module.exports.getPoses=async function(req,res){
    try{
        const allPoses=await Pose.find({});
        return res.status(200).send({
            success:true,
            message:"Here is the list of all Poses currently in db",
            poses:allPoses
        });
    }
    catch(err){
        console.log('******',err);
        return res.status(500).send({
            message: "Internal Server Error"
        });
    }
}