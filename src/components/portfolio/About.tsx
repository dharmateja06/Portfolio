import { motion } from "framer-motion";
import Photo from "../../photo2.png";

const capabilities = ["AI engineering", "Data systems", "Product design", "Cloud delivery"];

const leadershipItems = [
  { title: "Vice President", meta: "REVA Cybersecurity Club" },
  { title: "Coordinator", meta: "Inklings Club, FACE Student Forum" },
];

export function About() {
  return (
    <section id="about" className="relative bg-[#FFFFFF] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.25rem] border border-[#111111]/12 bg-[#FFFFFF] p-6 shadow-[0_20px_80px_rgba(17,17,17,0.04)] sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:items-center">
            <div className="flex flex-col gap-6">
              <div className="relative flex justify-center lg:justify-start">
                <div className="relative h-[320px] w-[260px] overflow-hidden rounded-[999px] border border-[#111111]/12 bg-[#F7F7F2] p-3 shadow-inner sm:h-[360px] sm:w-[300px]">
                  <img
                    src={Photo}
                    alt="Dharma Teja R C"
                    className="h-full w-full rounded-[999px] object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-3 right-4 hidden h-16 w-16 rounded-full border border-[#111111]/10 bg-[#D4FF00] sm:block" />
              </div>
              <div className="rounded-[1.5rem] border border-[#111111]/10 bg-[#FBFBF7] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#111111]/65">
                  Current focus
                </p>
                <p className="mt-2 text-sm leading-7 text-[#111111]/75">
                  Bridging intelligence, systems thinking, and polished product execution.
                </p>
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#111111]/65">
                About Me
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-black uppercase tracking-[-0.05em] text-[#111111] sm:text-4xl md:text-5xl">
                Designing the <span className="font-serif-accent lowercase italic">signal</span>{" "}
                behind the system.
              </h2>

              <div className="mt-8 space-y-6 text-sm leading-8 text-[#111111]/75 sm:text-[0.95rem]">
                <p>
                  I’m an AI engineer and full-stack developer focused on shaping reliable software that feels as refined as it is functional.
                  My work spans machine learning, scalable data systems, and elegant interfaces that make complex technology easier to understand.
                </p>
                <p>
                  I enjoy building deeply considered digital products, whether that means streamlining workflows, designing thoughtful data pipelines,
                  or turning technical complexity into experiences that feel effortless.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {capabilities.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-[#111111]/12 bg-[#FBFBF7] px-3.5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#111111]/75"
                  >
                    <span className="mr-2 h-2 w-2 rounded-full bg-[#D4FF00]" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                <div className="rounded-[1.25rem] border border-[#111111]/10 bg-[#FBFBF7] p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#111111]/65">
                    Leadership
                  </p>
                  <div className="mt-4 space-y-3">
                    {leadershipItems.map((item) => (
                      <div key={item.title}>
                        <p className="text-sm font-semibold text-[#111111]">{item.title}</p>
                        <p className="mt-1 text-sm text-[#111111]/70">{item.meta}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
