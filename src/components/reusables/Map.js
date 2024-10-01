import React, { useEffect, useState, useContext } from "react";
import GoogleMapReact from 'google-map-react';

const Map = ({lat, lng, zoom})=>{
    return (
        <div style={{ height: '100vh', width: '100%' }}>
                  <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={{
            lat: lat || 40.7458449,
            lng: lng || -73.9884136
        }}
        defaultZoom={zoom || 8}
      ></GoogleMapReact>
        </div>
    )
}
export default Map;