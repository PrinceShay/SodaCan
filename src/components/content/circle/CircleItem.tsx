import React from "react";
import Image from "next/image";

export default function CircleItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="circleItem relative ">
      <Image
        className="relative z-10 w-[20vw] md:w-[7.5vw] "
        src={`/sorten/${src}.webp`}
        alt={alt}
        width={64}
        height={64}
      />
    </div>
  );
}
