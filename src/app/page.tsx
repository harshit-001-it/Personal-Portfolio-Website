import ThreeCanvas from "@/components/ThreeCanvas";
import IntroScene from "@/components/sections/IntroScene";
import IntroOverlay from "@/components/IntroOverlay";
import dynamic from "next/dynamic";

// Dynamic imports for sections to keep initial load light
const Hero = dynamic(() => import("@/components/sections/Hero"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Certificates = dynamic(() => import("@/components/sections/Certificates"));
const Education = dynamic(() => import("@/components/sections/Education"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      {/* 3D Scene Layer */}
      <ThreeCanvas>
        <IntroScene />
      </ThreeCanvas>

      {/* Cinematic Intro Overlay */}
      <IntroOverlay />

      {/* Main Portfolio Sections (revealed on scroll) */}
      <div className="relative z-10 w-full">
        <Hero />
        <Projects />
        <Skills />
        <Certificates />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
