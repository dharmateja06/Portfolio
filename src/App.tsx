import { lazy, Suspense } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Identity } from "@/components/portfolio/Identity";
import { Contact } from "@/components/portfolio/Contact";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

const SmoothScroll = lazy(() =>
  import("@/components/portfolio/SmoothScroll").then((m) => ({ default: m.SmoothScroll })),
);

export function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-hero noise">
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_82%)]" />
      </div>
      <Suspense fallback={null}>
        <SmoothScroll />
      </Suspense>
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <Education />
        <Identity />
        <Contact />
      </main>
    </div>
  );
}

export default App;
