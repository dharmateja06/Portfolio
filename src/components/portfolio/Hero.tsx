import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { HeroScene } from "./HeroScene";

const roles = ["AI Engineer", "Data Engineer", "Full-Stack Developer", "ML Engineer", "Problem Solver"];

function useTyping(words: string[]) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const t = setTimeout(() => {
      if (!del) {
        setText(w.slice(0, text.length + 1));
        if (text.length + 1 === w.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(w.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDel(false); setI((i + 1) % words.length); }
      }
    }, del ? 40 : 80);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

export function Hero() {
  const typed = useTyping(roles);
  return (
    <section id="hero" className="relative isolate min-h-screen overflow-hidden bg-hero noise">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyber opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyber" />
          </span>
          Available for collaborations · 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Hi, I'm <span className="text-gradient">Dharma Teja R C</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 max-w-2xl font-mono text-sm text-foreground/80 sm:text-base md:text-lg lg:text-xl"
        >
          <span className="text-accent">&gt;</span> {typed}
          <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 bg-primary animate-blink" />
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-5 max-w-xl px-1 text-sm text-muted-foreground sm:px-0 sm:text-base"
        >
          B.Tech in Artificial Intelligence & Data Science. I build AI systems,
          scalable data pipelines, and production-ready web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-10 flex w-full max-w-md flex-wrap items-center justify-center gap-3 px-2 sm:max-w-xl sm:gap-4 sm:px-0"
        >
          <a
            href="#projects"
            className="group relative inline-flex flex-1 items-center justify-center gap-2 rounded-none border border-white/10 bg-[#c5b395] px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d8c8a8] before:absolute before:inset-0 before:-z-10 before:rounded-none before:border before:border-white/10 before:bg-white/8 before:translate-x-1 before:translate-y-1 sm:flex-none"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="group relative inline-flex flex-1 items-center justify-center gap-2 rounded-none border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 before:absolute before:inset-0 before:-z-10 before:rounded-none before:border before:border-white/10 before:bg-white/5 before:translate-x-1 before:translate-y-1 sm:flex-none"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}