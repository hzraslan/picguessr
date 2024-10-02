import React, { useEffect, useState, useContext } from "react";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin
  } from "@vis.gl/react-google-maps";

const MapComp = ({lat, lng, zoom})=>{
    const [location, setLocation] = useState({ lat: lat || 40.733523, lng: lng || -73.9935114 })
    const handleClick = (e)=>{
      setLocation(e.detail.latLng)
    }
    return (
    <APIProvider apiKey={"AIzaSyC30uhd0lWKxZ1LiXv4hTPqB-R36UQjwe4"}>
        <Map
            onClick={handleClick}
            style={{ width: "100%", height: "100vh" }}
            defaultCenter={location}
            defaultZoom={zoom || 10}
            mapId={"842be9c29e56a405"}
        >
                <AdvancedMarker
            key="default"
            position={location}>
                <Pin background={'red'} glyphColor={'#000'} borderColor={'#000'} />
            </AdvancedMarker>
        </Map>
    </APIProvider>
    )
}
export default MapComp;