import { useEffect, useState } from 'react';
import { OrbitControls } from '@react-three/drei';

const URL = 'https://geo.api.vlaanderen.be/geolocation/v4/location';

const useCurrentLocation = () => {
  const [location, setLocation] = useState(null);

  const position = useCurrentPosition();
  const latitude = position?.latitude;
  const longitude = position?.longitude;

  useEffect(() => {
    fetch(`${URL}?latlon=${latitude},${longitude}`)
      .then((response) => response.json())
      .then(setLocation)
      .catch(console.error);
  }, [latitude, longitude]);

  return location;
};

const useCurrentPosition = () => {
  const [position, setPosition] = useState<GeolocationCoordinates | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => setPosition(position.coords),
      console.error,
      { enableHighAccuracy: true },
    );
  }, []);

  return position;
};

export const Neighborhood = () => {
  const location = useCurrentLocation();

  return (
    <>
      <ambientLight />
      <mesh onClick={() => alert(JSON.stringify(location, null, 2))}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <OrbitControls />
    </>
  );
};
