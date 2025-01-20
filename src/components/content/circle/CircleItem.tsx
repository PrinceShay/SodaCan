import React from "react";
import Image from "next/image";

export default function CircleItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="circleItem relative ">
      <Image
        className="relative z-10 "
        src={`/sorten/${src}.webp`}
        alt={alt}
        width={128}
        height={128}
      />
      <Image
        className="absolute top-0 blur-2xl z-0 opacity-60"
        src={`/sorten/${src}.webp`}
        alt={alt}
        width={128}
        height={128}
      />
    </div>
  );
}
