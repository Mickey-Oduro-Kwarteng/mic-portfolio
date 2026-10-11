import { PROFILE, STATS } from "../data/content";
import { Blob, Button } from "./ui";

function Portrait() {
  // Placeholder figure — replace the inner <svg> with an <img> cut-out of yourself.
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-6 rounded-full bg-purple-100" />
      <svg viewBox="0 0 400 400" className="relative h-full w-full" role="img" aria-label={`Portrait of ${PROFILE.name}`}>
        <defs>
          <linearGradient id="jacket" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#b4b7bd" />
            <stop offset="1" stopColor="#8e9299" />
          </linearGradient>
        </defs>
        <path d="M70 400 C80 300 130 262 200 262 C270 262 320 300 330 400 Z" fill="url(#jacket)" />
        <path d="M168 266 L200 330 L232 266 Z" fill="#ffffff" />
        <rect x="178" y="212" width="44" height="60" rx="16" fill="#e8b996" />
        <ellipse cx="200" cy="168" rx="58" ry="68" fill="#efc4a2" />
        <path d="M142 160 C140 110 170 92 202 92 C238 92 262 116 258 160 C250 132 230 122 200 124 C170 124 150 134 142 160 Z" fill="#6b4630" />
        <path d="M180 196 Q200 212 220 196" stroke="#a0644a" strokeWidth="5" fill="none" strokeLinecap="round" />
        <circle cx="178" cy="166" r="5" fill="#3b2a20" />
        <circle cx="222" cy="166" r="5" fill="#3b2a20" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <Blob color="#DA4DF1" size={560} opacity={0.35} className="-right-40 -top-56" />
      <Blob color="#C4F5E9" size={620} opacity={0.8} className="-right-64 top-1/3" />
      <Blob color="#FFF3D6" size={700} opacity={0.7} className="-bottom-96 left-1/4" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-16 md:grid-cols-2 md:pt-24">
        <div>
          <h1 className="text-5xl font-semibold leading-tight text-slate-900 md:text-6xl">
            Hello, I'm
            <br />
            {PROFILE.name}
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-slate-600">{PROFILE.intro}</p>
          <div className="mt-8">
            <Button>Say hello</Button>
          </div>

          <dl id="about" className="mt-16 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-md bg-white">
            {STATS.map((s) => (
              <div key={s.label} className="bg-purple-50 px-3 py-5 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-semibold text-slate-800">{s.value}</dd>
                <dd className="mt-1 text-xs text-slate-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Portrait />
      </div>
    </section>
  );
}
