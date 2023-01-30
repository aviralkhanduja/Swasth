import React from "react";
import { Link,NavLink } from "react-router-dom";
import Logo from "./yoga.png";
import './Navbar.css';
const opts_list=["News","Poses","Help","About"];
let activeClassName="active_class";
export default class Navbar extends React.Component{
    render(){
        return (
            <nav id="app-nav">
                <Link to='/' style={{textDecoration:"none"}}>
                    <div id="nav-left">
                        <h3>Swasth</h3>&nbsp;
                        <img src={Logo} alt="Logo"/>
                    </div>
                </Link>
                <div id="nav-right">
                    {opts_list.map((opt,index)=>{
                        return(
                            <NavLink to={'/'+opt} className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                          } key={index}>
                                    {opt}
                            </NavLink>
                        );
                    })}
                </div>
            </nav>
        );
    }
}