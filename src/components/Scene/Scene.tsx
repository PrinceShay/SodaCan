"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import Model from "./Model";
import { Suspense, useRef } from "react";
import { useProgress, Html, OrbitControls } from "@react-three/drei";
import { Loader2 } from "lucide-react";

// Loader-Komponente für den Ladefortschritt
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center className="text-white">
      <Loader2 color="limeGreen" size={64} className="animate-spin" />
      {/* {progress.toFixed(1)} % */}
    </Html>
  );
}

function Lights() {
  return (
    <>
      <directionalLight position={[400, 50, 50]} intensity={1} />
      <directionalLight position={[-400, -50, 50]} intensity={1} />
      <directionalLight position={[0, 20, -30]} intensity={1} />
      <directionalLight
        position={[-80, 200, -100]}
        color={"green"}
        intensity={50}
      />
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
      camera={{ position: [0, 0, -17] }}
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
