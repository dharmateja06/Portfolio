import { motion } from "framer-motion";
import Photo from "../../photo2.png";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-4 h-px w-full bg-zinc-900" />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <img
              src={Photo}
              alt="Dharma Teja R C"
              className="h-[320px] w-full max-w-[360px] object-cover object-top md:h-[380px] md:max-w-[420px] lg:h-[430px] lg:max-w-[460px]"
              style={{ maskImage: "linear-gradient(to top, transparent 0%, black 35%)", WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 35%)" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <h2 className="max-w-2xl text-4xl font-black uppercase tracking-[-0.05em] text-white md:text-5xl">
              AI Engineer, Data Engineer & Full-Stack Developer.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              An Artificial Intelligence & Data Science student at REVA University focused on bridging intelligent machine learning models with production-ready software. Experienced in crafting scalable data systems, automated pipelines, and responsive interfaces.
            </p>

            <div className="mt-16 border-t border-zinc-900 pt-6">
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-zinc-500">COMMUNITY LEADERSHIP // CULTURE BUILDING</p>
              <div className="mt-6 space-y-0">
                <article className="border-t border-zinc-900 py-4">
                  <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                    <span className="font-mono text-[0.88rem] uppercase tracking-[0.35em] text-[#c5b395]">[ Vice President ]</span>
                    <span className="text-base font-semibold text-white md:text-lg">REVA Cybersecurity Club</span>
                  </div>
                </article>
                <article className="border-t border-zinc-900 py-4">
                  <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                    <span className="font-mono text-[0.88rem] uppercase tracking-[0.35em] text-[#c5b395]">[ Coordinator ]</span>
                    <span className="text-base font-semibold text-white md:text-lg">Inklings Club, FACE Student Forum</span>
                  </div>
                </article>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-20 border-t border-zinc-900 pt-8"
        >
          <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-zinc-500">WHAT I WORK ON</p>
              <h3 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl lg:text-5xl">
                Building intelligent systems, scalable platforms, and polished digital experiences.
              </h3>
            </div>

            <div className="space-y-0">
              {[
                {
                  title: "Artificial Intelligence & ML",
                  description: "Practical AI systems, experimentation, and model-driven products focused on real business outcomes.",
                },
                {
                  title: "Data Engineering & Pipelines",
                  description: "Reliable ETL workflows, optimized schemas, and cloud-ready data infrastructure for modern teams.",
                },
                {
                  title: "Full-Stack Development",
                  description: "Responsive interfaces and backend integrations designed to make data and AI feel accessible.",
                },
                {
                  title: "Cloud Data Platforms",
                  description: "Connected systems, analytics workflows, and deployment patterns that scale with the product.",
                },
              ].map((item, idx) => (
                <article key={item.title} className="border-t border-zinc-900 py-5">
                  <div className="grid gap-3 md:grid-cols-[88px_1fr] md:items-start">
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.35em] text-[#c5b395]">0{idx + 1}</span>
                    <div>
                      <h4 className="text-xl font-semibold tracking-[-0.03em] text-white md:text-2xl">{item.title}</h4>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400 md:text-[0.95rem]">{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}