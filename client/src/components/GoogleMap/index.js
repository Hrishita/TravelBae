import React, { useState } from "react";
import {
  GoogleMap,
  // InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const MapComponent = () => {
  const [popUp, setpopUp] = useState("");

  const initialPinPosition = [
    {
      label: { color: "black", text: "Location" },
      draggable: true,
      position: {
        lat: 44.62,
        lng: -63.57,
      },
    },
  ];
  const [pin, setPin] = useState(initialPinPosition);

  const pinClick = (marker, index) => {
    setpopUp(index);
    console.log(marker, index);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDrFm6nEA7UkiQLBQ3sCwhIJy-jdqj2NmM">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={{ lat: 44.62, lng: -63.57 }}
        zoom={15}
      >
        {pin.map((pin, index) => (
          <Marker
            key={index}
            position={pin.position}
            label={pin.label}
            draggable={pin.draggable}
            onClick={(event) => pinClick(pin, index)}
          ></Marker>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
