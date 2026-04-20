import { useState } from "react";

export default function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/harshitmishra1208@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch (error) {
      setState("error");
    }
  };

  return (
    <section className="bg-transparent w-full text-center overflow-hidden">
      <div className="flex justify-center w-full mb-32 md:mb-48">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-zinc-900/10 backdrop-blur-3xl border border-zinc-800/30 p-12 md:p-24 rounded-[4rem] w-full max-w-[1800px] flex flex-col items-center"
        >
          <div className="mb-48 md:mb-60 flex flex-col items-center gap-12">
            <h2 className="text-5xl md:text-8xl font-bold mb-4 tracking-tighter uppercase italic">Get in Touch</h2>
            <p className="text-zinc-500 text-2xl mx-auto max-w-3xl font-medium tracking-tight">
              Have a project in mind or just want to say hi? <br className="hidden md:block" /> I'm always open to new opportunities.
            </p>
          </div>

          <form 
            className="space-y-12 text-left w-full max-w-5xl mx-auto" 
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Input label="Name" name="name" type="text" placeholder="Your Name" required />
              <Input label="Email" name="email" type="email" placeholder="email@example.com" required />
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-[11px] uppercase tracking-[0.4em] font-black text-zinc-700">Message</label>
              <textarea
                name="message"
                rows={7}
                required
                className="bg-zinc-800/10 border border-zinc-800/50 rounded-3xl p-8 text-white text-lg focus:outline-none focus:border-accent transition-all resize-none shadow-2xl"
                placeholder="Tell me about your project..."
              />
            </div>
            <button 
              disabled={state === "sending"}
              className={`button-3d glow-hover w-full flex items-center justify-center gap-4 py-8 rounded-3xl font-black transition-all uppercase tracking-[0.4em] text-[11px] ${
                state === "success" ? "bg-green-500 text-white" : state === "error" ? "bg-red-500 text-white" : "bg-white text-black"
              }`}
            >
              <Send size={22} className={state === "sending" ? "animate-pulse" : ""} />
              {state === "idle" && "Dispatch Message"}
              {state === "sending" && "Dispatching..."}
              {state === "success" && "Message Delivered"}
              {state === "error" && "Error - Try Again"}
            </button>
            
            {state === "success" && (
              <p className="text-center text-accent text-xs tracking-widest uppercase mt-6 animate-pulse">
                I'll get back to you as soon as possible!
              </p>
            )}
          </form>
        </motion.div>
      </div>

      <footer className="w-full max-w-[1400px] mx-auto pb-12 px-6 md:px-12 mt-[150vh]">
        <div className="bg-zinc-900/30 backdrop-blur-[40px] border border-zinc-800/30 rounded-3xl p-6 px-16 md:px-48 flex flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-start">
            <span className="text-2xl font-black tracking-tighter text-white">HM</span>
            <span className="text-[8px] uppercase tracking-[0.5em] font-black text-zinc-700 mt-1">Harshit Mishra</span>
          </div>

          <div className="flex items-center gap-10">
            <a href="https://github.com/harshit-001-it" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-accent transition-all transform hover:scale-125">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/harshit-mishra-51275b219/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-accent transition-all transform hover:scale-125">
              <FaLinkedin size={22} />
            </a>
          </div>
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
