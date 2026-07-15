import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Achievement } from "@/data/portfolio";

type AwardsScrollEngineProps = {
  achievements: Achievement[];
  colors: string[];
};

export function AwardsScrollEngine({ achievements, colors }: AwardsScrollEngineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const firstX = useTransform(scrollYProgress, [0, 0.35, 1], [-18, 0, 0]);
  const firstOpacity = useTransform(scrollYProgress, [0, 0.14, 0.35, 1], [0, 1, 1, 1]);
  const firstY = useTransform(scrollYProgress, [0, 0.35], [24, 0]);
  const firstScale = useTransform(scrollYProgress, [0, 0.35], [0.96, 1]);
  const firstRotate = useTransform(scrollYProgress, [0, 0.35], [-2, 0]);

  const secondX = useTransform(scrollYProgress, [0.12, 0.48, 1], [18, 0, 0]);
  const secondOpacity = useTransform(scrollYProgress, [0.12, 0.28, 0.48, 1], [0, 1, 1, 1]);
  const secondY = useTransform(scrollYProgress, [0.12, 0.48], [28, 0]);
  const secondScale = useTransform(scrollYProgress, [0.12, 0.48], [0.96, 1]);
  const secondRotate = useTransform(scrollYProgress, [0.12, 0.48], [1.5, 0]);

  const thirdX = useTransform(scrollYProgress, [0.3, 0.63, 1], [-12, 0, 0]);
  const thirdOpacity = useTransform(scrollYProgress, [0.3, 0.46, 0.63, 1], [0, 1, 1, 1]);
  const thirdY = useTransform(scrollYProgress, [0.3, 0.63], [26, 0]);
  const thirdScale = useTransform(scrollYProgress, [0.3, 0.63], [0.96, 1]);
  const thirdRotate = useTransform(scrollYProgress, [0.3, 0.63], [-1, 0]);

  const fourthX = useTransform(scrollYProgress, [0.45, 0.8, 1], [12, 0, 0]);
  const fourthOpacity = useTransform(scrollYProgress, [0.45, 0.6, 0.8, 1], [0, 1, 1, 1]);
  const fourthY = useTransform(scrollYProgress, [0.45, 0.8], [26, 0]);
  const fourthScale = useTransform(scrollYProgress, [0.45, 0.8], [0.96, 1]);
  const fourthRotate = useTransform(scrollYProgress, [0.45, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-[140vh]">
      <div className="sticky top-0 flex h-[78vh] items-center py-3">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:items-center">
          <div className="max-w-xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-electric">
              Awards
            </p>
            <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
              Recognition <span className="font-serif-accent italic text-electric">in motion</span>
            </h2>
            <p className="mt-5 text-base leading-[1.8] text-black/70 sm:text-lg">
              A staggered scroll narrative that brings each milestone into focus as the page moves.
            </p>
          </div>

          <div className="relative h-[500px] w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white/70 p-4 shadow-[0_20px_80px_rgba(15,23,42,0.06)] sm:p-6">
            <motion.article
              style={{
                x: firstX,
                y: firstY,
                scale: firstScale,
                rotate: firstRotate,
                opacity: firstOpacity,
                backgroundColor: colors[0],
                color: "#041018",
              }}
              className="absolute left-0 top-0 w-[min(86%,300px)] rounded-[1.8rem] border border-black/10 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8"
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.24em] opacity-70">
                {achievements[0]?.year}
              </div>
              <h3 className="mt-5 font-display text-xl font-black leading-tight sm:text-2xl">
                {achievements[0]?.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed opacity-80">
                {achievements[0]?.event}
              </p>
            </motion.article>

            <motion.article
              style={{
                x: secondX,
                y: secondY,
                scale: secondScale,
                rotate: secondRotate,
                opacity: secondOpacity,
                backgroundColor: colors[1],
                color: "#041018",
              }}
              className="absolute right-0 top-24 w-[min(86%,300px)] rounded-[1.8rem] border border-black/10 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8"
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.24em] opacity-70">
                {achievements[1]?.year}
              </div>
              <h3 className="mt-5 font-display text-xl font-black leading-tight sm:text-2xl">
                {achievements[1]?.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed opacity-80">
                {achievements[1]?.event}
              </p>
            </motion.article>

            <motion.article
              style={{
                x: thirdX,
                y: thirdY,
                scale: thirdScale,
                rotate: thirdRotate,
                opacity: thirdOpacity,
                backgroundColor: colors[2],
                color: "#041018",
              }}
              className="absolute left-6 bottom-2 w-[min(86%,300px)] rounded-[1.8rem] border border-black/10 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8"
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.24em] opacity-70">
                {achievements[2]?.year}
              </div>
              <h3 className="mt-5 font-display text-xl font-black leading-tight sm:text-2xl">
                {achievements[2]?.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed opacity-80">
                {achievements[2]?.event}
              </p>
            </motion.article>

            <motion.article
              style={{
                x: fourthX,
                y: fourthY,
                scale: fourthScale,
                rotate: fourthRotate,
                opacity: fourthOpacity,
                backgroundColor: colors[3],
                color: "#041018",
              }}
              className="absolute right-6 bottom-16 w-[min(86%,300px)] rounded-[1.8rem] border border-black/10 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8"
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.24em] opacity-70">
                {achievements[3]?.year}
              </div>
              <h3 className="mt-5 font-display text-xl font-black leading-tight sm:text-2xl">
                {achievements[3]?.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed opacity-80">
                {achievements[3]?.event}
              </p>
            </motion.article>
          </div>
        </div>
      </div>
    </div>
  );
}
