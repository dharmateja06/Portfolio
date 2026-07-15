import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    quote:
      "Dharma delivered a polished, responsive e-commerce experience for Tridala Nutrafood — from UI structure to live integration. The site handles real customer traffic and reflects our brand with confidence.",
    author: "Client Team",
    role: "Tridala Nutrafood",
    project: "Production E-Commerce Site",
  },
  {
    quote:
      "The Vertex Advisory brand experience exceeded expectations. Clean user flows, professional positioning, and a visual identity that communicates trust from the first scroll.",
    author: "Advisory Team",
    role: "Vertex Advisory",
    project: "UI/UX Brand Experience",
  },
  {
    quote:
      "During his internship at Dev Creations, Dharma consistently shipped production-ready features — REST API integrations, backend data flows, and frontend work that met real client deadlines.",
    author: "Dev Creations",
    role: "Dev Creations and Solutions",
    project: "Web Developer Internship",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by teams who ship."
          description="Placeholder quotes based on shipped work — replace with real client testimonials when ready."
          align="left"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t) => (
                <CarouselItem key={t.project} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <blockquote className="agency-card flex h-full flex-col rounded-2xl p-8 hover:scale-100">
                    <p className="flex-1 text-sm leading-relaxed text-neutral-300 sm:text-base">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <footer className="mt-8 border-t border-neutral-800 pt-6">
                      <cite className="not-italic">
                        <p className="font-display text-sm font-bold text-white">{t.author}</p>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                          {t.role}
                        </p>
                        <p className="mt-2 text-xs text-neutral-500">{t.project}</p>
                      </cite>
                    </footer>
                  </blockquote>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-end gap-2">
              <CarouselPrevious className="static translate-y-0 border-neutral-800 bg-black text-white hover:bg-neutral-900 hover:text-electric" />
              <CarouselNext className="static translate-y-0 border-neutral-800 bg-black text-white hover:bg-neutral-900 hover:text-electric" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
