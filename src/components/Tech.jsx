import { TECH } from "../data/content";
import { SectionHeading } from "./ui";

// One accent per group, so the three columns read as separate families at a glance.
const ACCENTS = ["bg-purple-500", "bg-emerald-400", "bg-amber-400"];

export default function Tech() {
  const total = TECH.reduce((n, g) => n + g.items.length, 0);

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Technologies I use"
          text={`The ${total} tools and languages I reach for most, from the first sketch to the final deploy.`}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TECH.map((group, i) => (
            <div
              key={group.group}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">
                  {group.group}
                </h3>
                <span className="text-sm text-slate-400">
                  {group.items.length}
                </span>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-sm text-slate-700"
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${ACCENTS[i % ACCENTS.length]}`}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
