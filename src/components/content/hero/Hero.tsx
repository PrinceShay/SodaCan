import React from "react";
import UnleashTheBeast from "./UnleashTheBeast";

export default function Hero() {
  return (
    <section className="flex flex-col items-center relative justify-center min-h-screen">
      <div className="w-full h-full heroGradient absolute"></div>
      <div className="absolute w-3/4 aspect-square rounded-full blur-[1024px] bg-green-500 bottom-[-50vw] opacity-70"></div>
      <UnleashTheBeast />
    </section>
  );
}
