"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-24">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Turning Vision Into <br />
          <span className="text-zinc-500">Intelligent Reality.</span>
        </h2>
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl">
          Based in India, I specialize in Information Technology, Machine Learning, and Software Architecture. 
          Currently focused on building AI-driven solutions that bridge the gap between data and human impact.
        </p>

        <div className="flex flex-wrap gap-6">
          <a
            href="/Resume/Harshit Mishra Resume.pdf"
            download
            className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors"
          >
            <Download size={20} />
            Download Resume
          </a>
          
          <div className="flex items-center gap-4">
            <SocialLink href="https://github.com/harshit-mishra" icon={<FaGithub size={24} />} />
            <SocialLink href="https://linkedin.com/in/harshitmishra" icon={<FaLinkedin size={24} />} />
            <SocialLink href="mailto:contact@harshitmishra.com" icon={<Mail size={24} />} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, color: "#fff" }}
      className="text-zinc-500 transition-colors"
    >
      {icon}
    </motion.a>
  );
}
