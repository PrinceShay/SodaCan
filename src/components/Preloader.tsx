"use client";
import { useGSAP } from "@gsap/react";
import { Html, useProgress } from "@react-three/drei";
import gsap from "gsap";
import React, { useRef } from "react";

export default function Preloader() {
  const loadingRef = useRef(null);
  const { progress } = useProgress();

  useGSAP(() => {
    const loading = gsap.timeline({ delay: 1 });
    loading.to(loadingRef.current, {
      height: `${progress}%`,
      duration: 1,
    });
  }, [progress]);

  return (
    <div className="top-0 z-[80] w-full h-screen fixed bg-black flex flex-col items-center justify-center">
      <svg
        className="w-24 h-24 "
        fill="#001900"
        version="1.1"
        viewBox="0 0 32 32"
      >
        <path d="M15.2,3.7c-.2-.2-.4-.5-.6-.7,0,0-.2-.1-.3-.1-.3,0-.6,0-.8-.1-.3-.1-.7-.1-1,0-.2,0-.2.2-.1.3.1.3.1.3,0,.5,0,0,0,.2,0,.3s0,.2,0,.3c.1.4,0,.5-.4.6-.5.1-.7.4-.7.9v.9c0,.2,0,.2.2.3.3.1.4.3.3.5-.1.3-.3.6-.4.9-.1.2-.2.4-.2.6,0,0,0,.1,0,.2-.1.2,0,.3,0,.4.2.2.3.4.2.7-.1.3-.1.6,0,.9.1.2.2.5.2.8,0,.4.3.7.5,1,.1.2.2.4.3.6,0,.1,0,.3-.1.4-.1.2-.2.4-.3.5-.1.2-.2.3-.3.5,0,.1-.1.3,0,.4.3.3.2.6.1.9-.1.3,0,.5.2.7.3.3.3.5.2.9-.2.5-.3,1-.5,1.5l-.3,1.1c-.1.5,0,.9,0,1.4,0,.2.2.4.2.7,0,.1,0,.3,0,.4,0,.2-.1.3-.2.4,0,0,0,.1,0,.2.1.2,0,.4,0,.6-.1.3-.1.5,0,.7,0,.2,0,.4,0,.6,0,.3,0,.5,0,.8,0,.7,0,1.3.2,2,0,.2.1.3.2.5.1.2,0,.4-.1.6,0,.1,0,.2,0,.2.1,0,.2.2,0,.3-.1,0-.2.1-.3,0,0,0,0,0,0,0-.3-.2-.3-.4-.2-.7s0-.5-.2-.7c-.3-.3-.3-.7-.4-1.1-.1-.6-.2-1.2-.3-1.8-.1-.5-.2-1-.4-1.5,0-.2-.1-.3-.2-.4-.1-.2-.2-.4,0-.7.1-.1.1-.3,0-.4,0-.1-.2-.2-.2-.3,0-.2,0-.3,0-.5,0-.1,0-.3,0-.4,0-.2,0-.3-.2-.4-.2-.1-.4-.3-.4-.6,0-.1.1-.3.2-.4.2-.4.4-.8.6-1.2.2-.4,0-.8,0-1.1,0-.3,0-.5,0-.7s0-.3-.2-.4c0,0-.2-.1-.2-.2,0-.1,0-.2,0-.3.2-.4.2-.7.1-1.1,0,0,0-.1,0-.2,0-.3,0-.6,0-.9-.1-.5-.2-1-.4-1.5-.1-.4-.3-.7-.5-1-.2-.3-.3-.7-.3-1.1.1-.6.2-1.1.4-1.6,0-.3.2-.5.3-.8,0-.2,0-.3,0-.4,0,0,0-.2,0-.2.2-.4,0-.8,0-1.2,0-.1-.2-.2-.3-.3,0,0,0,0-.1,0-.3-.2-.4-.4-.2-.7.2-.5-.3-1-.7-1-.6-.2-1.3-.3-1.9-.4-.2,0-.5,0-.7,0,0,0-.2,0-.3,0s-.2,0-.3-.1c0,0,0-.2.1-.3.2-.2.4-.4.6-.4.5,0,1-.3,1.4-.5.4-.2.9-.2,1.3-.1.3,0,.5,0,.6-.2.4-.3.8-.5,1.2-.8.2-.1.3-.1.4,0,0,0,0,0,0,.1.1.3.4.4.7.5s.6,0,.9,0,.3,0,.4.2c.2.1.3.1.5,0,.1-.1.3-.2.4-.2s.3-.2.5-.3c.2-.2.4-.3.7-.2.3,0,.5,0,.7-.1.4-.3.7-.4,1.2-.4s.9-.2,1.2-.6c.2-.2.3-.2.5,0,0,0,.2.2.2.2.2.1.3.2.5.3.2,0,.4.1.5.3.2.2.3.3.6.3.3,0,.5.4.4.7,0,0,0,.2,0,.2.1,0,.3,0,.4,0s.3,0,.4.2-.1.3-.2.4c0,0-.2,0-.2,0-.3,0-.5.2-.6.5,0,.3-.3.5-.4.7s-.3.5-.5.7c-.1.2,0,.3,0,.5,0,.1,0,.3.1.4s0,.2,0,.4c-.2.3-.1.4.1.7.1.1.2.2.2.4,0,0,0,.2,0,.3-.3.5-.2.9,0,1.4.1.4.3.7.1,1.1,0,.1-.1.3-.2.4-.2.2-.3.5-.2.8,0,.1,0,.3,0,.4,0,.2-.2.4-.2.7,0,.2,0,.4,0,.5.2.6.4,1.1.5,1.7,0,.3,0,.6,0,.8,0,.2-.1.3-.2.4-.4.3-.6.7-.7,1.2,0,.4-.2.9-.5,1.3s-.3.9-.2,1.3c0,.2.1.4,0,.7,0,0,0,.1,0,.2.2.3.2.5,0,.8-.1.4-.1.7,0,1.1,0,.2,0,.3,0,.4-.2.2-.2.5-.2.7,0,.3,0,.6,0,.9,0,.4-.2.8,0,1.2.1.3.3.6.5.8.3.4.3.4,0,.8,0,.1-.2.2,0,.4,0,.2,0,.4,0,.6-.1.4-.1.8-.3,1.3,0,.3-.1.6,0,.9,0,.4,0,.7-.3,1-.1.2-.3.4-.4.6,0,.1,0,.2-.1.3,0,0-.1.2-.1.2,0,0-.2-.1-.2-.2-.1-.3-.1-.5,0-.8.1-.5.3-.9.3-1.4,0-.8-.2-1.5-.7-2.1-.1-.2-.2-.4,0-.6.3-.4.3-.7.2-1.1,0-.1,0-.3,0-.4,0-.2,0-.3,0-.4,0,0,0-.2,0-.3.1-.2.1-.4,0-.6,0-.2,0-.4,0-.5,0-.2,0-.4,0-.6-.2-.3-.2-.6-.2-.9s0-.7,0-1.1c0-.3-.1-.7-.3-.9-.3-.3-.2-.5-.1-.8.2-.6.5-1.2.7-1.9.1-.3.1-.7.2-1.1,0-.2.1-.3.1-.5,0,0,0,0,0,0,.2-.2.2-.5.2-.8-.1-.4-.2-.8-.3-1.1,0,0,0-.2-.1-.3-.2-.3-.2-.6-.1-.9,0-.2,0-.5,0-.7,0-.3,0-.6.2-.9,0-.3,0-.4-.1-.6-.1-.1-.2-.2-.3-.3-.1-.2-.2-.4,0-.7.2-.4.1-.8,0-1.3-.1-.5-.2-.9,0-1.4.1-.3.2-.5-.3-.8-.2-.1-.3-.3-.4-.6,0-.1,0-.2.1-.3,0,0,.1-.2.1-.3,0-.2,0-.4,0-.6s0-.1,0-.2c.1-.2,0-.3-.1-.4,0,0,0-.1,0-.2.1,0,.2,0,.2-.1h0Z" />
        <path d="M24.7,10.4c0,0,.1.1.2.1.3.2.4.4.3.7,0,.3-.2.6-.3.9-.2.5,0,1,.3,1.4.2.3.4.6.5.9,0,.1,0,.3,0,.4s0,.4,0,.6c0,.3,0,.5-.2.8-.3.4-.4.8-.5,1.2,0,.2,0,.4,0,.6,0,.2.2.3.2.5.2.3.1.6,0,.9-.1.2-.2.4-.3.6-.2.3-.1.5,0,.8,0,.2.2.5.2.7,0,.2,0,.3-.1.4-.2.2-.2.4-.1.6,0,.2,0,.3,0,.5,0,.1,0,.2,0,.3,0,.1,0,.3.1.4,0,.2,0,.3,0,.5-.3.6-.6,1.1-.9,1.7-.1.2-.2.5-.2.7,0,.3,0,.7-.2,1,0,0-.2.2-.3.2,0,0-.2,0-.2-.1,0-.4-.1-.7-.2-1.1-.1-.4,0-.8,0-1.2.2-.6.1-1.2-.3-1.7-.2-.3-.2-.5,0-.7.3-.3.3-.7.4-1,0-.3,0-.6-.2-.9,0,0,0-.3,0-.3.4-.4.4-.9.4-1.5,0-.3,0-.6,0-.9,0-.6.1-1.1.1-1.6,0-.3,0-.6,0-.9,0-.2-.2-.5-.3-.7-.3-.6-.3-1.1,0-1.7.2-.5,0-.8-.2-1.2-.2-.4-.4-.8-.6-1.3,0,0,0-.2,0-.3.1-.2.1-.4,0-.7,0-.1,0-.3.1-.4,0-.2,0-.2,0-.4-.1-.1-.2-.2-.3-.4s-.1-.3,0-.4.3-.2.4-.4.1-.2.2-.3c.1-.3.1-.3,0-.5,0-.1-.1-.2,0-.3,0,0,0-.2.1-.3,0-.1,0-.3,0-.4,0-.2,0-.4,0-.6,0-.4,0-.8,0-1.2s-.2-.4-.4-.5c-.2-.1-.4-.2-.6-.2-.1,0-.2,0-.3,0-.4.2-.7,0-1-.2-.2-.1-.4-.2-.6-.2-.2,0-.4,0-.6,0s-.2-.1,0-.3c.1-.1.3-.3.4-.4l.2-.2c.1-.2.3-.3.5-.3.3,0,.6,0,.9-.2.2-.1.4-.2.6-.2s.3-.1.4-.3c.1-.4.3-.6.7-.7.2,0,.3-.2.5-.3.2-.3.5-.2.6,0,0,.2.2.3.4.2.4-.1.6.1.8.4.1.2.3.3.5.4.2,0,.2.2.2.3h0q-.1.4.2.6c.3.2.4.4.2.7-.1.3,0,.5.1.7.2.2.2.3,0,.4-.3.3-.4.6-.4,1,0,.2-.1.4-.3.5-.1,0-.2.3-.2.4-.1.3-.2.6-.3.9,0,0,0,0,0,.1,0,.3,0,.5-.3.6-.2.2-.4.5-.2.8.1.2,0,.5,0,.7,0,0,0,.1,0,.2,0,.3-.1.5-.2.7h0Z" />
      </svg>
      <div className="absolute top-0 overflow-hidden" ref={loadingRef}>
        <svg
          className="w-24 h-0 "
          fill="#00ff01"
          version="1.1"
          viewBox="0 0 32 32"
        >
          <path d="M15.2,3.7c-.2-.2-.4-.5-.6-.7,0,0-.2-.1-.3-.1-.3,0-.6,0-.8-.1-.3-.1-.7-.1-1,0-.2,0-.2.2-.1.3.1.3.1.3,0,.5,0,0,0,.2,0,.3s0,.2,0,.3c.1.4,0,.5-.4.6-.5.1-.7.4-.7.9v.9c0,.2,0,.2.2.3.3.1.4.3.3.5-.1.3-.3.6-.4.9-.1.2-.2.4-.2.6,0,0,0,.1,0,.2-.1.2,0,.3,0,.4.2.2.3.4.2.7-.1.3-.1.6,0,.9.1.2.2.5.2.8,0,.4.3.7.5,1,.1.2.2.4.3.6,0,.1,0,.3-.1.4-.1.2-.2.4-.3.5-.1.2-.2.3-.3.5,0,.1-.1.3,0,.4.3.3.2.6.1.9-.1.3,0,.5.2.7.3.3.3.5.2.9-.2.5-.3,1-.5,1.5l-.3,1.1c-.1.5,0,.9,0,1.4,0,.2.2.4.2.7,0,.1,0,.3,0,.4,0,.2-.1.3-.2.4,0,0,0,.1,0,.2.1.2,0,.4,0,.6-.1.3-.1.5,0,.7,0,.2,0,.4,0,.6,0,.3,0,.5,0,.8,0,.7,0,1.3.2,2,0,.2.1.3.2.5.1.2,0,.4-.1.6,0,.1,0,.2,0,.2.1,0,.2.2,0,.3-.1,0-.2.1-.3,0,0,0,0,0,0,0-.3-.2-.3-.4-.2-.7s0-.5-.2-.7c-.3-.3-.3-.7-.4-1.1-.1-.6-.2-1.2-.3-1.8-.1-.5-.2-1-.4-1.5,0-.2-.1-.3-.2-.4-.1-.2-.2-.4,0-.7.1-.1.1-.3,0-.4,0-.1-.2-.2-.2-.3,0-.2,0-.3,0-.5,0-.1,0-.3,0-.4,0-.2,0-.3-.2-.4-.2-.1-.4-.3-.4-.6,0-.1.1-.3.2-.4.2-.4.4-.8.6-1.2.2-.4,0-.8,0-1.1,0-.3,0-.5,0-.7s0-.3-.2-.4c0,0-.2-.1-.2-.2,0-.1,0-.2,0-.3.2-.4.2-.7.1-1.1,0,0,0-.1,0-.2,0-.3,0-.6,0-.9-.1-.5-.2-1-.4-1.5-.1-.4-.3-.7-.5-1-.2-.3-.3-.7-.3-1.1.1-.6.2-1.1.4-1.6,0-.3.2-.5.3-.8,0-.2,0-.3,0-.4,0,0,0-.2,0-.2.2-.4,0-.8,0-1.2,0-.1-.2-.2-.3-.3,0,0,0,0-.1,0-.3-.2-.4-.4-.2-.7.2-.5-.3-1-.7-1-.6-.2-1.3-.3-1.9-.4-.2,0-.5,0-.7,0,0,0-.2,0-.3,0s-.2,0-.3-.1c0,0,0-.2.1-.3.2-.2.4-.4.6-.4.5,0,1-.3,1.4-.5.4-.2.9-.2,1.3-.1.3,0,.5,0,.6-.2.4-.3.8-.5,1.2-.8.2-.1.3-.1.4,0,0,0,0,0,0,.1.1.3.4.4.7.5s.6,0,.9,0,.3,0,.4.2c.2.1.3.1.5,0,.1-.1.3-.2.4-.2s.3-.2.5-.3c.2-.2.4-.3.7-.2.3,0,.5,0,.7-.1.4-.3.7-.4,1.2-.4s.9-.2,1.2-.6c.2-.2.3-.2.5,0,0,0,.2.2.2.2.2.1.3.2.5.3.2,0,.4.1.5.3.2.2.3.3.6.3.3,0,.5.4.4.7,0,0,0,.2,0,.2.1,0,.3,0,.4,0s.3,0,.4.2-.1.3-.2.4c0,0-.2,0-.2,0-.3,0-.5.2-.6.5,0,.3-.3.5-.4.7s-.3.5-.5.7c-.1.2,0,.3,0,.5,0,.1,0,.3.1.4s0,.2,0,.4c-.2.3-.1.4.1.7.1.1.2.2.2.4,0,0,0,.2,0,.3-.3.5-.2.9,0,1.4.1.4.3.7.1,1.1,0,.1-.1.3-.2.4-.2.2-.3.5-.2.8,0,.1,0,.3,0,.4,0,.2-.2.4-.2.7,0,.2,0,.4,0,.5.2.6.4,1.1.5,1.7,0,.3,0,.6,0,.8,0,.2-.1.3-.2.4-.4.3-.6.7-.7,1.2,0,.4-.2.9-.5,1.3s-.3.9-.2,1.3c0,.2.1.4,0,.7,0,0,0,.1,0,.2.2.3.2.5,0,.8-.1.4-.1.7,0,1.1,0,.2,0,.3,0,.4-.2.2-.2.5-.2.7,0,.3,0,.6,0,.9,0,.4-.2.8,0,1.2.1.3.3.6.5.8.3.4.3.4,0,.8,0,.1-.2.2,0,.4,0,.2,0,.4,0,.6-.1.4-.1.8-.3,1.3,0,.3-.1.6,0,.9,0,.4,0,.7-.3,1-.1.2-.3.4-.4.6,0,.1,0,.2-.1.3,0,0-.1.2-.1.2,0,0-.2-.1-.2-.2-.1-.3-.1-.5,0-.8.1-.5.3-.9.3-1.4,0-.8-.2-1.5-.7-2.1-.1-.2-.2-.4,0-.6.3-.4.3-.7.2-1.1,0-.1,0-.3,0-.4,0-.2,0-.3,0-.4,0,0,0-.2,0-.3.1-.2.1-.4,0-.6,0-.2,0-.4,0-.5,0-.2,0-.4,0-.6-.2-.3-.2-.6-.2-.9s0-.7,0-1.1c0-.3-.1-.7-.3-.9-.3-.3-.2-.5-.1-.8.2-.6.5-1.2.7-1.9.1-.3.1-.7.2-1.1,0-.2.1-.3.1-.5,0,0,0,0,0,0,.2-.2.2-.5.2-.8-.1-.4-.2-.8-.3-1.1,0,0,0-.2-.1-.3-.2-.3-.2-.6-.1-.9,0-.2,0-.5,0-.7,0-.3,0-.6.2-.9,0-.3,0-.4-.1-.6-.1-.1-.2-.2-.3-.3-.1-.2-.2-.4,0-.7.2-.4.1-.8,0-1.3-.1-.5-.2-.9,0-1.4.1-.3.2-.5-.3-.8-.2-.1-.3-.3-.4-.6,0-.1,0-.2.1-.3,0,0,.1-.2.1-.3,0-.2,0-.4,0-.6s0-.1,0-.2c.1-.2,0-.3-.1-.4,0,0,0-.1,0-.2.1,0,.2,0,.2-.1h0Z" />
          <path d="M24.7,10.4c0,0,.1.1.2.1.3.2.4.4.3.7,0,.3-.2.6-.3.9-.2.5,0,1,.3,1.4.2.3.4.6.5.9,0,.1,0,.3,0,.4s0,.4,0,.6c0,.3,0,.5-.2.8-.3.4-.4.8-.5,1.2,0,.2,0,.4,0,.6,0,.2.2.3.2.5.2.3.1.6,0,.9-.1.2-.2.4-.3.6-.2.3-.1.5,0,.8,0,.2.2.5.2.7,0,.2,0,.3-.1.4-.2.2-.2.4-.1.6,0,.2,0,.3,0,.5,0,.1,0,.2,0,.3,0,.1,0,.3.1.4,0,.2,0,.3,0,.5-.3.6-.6,1.1-.9,1.7-.1.2-.2.5-.2.7,0,.3,0,.7-.2,1,0,0-.2.2-.3.2,0,0-.2,0-.2-.1,0-.4-.1-.7-.2-1.1-.1-.4,0-.8,0-1.2.2-.6.1-1.2-.3-1.7-.2-.3-.2-.5,0-.7.3-.3.3-.7.4-1,0-.3,0-.6-.2-.9,0,0,0-.3,0-.3.4-.4.4-.9.4-1.5,0-.3,0-.6,0-.9,0-.6.1-1.1.1-1.6,0-.3,0-.6,0-.9,0-.2-.2-.5-.3-.7-.3-.6-.3-1.1,0-1.7.2-.5,0-.8-.2-1.2-.2-.4-.4-.8-.6-1.3,0,0,0-.2,0-.3.1-.2.1-.4,0-.7,0-.1,0-.3.1-.4,0-.2,0-.2,0-.4-.1-.1-.2-.2-.3-.4s-.1-.3,0-.4.3-.2.4-.4.1-.2.2-.3c.1-.3.1-.3,0-.5,0-.1-.1-.2,0-.3,0,0,0-.2.1-.3,0-.1,0-.3,0-.4,0-.2,0-.4,0-.6,0-.4,0-.8,0-1.2s-.2-.4-.4-.5c-.2-.1-.4-.2-.6-.2-.1,0-.2,0-.3,0-.4.2-.7,0-1-.2-.2-.1-.4-.2-.6-.2-.2,0-.4,0-.6,0s-.2-.1,0-.3c.1-.1.3-.3.4-.4l.2-.2c.1-.2.3-.3.5-.3.3,0,.6,0,.9-.2.2-.1.4-.2.6-.2s.3-.1.4-.3c.1-.4.3-.6.7-.7.2,0,.3-.2.5-.3.2-.3.5-.2.6,0,0,.2.2.3.4.2.4-.1.6.1.8.4.1.2.3.3.5.4.2,0,.2.2.2.3h0q-.1.4.2.6c.3.2.4.4.2.7-.1.3,0,.5.1.7.2.2.2.3,0,.4-.3.3-.4.6-.4,1,0,.2-.1.4-.3.5-.1,0-.2.3-.2.4-.1.3-.2.6-.3.9,0,0,0,0,0,.1,0,.3,0,.5-.3.6-.2.2-.4.5-.2.8.1.2,0,.5,0,.7,0,0,0,.1,0,.2,0,.3-.1.5-.2.7h0Z" />
        </svg>
      </div>
    </div>
  );
}
