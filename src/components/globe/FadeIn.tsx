"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function FadeIn({
  delay = 0,
  duration = 0.8,
  children,
}: {
  delay?: number;
  duration?: number;
  children: React.ReactNode;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const startTime = useRef<number | null>(null);

  useFrame(({ clock }) => {
    if (startTime.current === null) startTime.current = clock.getElapsedTime();
    const elapsed = clock.getElapsedTime() - startTime.current - delay;
    const opacity = Math.min(1, Math.max(0, elapsed / duration));

    if (groupRef.current) {
      groupRef.current.traverse((child) => {
        if ("material" in child) {
          const mat = (child as THREE.Mesh).material;
          if (mat) {
            const materials = Array.isArray(mat) ? mat : [mat];
            for (const m of materials) {
              m.transparent = true;
              m.opacity = opacity;
            }
          }
        }
      });
    }
  });

  return <group ref={groupRef}>{children}</group>;
}
