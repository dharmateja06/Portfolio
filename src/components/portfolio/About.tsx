import { motion } from "framer-motion";
import { Brain, Code2, Trophy, Rocket, ShieldCheck, Users, ImagePlus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const cards = [
  { icon: Brain, title: "AI × Web Hybrid", text: "I bridge intelligent systems with production-ready interfaces." },
  { icon: Trophy, title: "Hackathon Achiever", text: "Multiple wins and finalist placements across India." },
  { icon: Rocket, title: "Shipped to Production", text: "Live client websites built end-to-end during internship." },
  { icon: Code2, title: "Design + Engineering", text: "I write the logic and craft the experience around it." },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title={<>Engineer of <span className="text-gradient">logic & experience</span></>}
          description="AI & Data Science student with hands-on experience in full-stack development, AI systems, and UI/UX design — building things that feel as good as they perform."
        />
        <div className="mb-12 grid gap-6 md:grid-cols-[280px_1fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass group relative mx-auto flex aspect-square w-full max-w-[280px] flex-col items-center justify-center overflow-hidden rounded-2xl border-dashed text-center"
            style={{ borderStyle: "dashed" }}
          >
            {/* Replace this block with your photo: <img src="/me.jpg" alt="Dharma Teja R C" className="h-full w-full object-cover" /> */}
            <ImagePlus className="h-8 w-8 text-cyber" />
            <p className="mt-3 px-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Upload photo here
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyber">
              // leadership
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold">
              Leading communities, building culture
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyber" />
                <span><span className="font-semibold text-foreground">Vice President</span> — REVA Cybersecurity Club</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="mt-0.5 h-4 w-4 shrink-0 text-cyber" />
                <span><span className="font-semibold text-foreground">Coordinator</span> — Inklings Club, FACE Student Forum</span>
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-2xl p-6"
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition group-hover:opacity-60"
                style={{ background: "var(--gradient-violet-blue)" }}
              />
              <c.icon className="mb-4 h-6 w-6 text-cyber" />
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}