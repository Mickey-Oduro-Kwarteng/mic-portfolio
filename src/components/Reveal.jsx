import { useEffect, useRef, useState } from "react";

/**
 * Fades its content in and slides it up slightly the first time it scrolls into view.
 *
 * <Reveal>...</Reveal>              — default fade-up
 * <Reveal delay={150}>...</Reveal>  — start 150ms later (for staggering)
 *
 * People who turn on "reduce motion" in their OS settings see the content immediately.
 */
export default function Reveal({ children, delay = 0, duration = 900, distance = 40, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once only
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        // "none" once visible, so the wrapper doesn't create a stacking context
        // (keeps the contact card overlapping the footer correctly)
        transform: visible ? "none" : `translateY(${distance}px)`,
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
