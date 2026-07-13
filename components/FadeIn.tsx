"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Subtle fade-on-scroll wrapper. Motion is disabled via CSS when the
 * visitor has prefers-reduced-motion set (see globals.css).
 */
export default function FadeIn({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "li";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={`fade-in-section ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
