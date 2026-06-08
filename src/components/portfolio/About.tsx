import { motion } from "framer-motion";
import { Brain, Code2, Trophy, Rocket, ShieldCheck, Users, Database } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import Photo from "../../Photo.jpeg";

const cards = [
  { icon: Brain, title: "AI × Web Hybrid", text: "I bridge intelligent systems with production-ready interfaces." },
  { icon: Trophy, title: "Hackathon Achiever", text: "Multiple wins and finalist placements across India." },
  { icon: Rocket, title: "Shipped to Production", text: "Live client websites built end-to-end during internship." },
  { icon: Code2, title: "Design + Engineering", text: "I write the logic and craft the experience around it." },
  { icon: Database, title: "Data Engineering", text: "Built ETL workflows, SQL databases, cloud data systems, and scalable data pipelines for real-world applications." },
];

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title={<>AI Engineer, Data Engineer & <span className="text-gradient">Full-Stack Developer</span></>}
          description="I am an Artificial Intelligence & Data Science student passionate about building intelligent systems, scalable data solutions, and impactful digital products. My experience spans AI/ML, Data Engineering, cloud platforms, ETL pipelines, database systems, and full-stack application development."
        />
        <div className="mb-12 grid gap-6 md:grid-cols-[280px_1fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass relative mx-auto flex aspect-square w-full max-w-[280px] overflow-hidden rounded-xl"
          >
            <img src={Photo} alt="Dharma Teja R C" className="h-full w-full object-contain" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-xl p-6"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60">
               leadership
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold">
              Leading communities, building culture
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-foreground/70" />
                <span><span className="font-semibold text-foreground">Vice President</span> — REVA Cybersecurity Club</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="mt-0.5 h-4 w-4 shrink-0 text-foreground/70" />
                <span><span className="font-semibold text-foreground">Coordinator</span> — Inklings Club, FACE Student Forum</span>
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass mt-6 rounded-xl p-6"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60">What I Work On</p>
          <div className="mt-4 grid gap-3 text-sm text-foreground/80 sm:grid-cols-2">
            {[
              "Artificial Intelligence & Machine Learning",
              "Data Engineering & ETL Pipelines",
              "Cloud Data Platforms",
              "Full-Stack Development",
              "APIs & System Design",
              "Database Engineering",
            ].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">{item}</span>
            ))}
          </div>
        </motion.div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass relative overflow-hidden rounded-xl p-6"
            >
              <c.icon className="mb-4 h-5 w-5 text-foreground/70" />
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}