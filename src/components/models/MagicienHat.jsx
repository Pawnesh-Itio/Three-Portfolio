"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function MagicienHat(props) {
  const { nodes, materials } = useGLTF('/models/magicienHat.glb')
  const modelRef = useRef();
    useFrame(()=>{
      modelRef.current.rotation.y+=0.007
    });
  return (
    <group {...props} dispose={null}
    scale = {[3, 3, 3]}
    rotation = {[0.4, -1, 0]}
    position = {[0, 1.2, 0]}
    ref= {modelRef}>
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group
          name="4bb2a6b9b703_White_Magician_Hat_fbx"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}>
          <mesh
            name="high_poly_Material_0_0"
            castShadow
            receiveShadow
            geometry={nodes.high_poly_Material_0_0.geometry}
            material={materials.Material_0}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={204.478}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/magicienHat.glb')
