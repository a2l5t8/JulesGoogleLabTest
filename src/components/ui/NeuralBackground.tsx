"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Connections = () => {
  const count = 40;
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push([
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
      ]);
    }
    return pos;
  }, []);

  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.6} />
        </mesh>
      ))}
      {positions.slice(0, 15).map((pos, i) => {
        const nextPos = positions[(i + 1) % count];
        const points = [new THREE.Vector3(...pos), new THREE.Vector3(...nextPos)];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

        return (
          <primitive key={`line-${i}`} object={new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: '#8b5cf6', transparent: true, opacity: 0.2 }))} />
        );
      })}
    </group>
  );
};

export const NeuralBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <color attach="background" args={['#020617']} />
        <ambientLight intensity={0.5} />
        <Connections />
      </Canvas>
    </div>
  );
};
