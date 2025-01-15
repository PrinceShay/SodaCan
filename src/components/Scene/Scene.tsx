"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import Model from "./Model";
import { Suspense, useRef } from "react";
import { useProgress, Html, OrbitControls } from "@react-three/drei";

// Loader-Komponente für den Ladefortschritt
function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

function Lights() {
  return (
    <>
      <directionalLight position={[400, 50, 50]} intensity={1} />
      <directionalLight position={[-400, -50, 50]} intensity={1} />
      <directionalLight position={[0, 20, -30]} intensity={1} />
      <ambientLight intensity={1} />
    </>
  );
}

// Hauptszene
export default function Scene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, -20] }}
      className="absolute h-svh"
    >
      <Lights />
      {/* Model und Ladeindikator */}
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>

      {/* Orbit Controls */}
      {/* <OrbitControls
        enableZoom={false}
        autoRotate={true}
        autoRotateSpeed={3}
        enablePan={false}
        dampingFactor={0.05}
        minPolarAngle={Math.PI / 3} // Eingeschränkter Blickwinkel
        maxPolarAngle={Math.PI / 1.5}
      /> */}
    </Canvas>
  );
}
