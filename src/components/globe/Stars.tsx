"use client";

import { useState, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useKonami } from "@/context/KonamiContext";

const COUNT = 1000;

function generateStars() {
  const positions = new Float32Array(COUNT * 3);
  const phases = new Float32Array(COUNT);
  const speeds = new Float32Array(COUNT);
  const sizes = new Float32Array(COUNT);
  for (let i = 0; i < COUNT; i++) {
    const r = 20 + Math.random() * 80;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
    phases[i] = Math.random() * Math.PI * 2;
    speeds[i] = 0.5 + Math.random() * 1.5;
    sizes[i] = 0.08 + Math.random() * 0.12;
  }
  return { positions, phases, speeds, sizes };
}

export function Stars() {
  const { activated } = useKonami();
  const [data] = useState(generateStars);
  const { positions, phases, speeds, sizes } = data;

  const ref = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const sizeAttr = ref.current.geometry.attributes.size as THREE.BufferAttribute;
    const array = sizeAttr.array as Float32Array;
    for (let i = 0; i < COUNT; i++) {
      array[i] = 0.08 + 0.12 * (0.5 + 0.5 * Math.sin(t * speeds[i] + phases[i]));
    }
    sizeAttr.needsUpdate = true;

    if (activated) {
      const hue = (t * 0.3) % 1;
      (ref.current.material as THREE.PointsMaterial).color.setHSL(hue, 1, 0.7);
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={COUNT}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
          count={COUNT}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#a0c4ff"
        transparent
        opacity={0.15}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
