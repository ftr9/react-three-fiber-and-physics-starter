import { OrbitControls } from '@react-three/drei';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';

import Ground from './entity/Ground';

function App() {
  return (
    <div className="world">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <Physics>
          <Ground />
        </Physics>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
