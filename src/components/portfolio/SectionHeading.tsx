import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "left" ? "text-left mx-0" : "text-center mx-auto";

  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-cyan-500"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="mt-4 font-display text-[clamp(2rem,4.2vw,3rem)] font-black tracking-[-0.04em] text-slate-900"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
