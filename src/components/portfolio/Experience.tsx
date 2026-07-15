import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

const timeline = [
  {
    role: "Web Developer Intern",
    org: "Dev Creations and Solutions",
    period: "Jul 2025 — Jan 2026",
    points: [
      "Built REST API-integrated applications handling structured data workflows.",
      "Designed backend data flows and database interactions.",
      "Worked with real-world data processing and system integration.",
    ],
  },
  {
    role: "Research Intern",
    org: "Centre of Excellence for Geopolitics & International Studies, REVA University",
    period: "May 2025 — Jun 2025",
    points: [
      "Conducted research on Artificial Intelligence, Cybersecurity, and Neurotechnology with a focus on global strategic applications.",
      "Studied the role of emerging technologies in modern warfare and cybersecurity.",
      "Co-authored a published research article on technology-driven warfare and cyber strategy.",
    ],
    link: "https://geopolitics.reva.edu.in/circular-detail/tech-war-in-the-contemporary-world-a-case-study-of-neuro-cyber-warfare",
  },
];

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="relative bg-[#f7f7f2] py-24 text-black sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Journey" title="Experience timeline." align="left" />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-3">
            {timeline.map((item, index) => (
              <button
                key={item.role}
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className={`flex w-full items-center justify-between rounded-[1.2rem] border px-5 py-4 text-left transition ${
                  activeIndex === index
                    ? "border-cyan-300 bg-cyan-50 text-slate-900"
                    : "border-slate-200 bg-white text-slate-700"
                }`}
              >
                <span className="font-display text-lg font-black tracking-[-0.02em]">
                  {item.role}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-500">
                  {item.period}
                </span>
              </button>
            ))}
          </div>

          <motion.div
            key={timeline[activeIndex].role}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.06)] sm:p-10"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-500">
              {timeline[activeIndex].period}
            </p>
            <h3 className="mt-4 font-display text-3xl font-black tracking-[-0.03em] text-slate-900 sm:text-4xl">
              {timeline[activeIndex].role}
            </h3>
            <p className="mt-3 text-base text-slate-600">{timeline[activeIndex].org}</p>
            {timeline[activeIndex].link ? (
              <a
                href={timeline[activeIndex].link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center text-sm font-semibold text-slate-900 underline decoration-cyan-500 underline-offset-4"
              >
                Read article
              </a>
            ) : null}
            <ul className="mt-8 space-y-3 text-sm leading-7 text-slate-700">
              {timeline[activeIndex].points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
