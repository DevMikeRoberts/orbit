"use client";

import { Suspense, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom, ToneMapping } from "@react-three/postprocessing";

import { Earth } from "./Earth";
import { Atmosphere } from "./Atmosphere";
import { Stars } from "./Stars";
import { Clouds } from "./Clouds";
import { PinWithCard } from "./PinWithCard";
import { HaloRing } from "./HaloRing";
import { LivePin } from "./LivePin";
import { FadeIn } from "./FadeIn";
import { locations } from "@/data/locations";
import { useKonami } from "@/context/KonamiContext";
import type { View } from "@/app/page";

function SceneContent({ view }: { view: View }) {
  const globeGroupRef = useRef<THREE.Group>(null);
  const spinProgress = useRef(0);
  const { activated } = useKonami();
  const didLog = useRef(false);

  useFrame((_, delta) => {
    if (!globeGroupRef.current) return;

    if (activated && spinProgress.current < 1) {
      spinProgress.current = Math.min(1, spinProgress.current + delta * 1.5);
      globeGroupRef.current.rotation.y += delta * 8 * (1 - spinProgress.current);
    }

    if (activated && !didLog.current) {
      didLog.current = true;
      console.log("117");
      console.log("Finish the Fight");
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[0, 0.5, 5]}
        intensity={6}
        color="#ffffff"
      />

      <OrbitControls
        autoRotate={view === "home"}
        autoRotateSpeed={0.15}
        enablePan={false}
        enableZoom={view === "home"}
        enableRotate={view === "home"}
        minPolarAngle={0.1}
        maxPolarAngle={Math.PI * 0.85}
        minDistance={2.0}
        maxDistance={4.0}
      />

      <FadeIn delay={0} duration={0.5}>
        <Stars />
      </FadeIn>

      <group
        ref={globeGroupRef}
        rotation={[Math.PI * 0.13, Math.PI * -0.03, 0]}
      >
        <FadeIn delay={0.3} duration={0.8}>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </FadeIn>

        <Clouds />

        <FadeIn delay={0.7} duration={0.6}>
          <Atmosphere />
        </FadeIn>

        <HaloRing />

        <FadeIn delay={1.2} duration={0.5}>
          {locations.map((location, i) => (
            <PinWithCard
              key={location.id}
              location={location}
              index={i}
              cardDelay={1.8 + i * 0.15}
            />
          ))}
          <LivePin lat={33.749} lng={-84.388} />
        </FadeIn>
      </group>
    </>
  );
}

export function GlobeScene({ view }: { view: View }) {
  return (
    <div className="fixed inset-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [-0.32, 0.63, 2.6], fov: 35 }}
        gl={{ antialias: true }}
      >
        <SceneContent view={view} />
        <EffectComposer multisampling={8}>
          <Bloom
            luminanceThreshold={0.6}
            luminanceSmoothing={0.9}
            intensity={0.35}
            mipmapBlur
          />
          <ToneMapping mode={THREE.ACESFilmicToneMapping} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
