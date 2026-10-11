import { useState } from "react";
import { POSTS } from "../data/content";
import { Blob, SectionHeading, focusRing } from "./ui";

export default function Blog() {
  const perPage = 4;
  const pages = Math.ceil(POSTS.length / perPage);
  const [page, setPage] = useState(0);
  const visible = POSTS.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="blog" className="relative overflow-hidden py-24">
      <Blob color="#DA4DF1" size={480} opacity={0.35} className="-left-72 top-0" />
      <Blob color="#C4F5E9" size={520} opacity={0.8} className="-right-72 top-20" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading title="Blog" text="Notes on design, development, and running a small studio." />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" aria-live="polite">
          {visible.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="aspect-video" style={{ backgroundImage: post.cover }} />
              <div className="p-5">
                <p className="text-xs text-slate-400">
                  {post.date}, {post.comments} comments
                </p>
                <h3 className="mt-2 font-medium leading-snug text-slate-900">
                  <a href="#" className={`rounded hover:text-purple-600 ${focusRing}`}>
                    {post.title}
                  </a>
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Blog pages">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={page === i}
              aria-label={`Page ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all ${focusRing} ${
                page === i ? "w-8 bg-slate-900" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
