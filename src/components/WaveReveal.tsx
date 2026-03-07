"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface WaveRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function WaveReveal({ children, delay = 0 }: WaveRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={visible ? "wave-reveal-visible" : "wave-reveal-hidden"}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
