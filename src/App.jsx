const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive personal website built with React.",
    tech: "React · Tailwind CSS",
  },
  {
    title: "Task Manager",
    description: "A simple app for organizing daily tasks.",
    tech: "JavaScript · CSS",
  },
  {
    title: "Landing Page",
    description: "A clean landing page for a digital product.",
    tech: "React · Vite",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="text-xl font-bold">
          MyPortfolio<span className="text-cyan-400">.</span>
        </a>
        <div className="flex gap-5 text-sm text-slate-300">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <p className="mb-4 font-medium text-cyan-400">
            Hello, I'm a developer
          </p>
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-7xl">
            I build digital experiences for the web.
          </h1>
          <p className="mt-6 max-w-xl leading-7 text-slate-400">
            I'm passionate about creating beautiful, accessible, and responsive
            web applications using modern technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 hover:bg-slate-900"
            >
              Contact me
            </a>
          </div>
        </section>

        <section
          id="about"
          className="border-y border-slate-800 bg-slate-900/50 px-6 py-16"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold">About me</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              I enjoy turning ideas into useful web experiences. I'm currently
              building my skills in frontend development and creating projects
              that solve real problems.
            </p>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Featured projects</h2>
          <p className="mt-3 text-slate-400">
            A selection of things I've been working on.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
              >
                <div className="mb-6 flex h-36 items-center justify-center rounded-xl bg-slate-800">
                  <span className="text-4xl text-cyan-400">&lt;/&gt;</span>
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 leading-6 text-slate-400">
                  {project.description}
                </p>
                <p className="mt-5 text-sm text-cyan-400">{project.tech}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-slate-800 px-6 py-20 text-center"
        >
          <h2 className="text-3xl font-bold">Let's work together</h2>
          <p className="mt-4 text-slate-400">
            Have a project in mind? I'd love to hear about it.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-7 inline-block rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Get in touch
          </a>
        </section>
      </main>

      <footer className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} MyPortfolio. Built with React.
      </footer>
    </div>
  );
}

export default App;
