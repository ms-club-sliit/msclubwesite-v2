import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    Club: THREE.Mesh
    ['MS-P4']: THREE.Mesh
    ['MS-P1']: THREE.Mesh
    ['MS-P2']: THREE.Mesh
    ['MS-P3']: THREE.Mesh
    SLIIT: THREE.Mesh
  }
  materials: {
    Gray: THREE.MeshPhongMaterial
    Red: THREE.MeshPhongMaterial
    ['Light Blue']: THREE.MeshPhongMaterial
    ['Light Green']: THREE.MeshPhongMaterial
    Yellow: THREE.MeshPhongMaterial
    Blue: THREE.MeshPhongMaterial
  }
};

const Logo3DModel: React.FC<JSX.IntrinsicElements['group']> = (
  props
) => {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('assets/logo.gltf') as unknown as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Club.geometry}
        material={materials.Gray}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[5.38, 7.87, 5.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['MS-P4'].geometry}
        material={materials.Red}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[5.38, 7.87, 5.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['MS-P1'].geometry}
        material={materials['Light Blue']}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[5.38, 7.87, 5.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['MS-P2'].geometry}
        material={materials['Light Green']}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[5.38, 7.87, 5.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['MS-P3'].geometry}
        material={materials.Yellow}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[5.38, 7.87, 5.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SLIIT.geometry}
        material={materials.Blue}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[5.38, 7.87, 5.38]}
      />
    </group>
  )
};

useGLTF.preload('assets/logo.gltf');

export default Logo3DModel;
