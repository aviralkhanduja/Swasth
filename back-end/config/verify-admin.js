module.exports=function(req,res,next){
    if(req.user.isadmin)
    {
        return next();
    }
    return res.status(401).send({
        success:false,
        message:"Please log in as admin to perform the operation."
    });
}