import { lazy, Suspense } from "react";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";

const SmoothScroll = lazy(() =>
  import("@/components/portfolio/SmoothScroll").then((m) => ({ default: m.SmoothScroll })),
);

function SectionDivider() {
  return <div className="mx-auto h-px w-full max-w-7xl bg-[#111111]/10" />;
}

export function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FFFFFF] text-[#111111]">
      <Suspense fallback={null}>
        <SmoothScroll />
      </Suspense>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SectionDivider />
        <div className="overflow-hidden border-y border-[#111111] bg-[#111111] py-3 text-white">
          <div className="flex w-max animate-[marquee_16s_linear_infinite] items-center gap-8 whitespace-nowrap text-[0.78rem] font-black uppercase tracking-[0.35em] sm:text-sm">
            <span>DESIGN ✦ DEVELOP ✦ DEPLOY</span>
            <span>DESIGN ✦ DEVELOP ✦ DEPLOY</span>
            <span>DESIGN ✦ DEVELOP ✦ DEPLOY</span>
            <span>DESIGN ✦ DEVELOP ✦ DEPLOY</span>
          </div>
        </div>
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Contact />
      </main>
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#D4FF00] text-[#111111] shadow-[0_20px_60px_rgba(17,17,17,0.16)] transition hover:-translate-y-1"
        aria-label="Contact"
      >
        <ArrowUpRight className="h-5 w-5" />
      </a>
    </div>
  );
}

export default App;
