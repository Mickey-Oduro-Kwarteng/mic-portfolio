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
    "I'm a Software Engineer specializing in building scalable, modern, and user-friendly digital solutions. From responsive websites to robust backend systems and AI-powered applications, I help businesses and individuals turn ideas into impactful products.",
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

export const MEDIUM_PROFILE = "https://medium.com/@yourname";

export const POSTS = [
  {
    title: "Biometrics is getting smarter apparently passwords werent enough",
    url: "https://medium.com/@odurokwartengmickey/biometrics-is-getting-smarter-apparently-passwords-werent-enough-e1e097e5c2ce?sharedUserId=odurokwartengmickey",
    date: "7 Oct 2025",
    readTime: "5 min read",
    image: "",
  },
  {
    title: "Digital accounting shouldnt be a luxury for ghanaian smes",
    url: "https://medium.com/@odurokwartengmickey/digital-accounting-shouldnt-be-a-luxury-for-ghanaian-smes-9e9048f3a389",
    date: "20 Sep 2025",
    readTime: "4 min read",
    image: "",
  },
  {
    title: "Digital accounting shouldnt be a luxury for ghanaian smes",
    url: "https://medium.com/@odurokwartengmickey/square-didnt-just-build-a-card-reader-it-helped-build-the-infrastructure-of-modern-payments-37b385457895?sharedUserId=odurokwartengmickey",
    date: "20 Sep 2025",
    readTime: "4 min read",
    image: "",
  },
];

export const SERVICES = [
  {
    title: "User experience (UX)",
    text: "Research, journeys, and information architecture that make products easy to understand and pleasant to use.",
  },
  {
    title: "Mobile application Development",
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
  {
    label: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/mickey-oduro-kwarteng-515096263/",
  },
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
