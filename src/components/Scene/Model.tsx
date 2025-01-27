import { Html, useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { Group } from "three";
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
      // Intro animation
      const Introtl = gsap.timeline({ delay: 0.2 });
      Introtl.from(group.current!.rotation, {
        y: Math.PI * 3.5,
        x: Math.PI * 0.8,
        duration: 2,
        ease: "elastic.out(1,0.8)",
      });

      Introtl.from(
        group.current!.position,
        {
          y: 30,
          duration: 4,
          ease: "elastic.out(1,0.8)",
          overwrite: "auto",
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
          y: Math.PI * 5,
          ease: "none",
          overwrite: "auto",
        });

      const CTAanim = gsap.timeline({
        scrollTrigger: {
          trigger: ".cta_section",
          start: "top bottom",
          end: "bottom center",
          scrub: true,
        },
      });

      CTAanim.to(group.current.scale, {
        x: -0.1,
        y: -0.1,
        z: -0.1,
        overwrite: "auto",
      });

      CTAanim.to(
        group.current.rotation,
        {
          x: 0.5,
          overwrite: "auto",
        },
        "<",
      );
    }
  });

  useGSAP(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (group.current) {
        const viewportHeight = window.innerHeight;
        const mouseY = event.clientY;

        if (mouseY < viewportHeight * 0.3) {
          // Mouse is in the top 30% of the viewport, animate the can to look up
          gsap.to(group.current!.rotation, {
            x: Math.PI / 20,
            duration: 1, // Animation duration
          });
        } else if (mouseY > viewportHeight * 0.7) {
          // Mouse is in the bottom 30% of the viewport, animate the can to look down
          gsap.to(group.current!.rotation, {
            x: -Math.PI / 20,
            duration: 1,
          });
        } else {
          // Mouse is in the middle 40%, animate to standard position
          gsap.to(group.current!.rotation, {
            x: 0,
            duration: 1,
          });
        }
      }
    };

    const handleMouseLeave = () => {
      // Mouse leaves viewport, reset to standard position with animation
      if (group.current) {
        gsap.to(group.current!.rotation, {
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <group scale={scale} ref={group}>
      <primitive object={nodes.Top} />
    </group>
  );
}
