import { motion } from "framer-motion";

export function Identity() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyber"
        >
          // identity
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl"
        >
          I build both <span className="text-gradient">logic</span> <br className="hidden sm:block" />
          and <span className="text-gradient">experience</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground"
        >
          Full-stack engineering. AI systems. Interface design. Real-world deployments.
          One person, one mind, one cohesive product surface.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-4"
        >
          {["Full-Stack", "AI Systems", "UI/UX", "Shipped"].map((t) => (
            <div key={t} className="bg-card/40 px-4 py-6 text-sm font-medium backdrop-blur">
              {t}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}