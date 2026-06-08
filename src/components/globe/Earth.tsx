"use client";

import { useTexture } from "@react-three/drei";

const GLOBE_RADIUS = 1;

export function Earth() {
  const [colorMap, emissiveMap] = useTexture([
    "https://unpkg.com/three-globe@2.24.13/example/img/earth-blue-marble.jpg",
    "https://unpkg.com/three-globe@2.24.13/example/img/earth-night.jpg",
  ]);

  return (
    <mesh>
      <sphereGeometry args={[GLOBE_RADIUS, 48, 48]} />
      <meshStandardMaterial
        map={colorMap}
        emissiveMap={emissiveMap}
        emissive="#b4c7e7"
        emissiveIntensity={0.35}
        roughness={0.9}
        metalness={0}
      />
    </mesh>
  );
}
