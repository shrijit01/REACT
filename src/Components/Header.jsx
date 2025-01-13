import React, { useState } from 'react';

function Header({ user }) {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,   
            longitude: position.coords.longitude,
          });
          setError(null);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Location is not accessible in your browser');
    }
  };

  return (
    <div className="bg-indigo-500 px-5 py-5 flex items-center justify-between w-screen">
      <div className="left">
        <h1 className="text-white text-bold text-xl">{user}</h1>
        {location.latitude && location.longitude ? (
          <p>
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </p>
        ) : (
          <p>{error ? error : 'Location not available'}</p>
        )}
      </div>
      <div className="left flex items-center justify-between w-2/4">
        <a className="text-white text-bold text-xl">About Us</a>
        <a className="text-white text-bold text-xl">Services</a>
        <a className="text-white text-bold text-xl">Support</a>
        <a className="text-white text-bold text-xl" onClick={handleGetLocation}>Locate Us</a>
        <a className="text-white text-bold text-xl">Login</a>
        <a className="text-white text-bold text-xl">Signup</a>
      </div>
    </div>
  );
}

export default Header;