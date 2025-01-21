import React, { Suspense } from "react";
import Hero from "@/components/content/hero/Hero";
import Scene from "@/components/Scene/Scene";
import Events from "@/components/content/Events/Events";

const Circle = React.lazy(() => import("@/components/content/circle/Circle"));
const CTASection = React.lazy(
  () => import("@/components/content/CTA/CTASection"),
);
const Features = React.lazy(
  () => import("@/components/content/FeaturesAlt/Features"),
);
const TextSection = React.lazy(
  () => import("@/components/content/Text/TextSection"),
);

export default function Home() {
  return (
    <main>
      {/* <Preloader /> */}
      <Scene />
      <div className="js-wrapperHome">
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <Features />
          <Circle />
          <TextSection />
          <Events />
          <CTASection />
        </Suspense>
      </div>
    </main>
  );
}
