"use client";
import {
  Environment,
  Grid,
  Html,
  Scroll,
  ScrollControls,
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Hero from "../hero/Hero";
import Model from "../Scene/Model";
import { Loader2 } from "lucide-react";
import { relative } from "path";

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
      <directionalLight position={[400, 50, 50]} intensity={0.75} />
      <directionalLight position={[-400, -50, 50]} intensity={0.75} />
      <directionalLight position={[0, 20, -30]} intensity={0.75} />
      <directionalLight
        position={[-80, 200, -100]}
        color={"green"}
        intensity={20}
      />
    </>
  );
}

export default function MainContent() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, -20] }}
      style={{ height: "100vh" }}
    >
      <Environment preset="studio" environmentIntensity={0.2} />
      <ScrollControls pages={5} damping={0.25}>
        <Lights />
        <Scroll>
          <Suspense fallback={<Loader />}>
            <Model /> {/* The 3D model */}
          </Suspense>
        </Scroll>
        <Scroll html style={{ width: "100%", height: "500vh" }}>
          <Hero />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
