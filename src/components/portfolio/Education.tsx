import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const education = [
  {
    school: "REVA University, Bengaluru",
    degree: "B.Tech — Artificial Intelligence & Data Science",
    period: "2023 — 2027",
    score: "CGPA: 8.9 / 10",
  },
  {
    school: "Vasishta PU College, Ballari",
    degree: "PCMB",
    period: "2021 — 2023",
    score: "91.17%",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Education"
          title={<>Academic <span className="text-gradient">foundation</span></>}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass group relative overflow-hidden rounded-2xl p-6"
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition group-hover:opacity-60"
                style={{ background: "var(--gradient-violet-blue)" }}
              />
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-blue glow-neon">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold">{e.school}</h3>
              <p className="mt-1 text-sm text-foreground/80">{e.degree}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-xs text-cyber">{e.period}</span>
                <span className="font-mono text-xs text-muted-foreground">{e.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}