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
    category: "CIVIC TECHNOLOGY · 2025",
    description: "A connected command center for the everyday systems that keep a city moving.",
    stack: ["Java", "Jakarta EE", "JavaScript", "MySQL"],
    visual: "city",
    accent: "blue",
  },
  {
    number: "02",
    name: "NeuroDrive AI",
    category: "INTELLIGENT SYSTEMS · CONCEPT",
    description: "Exploring predictive engine health through machine learning and simulation.",
    stack: ["Python", "AI", "Machine Learning"],
    visual: "neural",
    accent: "violet",
  },
  {
    number: "03",
    name: "Adyapana",
    category: "EDTECH · 2024",
    description: "A thoughtful administration platform for the rhythm of modern education.",
    stack: ["Java", "MySQL", "System Design"],
    visual: "education",
    accent: "cyan",
  },
  {
    number: "04",
    name: "Next Chapter",
    category: "IN PROGRESS · YOUR NEXT IDEA",
    description: "A space reserved for the next useful thing I get to make.",
    stack: ["Next.js", "React", "Node.js", "TypeScript"],
    visual: "future",
    accent: "blue",
  },
];

export const profileLinks = {
  email: "mailto:hello@example.com",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  facebook: "https://www.facebook.com/",
};
