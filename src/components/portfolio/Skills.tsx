import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const groups = [
  { title: "Core Programming", items: ["Python", "SQL", "Java", "JavaScript", "C", "Git", "GitHub", "Docker"] },
  { title: "AI / Machine Learning", items: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "CNN", "Generative AI", "RAG Systems", "Model Deployment"] },
  { title: "Data Engineering", items: ["ETL Pipelines", "Data Modeling", "PostgreSQL", "MySQL", "Apache Kafka", "Hadoop", "Data Quality", "Batch Processing"] },
  { title: "Cloud & Data Platforms", items: ["Salesforce Data Cloud", "Informatica Cloud", "Cloud Storage", "Data Streams", "Identity Resolution", "Customer 360", "Data Integration", "Data Analytics"] },
  { title: "Full-Stack Development", items: ["React.js", "Flask", "REST APIs", "Backend Development", "Frontend Development", "Database Design", "Authentication", "Responsive Design"] },
  { title: "Tools & Analytics", items: ["Power BI", "Figma", "VS Code", "Postman", "Linux", "API Testing", "System Design", "Problem Solving"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Toolkit"
          title={<>Skills, languages & <span className="text-gradient">stacks</span></>}
          description="Technologies and platforms I use to build AI systems, engineer scalable data solutions, and develop production-ready applications."
        />
        <div className="grid items-stretch gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass relative flex h-full flex-col justify-start rounded-2xl p-6 transition hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="mb-2 flex items-start justify-between gap-3">
                <h3 className="font-display text-base font-semibold tracking-[-0.03em] sm:text-lg md:text-xl">{g.title}</h3>
              </div>
              <div className="mt-1 flex flex-wrap items-start gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-foreground/80 transition hover:border-primary/40 hover:text-primary sm:px-3.5 sm:text-sm"
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