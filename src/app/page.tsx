import Circle from "@/components/content/circle/Circle";
import Features from "@/components/content/FeaturesAlt/Features";
import Hero from "@/components/hero/Hero";
import LogoGlow from "@/components/LogoGlow";
import Scene from "@/components/Scene/Scene";
import { Scroll } from "@react-three/drei";

export default function Home() {
  return (
    <main>
      <Scene />
      <div className="js-wrapperHome">
        <Hero />
        <Features />
        <Circle />
      </div>
    </main>
  );
}
