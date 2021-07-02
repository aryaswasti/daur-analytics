import React from "react";

import {FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa";


import './footer.css';

const Footer = () => (
    <div className='footer'>
        <div className='company-name'>Daur Analytics</div>
            <div className='socials'>
                <div className='icon'>
                    <FaFacebookF />
                </div>
                <div className='icon'>
                    <FaTwitter />
                </div>
                <div className='icon'>
                    <FaLinkedinIn />
                </div>
            </div>
        <div className='copyright'>©2020 by Daur Communications Pvt. Ltd.</div>
    </div>
);

export default Footer;