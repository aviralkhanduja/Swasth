const express=require('express');
const router=express.Router();
const verifyToken=require('../config/verify-token').verifyToken;
router.use('/user',require('./user'));
router.use('/pose',verifyToken,require('./pose'));
router.use('/feedback',verifyToken,require('./feedback'));
module.exports=router;