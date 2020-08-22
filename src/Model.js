import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { draco } from 'drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useLoader(GLTFLoader, '/chair.glb', draco('/draco-gltf/'));
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3, 0]}
        receiveShadow>
        <planeBufferGeometry attach='geometry' args={[500, 500]} />
        <meshPhongMaterial attach='material'/>
      </mesh>
      <mesh
        material={nodes.supports.material}
        geometry={nodes.supports.geometry}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.1, 0.1, 0.1]}
      />
      <mesh
        material={materials.wire_002049060}
        geometry={nodes.legs.geometry}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.1, 0.1, 0.1]}
      />
      <mesh
        material={materials.wire_002049060}
        geometry={nodes.back.geometry}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.1, 0.1, 0.1]}
      />
      <mesh
        material={materials.wire_002049060}
        geometry={nodes.base.geometry}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.1, 0.1, 0.1]}
      />
      <mesh
        material={materials.wire_196010216}
        geometry={nodes.cushions.geometry}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.1, 0.1, 0.1]}
      />
    </group>
  );
}
