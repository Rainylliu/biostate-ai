"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

interface WaveRevealProps {
  text: string;
  as?: "p" | "h1" | "h2" | "h3" | "span";
  style?: CSSProperties;
  className?: string;
  delay?: number;
  charDelay?: number;
}

export default function WaveReveal({
  text,
  as: Tag = "span",
  style,
  className,
  delay = 0,
  charDelay = 20,
}: WaveRevealProps) {
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

  // Split text into words, then characters within each word
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <div ref={ref}>
      <Tag style={style} className={className}>
        {words.map((word, wi) => (
          <span key={wi} style={{ whiteSpace: "nowrap" }}>
            {word.split("").map((char) => {
              const i = charIndex++;
              return (
                <span
                  key={i}
                  className="wave-char-clip"
                  style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
                >
                  <span
                    className={visible ? "wave-char-visible" : "wave-char-hidden"}
                    style={{ animationDelay: `${delay + i * charDelay}ms` }}
                  >
                    {char}
                  </span>
                </span>
              );
            })}
            {wi < words.length - 1 && (
              <span
                className="wave-char-clip"
                style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
              >
                <span
                  className={visible ? "wave-char-visible" : "wave-char-hidden"}
                  style={{ animationDelay: `${delay + charIndex++ * charDelay}ms` }}
                >
                  {"\u00A0"}
                </span>
              </span>
            )}
          </span>
        ))}
      </Tag>
    </div>
  );
}
