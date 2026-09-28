import { motion } from "framer-motion";
import { achievements, type Achievement } from "@/data/portfolio";

function AchievementCard({ item, index }: { item: Achievement; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ y: -2 }}
      className={`relative rounded-[1.6rem] border border-[#111111]/10 bg-white p-6 shadow-[0_10px_25px_rgba(17,17,17,0.04)] ${index === 0 ? "md:mt-0" : "-mt-5 md:-mt-8"}`}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#4b5563]">
        {item.year}
      </p>
      <h3 className="mt-4 font-display text-2xl font-black tracking-[-0.03em] text-[#111111]">
        {item.title}
      </h3>
      <p className="mt-3 text-base font-semibold text-[#111111]">{item.event}</p>
      <p className="mt-4 text-sm leading-7 text-[#4b5563]">{item.description}</p>
    </motion.article>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-[#f7f7f2] py-10 text-[#111111] sm:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl md:mb-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#4b5563]">
            Achievements
          </p>
          <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-[#111111] sm:text-5xl lg:text-6xl">
            GLOBAL RECOGNITION & ACHIEVEMENTS
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-[#4b5563] sm:text-lg">
            A collection of recognitions that reflect my learning, problem-solving ability, leadership, and commitment to building impactful technology.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#4b5563]">
              Achievements
            </p>
            <h3 className="mt-3 max-w-sm font-display text-3xl font-black tracking-[-0.03em] text-[#111111] sm:text-4xl">
              A compact record of impact, execution, and recognition.
            </h3>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center rounded-full border border-[#111111]/15 bg-white px-4 py-2 text-sm font-semibold text-[#111111] transition hover:bg-[#111111] hover:text-white"
            >
              View All
            </a>
          </div>

          <div className="space-y-4 md:space-y-3">
            {achievements.map((item, index) => (
              <AchievementCard key={`${item.year}-${item.title}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
