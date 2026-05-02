import { motion } from "framer-motion";
import { Brain, Code2, Trophy, Rocket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const cards = [
  { icon: Brain, title: "AI × Web Hybrid", text: "I bridge intelligent systems with production-ready interfaces." },
  { icon: Trophy, title: "Hackathon Achiever", text: "Multiple wins and finalist placements across India." },
  { icon: Rocket, title: "Shipped to Production", text: "Live client websites built end-to-end during internship." },
  { icon: Code2, title: "Design + Engineering", text: "I write the logic and craft the experience around it." },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title={<>Engineer of <span className="text-gradient">logic & experience</span></>}
          description="AI & Data Science student with hands-on experience in full-stack development, AI systems, and UI/UX design — building things that feel as good as they perform."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-2xl p-6"
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition group-hover:opacity-60"
                style={{ background: "var(--gradient-violet-blue)" }}
              />
              <c.icon className="mb-4 h-6 w-6 text-cyber" />
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}