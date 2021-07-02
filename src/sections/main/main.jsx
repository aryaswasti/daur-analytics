import React from "react";

import contentImage from "../../assets/content-image.webp";
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';

import './main.css';

const Main = () => (
    <div className='main'>
        <div className='content-text'>
            <Slide left>
            <h2>Daur Analytics</h2>
            <p>Receive today elaborate actionable plans for your Marketing Campaigns</p>
            </Slide>
            <Fade left>
            <div className="content-list-items">
            <li><Fade left>We invite quality traffic to your website and web app, multiplying the returns on your marketing expenditures.</Fade></li>
            <li><Fade left>We help you understand how costumers engage with your business and segment your audience.</Fade></li>
            <li><Fade left>You get detailed reports outlining all progress and revamp measures with our insights into data collection, generating new leads and retaining users for a long run.</Fade></li>
            </div>
            </Fade>
            <button>
                <Fade>
                    Contact
                </Fade>
                </button>
        </div>
        <div className='content-image'>
            <img src={contentImage} alt='content-image'/>
        </div>
    </div>
);

export default Main;