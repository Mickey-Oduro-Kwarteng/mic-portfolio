import { PROCESS } from "../data/content";

export default function Process() {
  return (
    <section id="process" className="bg-gray-100 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="max-w-md">
          <h2 className="text-4xl font-semibold text-slate-900 md:text-5xl">Work process</h2>
          <p className="mt-6 leading-relaxed text-slate-500">
            Every project follows the same four steps, so you always know where things stand and what comes next.
          </p>
          <p className="mt-4 leading-relaxed text-slate-500">
            Timelines flex with scope, but no step gets skipped.
          </p>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2">
          {PROCESS.map((step, i) => {
            const Icon = step.icon;
            const first = i === 0;
            // Stagger the right-hand column like the original layout
            const offset = i % 2 === 1 ? "sm:-translate-y-6" : "sm:translate-y-6";
            return (
              <li key={step.title} className={`rounded-lg bg-white p-6 ${offset}`}>
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-md ${
                    first ? "bg-purple-600 text-white" : "bg-purple-50 text-purple-600"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-semibold text-slate-900">
                  {i + 1}. {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
