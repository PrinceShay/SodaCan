import React from "react";
import UnleashTheBeast from "./UnleashTheBeast";

export default function Hero() {
  return (
    <section className="flex flex-col items-center relative justify-center min-h-screen">
      <div className="w-full h-full heroGradient absolute"></div>
      <UnleashTheBeast />
    </section>
  );
}
