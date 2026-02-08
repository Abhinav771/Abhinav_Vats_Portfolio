export interface Project {
  title: string;
  tech: string[];
  description: string[];
  link: string;
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  duration: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}