import React from "react";

import './our-expertise.css';

import techImg from "../../assets/techImg.webp";
import creativeImg from "../../assets/creativeImg.webp";
import networkingImg from "../../assets/networkingImg.webp";

import Fade from "react-reveal/Fade";

const OurExpertise = () => (
    <div className='our-expertise'>
        <h1>Our Expertise</h1>
        <div className='teams'>
            <center>
            <div className='tech-team'>
                <h2>
                    <Fade bottom>
                    Tech Professionals
                    </Fade>
                    </h2>
                <img src={techImg} alt='tech-image' />
                <h3>
                    <Fade bottom>
                    We believe in using state-of-art techniques to make your reach most effective.
                    </Fade>
                    </h3>
                <span>
                    <Fade bottom>
                    We comprise of data scientists, web analysts and AI enthusiasts
                    </Fade>
                    </span>
            </div>
            </center>
            <center>
            <div className='creative-team'>
                <h2>
                    <Fade bottom>
                    Creative Team
                    </Fade>
                    </h2>
                <img src={creativeImg} alt='creative-image' />
                <h3>
                    <Fade bottom>
                    Leverage on our content writers, graphic designers, video editors and critics
                    </Fade>
                    </h3>
                <span>
                    <Fade>
                    These minds build upon craziest ideas and bring to reality every single day.
                    </Fade>
                    </span>
            </div>
            </center>
            <center>
            <div className='networking-team'>
                <h2>
                    <Fade bottom>
                    Networking
                    </Fade>
                    </h2>
                <img src={networkingImg} alt='networking-image' />
                <h3>
                    <Fade bottom>
                    We are resourceful in connecting you to the interest groups relevant to your business ventures.
                    </Fade>
                    </h3>
                <span>
                    <Fade bottom>
                    Being invested in various communications verticals, we work closely with audiences, clientele and business partners coming from different walks of life.
                    </Fade>
                    </span>
            </div>
            </center>
        </div>
    </div>
);

export default OurExpertise;