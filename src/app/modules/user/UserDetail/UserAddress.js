import React, { useEffect, useState } from 'react';

const UserAddress = ({ location }) => {
  const geolocationUrl = "https://maps.googleapis.com/maps/api/geocode/json";
  const [address, setAddress] = useState();
  const [placeId, setPlaceId] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    if (location) {
      const url = `${geolocationUrl}?address=${location.street}+${location.city}+${location.state}+${location.country}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data) {
            if (data.results.length > 0) {
              const results = data.results[0];

              setAddress(results.geometry.location);
              setPlaceId(results.placeId);
              setMessage(undefined);
            } else {
              setMessage("Adres bulunamadı.");
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [location]);

  return (
    <div className="mt-3">
      <div className="google-map-code">
        <iframe title="Google map"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}
                &q=${placeId}
                &center=${address ? address.lat : -1.2884},${address ? address.lng : 36.8233}
                &zoom=14`}
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
        />
        {message && <div className="text text-danger">{message}</div>}
      </div>
    </div>
  );
};

export default UserAddress;