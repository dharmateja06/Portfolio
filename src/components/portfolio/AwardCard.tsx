import { motion, useReducedMotion, useSpring, useTransform, type MotionValue } from "framer-motion";
import type { AwardItem } from "./mockData";

type AwardCardProps = {
  award: AwardItem;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  isMobile: boolean;
};

const CARD_OFFSET = 26;
const CARD_START_Y = 120;

export function AwardCard({ award, index, total, scrollYProgress, isMobile }: AwardCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const start = 0.05 + index * 0.12;
  const end = start + 0.16;
  const progress = useTransform(scrollYProgress, [start, end], [0, 1], { clamp: true });

  const targetScale = index === 0 ? 1 : index === 1 ? 0.96 : index === 2 ? 0.93 : index === 3 ? 0.9 : 0.87;
  const targetOpacity = index === 0 ? 1 : index === 1 ? 0.75 : index === 2 ? 0.55 : index === 3 ? 0.4 : 0.35;

  const y = useSpring(useTransform(progress, [0, 1], [CARD_START_Y, -index * CARD_OFFSET]), {
    stiffness: 130,
    damping: 28,
    mass: 0.9,
  });
  const scale = useSpring(useTransform(progress, [0, 0.5, 1], [0.98, targetScale, targetScale]), {
    stiffness: 120,
    damping: 24,
    mass: 0.9,
  });
  const opacity = useSpring(useTransform(progress, [0, 0.45, 1], [0.4, targetOpacity, targetOpacity]), {
    stiffness: 120,
    damping: 24,
    mass: 0.9,
  });
  const blur = useSpring(useTransform(progress, [0, 0.5, 1], [6, 2, 0]), {
    stiffness: 100,
    damping: 22,
    mass: 0.8,
  });

  if (isMobile) {
    return (
      <motion.article
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="rounded-[24px] border border-black/8 bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.05)] sm:p-7"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#4b5563]">
          {award.year}
        </p>
        <h3 className="mt-4 font-display text-xl font-black tracking-[-0.03em] text-[#111111]">
          {award.title}
        </h3>
        <p className="mt-3 text-sm font-semibold text-[#111111]">{award.organization}</p>
        <p className="mt-4 text-sm leading-7 text-[#4b5563]">{award.description}</p>
      </motion.article>
    );
  }

  return (
    <motion.article
      style={{
        y: shouldReduceMotion ? -index * CARD_OFFSET : y,
        scale: shouldReduceMotion ? targetScale : scale,
        opacity: shouldReduceMotion ? targetOpacity : opacity,
        filter: shouldReduceMotion ? undefined : `blur(${blur}px)`,
        zIndex: total - index,
      }}
      className="absolute inset-x-0 top-0 w-full rounded-[24px] border border-black/8 bg-white p-7 shadow-[0_14px_34px_rgba(15,23,42,0.05)] sm:p-8"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#4b5563]">
        {award.year}
      </p>
      <h3 className="mt-4 font-display text-2xl font-black tracking-[-0.03em] text-[#111111]">
        {award.title}
      </h3>
      <p className="mt-3 text-sm font-semibold text-[#111111]">{award.organization}</p>
      <p className="mt-4 text-sm leading-7 text-[#4b5563]">{award.description}</p>
    </motion.article>
  );
}
