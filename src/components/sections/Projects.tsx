"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "AI Emotion Recognizer",
    description: "Real-time emotion detection using deep learning and computer vision.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    link: "#",
    github: "#",
    image: "/next.svg" // Placeholder, user will update
  },
  {
    title: "Intelligent Portfolio",
    description: "High-end 3D portfolio website with advanced animations and Three.js.",
    tech: ["Next.js", "Three.js", "Tailwind"],
    link: "#",
    github: "#",
    image: "/next.svg"
  },
  {
    title: "Data Analytics Dashboard",
    description: "Insights and visualizations for complex datasets using Power BI and Excel.",
    tech: ["Power BI", "Excel", "Data Viz"],
    link: "#",
    github: "#",
    image: "/next.svg"
  }
];

export default function Projects() {
  return (
    <section className="py-24 px-6 md:px-24 bg-zinc-950">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-500 transition-colors"
    >
      <div className="aspect-video relative bg-black/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
        {/* Project Image would go here */}
        <div className="absolute inset-0 flex items-center justify-center text-zinc-800 font-bold text-4xl select-none">
          PROJECT
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-zinc-500 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t: string) => (
            <span key={t} className="text-[10px] uppercase tracking-widest text-zinc-400 bg-zinc-800 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a href={project.github} className="text-zinc-400 hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href={project.link} className="text-zinc-400 hover:text-white transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
