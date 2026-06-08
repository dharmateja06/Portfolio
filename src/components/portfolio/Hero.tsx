import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
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
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
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
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
        >
          Hi, I'm <span className="text-gradient">Dharma Teja R C</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 font-mono text-base text-foreground/80 sm:text-lg md:text-xl"
        >
          <span className="text-accent">&gt;</span> {typed}
          <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 bg-primary animate-blink" />
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-5 max-w-xl text-sm text-muted-foreground sm:text-base"
        >
          B.Tech in Artificial Intelligence & Data Science. I build AI systems,
          scalable data pipelines, and production-ready web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/5"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
          <a
            href="https://tridalanutrafood.com/"
            target="_blank" rel="noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/5"
          >
            <Sparkles className="h-4 w-4 text-foreground/70" /> View Live Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          scroll ↓
        </motion.div>
      </div>
    </section>
  );
}