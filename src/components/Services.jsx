import { useState } from "react";
import { SERVICES } from "../data/content";
import { Button, focusRing } from "./ui";

export default function Services() {
  const [active, setActive] = useState(0);
  return (
    <section id="services" className="bg-gray-100 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="max-w-md">
          <h2 className="text-4xl font-semibold text-slate-800 md:text-5xl">What I do</h2>
          <p className="mt-6 leading-relaxed text-slate-500">
            I work end to end, from the first research interview to production code, or step in wherever your team needs
            an extra pair of hands.
          </p>
          <p className="mt-4 leading-relaxed text-slate-500">Available for freelance projects from January.</p>
          <div className="mt-8">
            <Button>Say hello</Button>
          </div>
        </div>

        <div className="space-y-4">
          {SERVICES.map((s, i) => {
            const isActive = active === i;
            return (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                aria-pressed={isActive}
                className={`block w-full rounded-md border-l-4 bg-white p-6 text-left transition-colors ${focusRing} ${
                  isActive ? "border-purple-600" : "border-transparent"
                }`}
              >
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
