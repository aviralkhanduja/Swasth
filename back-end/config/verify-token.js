const jwt=require('jsonwebtoken');
module.exports.verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token;
    if(!token){
        res.status(401).send({
            success:false,
            message:"Unauthorized for the action"
        });
    }
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err){
            res.status(401).send({
                success:false,
                message:"Unauthorized for the action"
            });
        }
        req.user=user;
        next();
    });
}