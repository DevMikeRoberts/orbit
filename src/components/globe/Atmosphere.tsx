"use client";

import { useRef } from "react";
import * as THREE from "three";

const GLOBE_RADIUS = 1;
const LIGHT_POS = new THREE.Vector3(0, 0.5, 5);

export function Atmosphere() {
  const ref = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={ref} scale={[1.015, 1.015, 1.015]}>
      <sphereGeometry args={[GLOBE_RADIUS, 48, 48]} />
      <shaderMaterial
        uniforms={{ lightPos: { value: LIGHT_POS } }}
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
          uniform vec3 lightPos;
          varying vec3 vNormal;
          varying vec3 vPositionW;
          void main() {
            vec3 viewDir = normalize(cameraPosition - vPositionW);
            vec3 lightDir = normalize(lightPos - vPositionW);
            float rim = 0.85 - max(0.0, dot(vNormal, viewDir));
            float light = max(0.0, dot(vNormal, lightDir));
            float intensity = pow(max(0.0, rim), 4.0) * light;
            gl_FragColor = vec4(0.35, 0.6, 1.0, intensity * 0.3);
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
