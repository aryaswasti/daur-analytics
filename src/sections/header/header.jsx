import React from "react";

import logo from "../../assets/logo.webp";
import profile from "../../assets/profile.png";

import './header.css';

const Header = () => (
    <div className='header'>
        <div className='logo'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='company-name'>
            <h2>Daur Analytics</h2>
            <span>Let numbers speak!</span>
            <hr />
        </div>
        <div className='options'>
            <span>Home</span>
            <span>Blog</span>
            <span>About</span>
            <span>Contact</span>
        </div>
        <div className='log-in'>
            <img src={profile} alt={profile} height="22px" width="22px" className='profile-icon'/>
             Log In
        </div>
    </div>
);

export default Header;