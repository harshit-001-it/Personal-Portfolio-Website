"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 px-6 md:px-24 bg-zinc-950 border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Get in Touch</h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-md">
            I'm always open to new opportunities, collaborations, or just a friendly chat about AI and tech.
          </p>
          
          <div className="space-y-6">
            <ContactItem icon={<Mail size={20} />} label="Email" value="harshit.mishra.it@email.com" />
            <ContactItem icon={<Phone size={20} />} label="Phone" value="+91 XXXXX XXXXX" />
            <ContactItem icon={<MapPin size={20} />} label="Location" value="Gautam Buddha Nagar, UP, India" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Name" type="text" placeholder="John Doe" />
              <Input label="Email" type="email" placeholder="john@example.com" />
            </div>
            <Input label="Subject" type="text" placeholder="Inquiry about ML project" />
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Message</label>
              <textarea
                rows={4}
                className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 text-white focus:outline-none focus:border-white transition-colors resize-none"
                placeholder="How can I help you?"
              />
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-4 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-colors uppercase tracking-widest text-xs">
              <Send size={16} />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      <footer className="mt-32 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-600 text-sm">© 2026 Harshit Mishra. All rights reserved.</p>
        <div className="flex gap-8 text-zinc-500 text-xs uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </footer>
    </section>
  );
}

function ContactItem({ icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400">
        {icon}
      </div>
      <div>
        <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">{label}</p>
        <p className="text-white font-medium">{value}</p>
      </div>
    </div>
  );
}

function Input({ label, ...props }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">{label}</label>
      <input
        {...props}
        className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 text-white focus:outline-none focus:border-white transition-colors"
      />
    </div>
  );
}
