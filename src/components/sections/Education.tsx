"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "IIMT College of Engineering",
    period: "2022 - 2026 (Expected)",
    details: "Focusing on Software Engineering, Data Structures, AI, and Cloud Computing."
  },
  {
    degree: "Senior Secondary Education (XII)",
    institution: "CBSE Board",
    period: "2020 - 2022",
    details: "Completed with focus on Physics, Chemistry, and Mathematics."
  }
];

export default function Education() {
  return (
    <section className="py-24 px-6 md:px-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight flex items-center gap-4">
          <GraduationCap className="text-zinc-500" size={40} />
          Education
        </h2>

        <div className="space-y-12 max-w-3xl">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-zinc-800"
            >
              <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] bg-white rounded-full" />
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{edu.period}</span>
              <h3 className="text-2xl font-bold text-white mt-1">{edu.degree}</h3>
              <p className="text-zinc-400 font-medium">{edu.institution}</p>
              <p className="text-zinc-500 mt-4 text-sm leading-relaxed">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
