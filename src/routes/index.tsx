import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { MarqueeTicker } from "@/components/portfolio/MarqueeTicker";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { FAQ } from "@/components/portfolio/FAQ";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Achievements } from "@/components/portfolio/Achievements";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Identity } from "@/components/portfolio/Identity";
import { Contact } from "@/components/portfolio/Contact";

const SmoothScroll = lazy(() =>
  import("@/components/portfolio/SmoothScroll").then((m) => ({ default: m.SmoothScroll })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dharma Teja R C — AI Developer · Full Stack Engineer · UI/UX Designer" },
      {
        name: "description",
        content:
          "Portfolio of Dharma Teja R C — AI & Data Science student building intelligent systems, real-world web products, and beautifully designed interfaces.",
      },
      { property: "og:title", content: "Dharma Teja R C — AI Developer & Designer" },
      {
        property: "og:description",
        content: "RAG systems, computer vision, full-stack apps and shipped client websites.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionDivider() {
  return <hr className="section-divider mx-auto w-full max-w-7xl border-neutral-800" />;
}

function Index() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Suspense fallback={null}>
        <SmoothScroll />
      </Suspense>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <MarqueeTicker />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <FAQ />
        <Testimonials />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Identity />
        <SectionDivider />
        <Contact />
      </main>
    </div>
  );
}
