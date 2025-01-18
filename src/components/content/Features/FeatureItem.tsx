"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

interface FeatureItemProps {
  id: string;
  src: string;
  headline: string;
  paragraph: string;
  right?: boolean; // Optional `right` attribute
}

export default function FeatureItem({
  id,
  src,
  headline,
  paragraph,
  right = false, // Default to `false` if not provided
}: FeatureItemProps) {
  const featureRef = useRef(null); // Ref for the feature container
  const imageRef = useRef(null); // Ref for the image
  const headlineRef = useRef<HTMLHeadingElement>(null); // Ref for the headline
  const paragraphRef = useRef<HTMLParagraphElement>(null); // Ref for the paragraph
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      if (featureRef.current) {
        // General Feature Animation
        const featureTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: featureRef.current,
            start: "top bottom", // Starts before the viewport touches the element
            end: "top 75%", // Ends when the element reaches 75% of the viewport
            scrub: true,
          },
          ease: "power2.inOut",
        });

        featureTimeline.from(featureRef.current, {
          scale: 0.8,
        });

        featureTimeline.from(
          imageRef.current,
          {
            scale: 1.4,
          },
          "<", // Starts at the same time as the feature animation
        );
      }

      // Headline Animation (Separate Trigger)
      if (headlineRef.current) {
        const headlineSplit = new SplitType(headlineRef.current, {
          types: "words,lines",
        });

        gsap.from(headlineRef.current.querySelectorAll(".word"), {
          yPercent: 100,
          stagger: 0.03,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headlineRef.current, // Use the headline as its own trigger
            start: "top 90%", // Starts before the headline enters the viewport
            end: "top 50%", // Ends when the headline reaches the middle of the viewport
            toggleActions: "play none none reverse",
          },
        });
      }

      // Paragraph Animation (Separate Trigger)
      if (paragraphRef.current) {
        const paragraphSplit = new SplitType(paragraphRef.current, {
          types: "words,lines",
        });

        gsap.from(paragraphRef.current.querySelectorAll(".word"), {
          yPercent: 100,
          stagger: 0.03,
          ease: "power4.out",
          scrollTrigger: {
            trigger: paragraphRef.current, // Use the paragraph as its own trigger
            start: "top 90%", // Starts before the paragraph enters the viewport
            end: "top 50%", // Ends when the paragraph reaches the middle of the viewport
            toggleActions: "play none none reverse",
          },
        });
      }
    },
    { scope: featureRef, dependencies: [id] },
  ); // useGSAP for animations

  return (
    <div
      id={id}
      ref={featureRef} // Attach the ref to this element
      className={`h-[75vh] w-full flex items-center ${
        right ? "justify-end" : "justify-start"
      } sticky top-0 overflow-hidden`}
    >
      <div
        className={`w-full h-full absolute ${
          right ? "bg-gradient-to-l" : "bg-gradient-to-r"
        } from-black to-transparent z-[2]`}
      ></div>
      <Image
        src={src}
        fill
        ref={imageRef} // Ref for the image
        sizes="100vw"
        alt={headline}
        className="object-cover"
      />

      <div className="relative z-10 p-12 max-w-xl">
        <h1 ref={headlineRef} className="text-7xl mb-6">
          {headline}
        </h1>
        <p ref={paragraphRef} className="text-xl">
          {paragraph}
        </p>
      </div>
    </div>
  );
}
