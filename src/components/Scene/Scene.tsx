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
  Environment,
} from "@react-three/drei";
import Loader from "../ui/Loader";

// Loader-Komponente für den Ladefortschritt

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
    <div className="fixed w-full h-screen z-20 !pointer-events-none">
      <Canvas
        gl={{ antialias: true }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, -25], fov: 60 }}
      >
        <Environment preset="warehouse" />
        <Lights />
        {/* Model und Ladeindikator */}
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}
