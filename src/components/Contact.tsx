"use client";

import { motion } from "framer-motion";
import { FiSend, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-sm font-display tracking-[0.3em] uppercase text-brand-blue mb-4 block">
              05. Get in Touch
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-8">
              Let's build
              <br />
              something <span className="text-brand-blue">epic</span>.
            </h2>
            <p className="text-white/40 text-lg max-w-md mb-12 font-sans">
              Currently open for collaborations and interesting projects. If you have a question or just want to say hi, my inbox is always open.
            </p>
            
            <div className="flex flex-col gap-6">
              <a href="mailto:harshitmishra.it@gmail.com" className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-blue group-hover:bg-brand-blue/5 transition-all">
                  <FiMail className="w-5 h-5" />
                </div>
                <span className="font-display tracking-widest uppercase text-sm">harshitmishra.it@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 mt-4">
                <a href="https://github.com/harshit-001-it" target="_blank" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all">
                  <FiGithub className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/harshit-mishra-51275b219/" target="_blank" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#0077B5] hover:border-[#0077B5] transition-all">
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2rem]"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-white/30 ml-1">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-blue transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-white/30 ml-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-blue transition-colors"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-white/30 ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-blue transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button className="w-full bg-brand-blue hover:bg-blue-600 text-white font-display font-bold tracking-widest uppercase py-5 rounded-xl transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                Send Message <FiSend className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
