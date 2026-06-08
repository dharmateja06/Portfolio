import { motion } from "framer-motion";
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
    org: "Center of Excellence for Geopolitics and International Studies, REVA University",
    period: "May 2025 — Jun 2025",
    points: [
      "Analyzed large-scale research datasets and technical reports.",
      "Applied AI-driven methodologies for data analysis and insights generation.",
      "Contributed to research publications involving technology and data-centric studies.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Journey"
          title={<>Experience <span className="text-gradient">timeline</span></>}
        />
        <div className="relative">
          <div className="absolute left-3 top-2 h-full w-px bg-white/10 md:left-4" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <motion.div
                key={t.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                <span className="absolute left-1.5 top-2.5 h-2.5 w-2.5 rounded-full border border-white/30 bg-background md:left-2.5" />
                <div className="glass rounded-xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold">{t.role}</h3>
                    <span className="font-mono text-xs text-foreground/70">{t.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{t.org}</p>
                  <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                    {t.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/50" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}