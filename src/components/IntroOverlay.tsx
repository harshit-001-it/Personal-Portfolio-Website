"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function IntroOverlay() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  const titles = [
    "IT Engineer",
    "Software Developer",
    "ML Engineer",
    "AI Enthusiast"
  ];

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="text-zinc-500 uppercase tracking-[0.5em] text-sm mb-4">Portfolio of</p>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
          Harshit Mishra
        </h1>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {titles.map((title, index) => (
          <motion.span
            key={title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
            className="px-4 py-1 text-xs md:text-sm border border-zinc-800 rounded-full text-zinc-400 bg-zinc-900/50 backdrop-blur-sm"
          >
            {title}
          </motion.span>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="max-w-xl text-zinc-400 text-lg leading-relaxed mb-12"
      >
        "I am Harshit Mishra, currently pursuing B.Tech in Information Technology from IIMT College. 
        I am passionate about building intelligent systems, scalable web applications, and solving real-world problems using AI and modern technologies."
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-600 text-xs uppercase tracking-widest">Scroll to Enter</span>
        <ChevronDown size={20} className="text-zinc-600" />
      </motion.div>
    </motion.div>
  );
}
