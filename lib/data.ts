import type { Project, TimelineItem, Skill } from "@/types";

export const personalInfo = {
  name: "Mateo Garrido del Río",
  title: "Data Systems Engineering Student",
  subtitle:
    "Building AI tools, automation systems and scalable web applications.",
  bio: [
    "I'm a Data Systems Engineering student at ETSIT UPM with a strong focus on building things that actually work at scale. I care deeply about clean architecture, developer experience, and shipping products that solve real problems.",
    "My work spans across AI-powered tools, automation pipelines, and full-stack web applications. I'm particularly drawn to the intersection of data engineering and product — where raw information becomes something genuinely useful.",
    "Outside of code, I'm obsessed with continuous improvement and execution. I believe the best engineers are the ones who ship consistently, learn from feedback, and never stop being curious.",
  ],
  email: "mategdr@gmail.com",
  github: "https://github.com/mateogdr",
  linkedin: "https://linkedin.com/in/mateogarrido",
  location: "Madrid, Spain",
  available: true,
};

export const projects: Project[] = [
  {
    id: "mundo-tenis",
    title: "Mundo Tenis",
    tagline: "Full-stack tennis club management platform",
    description:
      "A full-stack web application for managing tennis club operations — players, courts, and user accounts. Built with MVC architecture using Flask Blueprints, a REST API with Swagger documentation, and role-based access control.",
    problem:
      "Tennis clubs rely on manual spreadsheets and scattered tools. Mundo Tenis centralizes player management, court booking, and access control in one platform.",
    stack: ["Python", "Flask", "SQLAlchemy", "MySQL", "REST API", "HTML", "CSS"],
    image:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80",
    featured: true,
    githubUrl: "https://github.com/mateogdr/mundo-tenis",
    metrics: [
      "Full CRUD for players, courts & users",
      "Role-based access control",
      "REST API with Swagger docs",
    ],
    status: "live",
  },
];

export const timeline: TimelineItem[] = [
  {
    id: "degree",
    type: "education",
    title: "Grado en Ingeniería y Sistemas de Datos",
    organization: "ETSIT — Universidad Politécnica de Madrid",
    location: "Madrid, Spain",
    period: "2024 — Present",
    current: true,
    description:
      "Specializing in distributed systems, machine learning pipelines, and data architecture at one of Spain's top engineering schools. Coursework includes algorithms, databases, cloud computing, and software design patterns.",
    technologies: ["Python", "Java", "SQL", "Data Structures", "ML"],
  },
  {
    id: "bachillerato",
    type: "education",
    title: "Bachillerato Tecnológico",
    organization: "Madrid",
    period: "2022 — 2024",
    description:
      "Graduated with a 9.1/10 average. Scientific and technological track with focus on mathematics, physics, and technology.",
  },
  // ── Formación complementaria ──────────────────────────────────────────────
  // Añade aquí tus cursos, certificaciones y formación extra.
  // Ejemplo:
  // {
  //   id: "curso-python",
  //   type: "course",
  //   title: "Python for Data Science",
  //   organization: "Coursera / Universidad X",
  //   period: "2025",
  //   description: "...",
  //   technologies: ["Python", "Pandas", "NumPy"],
  // },
];

export const skills: Skill[] = [
  { name: "Python", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "SQL", category: "language" },
  { name: "Java", category: "language" },
  { name: "Next.js", category: "framework" },
  { name: "React", category: "framework" },
  { name: "Flask", category: "framework" },
  { name: "Node.js", category: "framework" },
  { name: "MySQL", category: "tool" },
  { name: "PostgreSQL", category: "tool" },
  { name: "Docker", category: "tool" },
  { name: "Git", category: "tool" },
  { name: "AWS", category: "cloud" },
  { name: "Vercel", category: "cloud" },
  { name: "OpenAI API", category: "ai" },
  { name: "Pandas", category: "ai" },
  { name: "scikit-learn", category: "ai" },
];

export const skillCategories = {
  language: "Languages",
  framework: "Frameworks",
  tool: "Tools & Databases",
  cloud: "Cloud & DevOps",
  ai: "AI & Data",
};
