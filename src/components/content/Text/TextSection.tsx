"use client";

import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TextSection() {
  const l1 = useRef(null);
  const l2 = useRef(null);
  const l3 = useRef(null);
  const textSectionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const lines = gsap.timeline({
      scrollTrigger: {
        trigger: textSectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    lines.fromTo(
      l1.current,
      {
        xPercent: -25,
      },
      { xPercent: 25 },
    );

    lines.fromTo(
      l2.current,
      {
        xPercent: 25,
      },
      { xPercent: -25 },
      "<",
    );
    lines.fromTo(
      l3.current,
      {
        xPercent: -25,
      },
      { xPercent: 25 },
      "<",
    );
  });

  return (
    <section className="flex flex-col w-full h-auto md:h-screen justify-between items-center flex-nowrap  overflow-hidden ">
      <div
        ref={l1}
        className="flex flex-row gap-16 flex-nowrap font-bebasNeue text-[18vw] md:text-[18vw] shrink-0 leading-none"
      >
        <p>Nachtaktive</p>
        <p>Nachtaktive</p>
        <p>Nachtaktive</p>
      </div>
      <div
        ref={l2}
        className="flex relative z-30 flex-row gap-16 flex-nowrap font-bebasNeue text-[18vw] md:text-[18vw] shrink-0 leading-none"
      >
        <p>Champions</p>
        <p>Champions</p>
        <p>Champions</p>
      </div>
      <div
        ref={l3}
        className="flex flex-row gap-16 flex-nowrap font-bebasNeue text-[18vw] md:text-[18vw] shrink-0 leading-none"
      >
        <p>Adrenalin</p>
        <p>Adrenalin</p>
        <p>Adrenalin</p>
      </div>
    </section>
  );
}
