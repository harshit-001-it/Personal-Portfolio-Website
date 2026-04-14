"use client";

import { motion } from "framer-motion";
import { FiAward, FiShield, FiImage, FiFileText } from "react-icons/fi";

const certifications = [
  { title: "Machine Learning Workshop", icon: <FiAward className="text-purple-400" />, type: "Nov 2025" },
  { title: "Freedom With AI Masterclass", icon: <FiAward className="text-orange-400" />, type: "May 2025" },
  { title: "Excellence in ML Foundations", icon: <FiAward className="text-yellow-400" />, type: "Apr 2025" },
  { title: "Advanced Internet of Things", icon: <FiAward className="text-blue-400" />, type: "2025" },
  { title: "Smart Embedded Systems", icon: <FiAward className="text-blue-500" />, type: "2026" },
  { title: "Startup & Legal", icon: <FiShield className="text-red-400" />, type: "Legal/Biz" },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 md:py-32 px-6 md:px-12 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center lg:text-right">
          <span className="text-sm font-display tracking-[0.3em] uppercase text-brand-blue mb-4 block">
            04. Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass p-8 rounded-3xl group glass-hover flex flex-col gap-4 text-center items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-white font-display font-bold group-hover:text-brand-blue transition-colors">
                  {cert.title}
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-white/20 mt-1">
                  {cert.type}
                </p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/5 w-full">
                <span className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
