import { motion } from "framer-motion";

const disciplines = [
  {
    title: "AI & Software Development",
    eyebrow: "01 / Build",
    tags: ["Python", "React.js", "JavaScript", "TypeScript", "Flask", "REST APIs", "RAG"],
  },
  {
    title: "Databases & Backend",
    eyebrow: "02 / Systems",
    tags: ["MySQL", "PostgreSQL", "Supabase", "MongoDB", "Database Design", "API Integration"],
  },
  {
    title: "AI & Machine Learning",
    eyebrow: "03 / Intelligence",
    tags: ["Machine Learning", "Computer Vision", "CNN", "Image Processing", "Prompt Engineering"],
  },
  {
    title: "Tools & Platforms",
    eyebrow: "04 / Delivery",
    tags: ["Git", "GitHub", "Docker", "Vercel", "Netlify", "Figma", "Power BI"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative bg-[#f7f7f2] py-28 sm:py-36">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-500">
              Capabilities
            </p>
            <h2 className="mt-4 font-display text-5xl font-black tracking-[-0.04em] text-slate-900 sm:text-6xl md:text-7xl">
              TECH STACK.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-[1.8] text-slate-600 sm:text-lg">
              A focused stack for building AI products, robust data systems, and fast-moving interfaces.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 rounded-[2rem] border border-[#111111]/8 bg-white/80 p-4 shadow-[0_10px_35px_rgba(17,17,17,0.04)] backdrop-blur-sm sm:p-6"
        >
          <div className="space-y-4">
            {disciplines.map((discipline, index) => (
              <motion.article
                key={discipline.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ x: 6, scale: 1.005 }}
                className="group rounded-[1.45rem] border border-[#111111]/8 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.06),transparent_60%),rgba(255,255,255,0.85)] px-6 py-6 shadow-[0_10px_24px_rgba(17,17,17,0.03)] transition duration-300 hover:-translate-y-1 hover:border-[#111111]/15 hover:shadow-[0_16px_36px_rgba(17,17,17,0.08)]"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
                      {discipline.eyebrow}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-black tracking-[-0.03em] text-slate-900 transition group-hover:text-[#2563eb]">
                      {discipline.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {discipline.tags.map((skill) => (
                      <span key={skill} className="rounded-full border border-[#111111]/8 bg-white/90 px-3 py-2 text-[11px] font-medium text-slate-700 transition group-hover:border-[#2563eb]/30 group-hover:text-[#2563eb]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
