"use client";

import { motion } from "framer-motion";
import { Award, FileText } from "lucide-react";

const certificates = [
  { name: "Crash Course on Python", provider: "Google/Coursera", file: "Crash Course on Python.pdf" },
  { name: "Extract, Transform & Load Data", provider: "Microsoft/Power BI", file: "Extract, Transform and Load Data in Power BI.pdf" },
  { name: "IoT Specialist (Module 1-3)", provider: "Cisco/Industry", file: "IOT 1st Module.pdf" },
  { name: "Machine Learning Workshop", provider: "IIT/Industry", file: "ML Workshop.jpeg" },
  { name: "ML Pipelines with Azure", provider: "Microsoft", file: "Machine Learning Pipelines with Azure ML Studio.pdf" },
];

export default function Certificates() {
  return (
    <section className="py-24 px-6 md:px-24 bg-zinc-950">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight flex items-center gap-4">
          <Award className="text-zinc-500" size={40} />
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.a
              key={cert.name}
              href={`/Certificates/${cert.file}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: "#555" }}
              className="flex items-center gap-4 p-6 bg-zinc-900 border border-zinc-800 rounded-xl transition-all"
            >
              <div className="p-3 bg-zinc-800 rounded-lg text-zinc-400 group-hover:text-white transition-colors">
                <FileText size={20} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-white line-clamp-1">{cert.name}</h3>
                <p className="text-xs text-zinc-500">{cert.provider}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
