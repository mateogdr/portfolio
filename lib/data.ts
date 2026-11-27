import type { Project, TimelineItem, Skill } from "@/types";

export const personalInfo = {
  name: "Mateo Garrido del Río",
  title: "Data Systems Engineering Student",
  subtitle:
    "Third-year student at ETSIT-UPM building end-to-end data projects in Python and SQL, from collecting and cleaning open data to modelling and evaluating it.",
  bio: [
    "I'm a third-year Data Systems Engineering student at ETSIT, Universidad Politécnica de Madrid. My coursework covers relational and NoSQL databases, big data processing, cloud computing, machine learning, and statistical inference and time series.",
    "I like building data projects end to end: collecting and cleaning open data, joining sources, and modelling it with an evaluation I can trust. My latest is a daily demand forecast for BiciMAD, Madrid's public bike system, that reaches 8.3% MAPE. At the EURIChallenge 2026 hackathon, my team of three built a computer vision system for rehabilitation exercises in 48 hours.",
    "I'm especially interested in data platforms, machine learning and quantitative finance. Away from the keyboard, I've played tennis for 11 years (5 of them competing), I've been strength training for 6, and I work part-time as a gym floor instructor.",
  ],
  email: "mategdr@gmail.com",
  github: "https://github.com/mateogdr",
  linkedin: "https://www.linkedin.com/in/mateogarridodelrio",
  location: "Madrid, Spain",
  available: true,
};

export const projects: Project[] = [
  {
    id: "bicimad-forecast",
    title: "BiciMAD Demand Forecast",
    tagline: "Daily demand forecast for Madrid's public bike system",
    description:
      "An end-to-end forecasting project. I built a 973-day dataset (Feb 2024 – Sep 2026) joining daily BiciMAD trips from EMT open data with Open-Meteo weather and Madrid holidays, checked it for gaps, duplicates and nulls, and trained a model on a temporal train/test split with lagged features to avoid leakage.",
    problem:
      "A random forest can't extrapolate a growing trend. Predicting the ratio to last week's average instead of raw trips fixed it, cutting the error from 9.7% to 8.3% MAPE.",
    stack: ["Python", "pandas", "scikit-learn", "matplotlib", "Jupyter"],
    highlight: { value: "8.3%", label: "MAPE vs 13.2% baseline" },
    featured: true,
    githubUrl: "https://github.com/mateogdr/proyecto_bicimad",
    metrics: [
      "8.3% MAPE vs 13.2% baseline",
      "973 days of joined open data",
      "Temporal split, no leakage",
    ],
    status: "completed",
  },
  {
    id: "eurichallenge-2026",
    title: "EURIChallenge 2026",
    tagline: "Hackathon · Computer vision for rehabilitation",
    description:
      "Built in 48 hours with a team of three at the hackathon organised by Eurielec and EESTEC LC Madrid at ETSIT-UPM: a computer vision system that detects and evaluates rehabilitation exercises (shoulder abduction and squat), packaged with Docker.",
    problem:
      "Patients doing rehabilitation exercises at home have no one checking their form. The system detects the exercise from video and evaluates how it is performed.",
    stack: ["Python", "MediaPipe", "OpenCV", "Docker"],
    highlight: { value: "48h", label: "Hackathon · Nov 2026" },
    featured: true,
    metrics: ["Built in 48 hours", "Team of three", "Packaged with Docker"],
    status: "completed",
  },
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
  { name: "SQL", category: "language" },
  { name: "C/C++", category: "language" },
  { name: "R", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "HTML/CSS", category: "language" },
  { name: "MySQL", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "RDF/SPARQL", category: "database" },
  { name: "pandas", category: "data" },
  { name: "NumPy", category: "data" },
  { name: "scikit-learn", category: "data" },
  { name: "TensorFlow", category: "data" },
  { name: "matplotlib", category: "data" },
  { name: "Jupyter", category: "data" },
  { name: "Time series", category: "data" },
  { name: "OpenCV", category: "data" },
  { name: "MediaPipe", category: "data" },
  { name: "Flask", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Docker", category: "backend" },
  { name: "Kubernetes", category: "backend" },
  { name: "Git/GitHub", category: "backend" },
  { name: "Linux", category: "backend" },
  { name: "Excel", category: "backend" },
];

export const skillCategories = {
  language: "Languages",
  database: "Databases",
  data: "Data & ML",
  backend: "Backend & Tools",
};
