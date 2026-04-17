"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Development",
    skills: ["Next.js", "React", "TypeScript", "Node.js", "Python", "C++", "HTML/CSS"]
  },
  {
    title: "AI & ML",
    skills: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-Learn", "Neural Networks", "NLP"]
  },
  {
    title: "Tools & Clouds",
    skills: ["Git", "Docker", "AWS", "Google Cloud", "MongoDB", "PostgreSQL", "Power BI"]
  }
];

export default function Skills() {
  return (
    <section className="py-24 px-6 md:px-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">Technical Arsenal</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((cat, i) => (
            <div key={cat.title}>
              <h3 className="text-zinc-500 uppercase tracking-widest text-xs mb-6 font-bold">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                    whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
                    className="px-4 py-2 border border-zinc-800 text-zinc-300 rounded-lg text-sm transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
