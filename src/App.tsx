// import { CardDemo } from './CardTest';
import { Canvas } from '@react-three/fiber';
// import { Fullscreen } from '@react-three/uikit';
import './App.css';
import { Neighborhood } from './Neighborhood';

function App() {
  return (
    <Canvas>
      <Neighborhood />
      {/* <Fullscreen>
        <CardDemo />
      </Fullscreen> */}
    </Canvas>
  );
}

export default App;
