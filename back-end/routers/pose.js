const router=require('express').Router();
const verifyAdmin=require('../config/verify-admin');
const poseController=require('../controllers/pose');
router.post('/add',verifyAdmin,poseController.addPose);
router.post('/delete',verifyAdmin,poseController.delPose);
router.get('/view',poseController.getPose);
router.get('/all',poseController.getPoses);
module.exports=router;