export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  stack: string[];
  image: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl: string;
  metrics?: string[];
  status: "live" | "building" | "archived";
}

export interface TimelineItem {
  id: string;
  type: "work" | "education" | "achievement" | "course";
  title: string;
  organization: string;
  location?: string;
  period: string;
  current?: boolean;
  description: string;
  technologies?: string[];
}

export interface Skill {
  name: string;
  category: "language" | "framework" | "tool" | "cloud" | "ai";
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
