"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-display tracking-[0.3em] uppercase text-brand-blue mb-4">
                01. About Me
              </h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                Passion fueled by code.
                <br />
                Driven by problem solving.
              </h3>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-white/60 font-sans text-lg leading-relaxed"
            >
              <p>
                I am <span className="text-white font-medium">Harshit Mishra</span>, a B.Tech IT student from IIMT College, passionate about building intelligent systems, modern web applications, and solving real-world problems using AI and software development.
              </p>
              <p>
                 I enjoy working on system design, data modeling, and exploring emerging technologies. I am a strategic problem solver with strong analytical and observational skills. My philosophy is simple: I remain deeply passionate and committed to my work until the project is flawlessly executed.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Dynamic Stats/Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          {[
            { label: "Location", value: "Greater Noida, IN" },
            { label: "Education", value: "B.Tech IT" },
            { label: "Status", value: "Available for Hire" },
            { label: "Focus", value: "Machine Learning & AI" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass p-6 rounded-2xl"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2">{stat.label}</p>
              <p className="text-white font-display font-semibold">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
