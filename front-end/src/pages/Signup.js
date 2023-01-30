import React, { useState } from "react";
import img from "../assets/draw2.webp";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
export default function Signup(props){
    const navigate=useNavigate();
    const [user,setUser]=useState({
        name:"",
        email:"",
        gender:"",
        phone:"",
        password:"",
        confirm_password:"",
        avatar:""
    });
    const takeinput=(e)=>{
        const {name,value,files}=e.target;
        if(files)
        {
            setUser({...user,
                [name]:files[0],
            });
        }
        else{
            setUser({...user,
                [name]:value
            });
        }
    }
    const sendRequest=()=>{
        const {email,password,name,confirm_password,phone,gender,avatar}=user;
        //console.log('email=',email);
        if(email&&password&&name&&confirm_password&&(password===confirm_password)&&password.length>=8&&(!phone||phone.length===10)){
            const formData=new FormData();
            formData.append('name',name);
            formData.append('email',email);
            formData.append('password',password);
            formData.append('confirm_password',confirm_password);
            if(gender)
            formData.append('gender',name);
            if(avatar)
            formData.append('avatar',avatar);
            if(phone)
            formData.append('phone',phone);
            axios.post("http://localhost:8800/swasth/user/register",formData).then((res)=>{
                alert(res.data.message);
                navigate('/login');
            }).catch(err => console.log(err.response));
        }
        else{
            alert("Please fill in the required fields with all constraints satisfied!");
        }
    }
    return (
        <div style={{
            backgroundColor:"white",
            width:"60%",
            height:"32rem",
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
                <h2 style={{textAlign:"center"}}>SIGN UP</h2>
                <ul style={{listStyle:"none"}}>
                    <li style={listStyle}>
                        <label htmlFor="name" style={labelStyle}>Your Name</label>
                        <input type="text" style={inputstyle} onChange={takeinput} name="name" value={user.name} required></input>
                    </li>
                    <li style={listStyle}>
                        <label htmlFor="email" style={labelStyle}>Your Email</label>
                        <input type="email" style={inputstyle}  onChange={takeinput} name="email" value={user.email} required></input>
                    </li>
                    <li style={listStyle}>
                        <label htmlFor="phone" style={labelStyle}>Your Number</label>
                        <input type="text" style={inputstyle} onChange={takeinput} name="phone" value={user.phone}></input>
                    </li>
                    <li style={listStyle}>
                        <label htmlFor="gender" style={labelStyle}>Gender</label>
                        <select name="gender" value={user.gender} onChange={takeinput}>
                            <option value="">Select Gender</option>
                            <option value="LGBTQ">LGBTQ</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </li>
                    <li style={listStyle}>
                        <label htmlFor="password" style={labelStyle}>Password (min 8 chars)</label>
                        <input type="password" style={inputstyle} onChange={takeinput} name="password" value={user.password} required></input>
                    </li>
                    <li style={listStyle}>
                        <label htmlFor="confirm-password" style={labelStyle}>Confirm your Password</label>
                        <input type="password" style={inputstyle}  onChange={takeinput} name="confirm_password" value={user.confirm_password} required></input>
                    </li>
                    <li style={listStyle}>
                        <label htmlFor="avatar" style={labelStyle}>Add Profile Picture</label>
                        <input type="file" style={inputstyle} onChange={takeinput} name="avatar"></input>
                    </li>
                    <button style={{display:"block",margin:"auto",marginTop:"1.5rem",marginBottom:"5px",
                    backgroundColor:"rgb(253,85,90)",padding:"5px",color:"white",
                    borderRadius:"5px",fontWeight:"600",border:"none",}} onClick={sendRequest}>Submit</button>
                </ul>
                <span style={{display:"block",textAlign:"center"}}>Already have an account? <Link to="/login" style={{textDecoration:"none",color:"rgb(253,85,90)"}}>Login</Link></span>
            </div>
        </div>
    );
}
const listStyle={
    marginTop:"1.3rem",
    display:"flex"
}
const labelStyle={
    width:"46%",
    display:"block",
}
const inputstyle={
    width:"50%",
    display:"block",
    backgroundColor:"none",
    border:"none",
    borderBottom:"1px solid black",
};