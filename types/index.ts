export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  stack: string[];
  /** Cover photo. Without one, the card shows `highlight` on a plain cover. */
  image?: string;
  highlight?: { value: string; label: string };
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: string[];
  status: "live" | "completed" | "building" | "archived";
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
  category: "language" | "database" | "data" | "backend";
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
