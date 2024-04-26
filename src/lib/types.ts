export interface Resume {
  info: Info;
  tiny_text?: string;
  education?: Education[];
  experience?: Experience[];
  extracurricular?: Extracurricular[];
  projects?: Project[];
  skills?: Skill[];
}

export interface Education {
  certification: string;
  location: string;
  details?: string[];
  start: string;
  end?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  details: string[];
  start: string;
  end?: string;
}

export interface Extracurricular {
  title: string;
  description: string;
  location?: string;
}

export interface Info {
  name: string;
  website?: string;
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
}

export interface Project {
  title: string;
  link: string;
  details: string[];
}

export interface Skill {
  category: string;
  items: string[];
}
