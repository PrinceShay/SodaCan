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

      // Floating Animation
      gsap.fromTo(
        group.current!.position,
        {
          y: +0.5,
        },
        { y: -0.5, ease: "power1.inOut", duration: 2, repeat: -1, yoyo: true },
      );

      // Continuous Rotation Animation
      gsap.to(group.current!.rotation, {
        y: "+=6.28319", // This equals 2 * Math.PI (a full rotation)
        ease: "none",
        duration: 12, // Adjust speed of the rotation here
        repeat: -1, // Infinite rotation
      });

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
        })
        .to(group.current!.position, {
          x: -10,
          ease: "back.out(2)",
        })
        .to(
          group.current!.position,
          {
            y: 0,
            ease: "back.out(2)",
          },
          "<",
        )
        .to(
          group.current!.rotation,
          {
            y: "+=6.28319", // Ensure smooth transition during scroll
            ease: "none",
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
        })
        .to(group.current!.position, {
          x: 10, // Move further to the left
          ease: "back.out(2)",
        })
        .to(
          group.current!.rotation,
          {
            y: "+=6.28319", // Update rotation smoothly with scroll
            ease: "none",
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
