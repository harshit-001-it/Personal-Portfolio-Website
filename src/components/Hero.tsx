"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FiChevronDown, FiFileText } from "react-icons/fi";

export default function Hero() {
  const { scrollY } = useScroll();

  // Cinematic scroll transforms
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);
  const y = useTransform(scrollY, [0, 400], [0, -100]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 text-center px-4"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block text-brand-blue font-display tracking-widest uppercase text-sm mb-6"
        >
          Architecting Digital Experiences
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white tracking-tighter mb-8"
        >
          Harshit Mishra
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 font-sans font-light leading-relaxed"
        >
          IT Engineer <span className="text-white/20 mx-2">|</span> Software Developer
          <br />
          Crafting scalable digital solutions and solving complex problems with code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="/Personal-Portfolio-Website/assets/Resume/Harshit-Mishra-Resume.pdf"
            target="_blank"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-dark rounded-full font-display font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <FiFileText className="w-4 h-4" />
            View Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-display">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiChevronDown className="w-5 h-5 text-brand-blue/60" />
        </motion.div>
      </motion.div>

      {/* Decorative gradient blur */}
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-blue/10 blur-[120px] rounded-full" />
      <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-blue/5 blur-[120px] rounded-full" />
    </section>
  );
}
