import { OrbitControls } from '@react-three/drei';
import { useCurrentLocation } from './hooks/useCurrentLocation';

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
