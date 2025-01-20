"use client";

import React, { useRef } from "react";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

interface FeatureItemProps {
  headline: string;
  text: string;
  src: string;
  position?: string;
}

export default function FeatureItem({
  headline,
  text,
  src,
  position = "right",
}: FeatureItemProps) {
  const circleWrapper = useRef(null);
  const circleImage = useRef(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef(null);
  const featureContainer = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      if (headlineRef && paragraphRef && circleWrapper) {
        const headlineSplit = SplitType.create(headlineRef.current!, {
          types: "chars,lines,words",
        });

        // Bestimme den yPercent-Wert basierend auf der Fensterbreite
        const isMobile = window.innerWidth < 768; // Beispiel: Unter 768px ist es mobil
        const yPercentValue = isMobile ? 50 : 100;

        // GSAP Animation
        const tl = gsap.timeline();
        tl.from(circleWrapper.current, {
          scale: 0.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: circleWrapper.current,
            start: "top bottom",
            end: "bottom 50%",
            scrub: true,
          },
        });
        tl.from(
          circleImage.current,
          {
            scale: 3,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: circleWrapper.current,
              start: "top bottom",
              end: "bottom 50%",
              scrub: true,
            },
          },
          "<",
        );
        tl.fromTo(
          textRef.current,
          {
            yPercent: yPercentValue, // Dynamischer Wert
          },
          {
            yPercent: -yPercentValue, // Dynamischer Wert
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: featureContainer.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          },
        );

        tl.from(headlineRef.current!.querySelectorAll(".char"), {
          opacity: 0,
          ease: "power4.out",
          duration: 1.5,
          color: "#00ff01",
          stagger: { each: 0.05, from: "random" },
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top bottom",
            end: "bottom 75%",
            scrub: true,
          },
        });
        tl.from(paragraphRef.current, {
          opacity: 0,
          ease: "power4.out",
          duration: 1.5,
          color: "#00ff01",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top bottom",
            end: "bottom 75%",
            scrub: true,
          },
        });
      }
    },
    { scope: featureContainer, dependencies: [headlineRef] },
  );

  return (
    <div
      ref={featureContainer}
      className="h-screen w-full overflow-hidden relative"
    >
      <div className="w-full h-full absolute flex items-center justify-center">
        {" "}
        <div
          ref={circleWrapper}
          className="w-[150vw] h-[150vw] flex-shrink-0 aspect-square md:w-[45vw] md:h-[45vw]  rounded-full relative overflow-hidden"
        >
          <Image
            ref={circleImage}
            src={src}
            fill
            sizes="50vw"
            alt={headline}
            className="object-cover brightness-75"
          />
        </div>
      </div>

      <div className="w-full h-full grid grid-cols-12 grid-rows-3 relative">
        <div
          ref={textRef}
          className={`${position === "left" ? "md:col-start-1 md:col-end-6 justify-self-end" : "md:col-start-8 md:col-end-13"} row-start-2 col-start-1 col-end-13 self-center max-w-2xl p-4 relative z-20 md:z-0 `}
        >
          <h1
            ref={headlineRef}
            className="text-5xl md:text-7xl font-bebasNeue mb-4"
          >
            {headline}
          </h1>
          <p ref={paragraphRef} className="text-xl md:text-2xl ">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
