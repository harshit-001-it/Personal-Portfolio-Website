"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FiChevronDown, FiFileText } from "react-icons/fi";

export default function Hero() {
  const { scrollY } = useScroll();

  // Cinematic scroll transforms for the "mix" of scroll and fade
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.85]);
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const blur = useTransform(scrollY, [0, 300], ["blur(0px)", "blur(10px)"]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation Variants
  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Dynamic Background with improved fidelity */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
        
        {/* Animated Orbs for "Dynamic" feel */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-blue/10 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-blue/5 blur-[150px] rounded-full" 
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity, scale, y, filter: blur }}
        className="relative z-10 text-center px-4 max-w-5xl"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-brand-blue font-display tracking-[0.4em] uppercase text-[10px] md:text-xs backdrop-blur-sm">
            Available for New Projects
          </span>
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-7xl md:text-9xl font-display font-bold text-white tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
        >
          Harshit Mishra
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-xl md:text-2xl text-white/40 font-sans font-light leading-relaxed mb-12"
        >
          Machine Learning Engineer <span className="text-white/10 mx-3">●</span> AI Enthusiast
          <br className="hidden md:block" />
          <span className="text-white/60">Crafting digital excellence through intelligent algorithms and robust architecture.</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href="/Personal-Portfolio-Website/assets/Resume/Harshit-Mishra-Resume.pdf"
            target="_blank"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-dark rounded-full font-display font-bold text-sm transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95 overflow-hidden"
          >
            <FiFileText className="w-5 h-5 transition-transform group-hover:rotate-12" />
            Download CV
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll/Click Reveal Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 group flex flex-col items-center gap-4 cursor-pointer"
      >
        <span className="text-[11px] uppercase tracking-[0.5em] text-white/30 font-display transition-colors group-hover:text-brand-blue">
          Explore Work
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:border-brand-blue/50 transition-colors"
        >
          <FiChevronDown className="w-6 h-6 text-white/40 group-hover:text-brand-blue transition-colors" />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0, 0.1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-brand-blue/20 rounded-full" 
          />
        </motion.div>
      </motion.button>

      {/* Edge Gradients for "Classic" depth */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-dark to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-dark to-transparent z-10" />
    </section>
  );
}

