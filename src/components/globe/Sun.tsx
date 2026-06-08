"use client";

import { useMemo } from "react";
import * as THREE from "three";

function createGlowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, "rgba(255, 245, 230, 1)");
  gradient.addColorStop(0.1, "rgba(255, 250, 240, 0.7)");
  gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.2)");
  gradient.addColorStop(0.6, "rgba(200, 220, 255, 0.03)");
  gradient.addColorStop(1, "rgba(200, 220, 255, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(canvas);
}

export function Sun({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const glowMap = useMemo(() => createGlowTexture(), []);

  return (
    <group position={position} scale={scale}>
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#fffaf0" />
      </mesh>
      <sprite scale={[1.5, 1.5, 1]} position={[0, 0, 0]}>
        <spriteMaterial
          map={glowMap}
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </sprite>
      <sprite scale={[0.7, 0.7, 1]} position={[0, 0, 0]}>
        <spriteMaterial
          map={glowMap}
          transparent
          blending={THREE.AdditiveBlending}
          opacity={0.6}
          depthWrite={false}
        />
      </sprite>
    </group>
  );
}
