import { PROFILE } from "../data/content";
import { Logo, focusRing } from "./ui";

export default function Footer() {
  return (
    <footer className="bg-slate-700 pb-12 pt-36">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
        <Logo light />
        <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer">
          {["Home", "About", "Services", "Skills", "Process", "Portfolio", "Blog", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`rounded text-sm text-slate-200 hover:text-white ${focusRing}`}>
              {item}
            </a>
          ))}
        </nav>
        <p className="text-sm text-slate-300">© {new Date().getFullYear()} {PROFILE.name}</p>
      </div>
    </footer>
  );
}
