import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#FFFFFF] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,255,0,0.16),transparent_32%)]" />
      <div className="relative mx-auto grid min-h-[88vh] w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#111111]/12 bg-white px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#111111] shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D4FF00]" />
            Research · Design · Engineering
          </div>
          <h1 className="mt-8 font-display text-[clamp(3rem,7.5vw,7.3rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#111111]">
            Building the
            <span className="mt-2 block font-sans lowercase italic text-[#111111]">
              <em className="font-serif-accent text-[1.08em] font-normal italic">future</em>
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-[1.8] text-[#111111]/72 sm:text-xl">
            I build AI-native products, data systems, and polished interfaces that move from
            research to shipped reality with calm precision and velocity.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#contact" className="cta-pill px-6 py-3.5 text-sm sm:text-base">
              Start a project
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-full border border-[#111111]/15 px-5 py-3.5 text-sm font-semibold text-[#111111] transition hover:border-[#D4FF00] hover:text-[#111111]"
            >
              Explore the work
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "AI systems" },
              { label: "Data platforms" },
              { label: "Product interfaces" },
            ].map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center rounded-full border border-[#111111]/12 bg-[#FBFBF7] px-3.5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#111111]/80"
              >
                <span className="mr-2 h-2 w-2 rounded-full bg-[#D4FF00]" />
                {item.label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-[2rem] border border-[#111111]/12 bg-[#FFFFFF] p-6 shadow-[0_20px_80px_rgba(17,17,17,0.05)] sm:p-8"
        >
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#111111]/75">
            <Sparkles className="h-4 w-4 text-[#111111]" />
            Current focus
          </div>
          <div className="mt-6 space-y-3">
            {[
              { index: "01", text: "AI systems with measurable product outcomes" },
              { index: "02", text: "Data infrastructure designed for speed and trust" },
              { index: "03", text: "Interfaces that feel as sharp as the engineering behind them" },
            ].map((item) => (
              <motion.div
                key={item.index}
                whileHover={{ x: 4, letterSpacing: "0.04em" }}
                className="flex items-start gap-4 rounded-[1.2rem] border border-[#111111]/10 bg-[#FBFBF7] px-4 py-4 text-sm leading-7 text-[#111111]/78 transition"
              >
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-[#111111]">
                  {item.index}
                </span>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
