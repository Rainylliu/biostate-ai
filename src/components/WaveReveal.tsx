"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useLoaded } from "./ClientBody";

interface WaveRevealProps {
  text: string;
  as?: "p" | "h1" | "h2" | "h3" | "span";
  style?: CSSProperties;
  className?: string;
  delay?: number;
  charDelay?: number;
  highlightWords?: string[];
  highlightStyle?: CSSProperties;
}

export default function WaveReveal({
  text,
  as: Tag = "span",
  style,
  className,
  delay = 0,
  charDelay = 20,
  highlightWords = [],
  highlightStyle = {},
}: WaveRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const loaded = useLoaded();

  useEffect(() => {
    if (!loaded) return;
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
  }, [loaded]);

  // Split text into words, then characters within each word
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <div ref={ref}>
      <Tag style={style} className={className}>
        {words.map((word, wi) => {
          const isHighlighted = highlightWords.includes(word);
          return (
          <span key={wi} style={{ whiteSpace: "nowrap", ...(isHighlighted ? highlightStyle : {}) }}>
            {word.split("").map((char) => {
              const i = charIndex++;
              return (
                <span
                  key={i}
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
          );
        })}
      </Tag>
    </div>
  );
}
