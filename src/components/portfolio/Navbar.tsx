import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-5"
    >
      <nav className="glass flex w-full max-w-3xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-5 py-2.5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <a href="#hero" className="font-display text-sm font-bold tracking-tight whitespace-nowrap text-foreground">
          Dharma Teja R C
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-xs text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold text-background transition hover:opacity-90"
        >
          Let's talk
        </a>
      </nav>
    </motion.header>
  );
}