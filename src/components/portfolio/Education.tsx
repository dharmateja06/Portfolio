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
    <section id="education" className="relative py-16 sm:py-20">
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
              className="glass relative overflow-hidden rounded-xl p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                <GraduationCap className="h-4 w-4 text-foreground/80" />
              </div>
              <h3 className="font-display text-lg font-semibold">{e.school}</h3>
              <p className="mt-1 text-sm text-foreground/80">{e.degree}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-xs text-foreground/70">{e.period}</span>
                <span className="font-mono text-xs text-muted-foreground">{e.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}