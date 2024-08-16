import { OrbitControls } from '@react-three/drei';
import { useCurrentLocation } from './hooks/useCurrentLocation';
// import { WRI } from './wfs/WRI';

export const Neighborhood = () => {
  const location = useCurrentLocation();
  console.log(location);
  return (
    <>
      <ambientLight />
      {/* {location && <WRI bbox={location.bbox} />} */}
      <mesh onClick={() => alert(JSON.stringify(location, null, 2))}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <OrbitControls />
    </>
  );
};
