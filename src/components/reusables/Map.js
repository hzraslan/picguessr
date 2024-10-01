import React, { useEffect, useState, useContext } from "react";
import {
    APIProvider,
    Map,
    AdvancedMarker
  } from "@vis.gl/react-google-maps";

const MapComp = ({lat, lng, zoom})=>{
    return (
<APIProvider apiKey={"AIzaSyC30uhd0lWKxZ1LiXv4hTPqB-R36UQjwe4"}>
      <Map
        style={{ width: "100%", height: "100vh" }}
        defaultCenter={{ lat: lat || 40.733523, lng: lng || -73.9935114 }}
        defaultZoom={10}
      >
      </Map>
    </APIProvider>
    )
}
export default MapComp;