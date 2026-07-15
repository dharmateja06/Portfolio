const defaultPhrases = [
  "FAST",
  "SCALE GLOBALLY",
  "BUILD THE FUTURE",
  "SHIP NOW",
  "AI SYSTEMS",
  "FULL-STACK",
];

type MarqueeVariant = "cyan" | "green";
type MarqueeProps = {
  variant?: MarqueeVariant;
  diagonal?: boolean;
  phrases?: string[];
};

function MarqueeContent({ phrases }: { phrases: string[] }) {
  return (
    <>
      {phrases.map((phrase) => (
        <span key={phrase} className="mx-8 flex shrink-0 items-center gap-8 whitespace-nowrap sm:mx-10 sm:gap-10">
          <span className="font-display text-sm font-black uppercase tracking-[0.35em] sm:text-base md:text-lg">
            {phrase}
          </span>
          <span className="text-lg font-black" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </>
  );
}

export function MarqueeTicker({
  variant = "cyan",
  diagonal = false,
  phrases = defaultPhrases,
}: MarqueeProps) {
  const bgClass = variant === "green" ? "marquee-green" : "marquee-cyan";

  return (
    <div
      className={`relative overflow-hidden py-4 ${diagonal ? "marquee-diagonal my-3" : ""}`}
      aria-label="Capabilities ticker"
    >
      <section className={`${bgClass} overflow-hidden border-y border-black/10 py-5`}>
        <div className="flex animate-marquee">
          <div className="flex min-w-full shrink-0 items-center">
            <MarqueeContent phrases={phrases} />
          </div>
          <div className="flex min-w-full shrink-0 items-center" aria-hidden>
            <MarqueeContent phrases={phrases} />
          </div>
        </div>
      </section>
    </div>
  );
}
