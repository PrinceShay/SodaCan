"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import Model from "./Model";
import { Suspense, useRef } from "react";
import {
  useProgress,
  Html,
  OrbitControls,
  Grid,
  Backdrop,
} from "@react-three/drei";
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
    <div className="fixed w-full h-screen z-20">
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, -20] ,fov:60}}
    >
      <Lights />
      {/* Model und Ladeindikator */}
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
    </Canvas>
    </div>
  );
}
