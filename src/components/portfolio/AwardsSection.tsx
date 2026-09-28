import { useMemo, useRef } from "react";
import { useScroll } from "framer-motion";
import { AwardCard } from "./AwardCard";
import { awardsMockData } from "./mockData";

export function AwardsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const awards = useMemo(() => awardsMockData, []);

  return (
    <section id="achievements" className="relative overflow-hidden bg-[#f7f7f2] py-12 text-[#111111] sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl lg:mb-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#4b5563]">
            Awards
          </p>
          <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-[#111111] sm:text-5xl lg:text-6xl">
            Awards
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-[#4b5563] sm:text-lg">
            A few milestones from hackathons, internships, certifications, and leadership that reflect my continuous learning and growth.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[0.35fr_0.65fr] lg:items-start lg:gap-8">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#4b5563]">
              Recognition
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#4b5563]">
              A concise view of the moments that shaped my growth across technical execution, collaboration, and problem-solving.
            </p>
          </div>

          <div ref={sectionRef} className="relative h-[360vh] lg:block">
            <div className="sticky top-8 h-[72vh]">
              <div className="relative mx-auto h-full w-full max-w-[560px]">
                {awards.map((award, index) => (
                  <AwardCard
                    key={`${award.year}-${award.title}`}
                    award={award}
                    index={index}
                    total={awards.length}
                    scrollYProgress={scrollYProgress}
                    isMobile={false}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:hidden">
            {awards.map((award, index) => (
              <AwardCard
                key={`${award.year}-${award.title}-mobile`}
                award={award}
                index={index}
                total={awards.length}
                scrollYProgress={scrollYProgress}
                isMobile={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
