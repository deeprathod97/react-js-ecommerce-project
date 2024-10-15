import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './DeliveryDetails.css'; // Use the same CSS or add styles here

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 28.6139, // Default to New Delhi, India
  lng: 77.209,
};

const DeliveryDetails = () => {
  const [location, setLocation] = useState(center);

  const onMapClick = useCallback((e) => {
    setLocation({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  }, []);

  return (
    <div className="delivery-details">
      <h3>Delivery Details</h3>
      <input type="text" placeholder="Full Name" required />
      <input type="text" placeholder="Address" required />
      <input type="text" placeholder="Pin Code" required />
      <input type="text" placeholder="Mobile Number" required />

      <div className="map-container">
        <h3>Select Delivery Location</h3>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={location}
            zoom={10}
            onClick={onMapClick}
          >
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
      </div>

      <button className="confirm-location-btn">Confirm Location</button>
    </div>
  );
};

export default DeliveryDetails;
