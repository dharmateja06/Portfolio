import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";

export function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-[#f7f7f2] py-10 text-[#111111] sm:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#4b5563]">
            Achievements
          </p>
          <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-[#111111] sm:text-5xl lg:text-6xl">
            Milestones that reflect depth and execution.
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-[#4b5563] sm:text-lg">
            A collection of recognitions that reflect my learning, problem-solving ability, leadership, and commitment to building impactful technology.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {achievements.map((item, index) => (
            <motion.article
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -4, boxShadow: "0 18px 40px rgba(17,17,17,0.08)" }}
              className="rounded-[1.5rem] border border-[#111111]/10 bg-[#FFFFFF] p-6 shadow-[0_10px_30px_rgba(17,17,17,0.04)]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#4b5563]">
                {item.year}
              </p>
              <h3 className="mt-4 font-display text-2xl font-black tracking-[-0.03em] text-[#111111]">
                {item.title}
              </h3>
              <p className="mt-3 text-base font-semibold text-[#111111]">{item.event}</p>
              <p className="mt-4 text-sm leading-7 text-[#4b5563]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
