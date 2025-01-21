"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CircleItem from "./CircleItem";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Circle() {
  const itemsContainer = useRef(null);
  const itemsWrapper = useRef<HTMLDivElement>(null);

  const products = [
    { src: "1f3f1d80-2eec-40db-b221-333b24202c8d", alt: "Sugar Free" },
    { src: "64f50b9a-8fac-4048-a28e-188d54613018", alt: "Sugar Free" },
    { src: "226a5dde-6312-4d4c-95c4-d1628d3becee", alt: "Sugar Free" },
    { src: "001726a7-870c-4046-977f-40b93f0fb73e", alt: "Sugar Free" },
    { src: "04170ebf-abdc-4ff8-8858-0e17fcb28e75", alt: "Sugar Free" },
    { src: "52176d49-aa10-4aca-93e5-1ebc87ca666b", alt: "Sugar Free" },
    { src: "330886ac-92a4-4cc6-a690-001506082e7b", alt: "Sugar Free" },
  ];

  const [radius, setRadius] = useState(0);

  useEffect(() => {
    // Dynamically calculate radius with conditional check for mobile
    const calculateRadius = () => {
      if (window.innerWidth <= 768) {
        return ((1 / 2) * window.innerHeight) / 2; // Even smaller radius for mobile
      } else {
        return ((3 / 4) * window.innerHeight) / 2; // Default radius for larger screens
      }
    };

    const calculatedRadius = calculateRadius();
    setRadius(calculatedRadius);

    const handleResize = () => {
      const updatedRadius = calculateRadius();
      setRadius(updatedRadius);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useGSAP(() => {
    gsap.from(".circle-container", {
      rotateZ: 360,
      scrollTrigger: {
        trigger: itemsWrapper.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.from(".circleItem", {
      rotateZ: -360,
      scrollTrigger: {
        trigger: itemsWrapper.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    });

    const items = gsap.timeline();

    if (products) {
      items.from(".circle-container", {
        scale: 0,
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: itemsContainer.current,
          start: "center bottom",
          end: "bottom center",
          scrub: true,
        },
      });

      // Stagger and add delay for better timing control
      items.from(".circleItem", {
        scale: 0,
        rotateZ: 30,
        stagger: 0.5,
        ease: "back.out",
        scrollTrigger: {
          trigger: itemsContainer.current,
          start: "80% bottom",
          end: "bottom 20%",
          scrub: true,
        },
      });

      gsap.to(".circleItem", {
        scale: 0,
        rotateZ: -30,
        stagger: 0.06,
        scrollTrigger: {
          trigger: itemsWrapper.current, // Die gesamte Section als Trigger
          start: () => {
            if (itemsWrapper.current) {
              return `top+=${itemsWrapper.current.offsetHeight - window.innerHeight}px`;
            }
            return "top+=0px"; // Fallback value
          }, // Startet, wenn die letzten 100vh der Section erreicht werden
          end: "bottom top", // Animation endet, wenn die Section vollständig aus dem Viewport heraus ist
          scrub: true,
        },
      });
    }
  });

  return (
    <section ref={itemsWrapper} className="h-[400vh] relative">
      <div
        ref={itemsContainer}
        className="sticky top-0 h-screen overflow-x-clip"
      >
        <div className="circle-container absolute inset-0 flex justify-center items-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                transform: `rotate(${index * (360 / products.length)}deg) translate(${radius}px) rotate(${
                  180 + index * (360 / products.length)
                }deg)`,
              }}
            >
              <CircleItem src={product.src} alt={product.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
