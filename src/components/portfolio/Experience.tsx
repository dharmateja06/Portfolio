import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const timeline = [
  {
    role: "Web Developer Intern",
    org: "Dev Creations and Solutions",
    period: "Jul 2025 — Jan 2026",
    points: [
      "Built real-world client websites including tridalanutrafood.com",
      "Owned UI, frontend structure and responsive integration",
      "Worked across design hand-off, components and API wiring",
    ],
  },
  {
    role: "Research Intern",
    org: "Center of Excellence for Geopolitics and International Studies, REVA University",
    period: "May 2025 — Jun 2025",
    points: [
      "Research at the intersection of AI, cybersecurity and geopolitics",
      "Co-authored a published article on Geopolitics",
      "Explored applied AI in policy and intelligence contexts",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Journey"
          title={<>Experience <span className="text-gradient">timeline</span></>}
        />
        <div className="relative">
          <div className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-violet to-primary opacity-50 md:left-4" />
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
                <span className="absolute left-1.5 top-2 h-3 w-3 rounded-full bg-violet-blue glow-neon md:left-2.5" />
                <div className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold">{t.role}</h3>
                    <span className="font-mono text-xs text-cyber">{t.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{t.org}</p>
                  <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                    {t.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
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