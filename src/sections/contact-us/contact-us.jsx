import React from "react";

import Form from "./form";
import Fade from "react-reveal/Fade";

import './contact-us.css';

const ContactUs = () => (
    <div className='contact-us'>
        <Fade bottom cascade>
        <div className='contact-info'>
            <div className='title'>Contact</div>
            <div className='address'>
                DAUR COMMUNICATIONS PRIVATE LIMITED <br />
                42-A, GOVIND PURI, UNIVERSITY ROAD, GWALIOR Gwalior MP 474011 IN
            </div>
            <div className='mail'>connect@daurcom.com</div>
            <div className='phone-no'>+91 89897 00732</div>
        </div>
        <div className='form'>
            <Form />
        </div>
        </Fade>
    </div>
);

export default ContactUs;