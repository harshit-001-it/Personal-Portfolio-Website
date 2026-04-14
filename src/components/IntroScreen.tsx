"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMousePointer, FiArrowDown } from "react-icons/fi";

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  // Trigger exit on scroll or click
  useEffect(() => {
    const handleScroll = (e: WheelEvent | TouchEvent) => {
      // Small threshold to prevent accidental triggers
      if (e.type === "wheel" && (e as WheelEvent).deltaY > 10) {
        setIsExiting(true);
      } else if (e.type === "touchmove") {
        setIsExiting(true);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, []);

  // When isExiting becomes true, wait for animation to finish then call onComplete
  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1200); // Wait for the 1.2s exit duration
      return () => clearTimeout(timer);
    }
  }, [isExiting, onComplete]);

  // Premium Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -100,
      transition: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1] as const, // Apple-style cinematic ease
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: "easeOut" as const } 
    },
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="intro"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-dark overflow-hidden"
        >
          {/* Subtle Dynamic Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_60%)]" />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-brand-blue/10 blur-[120px] rounded-full"
            />
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter mb-4">
                Harshit Mishra
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-[10px] md:text-sm font-display tracking-[0.4em] uppercase text-brand-blue/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                IT Engineer <span className="mx-2 text-white/20">|</span> Software Developer <span className="mx-2 text-white/20">|</span> ML Engineer <span className="mx-2 text-white/20">|</span> AI Enthusiast
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-white/50 font-sans font-light text-base md:text-xl leading-relaxed max-w-3xl mx-auto rounded-full bg-white/[0.02] border border-white/[0.05] p-8 backdrop-blur-md">
                I am Harshit Mishra, a B.Tech IT student from IIMT College, passionate about building intelligent systems, modern web applications, and solving real-world problems using AI and software development.
              </p>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-16 flex flex-col items-center gap-4 cursor-pointer group z-20"
            onClick={() => setIsExiting(true)}
          >
            <span className="text-[10px] uppercase font-display tracking-[0.3em] text-white/30 group-hover:text-brand-blue transition-colors duration-500">
              Scroll to Enter
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-14 rounded-full border border-white/20 flex items-start justify-center p-2 group-hover:border-brand-blue/50 transition-colors duration-500 bg-white/[0.01] backdrop-blur-sm"
            >
              <div className="w-1 h-2 rounded-full bg-brand-blue/50 group-hover:bg-brand-blue" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
