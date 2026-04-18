import ThreeCanvas from "@/components/ThreeCanvas";
import IntroScene from "@/components/sections/IntroScene";
import IntroOverlay from "@/components/IntroOverlay";
import dynamic from "next/dynamic";

// Dynamic imports for sections to keep initial load light
const Hero = dynamic(() => import("@/components/sections/Hero"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Certificates = dynamic(() => import("@/components/sections/Certificates"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <main className="relative min-h-screen text-foreground selection:bg-accent selection:text-background overflow-x-hidden">
      {/* 3D Scene Layer (Fixed Background) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <ThreeCanvas>
          <IntroScene />
        </ThreeCanvas>
      </div>

      {/* Cinematic Intro Overlay */}
      <IntroOverlay />

      {/* Main Portfolio Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        
        <div className="w-full space-y-[150vh] pb-[150vh] mt-[150vh]">
          <SectionWrapper id="projects">
            <Projects />
          </SectionWrapper>

          <SectionWrapper id="skills">
            <Skills />
          </SectionWrapper>

          <SectionWrapper id="certificates">
            <Certificates />
          </SectionWrapper>

          <SectionWrapper id="contact">
            <Contact />
          </SectionWrapper>
        </div>
      </div>
    </main>
  );
}

function SectionWrapper({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <section id={id} className="min-h-screen w-full flex flex-col items-center justify-center py-[20vh] px-4 sm:px-8 lg:px-12">
      <div className="w-full h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </section>
  );
}
