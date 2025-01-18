import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { Group } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

useGLTF.preload("/can.glb");

export default function Model() {
  const group = useRef<Group>(null); // Reference to the group containing the model
  const { scene } = useGLTF("/can.glb");

  useGSAP(() => {
    if (group.current) {
      // Set initial rotation based on scroll or fixed value
      group.current.rotation.y = Math.PI / 0.675; // Set the initial rotation directly
      group.current.position.y = -10;
    }

    // GSAP animation timeline for the initial setup
    const Introtl = gsap.timeline({});
    Introtl.from(group.current!.rotation, {
      y: Math.PI * 3.5, // starting rotation
      x: Math.PI * 0.8,
      duration: 4,
      ease: "elastic.out(1,0.8)",
    });

    Introtl.from(
      group.current!.position,
      {
        y: -30,
        duration: 4,
        ease: "elastic.out(1,0.8)",
      },
      "<"
    );

    const ScrollTL = gsap.timeline();
    ScrollTL.from(group.current!.position, {
      x: 10,
      scrollTrigger: {
        trigger: ".js-wrapperHome",
        start: "bottom top",
        end: "top bottom",
        markers: true,
        scrub: true,
      },
    });
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
