import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full min-h-screen">
      <Navbar />
      
      {/* Scroll Trigger Sections */}
      <Hero />
      
      <div className="relative z-10 bg-brand-dark shadow-[0_-50px_100px_rgba(0,0,0,0.8)]">
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
