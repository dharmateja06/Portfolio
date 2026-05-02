import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const groups = [
  { title: "Languages", items: ["Python", "JavaScript", "C", "Java"] },
  { title: "Web", items: ["React.js", "Flask", "HTML", "CSS", "REST APIs"] },
  { title: "AI / ML", items: ["Machine Learning", "CNN", "Computer Vision", "NLP"] },
  { title: "Tools", items: ["Git", "GitHub", "Netlify", "Figma", "Power BI"] },
  { title: "Design", items: ["UI/UX", "Responsive", "Web Aesthetics", "Prototyping"] },
  { title: "Concepts", items: ["RAG Systems", "Data Structures", "REST", "Cloud Basics"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Toolkit"
          title={<>Skills, languages & <span className="text-gradient">stacks</span></>}
          description="The technologies I use to design, build, and ship intelligent products."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass relative rounded-xl p-6 transition hover:border-white/20"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-base font-semibold">{g.title}</h3>
                <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-foreground/80 transition hover:border-primary/40 hover:text-primary"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}