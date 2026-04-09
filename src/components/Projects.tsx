"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar, FiGitBranch, FiFolder } from "react-icons/fi";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

export default function Projects() {
  const [projects, setProjects] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/harshit-001-it/repos?sort=updated&per_page=6");
        const data = await response.json();
        // Filter out fork repositories if needed
        const filtered = data.filter((repo: any) => !repo.fork).slice(0, 6);
        setProjects(filtered);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-sm font-display tracking-[0.3em] uppercase text-brand-blue mb-4 block text-center lg:text-left">
            03. Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white text-center lg:text-left">
            Dynamic Projects
          </h2>
          <p className="text-white/40 mt-4 text-center lg:text-left max-w-xl">
            Automatically synced from GitHub. Every commit, every line of code, reflected in real-time.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="glass h-64 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass p-8 rounded-3xl flex flex-col justify-between glass-hover h-[320px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <FiFolder className="w-10 h-10 text-brand-blue/40" />
                    <div className="flex items-center gap-4">
                      <a href={project.html_url} target="_blank" className="text-white/40 hover:text-white transition-colors">
                        <FiGithub className="w-5 h-5" />
                      </a>
                      {project.homepage && (
                        <a href={project.homepage} target="_blank" className="text-white/40 hover:text-white transition-colors">
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-brand-blue transition-colors mb-3">
                    {project.name.replace(/-/g, " ")}
                  </h3>
                  
                  <p className="text-white/40 text-sm line-clamp-3 leading-relaxed mb-6 font-sans">
                    {project.description || "No description provided for this repository."}
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Tech stack from topics */}
                  <div className="flex flex-wrap gap-2">
                    {project.topics.slice(0, 3).map((topic) => (
                      <span key={topic} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 rounded-md text-white/40">
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs font-mono text-white/20 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-1">
                      <FiStar className="w-3 h-3" /> {project.stargazers_count}
                    </div>
                    <div className="flex items-center gap-1">
                      <FiGitBranch className="w-3 h-3" /> {project.forks_count}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com/harshit-001-it" 
            target="_blank"
            className="inline-flex items-center gap-2 text-brand-blue hover:text-white transition-colors font-display tracking-widest uppercase text-sm"
          >
            Explore all repositories <FiGithub className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
