import React from "react";

import GoogleMapReact from "google-map-react";

import { LocationPin } from "./map-location-pin";

import './map.css';

const Map = ({location, zoomLevel}) =>(
    <div className='map'>
        <GoogleMapReact
            bootstrapURLKeys={{key: ''}}
            defaultCenter={location}
            defaultZoom={zoomLevel}
        >
            <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.address}
            />
        </GoogleMapReact>
    </div>
);

export default Map;