"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Brain, 
  Layout, 
  Coffee, 
  Users, 
  Eye, 
  MessageSquare, 
  Zap, 
  Route 
} from "lucide-react";

const technicalSkills = [
  { name: "Python", level: 90, icon: <Code2 className="w-5 h-5 text-blue-400" />, desc: "Core Strength | Automation & Web" },
  { name: "Web Tech", level: 85, icon: <Layout className="w-5 h-5 text-orange-400" />, desc: "HTML, CSS, JS Stack" },
  { name: "Machine Learning", level: 75, icon: <Brain className="w-5 h-5 text-purple-400" />, desc: "Emerging Expertise | Data Models" },
  { name: "Java", level: 70, icon: <Coffee className="w-5 h-5 text-red-400" />, desc: "Object Oriented Design" },
];

const softSkills = [
  { name: "Communication", icon: <MessageSquare className="w-4 h-4" /> },
  { name: "Collaboration", icon: <Users className="w-4 h-4" /> },
  { name: "Observation", icon: <Eye className="w-4 h-4" /> },
  { name: "Problem Solving", icon: <Zap className="w-4 h-4" /> },
  { name: "Adaptive Nature", icon: <Route className="w-4 h-4" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-sm font-display tracking-[0.3em] uppercase text-brand-blue mb-4 block">
              02. Skills
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Technical & Power Skills
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-lg font-display uppercase tracking-widest text-white/40 mb-10">
              Technical Arsenal
            </h3>
            <div className="space-y-8">
              {technicalSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-white/30 text-xs font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "circOut", delay: 0.2 + i * 0.1 }}
                      className="h-full bg-brand-blue shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                    />
                  </div>
                  <p className="mt-2 text-[10px] text-white/30 uppercase tracking-widest">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-lg font-display uppercase tracking-widest text-white/40 mb-10">
              Soft Power
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass flex items-center gap-4 p-5 rounded-2xl glass-hover"
                >
                  <div className="bg-white/5 p-2 rounded-lg text-brand-blue">
                    {skill.icon}
                  </div>
                  <span className="text-white/80 font-medium text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Added a subtle design element */}
            <div className="mt-12 p-8 rounded-3xl border border-dashed border-white/5 flex items-center justify-center">
              <p className="text-white/20 text-sm italic text-center">
                "Continuous learning is the minimum requirement for success in any field."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
