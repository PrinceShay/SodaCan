"use client";
import React, { useRef } from "react";
import PrimaryButton from "./PrimaryButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function FloatingCTA() {
  const ctaRef = useRef(null);
  let lastScrollY = useRef(0);

  useGSAP(() => {
    const cta = ctaRef.current;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;

      if (scrollingDown) {
        gsap.to(cta, { y: 100, opacity: 0, duration: 0.6, ease: "power4.out" });
      } else {
        gsap.to(cta, { y: 0, opacity: 1, duration: 0.6, ease: "power4.out" });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ctaRef}
      className="fixed z-50 w-full bottom-0 pointer-events-none flex justify-end p-12"
    >
      <PrimaryButton />
    </div>
  );
}
