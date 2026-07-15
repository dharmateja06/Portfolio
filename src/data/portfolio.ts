import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Eye,
  FileText,
  Layout,
  Palette,
  ShoppingBag,
} from "lucide-react";

export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  live?: string;
  github?: string;
  visual: string;
};

export type Launch = {
  month: string;
  name: string;
  status: "live" | "open";
  icon: LucideIcon;
};

export type Achievement = {
  title: string;
  event: string;
  year: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "Policy Lens AI",
    category: "AI-POWERED / NLP",
    description:
      "Retrieval-Augmented Generation system that analyzes government schemes — extracting, summarizing, and surfacing intelligent insights from dense policy documents.",
    tech: ["Python", "RAG", "LangChain", "NLP"],
    visual: "from-cyan-100 via-white to-fuchsia-100",
  },
  {
    title: "AgriTech AI Assistant",
    category: "AI-POWERED / AGRICULTURE",
    description:
      "CNN-based plant disease detection at 89% accuracy, with crop recommendation, soil prediction and offline multilingual support for rural users.",
    tech: ["CNN", "TensorFlow", "Flask", "React"],
    visual: "from-emerald-100 via-white to-cyan-100",
  },
  {
    title: "Image Guard",
    category: "AI-POWERED / COMPUTER VISION",
    description:
      "Image-based location authenticity detection with explainable computer-vision outputs — verifying whether an image truly belongs to its claimed origin.",
    tech: ["Python", "OpenCV", "Deep Learning"],
    visual: "from-sky-100 via-white to-indigo-100",
  },
  {
    title: "Tridala Nutrafood",
    category: "PRODUCTION / E-COMMERCE",
    description:
      "Real-world e-commerce site shipped during my Dev Creations internship — UI, frontend structure, responsiveness and integration for a live client.",
    tech: ["React", "Responsive", "Integration"],
    live: "https://tridalanutrafood.com/",
    visual: "from-amber-100 via-white to-orange-100",
  },
  {
    title: "Vertex Advisory",
    category: "UI / UX DESIGN",
    description:
      "Modern advisory brand experience focused on professional positioning, clear user flow and a confident visual identity.",
    tech: ["UI/UX", "Figma", "Brand"],
    live: "https://vertexadvisory.in/",
    visual: "from-cyan-100 via-white to-sky-100",
  },
  {
    title: "Tridala — UI/UX",
    category: "PRODUCT DESIGN",
    description:
      "Clean, product-focused interface for a nutraceutical brand, with strong usability and a refined visual system.",
    tech: ["Figma", "UX", "Design"],
    live: "https://tridalanutrafood.com/",
    visual: "from-fuchsia-100 via-white to-rose-100",
  },
];

export const launches: Launch[] = [
  { month: "JAN", name: "Policy Lens AI", status: "live", icon: FileText },
  { month: "FEB", name: "AgriTech AI", status: "live", icon: Brain },
  { month: "MAR", name: "Image Guard", status: "live", icon: Eye },
  { month: "APR", name: "Tridala Nutrafood", status: "live", icon: ShoppingBag },
  { month: "MAY", name: "Vertex Advisory", status: "live", icon: Layout },
  { month: "JUN", name: "Tridala UI/UX", status: "live", icon: Palette },
  { month: "JUL", name: "Could be yours", status: "open", icon: FileText },
  { month: "AUG", name: "Could be yours", status: "open", icon: FileText },
  { month: "SEP", name: "Could be yours", status: "open", icon: FileText },
  { month: "OCT", name: "Could be yours", status: "open", icon: FileText },
  { month: "NOV", name: "Could be yours", status: "open", icon: FileText },
  { month: "DEC", name: "Could be yours", status: "open", icon: FileText },
];

export const skillsPrimary = [
  "Python",
  "React",
  "TensorFlow",
  "LangChain",
  "RAG Systems",
  "Computer Vision",
  "NLP",
  "PostgreSQL",
  "Docker",
  "Flask",
  "Figma",
  "REST APIs",
  "ETL Pipelines",
  "Machine Learning",
];

export const skillsGeneral = [
  "SQL",
  "Java",
  "JavaScript",
  "C",
  "Git",
  "GitHub",
  "Deep Learning",
  "CNN",
  "Generative AI",
  "Model Deployment",
  "Data Modeling",
  "MySQL",
  "Apache Kafka",
  "Hadoop",
  "Data Quality",
  "Batch Processing",
  "Salesforce Data Cloud",
  "Informatica Cloud",
  "Cloud Storage",
  "Data Streams",
  "Identity Resolution",
  "Customer 360",
  "Data Integration",
  "Data Analytics",
  "Backend Development",
  "Frontend Development",
  "Database Design",
  "Authentication",
  "Responsive Design",
  "Power BI",
  "VS Code",
  "Postman",
  "Linux",
  "API Testing",
  "System Design",
  "Problem Solving",
];

export const achievements: Achievement[] = [
  {
    title: "2nd Runner-Up",
    event: "IOTOPIA Hackathon",
    year: "2025",
    description:
      "Developed an innovative technology solution and secured second place among competing teams at REVA University.",
  },
  {
    title: "Winner — Best AI Used Team",
    event: "Jyothy Institute of Technology Hackathon",
    year: "2024",
    description:
      "Recognized for effectively integrating Artificial Intelligence into a practical, high-impact solution.",
  },
  {
    title: "Top 15 Team",
    event: "SJBIT Axiom Hackathon",
    year: "2024",
    description:
      "Selected among the top-performing teams for developing an innovative project with strong technical depth.",
  },
  {
    title: "Finalist",
    event: "The Great Bengaluru Hackathon",
    year: "2024",
    description:
      "Ranked among the top 10% of over 1,500 participating teams for a solution with strong execution and impact.",
  },
];

export const experience = [
  {
    role: "Web Developer Intern",
    org: "Dev Creations and Solutions",
    period: "Jul 2025 — Jan 2026",
    points: [
      "Built REST API-integrated applications handling structured data workflows.",
      "Designed backend data flows and database interactions.",
      "Worked with real-world data processing and system integration.",
    ],
  },
  {
    role: "Research Intern",
    org: "Center of Excellence for Geopolitics and International Studies, REVA University",
    period: "May 2025 — Jun 2025",
    points: [
      "Analyzed large-scale research datasets and technical reports.",
      "Applied AI-driven methodologies for data analysis and insights generation.",
      "Contributed to research publications involving technology and data-centric studies.",
    ],
  },
];

export const education = [
  {
    school: "REVA University, Bengaluru",
    degree: "B.Tech — Artificial Intelligence & Data Science",
    period: "2023 — 2027",
    score: "CGPA: 8.9 / 10",
  },
  {
    school: "Vasishta PU College, Ballari",
    degree: "PCMB",
    period: "2021 — 2023",
    score: "91.17%",
  },
  {
    school: "St.Peter's ENG MED High School, Ballari",
    degree: "10th Standard",
    period: "2020 — 2021",
    score: "94.56%",
  },
];

export const contact = {
  email: "dharmatejarc2005@gmail.com",
  phone: "+91 79756 50280",
  linkedin: "https://www.linkedin.com/in/dharmatejarc06",
  github: "https://github.com/dharmateja06",
};
