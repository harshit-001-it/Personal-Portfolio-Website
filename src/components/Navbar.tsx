"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12",
        isScrolled ? "bg-brand-dark/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="group flex items-center gap-1">
          <span className="text-2xl font-display font-bold text-white tracking-tighter">
            HM<span className="text-brand-blue group-hover:animate-pulse">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-display tracking-widest uppercase text-white/60 hover:text-brand-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Socials & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-6 ml-2">
            <a href="https://github.com/harshit-001-it" target="_blank" className="text-white/60 hover:text-white transition-colors">
              <FiGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/harshit-mishra-51275b219/" target="_blank" className="text-white/60 hover:text-[#0077B5] transition-colors">
              <FiLinkedin className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-1"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-dark border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-display tracking-widest uppercase text-white/80"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-6 pt-6 border-t border-white/10">
              <a href="https://github.com/harshit-001-it" target="_blank" className="text-white/60">
                <FiGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/harshit-mishra-51275b219/" target="_blank" className="text-white/60">
                <FiLinkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
