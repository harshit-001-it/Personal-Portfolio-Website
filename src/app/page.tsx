"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main className="relative flex flex-col w-full min-h-screen bg-brand-dark">
      {/* Main portfolio — ALWAYS rendered underneath */}
      <div
        className="w-full relative"
        style={{
          // Prevent scrolling while intro is showing
          overflow: introComplete ? "visible" : "hidden",
          height: introComplete ? "auto" : "100vh",
        }}
      >
        <Navbar />
        <Hero />
        <div className="relative z-10 bg-brand-dark shadow-[0_-50px_100px_rgba(0,0,0,0.8)]">
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
          <Footer />
        </div>
      </div>

      {/* Intro overlay — rendered ON TOP, removed after transition */}
      {!introComplete && (
        <IntroScreen onComplete={() => setIntroComplete(true)} />
      )}
    </main>
  );
}
