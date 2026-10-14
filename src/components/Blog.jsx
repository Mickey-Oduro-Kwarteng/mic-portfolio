import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { POSTS, MEDIUM_PROFILE } from "../data/content";
import { Blob, SectionHeading, focusRing } from "./ui";

const API_URL = (import.meta.env.VITE_API_URL || "").replace(/[./]+$/, "");

// Used on cards whose cover image can't be found

const FALLBACK_COVERS = [
  "linear-gradient(160deg,#1e1b4b 0%,#6d4fa8 50%,#0f172a 100%)",
  "linear-gradient(160deg,#facc15 0%,#eab308 50%,#292524 100%)",
  "linear-gradient(160deg,#a3e635 0%,#ec4899 50%,#1e1b4b 100%)",
  "linear-gradient(160deg,#e0f2fe 0%,#7dd3fc 50%,#64748b 100%)",
];

export default function Blog() {
  const perPage = 4;
  const pages = Math.ceil(POSTS.length / perPage);
  const [page, setPage] = useState(0);
  const visible = POSTS.slice(page * perPage, page * perPage + perPage);

  // Cover images fetched from each post's Medium page: { [url]: imageUrl | null }
  const [covers, setCovers] = useState({});

  useEffect(() => {
    const missing = POSTS.filter((p) => !p.image && p.url);
    if (missing.length === 0) return;
    let cancelled = false;

    missing.forEach((post) => {
      fetch(`${API_URL}/api/preview?url=${encodeURIComponent(post.url)}`)
        .then((r) => (r.ok ? r.json() : null))
        .catch(() => null)
        .then((data) => {
          if (!cancelled)
            setCovers((prev) => ({ ...prev, [post.url]: data?.image || null }));
        });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="blog" className="relative overflow-hidden py-24">
      <Blob
        color="#DA4DF1"
        size={480}
        opacity={0.35}
        className="-left-72 top-0"
      />
      <Blob
        color="#C4F5E9"
        size={520}
        opacity={0.8}
        className="-right-72 top-20"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Blogs"
          text="What I've been writing on Medium about Software Engineering and AI."
        />

        <div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          aria-live="polite"
        >
          {visible.map((post, i) => {
            const image = post.image || covers[post.url];
            const loadingCover =
              !post.image && post.url && !(post.url in covers);
            return (
              <article
                key={post.url || post.title}
                className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition-shadow hover:shadow-lg"
              >
                <div className="aspect-video overflow-hidden bg-gray-100">
                  {loadingCover ? (
                    <div className="h-full w-full animate-pulse bg-gray-100" />
                  ) : image ? (
                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage:
                          post.cover ||
                          FALLBACK_COVERS[i % FALLBACK_COVERS.length],
                      }}
                    />
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs text-slate-400">
                    {post.date}
                    {post.readTime && ` · ${post.readTime}`}
                  </p>
                  <h3 className="mt-2 font-medium leading-snug text-slate-900">
                    <a
                      href={post.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded hover:text-purple-600 ${focusRing}`}
                    >
                      {post.title}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </h3>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-center gap-8">
          {pages > 1 && (
            <div
              className="flex justify-center gap-2"
              role="tablist"
              aria-label="Blog pages"
            >
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={page === i}
                  aria-label={`Page ${i + 1}`}
                  onClick={() => setPage(i)}
                  className={`h-2 rounded-full transition-all ${focusRing} ${
                    page === i
                      ? "w-8 bg-slate-900"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          )}
          {MEDIUM_PROFILE && (
            <a
              href={"https://medium.com/@odurokwartengmickey"}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded text-sm font-semibold text-purple-600 hover:text-purple-700 ${focusRing}`}
            >
              All posts on Medium
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
