import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  live?: string;
  github?: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "Policy Lens AI",
    category: "RAG · NLP · Decision Support",
    description:
      "Retrieval-Augmented Generation system that analyzes government schemes — extracting, summarizing, and surfacing intelligent insights from dense policy documents.",
    tech: ["Python", "RAG", "LangChain", "NLP"],
    accent: "from-violet-500 to-indigo-500",
  },
  {
    title: "AgriTech AI Assistant",
    category: "Computer Vision · Agriculture",
    description:
      "CNN-based plant disease detection at 89% accuracy, with crop recommendation, soil prediction and offline multilingual support for rural users.",
    tech: ["CNN", "TensorFlow", "Flask", "React"],
    accent: "from-emerald-400 to-cyan-500",
  },
  {
    title: "Image Guard",
    category: "AI Verification · Computer Vision",
    description:
      "Image-based location authenticity detection with explainable computer-vision outputs — verifying whether an image truly belongs to its claimed origin.",
    tech: ["Python", "OpenCV", "Deep Learning"],
    accent: "from-blue-500 to-fuchsia-500",
  },
  {
    title: "Tridala Nutrafood",
    category: "Production Site · Internship",
    description:
      "Real-world e-commerce site shipped during my Dev Creations internship — UI, frontend structure, responsiveness and integration for a live client.",
    tech: ["React", "Responsive", "Integration"],
    live: "https://tridalanutrafood.com/",
    accent: "from-amber-400 to-rose-500",
  },
  {
    title: "Vertex Advisory",
    category: "UI / UX Design",
    description:
      "Modern advisory brand experience focused on professional positioning, clear user flow and a confident visual identity.",
    tech: ["UI/UX", "Figma", "Brand"],
    live: "https://vertexadvisory.in/",
    accent: "from-cyan-400 to-blue-600",
  },
  {
    title: "Tridala — UI/UX",
    category: "Product Design",
    description:
      "Clean, product-focused interface for a nutraceutical brand, with strong usability and a refined visual system.",
    tech: ["Figma", "UX", "Design"],
    live: "https://tridalanutrafood.com/",
    accent: "from-fuchsia-500 to-purple-600",
  },
];

function TiltCard({ p }: { p: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="glass relative flex h-full flex-col overflow-hidden rounded-xl p-6 will-change-transform"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{p.category}</span>
      <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-foreground/80">{t}</span>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-2 pt-6">
        {p.live && (
          <a
            href={p.live} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1.5 text-xs font-semibold text-background transition hover:opacity-90"
          >
            <ExternalLink className="h-3.5 w-3.5" /> Live Demo
          </a>
        )}
        {p.github && (
          <a
            href={p.github} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-semibold text-foreground transition hover:bg-white/5"
          >
            <Github className="h-3.5 w-3.5" /> Code
          </a>
        )}
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title={<>Projects that <span className="text-gradient">ship & think</span></>}
          description="From RAG systems and computer vision to live client websites — a mix of intelligence and craft."
        />
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((p) => <TiltCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}