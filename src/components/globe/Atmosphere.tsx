"use client";

import { useRef } from "react";
import * as THREE from "three";

const GLOBE_RADIUS = 1;

export function Atmosphere() {
  const ref = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={ref} scale={[1.015, 1.015, 1.015]}>
      <sphereGeometry args={[GLOBE_RADIUS, 48, 48]} />
      <shaderMaterial
        vertexShader={`
          varying vec3 vNormal;
          varying vec3 vPositionW;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            vPositionW = worldPos.xyz;
            gl_Position = projectionMatrix * viewMatrix * worldPos;
          }
        `}
        fragmentShader={`
          varying vec3 vNormal;
          varying vec3 vPositionW;
          void main() {
            vec3 viewDir = normalize(cameraPosition - vPositionW);
            float intensity = pow(0.72 - dot(vNormal, viewDir), 3.0);
            gl_FragColor = vec4(0.35, 0.6, 1.0, intensity * 0.4);
          }
        `}
        transparent
        side={THREE.FrontSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}
