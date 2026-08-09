"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}

/**
 * Wraps children in a subtle fade-in-up reveal triggered once the
 * element scrolls into view. Falls back to visible immediately if
 * IntersectionObserver isn't available (older browsers, SSR safety).
 */
export default function Reveal({ children, className = "", delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        animation: visible ? `fade-in-up 0.8s ease-out both` : undefined,
        animationDelay: visible ? `${delay}ms` : undefined,
        opacity: visible ? undefined : 0,
      }}
    >
      {children}
    </Tag>
  );
}
