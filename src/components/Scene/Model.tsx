import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // Correctly register ScrollTrigger plugin

useGLTF.preload("/can.glb");

export default function Model() {
  const group = useRef<Group>(null); // Reference to the group containing the model
  const { scene } = useGLTF("/can.glb");

  // GSAP animation setup
  useGSAP(() => {
    if (group.current) {
      // Set initial rotation and position
      group.current.rotation.y = Math.PI / 0.675;
      group.current.position.y = -10;

      // Initial intro animation
      const Introtl = gsap.timeline({});
      Introtl.from(group.current!.rotation, {
        y: Math.PI * 3.5,
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
        "<",
      );

      // Scroll Animation for Section 1
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section-1",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
            markers: true,
          },
          ease: "power2.inOut",
        })
        .to(group.current!.position, {
          x: -10,
        })
        .to(
          group.current!.position,
          {
            y: 0,
          },
          "<",
        )
        .to(
          group.current!.rotation,
          {
            y: Math.PI * 3.4,
          },
          "<",
        );

      // Scroll Animation for Section 2
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section-2",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
            markers: true,
          },
          ease: "power2.inOut",
        })
        .to(group.current!.position, {
          x: 10, // Move further to the left
        })
        .to(
          group.current!.rotation,
          {
            y: Math.PI / 3.4, // Update rotation for the left movement
          },
          "<",
        );
    }
  });

  return (
    <group ref={group}>
      <primitive material="red" object={scene} />
    </group>
  );
}
