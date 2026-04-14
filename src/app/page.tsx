"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import IntroScreen from "@/components/IntroScreen";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="relative flex flex-col w-full min-h-screen bg-brand-dark overflow-hidden">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroScreen key="intro" onComplete={() => setShowIntro(false)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-full relative"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
