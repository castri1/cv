export interface ContactItem {
  type: "email" | "phone" | "location" | "link";
  value: string;
  url?: string;
}

export interface KeyMetric {
  value: string;
  label: string;
  accent?: boolean;
}

export interface TechStackRow {
  skills: string[];
  primary?: boolean;
}

export interface Certification {
  name: string;
  date: string;
}

export interface ListItem {
  text: string;
  color: "green" | "cyan" | "amber";
}

export interface Sidebar {
  nameBlock: {
    name: string;
    title: string;
    subtitle: string;
  };
  contact: ContactItem[];
  keyMetrics: KeyMetric[];
  techStack: TechStackRow[];
  certifications: Certification[];
  leadershipAreas: ListItem[];
  languages: ListItem[];
}

export interface Experience {
  title: string;
  date: string;
  company: string;
  location: string | null;
  bullets: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  date: string;
}

export interface Achievement {
  text: string;
}

export interface Main {
  header: {
    name: string;
    subtitle: string;
  };
  summary: string;
  experience: Experience[];
  education: Education[];
  achievements: Achievement[];
}

export interface CVData {
  meta: { title: string };
  sidebar: Sidebar;
  main: Main;
}
