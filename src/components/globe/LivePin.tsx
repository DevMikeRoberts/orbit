"use client";

import { useMemo } from "react";
import { Html } from "@react-three/drei";
import { latLngToVector3 } from "@/lib/geo";
import meSrc from "../../../public/me.png";

const GLOBE_RADIUS = 1;

export function LivePin({
  lat,
  lng,
}: {
  lat: number;
  lng: number;
}) {
  const { pos, cardPos } = useMemo(() => {
    const p = latLngToVector3(lat, lng, GLOBE_RADIUS);
    const radial = p.clone().normalize();
    const cp = p
      .clone()
      .add(radial.clone().multiplyScalar(GLOBE_RADIUS * 0.06));
    return { pos: p, cardPos: cp };
  }, [lat, lng]);

  return (
    <group>
      <mesh position={pos}>
        <sphereGeometry args={[0.003, 8, 8]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      <Html position={cardPos} center>
        <div className="live-pin">
          <div className="live-avatar-wrapper">
            <div className="live-ping-ring" />
            <div className="live-ping-ring live-ping-ring--delay" />
            <div
              className="live-avatar"
              style={{ backgroundImage: `url(${meSrc.src})` }}
            />
            <span className="live-pin-emoji">📍</span>
          </div>
          <div className="live-text-bubble">
            <span className="live-subtitle">currently in</span><span className="live-city">&nbsp;Atlanta, Georgia</span>
          </div>
        </div>
      </Html>
    </group>
  );
}
