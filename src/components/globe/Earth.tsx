"use client";

import { useTexture } from "@react-three/drei";
import type * as THREE from "three";

const GLOBE_RADIUS = 1;

export function Earth({ meshRef }: { meshRef?: React.Ref<THREE.Mesh> }) {
  const [colorMap, emissiveMap] = useTexture([
    "https://unpkg.com/three-globe@2.24.13/example/img/earth-blue-marble.jpg",
    "https://unpkg.com/three-globe@2.24.13/example/img/earth-night.jpg",
  ]);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[GLOBE_RADIUS, 48, 48]} />
      <meshStandardMaterial
        map={colorMap}
        emissiveMap={emissiveMap}
        emissive="#ffd700"
        emissiveIntensity={0.15}
        roughness={0.6}
        metalness={0.1}
      />
    </mesh>
  );
}
