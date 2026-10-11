import { ClipboardList, TrendingUp, PenLine, Laptop } from "lucide-react";
import {
  FacebookIcon,
  BehanceIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../components/SocialIcons";

export const PROFILE = {
  first: "Mickey",
  name: "Mickey Oduro Kwarteng",
  intro:
    "I'm a freelance UI/UX designer and developer based in London, England. I build immersive, beautiful web applications through carefully crafted code and user-centric design.",
  address: "Darkuman, Accra, Ghana",
  email: "odurokwartengmickey@gmail.com",
  phone: "059-701-2977",
};

export const STATS = [
  { value: "3Yrs.", label: "Experience" },
  { value: "5+", label: "Projects completed" },
  { value: "10", label: "Happy clients" },
];

export const NAV = ["Home", "Process", "Portfolio", "Blog", "Services"];

export const PROCESS = [
  {
    icon: ClipboardList,
    title: "Research",
    text: "Understand the people, the problem, and what success looks like.",
  },
  {
    icon: TrendingUp,
    title: "Analyze",
    text: "Turn findings into priorities, flows, and a clear product structure.",
  },
  {
    icon: PenLine,
    title: "Design",
    text: "Shape the interface, test it with real users, and refine the details.",
  },
  {
    icon: Laptop,
    title: "Launch",
    text: "Build, ship, and maintain — then keep improving what's live.",
  },
];

// Swap `cover` for an image URL (e.g. `url(/img/project-1.jpg)`) when you have real shots.
export const PROJECTS = [
  {
    tag: "UI/UX design",
    title: "Product admin dashboard",
    cover: "linear-gradient(135deg,#f9c7c9 0%,#f26b4f 55%,#f9d6d2 100%)",
  },
  {
    tag: "Branding",
    title: "Summit identity system",
    cover: "linear-gradient(135deg,#172038 0%,#24304d 60%,#3a4767 100%)",
  },
  {
    tag: "Web development",
    title: "Developer docs portal",
    cover: "linear-gradient(135deg,#dfe4ea 0%,#9aa6b4 50%,#4b5563 100%)",
  },
  {
    tag: "UI/UX design",
    title: "Workspace booking app",
    cover: "linear-gradient(135deg,#d8c3a5 0%,#8a6f55 55%,#efe7dd 100%)",
  },
  {
    tag: "Product design",
    title: "Healthy snacks storefront",
    cover: "linear-gradient(135deg,#f4ee52 0%,#9bd14b 45%,#6aaa3a 100%)",
  },
  {
    tag: "Mobile app",
    title: "Calm meditation app",
    cover: "linear-gradient(135deg,#c9c8ec 0%,#9897d6 55%,#b9a6e8 100%)",
  },
];

export const POSTS = [
  {
    date: "22 Oct 2025",
    comments: 24,
    title: "What a good design handoff actually includes",
    cover: "linear-gradient(160deg,#1e1b4b 0%,#6d4fa8 50%,#0f172a 100%)",
  },
  {
    date: "8 Oct 2025",
    comments: 12,
    title: "Designing empty states that tell people what to do",
    cover: "linear-gradient(160deg,#facc15 0%,#eab308 50%,#292524 100%)",
  },
  {
    date: "19 Sep 2025",
    comments: 31,
    title: "Choosing a color system you won't regret",
    cover: "linear-gradient(160deg,#a3e635 0%,#ec4899 50%,#1e1b4b 100%)",
  },
  {
    date: "2 Sep 2025",
    comments: 9,
    title: "Why I prototype in code earlier than I used to",
    cover: "linear-gradient(160deg,#e0f2fe 0%,#7dd3fc 50%,#64748b 100%)",
  },
  {
    date: "14 Aug 2025",
    comments: 17,
    title: "Running a five-person usability test in a day",
    cover: "linear-gradient(160deg,#fecaca 0%,#f97316 60%,#7c2d12 100%)",
  },
  {
    date: "30 Jul 2025",
    comments: 6,
    title: "Accessible forms: the checklist I use",
    cover: "linear-gradient(160deg,#ccfbf1 0%,#14b8a6 55%,#134e4a 100%)",
  },
  {
    date: "11 Jul 2025",
    comments: 22,
    title: "Pricing freelance design work without guessing",
    cover: "linear-gradient(160deg,#ede9fe 0%,#a855f7 55%,#3b0764 100%)",
  },
  {
    date: "25 Jun 2025",
    comments: 14,
    title: "Small motion, big clarity",
    cover: "linear-gradient(160deg,#fef3c7 0%,#fb7185 55%,#4c0519 100%)",
  },
];

export const SERVICES = [
  {
    title: "User experience (UX)",
    text: "Research, journeys, and information architecture that make products easy to understand and pleasant to use.",
  },
  {
    title: "User interface (UI)",
    text: "Clean, consistent interfaces and design systems that scale from a landing page to a full product.",
  },
  {
    title: "Web development",
    text: "Fast, accessible front ends built with React and Tailwind, ready for your team to maintain.",
  },
];

export const SOCIALS = [
  { label: "Facebook", icon: FacebookIcon, href: "#" },
  { label: "Behance", icon: BehanceIcon, href: "#" },
  { label: "Instagram", icon: InstagramIcon, href: "#" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "#" },
];
export const TECH = [
  {
    group: "Design",
    items: ["Figma", "Canva", "Photoshop"],
  },
  {
    group: "Frontend",
    items: ["JavaScript", "React", "vue.js", "Tailwind CSS"],
  },
  {
    group: "Backend & tools",
    items: [
      "Node.js",
      "Express",
      "MongoDB",
      "supabase",
      "Git",
      "GitHub",
      "PostgreSQL",
      "Vercel",
    ],
  },
];
