"use client";
import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export function WinterHeroin(props) {
  const { nodes, materials } = useGLTF("/models/magicienWinterHeroin.glb");
  const modelRef = useRef();
  const { size } = useThree(); // Get canvas dimensions
  const [rotation, setRotation] = useState([0, 0, 0]);

  useEffect(() => {
    // Define the handleMouseMove function inside the useEffect hook
    const handleMouseMove = (event) => {
      const x = (event.clientX / size.width) * 2 - 1; // Normalized X
      const y = (event.clientY / size.height) * 2 - 1; // Normalized Y
      setRotation([y * Math.PI * 0.1, -x * Math.PI * 0.5, 0]); // Adjust sensitivity
    };

    // Add mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size]); // Dependencies include size

  useFrame(() => {
    if (modelRef.current) {
      // Apply rotation based on mouse
      modelRef.current.rotation.x = rotation[0];
      modelRef.current.rotation.y = rotation[1];
      modelRef.current.rotation.z = rotation[2];

      // Floating animation
      modelRef.current.position.y = 0.2 + Math.sin(performance.now() / 1000) * 0.15;
    }
  });

  return (
    <group {...props}       
    dispose={null}
    ref={modelRef}
    position={[0, -1.5, 0]}
    scale={[0.75, 0.75, 0.75]}>
      <mesh
        name="Object_3"
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials.defaultMat_14}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Object_7"
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.defaultMat_13}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Object_9"
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.defaultMat_12}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Object_11"
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.defaultMat_11}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Object_13"
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.defaultMat_10}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Object_15"
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials.defaultMat_9}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Object_17"
        castShadow
        receiveShadow
        geometry={nodes.Object_17.geometry}
        material={materials.defaultMat_8}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Object_19"
        castShadow
        receiveShadow
        geometry={nodes.Object_19.geometry}
        material={materials.defaultMat_7}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      {/* Heart shapes
      <mesh
        name="Object_21"
        castShadow
        receiveShadow
        geometry={nodes.Object_21.geometry}
        material={materials.defaultMat_6}
        rotation={[-Math.PI / 2, 0, 0]}
      /> */}
      <mesh
        name="Object_23"
        castShadow
        receiveShadow
        geometry={nodes.Object_23.geometry}
        material={materials.defaultMat_5}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      {/* Floating Platform */}
      <mesh
        name="Object_25"
        castShadow
        receiveShadow
        geometry={nodes.Object_25.geometry}
        material={materials.defaultMat_4}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      {/* Floating Platform Print */}
       <mesh
        name="Object_27"
        castShadow
        receiveShadow
        geometry={nodes.Object_27.geometry}
        material={materials.defaultMat_3}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Object_30"
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials.defaultMat_2}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Object_32"
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials.defaultMat_1}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Object_34"
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials.defaultMat_0}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Object_37"
        castShadow
        receiveShadow
        geometry={nodes.Object_37.geometry}
        material={materials.defaultMat}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/magicienWinterHeroin.glb')