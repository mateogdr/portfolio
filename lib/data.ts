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
  github: "https://github.com/mateg",
  linkedin: "https://linkedin.com/in/mateogarrido",
  location: "Madrid, Spain",
  available: true,
};

export const projects: Project[] = [
  {
    id: "ai-document-analyzer",
    title: "DocuMind AI",
    tagline: "Intelligent document analysis at scale",
    description:
      "A full-stack SaaS application that uses LLMs to analyze, summarize, and extract structured data from uploaded documents. Supports PDFs, contracts, reports, and research papers.",
    problem:
      "Professionals spend hours manually reading and extracting information from documents. DocuMind reduces that to seconds.",
    stack: ["Next.js", "Python", "FastAPI", "OpenAI API", "PostgreSQL", "S3", "Docker"],
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    featured: true,
    liveUrl: "https://documind.demo",
    githubUrl: "https://github.com/mateg/documind",
    metrics: ["80% reduction in document review time", "500+ documents processed", "99.2% extraction accuracy"],
    status: "live",
  },
  {
    id: "saas-analytics",
    title: "Pulse Analytics",
    tagline: "Real-time business intelligence for modern teams",
    description:
      "A lightweight analytics SaaS for small businesses that can't afford enterprise tools. Tracks KPIs, user behavior, and revenue metrics with a clean, intuitive dashboard.",
    problem:
      "SMBs are stuck between overpriced enterprise analytics and limited free tools. Pulse fills the gap with an affordable, powerful alternative.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Recharts", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    featured: true,
    liveUrl: "https://pulse.demo",
    githubUrl: "https://github.com/mateg/pulse-analytics",
    metrics: ["30+ active users", "15 tracked metrics per dashboard", "< 200ms query response"],
    status: "live",
  },
  {
    id: "automation-pipeline",
    title: "DataFlow Engine",
    tagline: "Automated ETL pipelines without the overhead",
    description:
      "A Python-based automation system that orchestrates data extraction, transformation, and loading across multiple sources. Built with a visual pipeline editor and real-time monitoring.",
    problem:
      "Small data teams waste hours on repetitive ETL scripts. DataFlow provides a reusable, configurable pipeline framework that runs on a schedule.",
    stack: ["Python", "Apache Airflow", "PostgreSQL", "Redis", "Docker", "FastAPI"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    featured: true,
    githubUrl: "https://github.com/mateg/dataflow-engine",
    metrics: ["12+ pipeline templates", "Handles 50k+ records/run", "Saved 8h/week per team"],
    status: "building",
  },
  {
    id: "web-scraper",
    title: "ScrapeLab",
    tagline: "Structured data from any website",
    description:
      "A configurable web scraping framework built with Python and Playwright. Exports structured data as JSON, CSV, or directly into a PostgreSQL database.",
    stack: ["Python", "Playwright", "PostgreSQL", "FastAPI", "Docker"],
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    problem: "Getting clean, structured data from the web shouldn't require rebuilding a scraper for each site.",
    featured: false,
    githubUrl: "https://github.com/mateg/scrapelab",
    status: "live",
  },
  {
    id: "cli-tool",
    title: "devkit CLI",
    tagline: "Developer productivity from the terminal",
    description:
      "A custom CLI toolkit that automates common development tasks: project scaffolding, database migrations, API testing, and environment management.",
    stack: ["TypeScript", "Node.js", "Commander.js", "Inquirer"],
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
    problem: "Repetitive setup tasks slow down every new project. devkit standardizes and automates them.",
    featured: false,
    githubUrl: "https://github.com/mateg/devkit",
    status: "live",
  },
];

export const timeline: TimelineItem[] = [
  {
    id: "degree",
    type: "education",
    title: "Grado en Ingeniería de Sistemas de Datos",
    organization: "ETSIT — Universidad Politécnica de Madrid",
    location: "Madrid, Spain",
    period: "2022 — Present",
    current: true,
    description:
      "Specializing in distributed systems, machine learning pipelines, and data architecture at one of Spain's top engineering schools. Coursework includes algorithms, databases, cloud computing, and software design patterns.",
    technologies: ["Python", "Java", "SQL", "Data Structures", "ML"],
  },
  {
    id: "freelance",
    type: "work",
    title: "Freelance Software Developer",
    organization: "Independent",
    period: "2023 — Present",
    current: true,
    description:
      "Building full-stack web applications and automation tools for small businesses. Delivered 6+ client projects ranging from e-commerce platforms to internal dashboards and data pipelines.",
    technologies: ["Next.js", "Python", "PostgreSQL", "Tailwind CSS", "Vercel"],
  },
  {
    id: "internship",
    type: "work",
    title: "Data Engineering Intern",
    organization: "TechStartup SL",
    location: "Madrid, Spain",
    period: "Summer 2024",
    description:
      "Contributed to building ETL pipelines processing 500k+ daily records. Optimized slow SQL queries reducing average response time by 40%. Automated reporting workflows saving 6 hours per week.",
    technologies: ["Python", "Apache Airflow", "PostgreSQL", "dbt", "AWS"],
  },
  {
    id: "hackathon",
    type: "achievement",
    title: "1st Place — University Hackathon",
    organization: "HackUP 2024",
    period: "April 2024",
    description:
      "Built an AI-powered accessibility tool in 24 hours that automatically generates alt text and audio descriptions for web images. Won first place out of 40 competing teams.",
    technologies: ["Python", "OpenAI API", "FastAPI", "React"],
  },
  {
    id: "highschool",
    type: "education",
    title: "Scientific Baccalaureate",
    organization: "IES Tecnológico",
    period: "2020 — 2022",
    description:
      "Graduated with honors. First contact with programming through extracurricular courses in Python and web development.",
  },
];

export const skills: Skill[] = [
  { name: "Python", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "SQL", category: "language" },
  { name: "Java", category: "language" },
  { name: "Next.js", category: "framework" },
  { name: "React", category: "framework" },
  { name: "FastAPI", category: "framework" },
  { name: "Node.js", category: "framework" },
  { name: "PostgreSQL", category: "tool" },
  { name: "Docker", category: "tool" },
  { name: "Git", category: "tool" },
  { name: "Apache Airflow", category: "tool" },
  { name: "AWS", category: "cloud" },
  { name: "Vercel", category: "cloud" },
  { name: "OpenAI API", category: "ai" },
  { name: "LangChain", category: "ai" },
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
