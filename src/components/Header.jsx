import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "../data/content";
import { Logo, Button, focusRing } from "./ui";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`rounded text-sm text-slate-700 hover:text-purple-600 ${focusRing}`}
            >
              {item}
            </a>
          ))}
          <Button href="#contact">Contact</Button>
        </nav>
        <button
          className={`rounded-md p-2 text-slate-900 lg:hidden ${focusRing}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-100 px-6 pb-6 lg:hidden" aria-label="Mobile">
          {[...NAV, "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block border-b border-slate-100 py-3 text-slate-700"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
