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
    title: "Boardify - Online Notice Board",
    description: "A full-scale web-based notice management platform for administrators to post, update, categorize and organize institutional notices.",
    tags: ["HTML", "Tailwind CSS", "PHP", "MySQL"],
    imageUrl: "/images/DashboardImage.png",
  },
  {
    title: "ScheduleIt - CPU Scheduling Simulator",
    description: "A simulator demonstrating multiple CPU scheduling algorithms (FCFS, SJF, Priority, Round Robin) with performance metrics and visual output.",
    tags: ["JavaScript", "HTML", "Tailwind CSS"],
    imageUrl: "/images/secureFileImage.png",
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