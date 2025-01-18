import Hero from "@/components/hero/Hero";
import LogoGlow from "@/components/LogoGlow";
import Scene from "@/components/Scene/Scene";
import { Scroll } from "@react-three/drei";

export default function Home() {
  return (
    <main>
      <div className="fixed top-0 w-full md:z-20 h-screen pointer-events-none ">
        <Scene />
      </div>
      <div className="js-wrapperHome">
        <Hero />
        <Hero />
        <Hero />
      </div>
    </main>
  );
}
