"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 lg:px-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-transparent z-0" />
      
      <div className="max-w-6xl w-full mx-auto z-10 flex flex-col md:flex-row justify-center items-center gap-24 md:gap-40 text-center md:text-left">
        {/* Left Side: Identity */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h1 className="text-sm md:text-base font-bold text-accent tracking-[0.4em] mb-4 uppercase">
            AI Engineer | Machine Learning | Computer Vision
          </h1>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter leading-none">
            Harshit <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 text-glow">
              Mishra.
            </span>
          </h2>
          <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed max-w-xl mx-auto md:mx-0">
            Crafting intelligent systems where Computer Vision and NLP meet real-world impact.
          </p>
        </motion.div>

        {/* Right Side: 3D Control Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 w-full md:w-auto min-w-[340px]"
        >
          <HeroButton
            href="https://github.com/harshit-001-it"
            icon={<FaGithub size={24} />}
            label="GitHub Profile"
            subLabel="Open Source & Code"
          />
          <HeroButton
            href="https://www.linkedin.com/in/harshit-mishra-51275b219/"
            icon={<FaLinkedin size={24} />}
            label="LinkedIn"
            subLabel="Professional Network"
          />
          <HeroButton
            href="/Resume_Harshit_Mishra.pdf"
            icon={<Download size={24} />}
            label="View Resume"
            subLabel="Full Qualifications"
            primary
          />
        </motion.div>
      </div>
    </section>
  );
}

function HeroButton({ href, icon, label, subLabel, primary = false }: { href: string; icon: React.ReactNode; label: string; subLabel?: string; primary?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group button-3d glow-hover flex items-center gap-6 p-6 rounded-3xl transition-all ${
        primary ? "bg-white text-black" : "bg-zinc-900/40 text-white backdrop-blur-2xl border border-zinc-800/50"
      }`}
    >
      <div className={`p-4 rounded-2xl flex items-center justify-center transition-colors ${primary ? "bg-zinc-100" : "bg-zinc-800/50 group-hover:bg-zinc-800"}`}>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-widest font-black opacity-30 mb-1">{subLabel}</span>
        <span className="text-xl font-bold tracking-tight">{label}</span>
      </div>
    </a>
  );
}
