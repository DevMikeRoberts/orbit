"use client";

import { Suspense, useRef, useEffect } from "react";
import type * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Earth } from "./Earth";
import { Atmosphere } from "./Atmosphere";
import { Stars } from "./Stars";
import { Clouds } from "./Clouds";
import { PinWithCard } from "./PinWithCard";
import { FadeIn } from "./FadeIn";
import { locations } from "@/data/locations";
import type { View } from "@/app/page";

function CameraController({ view }: { view: View }) {
  const { controls } = useThree();
  const prevView = useRef(view);

  useEffect(() => {
    if (prevView.current === view) return;
    prevView.current = view;

    const c = controls as { autoRotate: boolean } | null;
    if (c) c.autoRotate = view === "home";
  }, [view, controls]);

  return null;
}

export function GlobeScene({ view }: { view: View }) {
  const globeRef = useRef<THREE.Mesh>(null);

  return (
    <div className="fixed inset-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [-0.32, 0.63, 2.30], fov: 35 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={1.0} />
        <directionalLight
          position={[0, 0.5, 5]}
          intensity={12.0}
          color="#ffffff"
        />

        <OrbitControls
          autoRotate={view === "home"}
          autoRotateSpeed={0.08}
          enablePan={false}
          enableZoom={view === "home"}
          enableRotate={view === "home"}
          minPolarAngle={0.1}
          maxPolarAngle={Math.PI * 0.85}
          minDistance={1.5}
          maxDistance={4.0}
        />

        <CameraController view={view} />

        <FadeIn delay={0} duration={0.5}>
          <Stars />
        </FadeIn>

        <group rotation={[Math.PI * 0.13, Math.PI * -0.03, 0]}>
          <FadeIn delay={0.3} duration={0.8}>
            <Suspense fallback={null}>
              <Earth meshRef={globeRef} />
            </Suspense>
          </FadeIn>

          <Clouds />

          <FadeIn delay={0.7} duration={0.6}>
            <Atmosphere />
          </FadeIn>

          <FadeIn delay={1.2} duration={0.5}>
            {locations.map((location, i) => (
              <PinWithCard
                key={location.id}
                location={location}
                index={i}
                cardDelay={1.8 + i * 0.15}
              />
            ))}
          </FadeIn>
        </group>
      </Canvas>
    </div>
  );
}
