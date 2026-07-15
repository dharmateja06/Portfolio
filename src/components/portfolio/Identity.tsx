import { motion } from "framer-motion";

export function Identity() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric"
        >
          Identity
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mt-4 max-w-4xl font-display text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-6xl md:text-7xl"
        >
          I build intelligent systems, scalable data solutions, and user-focused applications.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base text-neutral-400"
        >
          From AI models and data pipelines to cloud platforms and full-stack products, I create
          solutions that transform data into impact.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-neutral-800 sm:grid-cols-4"
        >
          {["Full-Stack", "AI Systems", "UI/UX", "Shipped"].map((t) => (
            <div
              key={t}
              className="bg-black px-4 py-6 text-sm font-semibold text-white"
            >
              {t}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
