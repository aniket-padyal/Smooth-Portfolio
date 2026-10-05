import jewellery from "../images/Ani-Jewellery.png";
import macOS from "../images/MacOS-Portfolio.png";

const expertise = [
  {
    order: "01",
    heading: "Interface Engineering",
    info: "I build component-driven interfaces in React and TypeScript, with type safety and clean structure so the code stays easy to grow. Tailwind keeps the styling consistent, fast to ship, and responsive on every screen.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
  },
  {
    order: "02",
    heading: "Motion & Interaction",
    info: "I turn static pages into experiences that move with the user. Scroll-driven reveals, timeline choreography, and micro-interactions built with GSAP, timed so they feel deliberate rather than decorative.",
    skills: ["GSAP", "ScrollTrigger", "Scroll Animations", "Micro-interactions"],
  },
  {
    order: "03",
    heading: "Full-Stack Foundations",
    info: "Frontend is my craft, but I understand what's behind it. I can wire up APIs, shape data with SQL, and build lightweight backends in Flask, so I can build features end to end without friction.",
    skills: ["Python", "Flask", "SQL", "REST APIs"],
  },
];

const skills = [
  { label: "Next", style: "bg-white text-black" },
  { label: "React", style: "bg-neutral-800 text-white" },
  { label: "Tailwind", style: "text-white" },
  { label: "GSAP", style: "bg-neutral-800 text-white" },
]

const navLinks = ["Home", "What I Build", "Get In Touch"];

const projects = [
  {
    id: "01",
    title: "Imitation Jewellery Store",
    tag: "E-commerce · React · GSAP",
    image: jewellery,
    link: "https://pand-bjewels.vercel.app/",
  },
  {
    id: "02",
    title: "Habit Tracker",
    tag: "React · Tailwind",
    image: "/projects/habit.jpg",
    link: "https://your-live-link.com",
  },
  {
    id: "03",
    title: "MacOS like portfolio",
    tag: "React · GSAP",
    image: macOS,
    link: "https://mac-os-portfolio-rho.vercel.app/",
  },
];

export{ expertise, skills, navLinks, projects };