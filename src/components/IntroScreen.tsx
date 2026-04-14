"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  const triggerExit = useCallback(() => {
    if (!isExiting) {
      setIsExiting(true);
    }
  }, [isExiting]);

  // Listen for ANY scroll-like gesture: wheel, touch, or keydown
  useEffect(() => {
    const handleWheel = () => triggerExit();
    const handleTouchStart = () => triggerExit();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " " || e.key === "Enter") {
        triggerExit();
      }
    };

    // Use capture phase to intercept BEFORE Lenis can swallow the event
    window.addEventListener("wheel", handleWheel, { capture: true, passive: true });
    window.addEventListener("touchstart", handleTouchStart, { capture: true, passive: true });
    window.addEventListener("keydown", handleKeyDown, { capture: true });

    return () => {
      window.removeEventListener("wheel", handleWheel, { capture: true } as EventListenerOptions);
      window.removeEventListener("touchstart", handleTouchStart, { capture: true } as EventListenerOptions);
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
    };
  }, [triggerExit]);

  // Fire onComplete after exit animation duration
  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => onComplete(), 1200);
      return () => clearTimeout(timer);
    }
  }, [isExiting, onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.92,
            y: -80,
            transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] as const },
          }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
        >
          {/* Subtle animated background glow */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.08, 0.15, 0.08],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)" }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" as const }}
              className="text-5xl sm:text-6xl md:text-8xl font-bold text-white tracking-tighter mb-6"
              style={{ fontFamily: "'Outfit', 'Archivo Black', system-ui, sans-serif" }}
            >
              Harshit Mishra
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" as const }}
              className="text-[10px] sm:text-xs md:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-10 max-w-2xl mx-auto leading-relaxed"
              style={{ color: "rgba(59,130,246,0.7)" }}
            >
              IT Engineer
              <span className="mx-2 sm:mx-3" style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
              Software Developer
              <span className="mx-2 sm:mx-3" style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
              ML Engineer
              <span className="mx-2 sm:mx-3" style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
              AI Enthusiast
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" as const }}
              className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto rounded-2xl px-6 py-6 sm:px-8 sm:py-8"
              style={{
                color: "rgba(255,255,255,0.45)",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
              }}
            >
              I am Harshit Mishra, a B.Tech IT student from IIMT College, passionate about building intelligent systems, modern web applications, and solving real-world problems using AI and software development.
            </motion.p>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-12 sm:bottom-16 flex flex-col items-center gap-3 cursor-pointer z-20"
            onClick={triggerExit}
          >
            <span
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em]"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Scroll to Enter
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-8 h-12 rounded-full flex items-start justify-center pt-2"
              style={{ border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.01)" }}
            >
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4], y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 rounded-full"
                style={{ background: "rgba(59,130,246,0.6)" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
