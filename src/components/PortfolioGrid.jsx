import { PROJECTS } from "../data/content";
import { Button, SectionHeading } from "./ui";

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Portfolio"
          text="A selection of recent product, brand, and web projects. Each case study covers the problem, the process, and the result."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: p.cover }} role="img" aria-label={`${p.title} cover`} />
              <div className="p-6">
                <p className="text-xs text-slate-400">{p.tag}</p>
                <h3 className="mt-1 font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  A short line about the challenge and what changed after launch.
                </p>
                <div className="mt-5">
                  <Button href="#" variant="outline" icon>
                    Case study
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="#">More projects</Button>
        </div>
      </div>
    </section>
  );
}
