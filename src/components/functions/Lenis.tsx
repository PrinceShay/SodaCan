"use client";
import gsap from "gsap";
import { ReactLenis, LenisRef } from "lenis/react"; // LenisRef importieren
import { useEffect, useRef } from "react";

export function Lenis({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef | null>(null); // Typ als LenisRef

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000); // lenis korrekt verwenden
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
