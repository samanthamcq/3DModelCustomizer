import React, { Suspense, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'drei';
import './App.scss';
import Chair from './components/Chair';
import PartSelections from './components/PartSelections.js';
import SwatchSelections from './components/SwatchSelections';

export default function App() {
  const defaultTexture = 'white.png';
  const defaultColor = 'white';
  const [activePart, setActivePart] = useState('cushion');
  const [legColor, setLegColor] = useState('white');
  const [cushionColor, setCushionColor] = useState('white');
  const [legTexture, setLegTexture] = useState('wood.jpg');
  const [cushionTexture, setCushionTexture] = useState('fabric_stripe.jpg');

  const updateSelectedPart = (part) => {
    setActivePart(part);
  }

  const updateSelectedColor = (color) => {
    if (activePart === 'cushion') {
      setCushionColor(color);
      setCushionTexture(defaultTexture);
    } else {
      setLegColor(color);
      setLegTexture(defaultTexture);
    }
  }

  const updateSelectedTexture = (texture) => {
    if (activePart === 'cushion') {
      setCushionColor(defaultColor);
      setCushionTexture(texture);
    } else {
      setLegColor(defaultColor);
      setLegTexture(texture);
    }
  }

  return (
    <>
    <Canvas
      colorManagement
      shadowMap
      camera={
        { position: [2, 2, 6],
          fov: 30,
         }}
    >
      <fog attach="fog" args={[0xf1f1f1, 20, 100]} />
      <hemisphereLight skyColor={0xffffff} groundColor={0xffffff} intensity={0.5} position={[0, 10, 0]} />
      <directionalLight
        castShadow
        position={[-8, 12, 8]}
        intensity={0.1}
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      <pointLight position={[-10, 0, -20]} intensity={0.5} />

      <Suspense fallback={null}>
        <group>
          <mesh
            rotation={[-0.5 * Math.PI, 0, 0]}
            position={[0, -1, 0]}
            receiveShadow>
            <planeBufferGeometry attach='geometry' args={[500, 500, 1, 1]} />
            <meshPhongMaterial attach='material' color={0xeeeeee} shininess={0}/>
          </mesh>
          <Chair
            legColor={legColor}
            legTexture={legTexture}
            cushionColor={cushionColor}
            cushionTexture={cushionTexture}
          />
        </group>
      </Suspense>
      <OrbitControls
        enableZoom={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        enableDamping={true}
        enablePan={false}
        dampingFactor={0.1}
        autoRotate={false}
        autoRotateSpeed={0.2}
      />
    </Canvas>

    <PartSelections
      updateSelectedPart={updateSelectedPart}
    />
    <SwatchSelections
      updateSelectedColor={updateSelectedColor}
      updateSelectedTexture={updateSelectedTexture}
    />
    </>
  );
}
