"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState, useCallback, useMemo } from "react";
import { fetchGitHubRepos, GitHubRepo } from "@/lib/github";

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  const fallbackProjects: GitHubRepo[] = useMemo(() => [
    {
      id: 1,
      name: "Unified Emotion Recognition",
      description: "High-performance real-time sentiment analysis engine unifying FER 2013, AffectNet, CK+, and RAF-DB datasets using a 1024-node CNN architecture.",
      html_url: "https://github.com/harshit-001-it",
      homepage: "",
      stargazers_count: 15,
      language: "Python",
      topics: ["CNN", "OpenCV", "Deep Learning"],
      fork: false
    },
    {
      id: 2,
      name: "AI Text Analyzer CLI",
      description: "Production-grade CLI tool for NLP-based text summarization and classification with structured JSON outputs and latency evaluation.",
      html_url: "https://github.com/harshit-001-it",
      homepage: "",
      stargazers_count: 5,
      language: "Python",
      topics: ["NLP", "CLI", "JSON Schema"],
      fork: false
    },
    {
      id: 3,
      name: "Fake News Detection",
      description: "Advanced NLP classifier identifying misinformation through linguistic patterns and TF-IDF vectorization with high precision.",
      html_url: "https://github.com/harshit-001-it",
      homepage: "",
      stargazers_count: 7,
      language: "Python",
      topics: ["NLP", "ML", "Scikit-Learn"],
      fork: false
    },
    {
      id: 4,
      name: "Intelligent Portfolio",
      description: "Premium 3D cinematic portfolio built with Next.js, Three.js, and Framer Motion featuring real-time GitHub integration.",
      html_url: "https://github.com/harshit-001-it",
      homepage: "",
      stargazers_count: 10,
      language: "Next.js",
      topics: ["Three.js", "3D Animation"],
      fork: false
    }
  ], []);

  useEffect(() => {
    async function getRepos() {
      try {
        const data = await fetchGitHubRepos("harshit-001-it");
        if (data && data.length > 0) {
          setRepos(data);
        } else {
          setRepos(fallbackProjects);
        }
      } catch {
        setRepos(fallbackProjects);
      } finally {
        setLoading(false);
      }
    }
    getRepos();
  }, [fallbackProjects]);

  return (
    <section id="projects" className="w-full bg-transparent relative overflow-hidden text-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-48 md:mb-60 flex flex-col items-center gap-12"
      >
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase italic">Open Source <span className="text-zinc-500">&</span> Creations</h2>
        <p className="text-zinc-500 max-w-2xl mx-auto text-lg tracking-[0.4em] uppercase font-black opacity-30">
          @harshit-001-it • Dynamic Repository Fetching
        </p>
      </motion.div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12 lg:gap-16 opacity-50 px-6 md:px-12 lg:px-20">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-[500px] bg-zinc-900/50 rounded-[3rem] animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12 lg:gap-20 w-full max-w-[1800px] mx-auto px-12 md:px-24 lg:px-48">
          {repos.map((repo, index) => (
            <ProjectCard key={repo.id} repo={repo} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}

function ProjectCard({ repo, index }: { repo: GitHubRepo, index: number }) {
  // Correct metadata for Machine Learning projects
  const displayLanguage = repo.name.toLowerCase().includes("emotion") || repo.name.toLowerCase().includes("recognition") 
    ? "Machine Learning" 
    : repo.language;

  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative block bg-zinc-900/10 backdrop-blur-3xl border border-zinc-800/30 rounded-[2.5rem] overflow-hidden hover:border-accent/40 transition-all duration-700 shadow-2xl text-center"
    >
      <div className="p-12 h-full flex flex-col items-center justify-between">
        <div className="flex flex-col items-center w-full">
          <div className="p-6 bg-zinc-800/20 rounded-3xl mb-10 group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-700 shadow-inner">
            <FaGithub size={36} className="text-zinc-600 group-hover:text-accent transition-colors" />
          </div>

          <h3 className="text-3xl font-bold mb-6 tracking-tight group-hover:text-accent transition-colors line-clamp-1">{repo.name}</h3>
          <p className="text-zinc-500 text-lg mb-10 line-clamp-3 min-h-[5rem] leading-relaxed max-w-sm">
            {repo.description || "A high-performance engineering solution developed with cutting-edge technology."}
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {displayLanguage && (
              <span className="text-[9px] uppercase tracking-[0.3em] font-black text-accent bg-accent/10 border border-accent/20 px-5 py-3 rounded-2xl">
                {displayLanguage}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 text-accent opacity-40 group-hover:opacity-100 transition-all duration-700 transform translate-y-2 group-hover:translate-y-0">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black">Open Repository</span>
          <ExternalLink size={16} />
        </div>
      </div>

      {/* Dynamic Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </motion.a>
  );
}
