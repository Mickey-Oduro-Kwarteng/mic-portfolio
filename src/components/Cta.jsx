import { Button } from "./ui";

export default function Cta() {
  return (
    <section className="bg-slate-900 py-24 text-center">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
          Have a project in mind?
          <br />
          Let's talk it through.
        </h2>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-slate-400">
          Tell me what you're building and I'll reply within two working days with next steps.
        </p>
        <div className="mt-10">
          <Button icon>Start a project</Button>
        </div>
      </div>
    </section>
  );
}
