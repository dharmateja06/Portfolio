import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { launches } from "@/data/portfolio";

export function Launches2026() {
  return (
    <section id="launches" className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,255,255,0.05),transparent_40%,rgba(255,255,255,0.02)_100%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-electric">
            2026 Launches
          </p>
          <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
            Sharp products, shipped with intent.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-[1.8] text-neutral-400 sm:text-lg">
            A concise grid of the ideas currently live or ready to move from concept to production.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {launches.map((launch, i) => {
            const Icon = launch.icon;
            const isLive = launch.status === "live";

            return (
              <motion.div
                key={launch.month}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6 ${
                  isLive ? "shadow-[0_0_0_1px_rgba(0,255,255,0.08)]" : "opacity-70"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
                    {launch.month}
                  </span>
                  {isLive ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-electric/30 bg-electric/10 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-electric">
                      <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                      Live
                    </span>
                  ) : (
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600">
                      Open
                    </span>
                  )}
                </div>
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                    isLive ? "bg-electric/10 text-electric" : "bg-neutral-900 text-neutral-600"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
                    {isLive ? launch.name : "Could be yours"}
                  </p>
                  <p className="text-sm leading-6 text-neutral-400">
                    {isLive ? "Built and ready for the next wave." : "A future release waiting for the right brief."}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-neutral-300">
                  {isLive ? "View scope" : "Reserve a slot"}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
