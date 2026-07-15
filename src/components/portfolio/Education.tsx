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
  {
    school: "St.Peter's ENG MED High School, Ballari",
    degree: "10th Standard",
    period: "2020 — 2021",
    score: "94.56%",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation."
          align="left"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="agency-card rounded-2xl p-6 hover:scale-100 sm:p-8"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 bg-black">
                <GraduationCap className="h-4 w-4 text-electric" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">{e.school}</h3>
              <p className="mt-1 text-sm text-neutral-300">{e.degree}</p>
              <div className="mt-4 flex flex-wrap items-end justify-between gap-3 border-t border-neutral-800 pt-4">
                <span className="font-mono text-xs text-neutral-500">{e.period}</span>
                <span className="font-mono text-sm font-semibold text-electric">{e.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
