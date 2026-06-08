"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function Stars() {
  const count = 1000;
  const { positions, phases, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const ph = new Float32Array(count);
    const sp = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 20 + Math.random() * 80;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      ph[i] = Math.random() * Math.PI * 2;
      sp[i] = 0.5 + Math.random() * 1.5;
    }
    return { positions: pos, phases: ph, speeds: sp };
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const sizes = ref.current.geometry.attributes.size as THREE.BufferAttribute;
    const array = sizes.array as Float32Array;
    for (let i = 0; i < count; i++) {
      array[i] = 0.08 + 0.12 * (0.5 + 0.5 * Math.sin(t * speeds[i] + phases[i]));
    }
    sizes.needsUpdate = true;
  });

  const sizeArray = useMemo(() => {
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i++) arr[i] = 0.08 + Math.random() * 0.12;
    return arr;
  }, []);

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizeArray, 1]}
          count={count}
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
