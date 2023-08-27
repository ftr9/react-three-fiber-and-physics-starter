import * as THREE from 'three';
import { useBox } from '@react-three/cannon';

const Ground = () => {
  const [ref] = useBox(() => ({
    args: [5, 5, 5],
    rotation: [-Math.PI / 2, 0, 0],
  }));

  return (
    //@ts-ignore
    <mesh ref={ref}>
      <meshBasicMaterial color={'#f8f9fa'} side={THREE.DoubleSide} />
      <planeGeometry args={[10, 10, 100, 100]} />
    </mesh>
  );
};

export default Ground;
