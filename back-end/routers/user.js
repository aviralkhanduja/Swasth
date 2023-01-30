const express=require('express');
const router=express.Router();
const passport=require('passport');
const userController=require('../controllers/user');
router.get('/auth/google',passport.authenticate('google', {scope: ['profile', 'email']}));
router.get("/auth/google/callback",
	passport.authenticate("google", {
		successRedirect: "http://localhost:3000/dashboard",
		failureRedirect: "/login/failed",
	})
);
router.get("/login/success", (req, res) => {
    console.log(req.user);
	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Logged In",
			user: req.user,
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});

router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});
router.post('/register',userController.createUser);
router.post('/login',userController.createSession);
module.exports=router;