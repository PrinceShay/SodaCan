import { useCubeTexture, useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { Group } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

useGLTF.preload("/hoodieglb.glb");

export default function Model() {
  const group = useRef<Group>(null); // Reference to the group containing the model
  const { scene } = useGLTF("/can.glb");

  useGSAP(() => {
    // Animate the Y rotation of the model using GSAP
    gsap.to(group.current!.rotation, {
      y: Math.PI * 2, // Full 360-degree rotation
      duration: 10, // Duration of one rotation (in seconds)
      repeat: -1, // Infinite repetitions
      ease: "none", // Linear easing for smooth continuous rotation
    });
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
