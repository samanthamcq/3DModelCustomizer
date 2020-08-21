import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'drei';
import './App.scss';
import Model from './Model';

export default function App() {
  console.log('Hi')
  return (
    <Canvas
      colorManagement
      shadowMap
      camera={{ position: [-5, 2, 10], fov: 60 }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />

      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls/>
    </Canvas>
  );
}
