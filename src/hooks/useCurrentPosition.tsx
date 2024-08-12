import { useState, useEffect } from 'react';

export const useCurrentPosition = () => {
  const [position, setPosition] = useState<GeolocationCoordinates | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => setPosition(position.coords),
      console.error,
      { enableHighAccuracy: true }
    );
  }, []);

  return position;
};
