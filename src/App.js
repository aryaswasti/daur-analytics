import React from "react";

import './App.css';

import analyst from "./assets/analyst.webp";

import Header from "./sections/header/header";
import Main from "./sections/main/main";
import OurExpertise from "./sections/our-expertise/our-expertise";
import ContactUs from "./sections/contact-us/contact-us";
import Map from "./sections/map/map";
import Footer from "./sections/footer/footer";

const location = {
    address: 'DAUR COMMUNICATIONS PRIVATE LIMITED 42-A, GOVIND PURI, UNIVERSITY ROAD, GWALIOR Gwalior MP 474011 INDIA',
    lat: 26.207221,
    lng: 78.200352,
}

class App extends React.Component {
    render() {
        return (
            <div className="homepage">
                <Header />
                <Main />
                <OurExpertise />
                <ContactUs />
                <img src={analyst} alt='analyst' />
                <Map location={location} zoomLevel={17} />
                <Footer />
            </div>
        );
    }
}

export default App;
