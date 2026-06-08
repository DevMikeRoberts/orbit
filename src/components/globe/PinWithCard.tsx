"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Html, Line } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
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

    const spread = location.spread ?? (index - 1) * 0.7;
    const cardRadius = GLOBE_RADIUS * 1.03;
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
  }, [location.lat, location.lng, index, location.spread]);

  const pinSize = PIN_SIZES[index % PIN_SIZES.length];
  const diamondRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  useFrame(() => {
    if (diamondRef.current) diamondRef.current.lookAt(camera.position);
  });

  const workEntries = location.subEntries.filter(e => e.company);
  const otherEntries = location.subEntries.filter(e => !e.company);
  const companies = [...new Set(workEntries.map(e => e.company!))];
  const logo = workEntries.find(e => e.logo)?.logo;

  return (
    <group>
      <mesh position={pinPos}>
        <sphereGeometry args={[pinSize * 4, 8, 8]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          depthWrite={false}
        />
      </mesh>

      <mesh position={pinPos}>
        <sphereGeometry args={[pinSize * 2, 8, 8]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.25}
          depthWrite={false}
        />
      </mesh>

      <mesh position={pinPos}>
        <sphereGeometry args={[pinSize, 8, 8]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      <Line
        points={points}
        color="#ffffff"
        transparent
        opacity={0.3}
        dashed
        dashSize={0.025}
        gapSize={0.02}
      />

      <mesh
        ref={diamondRef}
        position={cardPos}
        rotation={[0, 0, Math.PI / 4]}
      >
        <circleGeometry args={[0.015, 4]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.6}
          depthWrite={false}
        />
      </mesh>

      <Html position={cardPos} center>
        <div
          className="card"
          style={{ animationDelay: `${cardDelay}s` }}
        >
          <span className="card-city">{location.city}</span>

          {companies.map(company => {
            const entries = workEntries.filter(e => e.company === company);
            const entryLogo = entries.find(e => e.logo)?.logo || logo;
            return (
              <div key={company} className="card-company-section">
                {entryLogo ? (
                  <div className="card-company-row">
                    <img src={entryLogo} alt="" className="card-company-logo" />
                    <span className="card-company-name">{company}</span>
                  </div>
                ) : (
                  <span className="card-company-name">{company}</span>
                )}
                <div className="card-work-entries">
                  <span className="card-work-title">
                    worked as a{" "}
                    <strong>
                      {entries.length === 1
                        ? entries[0].role
                        : entries.length === 2
                          ? `${entries[0].role} and ${entries[1].role}`
                          : entries.map((e, i) =>
                              i === entries.length - 1
                                ? `and ${e.role}`
                                : `${e.role}, `
                            ).join("")}
                    </strong>
                  </span>
                </div>
              </div>
            );
          })}

          {otherEntries.map((entry, i) => (
            <div key={i} className="card-sub-entry">
              <div className="card-sub-header">
                <span className="card-emoji">{entry.emoji}</span>
                <div className="card-body">
                  <p className="card-role">{entry.role}</p>
                  <span className="card-place">{entry.place}</span>
                  <span className="card-date">{entry.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Html>
    </group>
  );
}
