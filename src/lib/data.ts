// Keep this module data-serializable: only plain objects, strings, numbers, arrays.
// Avoid exporting React elements or imported asset module objects from here.
// Use public image paths (under /public) so these values are plain strings.

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.Tech Student",
    location: "Lovely Professional University",
    description: "Pursuing Bachelor of Technology in Computer Science. Focused on web systems, DBMS, and algorithms.",
    icon: "graduation",
    date: "Since August 2023",
  },
  {
    title: "Projects & Training",
    location: "Personal & Online",
    description: "Built full-stack projects (notice board, scheduling simulator) and completed MERN and AI-focused trainings.",
    icon: "work",
    date: "2024 - 2025",
  },
] as const;

export const projectsData = [
  {
    title: "EchoRead — RSS Reader (Template)",
    description: "Template project: unified RSS reader with tagging and offline reading support.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    imageUrl: "/images/memoji-computer.png",
  },
  {
    title: "AirIndex — Air Quality Dashboard (Template)",
    description: "Template project: visualized AQI data across regions with historical trends.",
    tags: ["React", "API", "Charts"],
    imageUrl: "/images/DashboardImage.png",
  },
  {
    title: "TrafficAI — Traffic Prediction Demo (Template)",
    description: "Template project: short-term traffic forecasting with interactive visualizations.",
    tags: ["Python", "ML", "Visualization"],
    imageUrl: "/images/secureFileImage.png",
  },
  {
    title: "CrimeMap — Incident Heatmap (Template)",
    description: "Template project: mapped anonymized incident reports with region filters.",
    tags: ["Maps", "DataViz"],
    imageUrl: "/images/memoji-boy-computer.png",
  },
] as const;

export const skillsData = [
  "C++",
  "Java",
  "JavaScript",
  "C",
  "PHP",
  "Python",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "React",
  "Node.js",
  "Express",
  "MySQL",
  "MongoDB",
  "Git",
  "GitHub",
  "API Development",
] as const;