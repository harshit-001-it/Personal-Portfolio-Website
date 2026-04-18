"use client";

import { motion } from "framer-motion";
import { Award, FileText } from "lucide-react";

const certificates = [
  { name: "Crash Course on Python", provider: "Google/Coursera", file: "Crash Course on Python.pdf" },
  { name: "Google Data Analytics", provider: "Google/Coursera", file: "Google Data Analytics.pdf" },
  { name: "Extract, Transform & Load Data", provider: "Microsoft/Power BI", file: "Extract, Transform and Load Data in Power BI.pdf" },
  { name: "IoT Specialist (Module 1-3)", provider: "Cisco/Industry", file: "IOT 1st Module.pdf" },
  { name: "Machine Learning Workshop", provider: "IIT/Industry", file: "ML Workshop.jpeg" },
  { name: "ML Pipelines with Azure", provider: "Microsoft", file: "Machine Learning Pipelines with Azure ML Studio.pdf" },
];

export default function Certificates() {
  return (
    <section className="w-full text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-[1400px] mx-auto flex flex-col items-center mb-48 md:mb-60 gap-16"
      >
        <div className="flex flex-col items-center gap-10">
          <Award className="text-accent mb-4" size={80} />
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase italic">Certifications</h2>
          <p className="text-zinc-500 text-lg tracking-[0.4em] uppercase font-black opacity-30">
            Professional Credentials & Achievements
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 w-full mt-24">
          {certificates.map((cert, index) => (
            <motion.a
              key={cert.name}
              href={`/Certificates/${cert.file}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02, borderColor: "#444", backgroundColor: "rgba(39, 39, 42, 0.3)" }}
              className="flex flex-col items-center text-center gap-10 p-12 bg-zinc-900/10 backdrop-blur-3xl border border-zinc-800/20 rounded-[3rem] transition-all duration-700 group shadow-2xl"
            >
              <div className="p-8 bg-zinc-800/20 rounded-[2rem] text-zinc-600 group-hover:text-accent transition-all duration-700 shadow-inner">
                <FileText size={40} />
              </div>
              <div className="flex flex-col items-center gap-6">
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight max-w-[300px]">{cert.name}</h3>
                <p className="text-[11px] uppercase tracking-[0.6em] text-zinc-700 font-black">{cert.provider}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
