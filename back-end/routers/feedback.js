const express=require('express');
const router=express.Router();
const feedbackController=require('../controllers/feedback');
router.post('/add',feedbackController.addFeedback);
router.post('/del',feedbackController.delFeedback);
router.get('/view',feedbackController.getFeedback);
router.get('/all',feedbackController.getFeedbacks);
module.exports=router;