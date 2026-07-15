import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "I specialize in AI systems (RAG, computer vision, NLP), full-stack web applications, data engineering pipelines, and production client websites. From hackathon prototypes to shipped e-commerce platforms — if it involves intelligent software, I'm in.",
  },
  {
    question: "What's your tech stack?",
    answer:
      "Python, React, Flask, PostgreSQL, TensorFlow, LangChain, Docker, and cloud data platforms (Salesforce Data Cloud, Informatica). I pick tools based on the problem — not hype.",
  },
  {
    question: "Are you available for internships or freelance work?",
    answer:
      "Yes — I'm open to internships, collaborations, and freelance projects. I've shipped real client work during my Dev Creations internship and am actively building portfolio-grade products in 2026.",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "Understand the problem first, scope an MVP, ship iteratively, and optimize for production readiness. I believe in fast delivery without sacrificing code quality or user experience.",
  },
  {
    question: "Can you handle both design and development?",
    answer:
      "Absolutely. I've designed and shipped complete brand experiences (Vertex Advisory, Tridala Nutrafood) and build the frontend/backend to match. UI/UX is part of the product, not an afterthought.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered."
          description="Everything you need to know before we start building together."
          align="left"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`item-${i}`}
                className="border-neutral-800"
              >
                <AccordionTrigger className="py-6 font-display text-base font-bold tracking-tight text-white hover:no-underline sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-neutral-400 sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
