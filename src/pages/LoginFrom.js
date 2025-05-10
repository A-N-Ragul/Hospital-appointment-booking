import React from 'react';
import './LoginFrom.css';
import '../styles/Homenew.css';
import { RiAdminFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
const LoginForm = () =>{
    
    return(
        <>
        <div className='hos'>
      <nav className="section__container nav__container">
          <div className="nav__logo">Health<span>Care</span></div></nav>
        <div className='add'>
    
                    <Link to="/Admin" className='demdem'><RiAdminFill /> Admin</Link>
                </div>
          
        <div className='back1'>
        <div className="header-links1">
            
        </div>
       <div className='front'>
        <div className="back">
       <header className="header">
      
       </header>
        </div>
       <div>
       <div className='front2'>
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                <input type="text" placeholder='Username' required/>
                <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className='icon'/>

                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="a">Forget password?</a>
                    </div>
                    <Link to={"/home"}><button type="submit">Login</button></Link>
                    <div className="register-link">
                        <p>Don't have an account? <Link to={"/Reg"}>Register</Link></p>
                    </div>
            </form>
        </div>
        </div>
        </div>
       </div>
       </div>
       </div>
       </>
    );
};
export default LoginForm;