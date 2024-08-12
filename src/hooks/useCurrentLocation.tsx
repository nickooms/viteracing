import { useState, useEffect } from 'react';
import { useCurrentPosition } from './useCurrentPosition';

export const useCurrentLocation = ({
  url = 'https://geo.api.vlaanderen.be/geolocation/v4/location',
} = {}) => {
  const [location, setLocation] = useState(null);

  const position = useCurrentPosition();
  const latitude = position?.latitude;
  const longitude = position?.longitude;

  useEffect(() => {
    fetch(`${url}?latlon=${latitude},${longitude}`)
      .then((response) => response.json())
      .then(setLocation)
      .catch(console.error);
  }, [url, latitude, longitude]);

  return location;
};
