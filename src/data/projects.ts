export type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  visual: string;
  accent: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "SmartCity360",
    category: "SMART CITY MANAGEMENT",
    description: "A smart city management platform for coordinating urban services and operations.",
    stack: ["Java", "Jakarta EE", "JavaScript", "MySQL"],
    visual: "city",
    accent: "blue",
  },
  {
    number: "02",
    name: "NeuroDrive AI",
    category: "AI · MACHINE LEARNING CONCEPT",
    description: "An AI-powered engine monitoring and simulation concept exploring machine-learning applications.",
    stack: ["Python", "AI", "Machine Learning"],
    visual: "neural",
    accent: "violet",
  },
  {
    number: "03",
    name: "Adyapana Management System",
    category: "EDUCATION MANAGEMENT",
    description: "An education management platform for student registration, payments, attendance, and reporting.",
    stack: ["Java", "MySQL"],
    visual: "education",
    accent: "cyan",
  },
  {
    number: "04",
    name: "Full-Stack Web Application",
    category: "FUTURE PROJECT · PLACEHOLDER",
    description: "Editable placeholder for a future full-stack application.",
    stack: ["Next.js", "React", "Node.js", "TypeScript"],
    visual: "future",
    accent: "blue",
  },
];

export const profileLinks = {
  email: "mailto:hello@example.com",
  linkedin: "",
  github: "",
  facebook: "",
};
