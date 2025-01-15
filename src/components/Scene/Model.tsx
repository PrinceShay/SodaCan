import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

useGLTF.preload("/hoodieglb.glb");

export default function Model() {
  const group = useRef<Group>(null); // Reference to the group containing the model
  const { scene } = useGLTF("/can.glb");

  useGSAP(() => {
    if (group.current) {
      group.current.rotation.y = Math.PI / 0.675; // Set the rotation directly
    }

    // Animate the Y rotation of the model using GSAP
    const tl = gsap.timeline({});
    tl.from(group.current!.rotation, {
      y: Math.PI * 3.5,
      x: Math.PI * 0.8,
      duration: 4,
      ease: "elastic.out(1,0.8)",
    });

    tl.from(
      group.current!.position,
      {
        y: -30,

        duration: 4,
        ease: "elastic.out(1,0.8)",
      },
      "<"
    );
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
