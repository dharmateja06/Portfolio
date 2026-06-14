import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { title: "Winner — Best AI Team", event: "JIT Hackathon 2024" },
  { title: "2nd Runner-Up", event: "IOTOPIA Hackathon,REVA University" },
  { title: "Top 15", event: "AXIOM Hackathon , SJBIT" },
  { title: "Top 10% Finalist", event: "Great Bengaluru Hackathon" },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-20 sm:py-24">
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
              className="glass flex items-center gap-4 rounded-xl p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                <Award className="h-4 w-4 text-foreground/80" />
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