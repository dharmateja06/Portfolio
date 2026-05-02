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
    <div className="relative min-h-screen bg-background text-foreground">
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
