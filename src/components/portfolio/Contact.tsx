import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SectionHeading } from "./SectionHeading";

function Field({
  label,
  type = "text",
  textarea,
  value,
  onChange,
  name,
}: {
  label: string;
  type?: string;
  textarea?: boolean;
  value: string;
  onChange: (v: string) => void;
  name: string;
}) {
  return (
    <label className="group relative block">
      {textarea ? (
        <textarea
          name={name}
          required
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          className="peer w-full resize-none rounded-xl border border-slate-200 bg-white px-4 pb-3 pt-6 text-sm text-slate-900 outline-none transition placeholder:text-transparent focus:border-cyan-500 focus:ring-1 focus:ring-cyan-200"
        />
      ) : (
        <input
          name={name}
          type={type}
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          className="peer w-full rounded-xl border border-slate-200 bg-white px-4 pb-3 pt-6 text-sm text-slate-900 outline-none transition placeholder:text-transparent focus:border-cyan-500 focus:ring-1 focus:ring-cyan-200"
        />
      )}
      <span className="pointer-events-none absolute left-4 top-2 origin-left font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:tracking-[0.2em] peer-focus:text-cyan-500">
        {label}
      </span>
    </label>
  );
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`${message}\n\n— ${name}`);
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    window.location.href = `mailto:dharmatejarc2005@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something good."
          description="Open to internships, collaborations, freelance and AI/web projects worth obsessing over."
          align="left"
        />
        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[1.85rem] border border-[#111111]/8 bg-white/80 p-8 shadow-[0_10px_35px_rgba(17,17,17,0.04)] backdrop-blur-sm lg:col-span-2"
          >
            <h3 className="font-display text-2xl font-bold text-slate-900">Direct lines</h3>
            <p className="mt-2 text-sm text-slate-600">Pick whichever works for you.</p>
            <ul className="relative mt-8 space-y-4 text-sm">
              <li>
                <a
                  href="mailto:dharmatejarc2005@gmail.com"
                  className="group flex items-center gap-3 text-slate-700 transition hover:text-cyan-600"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 group-hover:border-cyan-300">
                    <Mail className="h-4 w-4" />
                  </span>
                  dharmatejarc2005@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917975650280"
                  className="group flex items-center gap-3 text-slate-700 transition hover:text-cyan-600"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 group-hover:border-cyan-300">
                    <Phone className="h-4 w-4" />
                  </span>
                  +91 79756 50280
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dharmatejarc06"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 text-slate-700 transition hover:text-cyan-600"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 group-hover:border-cyan-300">
                    <Linkedin className="h-4 w-4" />
                  </span>
                  /in/dharmatejarc06
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dharmateja06"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 text-slate-700 transition hover:text-cyan-600"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 group-hover:border-cyan-300">
                    <Github className="h-4 w-4" />
                  </span>
                  github.com/dharmateja06
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 rounded-[1.85rem] border border-[#111111]/8 bg-white/80 p-8 shadow-[0_10px_35px_rgba(17,17,17,0.04)] backdrop-blur-sm lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name" name="name" value={name} onChange={setName} />
              <Field label="Email" type="email" name="email" value={email} onChange={setEmail} />
            </div>
            <Field label="Message" name="message" textarea value={message} onChange={setMessage} />
            <button type="submit" className="cta-pill px-6 py-3 text-sm">
              {sent ? "Mail client opened" : "Send message"}
              <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>
      <footer className="mx-auto mt-4 max-w-7xl border-t border-slate-200 px-4 py-3 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500 sm:px-6 sm:py-4">
        © {new Date().getFullYear()} Dharma Teja R C · Designed &amp; built with care.
      </footer>
    </section>
  );
}
