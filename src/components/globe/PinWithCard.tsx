"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { Html, Line } from "@react-three/drei";
import { latLngToVector3 } from "@/lib/geo";
import type { Location } from "@/data/locations";

const GLOBE_RADIUS = 1;
const PIN_SIZES = [0.002, 0.003, 0.0015, 0.0025, 0.002];

export function PinWithCard({
  location,
  index,
  cardDelay = 0,
}: {
  location: Location;
  index: number;
  cardDelay?: number;
}) {
  const { pinPos, cardPos, points } = useMemo(() => {
    const pin = latLngToVector3(location.lat, location.lng, GLOBE_RADIUS);

    const radial = pin.clone().normalize();
    const up = new THREE.Vector3(0, 1, 0);
    const tangent = new THREE.Vector3().crossVectors(radial, up).normalize();
    if (tangent.length() < 0.001) tangent.set(1, 0, 0);

    const spread = (index - 2) * 0.5;
    const cardRadius = GLOBE_RADIUS * 1.06;
    const baseCard = latLngToVector3(location.lat, location.lng, cardRadius);
    const card = baseCard.clone().add(tangent.clone().multiplyScalar(spread));

    const m = pin
      .clone()
      .lerp(card, 0.5)
      .normalize()
      .multiplyScalar(GLOBE_RADIUS * 1.03);

    const c = new THREE.QuadraticBezierCurve3(pin, m, card);
    const pts = c.getPoints(20);

    return { pinPos: pin, cardPos: card, points: pts };
  }, [location.lat, location.lng, index]);

  const pinSize = PIN_SIZES[index % PIN_SIZES.length];

  return (
    <group>
      <mesh position={pinPos}>
        <sphereGeometry args={[pinSize * 4, 8, 8]} />
        <meshBasicMaterial
          color={location.color}
          transparent
          opacity={0.1}
          depthWrite={false}
        />
      </mesh>

      <mesh position={pinPos}>
        <sphereGeometry args={[pinSize * 2, 8, 8]} />
        <meshBasicMaterial
          color={location.color}
          transparent
          opacity={0.25}
          depthWrite={false}
        />
      </mesh>

      <mesh position={pinPos}>
        <sphereGeometry args={[pinSize, 8, 8]} />
        <meshBasicMaterial color={location.color} />
      </mesh>

      <Line
        points={points}
        color={location.color}
        transparent
        opacity={0.3}
        dashed
        dashSize={0.025}
        gapSize={0.02}
      />

      <Html position={cardPos} center distanceFactor={10}>
        <div
          className="card"
          style={{ animationDelay: `${cardDelay}s` }}
        >
          <span className="card-city">{location.city}</span>
          <div className="card-inner">
            <span className="card-emoji">{location.emoji}</span>
            <div className="card-body">
              <p className="card-role">{location.role}</p>
              <span className="card-place">{location.place}</span>
              <span className="card-date">{location.date}</span>
            </div>
          </div>
        </div>
      </Html>
    </group>
  );
}
