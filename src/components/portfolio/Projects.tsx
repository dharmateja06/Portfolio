import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const layoutClasses = [
  "lg:col-span-6",
  "lg:col-span-6",
  "lg:col-span-6",
  "lg:col-span-6",
  "lg:col-span-6",
  "lg:col-span-6",
];

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`group overflow-hidden rounded-[1.85rem] border border-[#111111]/8 bg-white/80 shadow-[0_10px_35px_rgba(17,17,17,0.04)] backdrop-blur-sm ${layoutClasses[index % layoutClasses.length]}`}
    >
      <div className={`relative flex min-h-[240px] flex-col justify-between overflow-hidden bg-gradient-to-br p-7 sm:p-8 ${p.visual}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_36%)]" />
        <div className="relative flex items-center justify-between">
          <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-700">
            {p.category}
          </span>
          <span className="font-display text-[clamp(2rem,5vw,3rem)] font-black leading-none text-slate-300">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="relative mt-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-600">
            Featured build
          </p>
          <h3 className="mt-3 font-display text-2xl font-black tracking-[-0.03em] text-slate-900 sm:text-3xl">
            {p.title}
          </h3>
        </div>
      </div>

      <div className="flex h-full flex-col justify-between px-7 py-7 sm:px-8 sm:py-8">
        <div>
          <p className="text-sm leading-7 text-slate-600">{p.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] font-medium text-slate-700">
                {t}
              </span>
            ))}
          </div>
        </div>
        {p.live ? (
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition group-hover:text-[#2563eb]"
          >
            View project
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            <ExternalLink className="ml-1 h-3 w-3 opacity-0 transition group-hover:opacity-100" />
          </a>
        ) : (
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-neutral-500">
            Read more
            <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative bg-[#f7f7f2] py-28 sm:py-36">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="My Work"
          title="Featured Projects"
          description="From RAG systems and computer vision to live client websites — a mix of intelligence and craft."
          align="left"
        />
        <div className="grid gap-4 lg:grid-cols-12">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
