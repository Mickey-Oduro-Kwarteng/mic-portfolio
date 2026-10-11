import { ArrowRight } from "lucide-react";
import { PROFILE } from "../data/content";

export const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2";

export function Blob({ className = "", color, size, opacity = 1 }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{ width: size, height: size, background: color, opacity, filter: "blur(80px)" }}
    />
  );
}

export function Logo({ light = false }) {
  return (
    <a href="#home" className={`flex items-center gap-3 rounded-lg ${focusRing}`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 font-semibold text-white">
        {PROFILE.first[0]}
      </span>
      <span className={`text-2xl font-semibold ${light ? "text-white" : "text-slate-900"}`}>
        {PROFILE.first}
      </span>
    </a>
  );
}

export function Button({ children, href = "#contact", variant = "solid", icon = false, type, onClick }) {
  const base = `inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors ${focusRing}`;
  const styles =
    variant === "solid"
      ? "bg-purple-600 text-white hover:bg-purple-700"
      : "border border-purple-500 text-purple-600 hover:bg-purple-50";
  const content = (
    <>
      {children}
      {icon && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </>
  );
  if (type) {
    return (
      <button type={type} onClick={onClick} className={`${base} ${styles}`}>
        {content}
      </button>
    );
  }
  return (
    <a href={href} className={`${base} ${styles}`}>
      {content}
    </a>
  );
}

export function SectionHeading({ title, text, center = true }) {
  return (
    <div className={center ? "mx-auto max-w-xl text-center" : "max-w-md"}>
      <h2 className="text-4xl font-semibold text-slate-900 md:text-5xl">{title}</h2>
      {text && <p className="mt-4 leading-relaxed text-slate-500">{text}</p>}
    </div>
  );
}
