import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { title: "Winner — Best AI Team", event: "Hackathon 2024" },
  { title: "2nd Runner-Up", event: "IOTOPIA" },
  { title: "Top 15", event: "SJBIT Hackathon" },
  { title: "Top 10% Finalist", event: "Bengaluru Hackathon" },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Recognition"
          title={<>Achievements & <span className="text-gradient">wins</span></>}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass group flex items-center gap-4 rounded-2xl p-5"
            >
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-blue glow-neon">
                <Award className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold">{it.title}</h3>
                <p className="font-mono text-xs text-muted-foreground">{it.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}