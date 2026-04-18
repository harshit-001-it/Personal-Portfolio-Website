"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Play, FileText, Map, X } from "lucide-react";

interface Resource {
  video: string;
  docs: string;
  roadmap: string;
}

interface Skill {
  name: string;
  resources: Resource;
}

interface Category {
  title: string;
  skills: Skill[];
}

const skillCategories: Category[] = [
  {
    title: "Core Technologies",
    skills: [
      { name: "Python", resources: { video: "https://youtu.be/_uQrJ0TkZlc", docs: "https://docs.python.org/3/", roadmap: "https://roadmap.sh/python" } },
      { name: "C++", resources: { video: "https://youtu.be/vLnPwxZdW4Y", docs: "https://en.cppreference.com/w/", roadmap: "https://roadmap.sh/cpp" } },
      { name: "Java", resources: { video: "https://youtu.be/eIrMbAQSU34", docs: "https://docs.oracle.com/en/java/", roadmap: "https://roadmap.sh/java" } },
      { name: "Web Dev", resources: { video: "https://youtu.be/zJSY8tJY_67", docs: "https://developer.mozilla.org/", roadmap: "https://roadmap.sh/frontend" } },
      { name: "MySQL", resources: { video: "https://youtu.be/7S_tz1z_5bA", docs: "https://dev.mysql.com/doc/", roadmap: "https://roadmap.sh/postgresql-dba" } },
      { name: "Linux", resources: { video: "https://youtu.be/wBp0Rb-ZJak", docs: "https://www.kernel.org/doc/html/latest/", roadmap: "https://roadmap.sh/linux" } }
    ]
  },
  {
    title: "Intelligence",
    skills: [
      { name: "ML (Machine Learning)", resources: { video: "https://youtu.be/GwIo3gDZCVQ", docs: "https://scikit-learn.org/", roadmap: "https://roadmap.sh/ai-data-scientist" } },
      { name: "AI (Artificial Intelligence)", resources: { video: "https://youtu.be/ad79nyu21-I", docs: "https://openai.com/research", roadmap: "https://roadmap.sh/ai-data-scientist" } },
      { name: "Deep Learning", resources: { video: "https://youtu.be/aircAruvnKk", docs: "https://pytorch.org/docs/", roadmap: "https://roadmap.sh/ai-data-scientist" } },
      { name: "Neural Networks", resources: { video: "https://youtu.be/hfK_dvC-avg", docs: "https://www.tensorflow.org/", roadmap: "https://roadmap.sh/ai-data-scientist" } }
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Leadership", resources: { video: "https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action", docs: "https://hbr.org/topic/leadership", roadmap: "https://online.hbs.edu/blog/post/leadership-skills" } },
      { name: "Problem Solving", resources: { video: "https://youtu.be/uCh699Onc4A", docs: "https://www.mindtools.com/pages/article/newTMC_00.htm", roadmap: "https://www.brilliant.org" } },
      { name: "Teamwork", resources: { video: "https://youtu.be/hE7rG6oG9xM", docs: "https://asana.com/resources/collaboration-skills", roadmap: "https://www.atlassian.com/team-playbook" } },
      { name: "Critical Thinking", resources: { video: "https://youtu.be/HnJ1bqXUnIM", docs: "https://plato.stanford.edu/entries/critical-thinking/", roadmap: "https://www.skillsyouneed.com/learn/critical-thinking.html" } }
    ]
  }
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  return (
    <section className="w-full text-center relative">
      <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="max-w-[1400px] mx-auto flex flex-col items-center gap-12 mb-48 md:mb-60 px-6"
>
  <div className="flex flex-col items-center gap-10">
    <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase italic">Technical Arsenal</h2>
    <p className="text-zinc-500 text-lg tracking-[0.4em] uppercase font-black opacity-30">
      Click a skill to explore learning resources
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 lg:gap-40 w-full mt-24">
    {skillCategories.map((cat, i) => (
      <div key={cat.title} className="flex flex-col items-center">
        <h3 className="text-zinc-600 uppercase tracking-[0.5em] text-[12px] mb-24 font-black">{cat.title}</h3>
        <div className="flex flex-wrap gap-8 justify-center">
          {cat.skills.map((skill, j) => (
            <motion.button
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 + j * 0.05 }}
              onClick={() => setActiveSkill(skill)}
              whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000", borderColor: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-zinc-800/30 text-zinc-500 rounded-3xl text-xl transition-all backdrop-blur-3xl bg-zinc-900/5 shadow-2xl relative group"
            >
              {skill.name}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          ))}
        </div>
      </div>
    ))}
  </div>
</motion.div>

      {/* Resource Modal Overlay */}
      <AnimatePresence>
        {activeSkill && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSkill(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-[40px] p-10 md:p-16 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-accent/50 blur-xl" />
              
              <button 
                onClick={() => setActiveSkill(null)}
                className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col items-center text-center">
                <span className="text-accent text-xs font-black uppercase tracking-[0.5em] mb-4">Mastering</span>
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-12 uppercase italic">{activeSkill.name}</h3>
                
                <div className="grid grid-cols-1 gap-6 w-full">
                  <ResourceLink 
                    href={activeSkill.resources.video}
                    icon={<Play size={20} />}
                    label="Video Tutorial"
                    description="Watch high-quality masterclasses and guided lessons."
                  />
                  <ResourceLink 
                    href={activeSkill.resources.docs}
                    icon={<FileText size={20} />}
                    label="Official Docs"
                    description="Dive deep into the core technical documentation."
                  />
                  <ResourceLink 
                    href={activeSkill.resources.roadmap}
                    icon={<Map size={20} />}
                    label="Expert Roadmap"
                    description="Follow the path from beginner to professional mastery."
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ResourceLink({ href, icon, label, description }: { href: string; icon: React.ReactNode; label: string; description: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-6 p-6 rounded-3xl bg-zinc-800/20 border border-zinc-800/50 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all group text-left"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-zinc-800 group-hover:bg-accent group-hover:text-black transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-bold text-lg">{label}</h4>
        <p className="text-zinc-500 text-sm leading-tight">{description}</p>
      </div>
    </a>
  );
}
