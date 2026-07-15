import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { contact } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-[#111111]/10 bg-white/90 backdrop-blur"
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#D4FF00]" />
          <span className="font-display text-[0.8rem] font-black uppercase tracking-[0.32em] text-[#111111] sm:text-[0.9rem]">
            Dharma teja rc
          </span>
        </a>

        <ul className="hidden items-center justify-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#111111]/70 transition hover:text-[#111111]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-2">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="icon-btn"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="icon-btn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
