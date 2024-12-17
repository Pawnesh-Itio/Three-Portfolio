"use client";
import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export function WinterHeroinBack(props) {
  const { nodes, materials } = useGLTF("/models/magicienWinterHeroin.glb");
  const modelRef = useRef();
  const { size } = useThree(); // Get canvas dimensions
  
  const [position, setPosition] = useState([-0.058, -0.1, -1.99]); // Initial position
  const [angle, setAngle] = useState(0); // Track angle for circular movement
  const [scrolling, setScrolling] = useState(false); // To track scroll state
  const [startedScrolling, setStartedScrolling] = useState(false); // Track if scroll has started

  useEffect(() => {
    // Handle mouse scroll
    const handleWheel = (event) => {
      if (scrolling) return; // Prevent multiple scroll events during transition
      setScrolling(true);

      const scrollSpeed = 0.05; // Adjust speed of circular movement
      const direction = event.deltaY > 0 ? 1 : -1; // Scroll direction (down or up)
      const newAngle = angle + direction * scrollSpeed;

      // Update angle for circular movement
      setAngle(newAngle);
      setStartedScrolling(true); // Mark that scrolling has started

      setTimeout(() => {
        setScrolling(false); // Allow further scrolling after a small delay
      }, 50);
    };

    // Add wheel event listener for scrolling
    window.addEventListener("wheel", handleWheel);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [scrolling, angle]); // Re-run effect when scrolling or angle changes

  useFrame(() => {
    if (modelRef.current) {
      // Calculate circular movement based on the current angle
      const radius = 2; // Radius of the circle
      const x = radius * Math.cos(angle); // X position
      const z = radius * Math.sin(angle); // Z position

      // After scrolling has started, update position continuously
      if (startedScrolling) {
        modelRef.current.position.x = x;
        modelRef.current.position.z = z;
        console.log(x,z);
      } else {
        // Use initial position if scrolling hasn't started
        modelRef.current.position.set(position[0], position[1], position[2]);
      }
    }
  });

  return (
    <group {...props} dispose={null} ref={modelRef} position={position} scale={[0.75, 0.75, 0.75]}>
      <mesh name="Object_3" castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.defaultMat_14} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh name="Object_7" castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials.defaultMat_13} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh name="Object_9" castShadow receiveShadow geometry={nodes.Object_9.geometry} material={materials.defaultMat_12} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh name="Object_11" castShadow receiveShadow geometry={nodes.Object_11.geometry} material={materials.defaultMat_11} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh name="Object_13" castShadow receiveShadow geometry={nodes.Object_13.geometry} material={materials.defaultMat_10} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh name="Object_15" castShadow receiveShadow geometry={nodes.Object_15.geometry} material={materials.defaultMat_9} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh name="Object_17" castShadow receiveShadow geometry={nodes.Object_17.geometry} material={materials.defaultMat_8} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh name="Object_19" castShadow receiveShadow geometry={nodes.Object_19.geometry} material={materials.defaultMat_7} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh name="Object_23" castShadow receiveShadow geometry={nodes.Object_23.geometry} material={materials.defaultMat_5} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh name="Object_30" castShadow receiveShadow geometry={nodes.Object_30.geometry} material={materials.defaultMat_2} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh name="Object_32" castShadow receiveShadow geometry={nodes.Object_32.geometry} material={materials.defaultMat_1} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh name="Object_34" castShadow receiveShadow geometry={nodes.Object_34.geometry} material={materials.defaultMat_0} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh name="Object_37" castShadow receiveShadow geometry={nodes.Object_37.geometry} material={materials.defaultMat} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  );
}

useGLTF.preload('/models/magicienWinterHeroin.glb');
