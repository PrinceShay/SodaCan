import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { Group, MeshPhysicalMaterial } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

useGLTF.preload("/can.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { scene, nodes } = useGLTF("/can.glb"); // Load both meshes
  const [scale, setScale] = useState(1.0);

  useEffect(() => {
    // Function to update scale based on device width
    const updateScale = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setScale(isMobile ? 0.8 : 1.0);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useGSAP(() => {
    if (group.current) {
      group.current.rotation.y = Math.PI / 0.675;
      group.current.position.y = -10;

      // Intro animation
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

      gsap
        .timeline({
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        })
        .to(group.current!.rotation, {
          y: "+=10",
          ease: "none",
        });
    }
  });

  return (
    <group scale={scale} ref={group}>
      <primitive object={nodes.Top} />
    </group>
  );
}
