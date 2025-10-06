
export interface Skill {
  name: string;
  iconId?: string;
  proficiency?: number;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Challenge {
    challenge: string;
    solution: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  liveDemoLink?: string;
  detailedDescription: string;
  images: string[];
  challenges: Challenge[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Education {
    degree: string;
    institution: string;
    duration: string;
    achievements: string[];
}

export interface UserProfile {
    name: string;
    profession: string;
    tagline: string;
    bio: string;
    resumeUrl: string;
    socials: {
        github: string;
        linkedin: string;
        instagram: string;
    };
}

export interface ChatMessage {
    sender: 'user' | 'ai';
    text: string;
}