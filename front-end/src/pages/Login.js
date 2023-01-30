import React, { useState } from "react";
import img from "../assets/draw2.webp";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import googlebtn from '../assets/btn_google_signin_dark_normal_web@2x.png';
import './Login.css';
export default function Login(props){
    const navigate=useNavigate();
    const [user,setUser]=useState({
        email:"",
        password:""
    });
    const takeinput=(e)=>{
        const {name,value}=e.target;
        setUser({...user,
            [name]:value
        });
    }
    const sendRequest=()=>{
        const {email,password}=user;
        console.log('email=',email);
        if(email&&password){
            axios.post("http://localhost:8800/swasth/user/login",user).then((res)=>{
                console.log(res);
                alert(res.data.message);
                navigate('/dashboard');
                props.setAppUser(res.data.user);
            }).catch(err => console.log(err.response));
        }
        else{
            alert("Please fill in the required fields!");
        }
    }
    const googleAuth=async ()=>{
        const appUrl="http://localhost:8800/swasth";
        try{
            window.open(
			`${appUrl}/user/auth/google`,
			"_self"
		);
            const url = `${appUrl}/user/login/success`;
            const {data}=await axios.get(url,{withCredentials:true});
            console.log("DATA=",data);
            alert(`Welcome ${data.user.name}`);
            props.setAppUser(data.user);
        }
        catch(err){
            alert("Failed login");
            console.log("Error=",err);
        }
    }
    return (
        <div style={{
            backgroundColor:"white",
            width:"50%",
            height:"25rem",
            display:"flex",
            justifyContent:"space-between",
            borderRadius:"20px"
        }}>
            <div style={{
                border:"none",
                width:"50%",
                height:"100%",

            }}>
                <img src={img} style={{width:"100%",height:"100%"}} alt="login asset"></img>
            </div>
            <div style={{padding:"10px",margin:"auto"}}>
                <h2 style={{textAlign:"center"}}>LOGIN</h2>
                <input type="email" style={inputstyle} placeholder="Your Email" onChange={takeinput} name="email" value={user.email} required></input>
                <input type="password" style={inputstyle} placeholder="Your Password" onChange={takeinput} name="password" value={user.password} required></input>
                <button style={{display:"block",margin:"auto",marginTop:"1.5rem",marginBottom:"5px",
                backgroundColor:"rgb(253,85,90)",padding:"5px",color:"white",
                borderRadius:"5px",fontWeight:"600",border:"none",}} onClick={sendRequest}>Submit</button>
                <div style={{textAlign:"center"}}>or</div>
                <div id="login-google" onClick={googleAuth}></div>
                <span>Don't have an account? <Link to="/signup" style={{textDecoration:"none",color:"rgb(253,85,90)"}}>Signup</Link></span>
            </div>
        </div>
    );
}
const inputstyle={
    width:"100%",
    display:"block",
    backgroundColor:"none",
    border:"none",
    borderBottom:"1px solid black",
    marginTop:"1rem"
};
