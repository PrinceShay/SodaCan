import Features from "@/components/content/Features/Features";
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
        <section
          id="section-2"
          className="p-12 flex justify-end items-center min-h-screen"
        >
          <h1 className="text-5xl">Hello</h1>
        </section>
        <section id="section-3" className="p-12 flex items-center min-h-screen">
          <h1 className="text-5xl">Hello</h1>
        </section>
      </div>
    </main>
  );
}
