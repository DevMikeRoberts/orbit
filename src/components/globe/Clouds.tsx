"use client";

import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Clouds() {
  const ref = useRef<THREE.Mesh>(null);
  const startTime = useRef<number | null>(null);
  const cloudMap = useTexture(
    "https://threejs.org/examples/textures/planets/earth_clouds_1024.png",
  );

  useFrame(({ camera, clock }, delta) => {
    if (!ref.current) return;
    const mat = ref.current.material as THREE.MeshBasicMaterial;

    if (startTime.current === null) startTime.current = clock.getElapsedTime();
    const fadeIn = THREE.MathUtils.clamp(
      (clock.getElapsedTime() - startTime.current) / 0.6,
      0,
      1,
    );

    ref.current.rotation.y += delta * 0.003;
    const dist = camera.position.length();
    const distFade = THREE.MathUtils.clamp((dist - 1.5) / 1.0, 0, 1);
    mat.opacity = fadeIn * distFade * 0.2;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.008, 48, 48]} />
      <meshBasicMaterial
        map={cloudMap}
        transparent
        opacity={0}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}
