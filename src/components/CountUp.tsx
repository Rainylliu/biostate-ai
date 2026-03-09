"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: number;
  gradientFrom?: string;
  gradientTo?: string;
  strokeWidth?: number;
  gradientId?: string;
  style?: React.CSSProperties;
}

export default function CountUp({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  decimals = 0,
  fontSize = 120,
  fontFamily = "'Sora', Arial, Helvetica, sans-serif",
  fontWeight = 800,
  gradientFrom = "#45D0BD",
  gradientTo = "#44B6E9",
  strokeWidth = 1.5,
  gradientId = "countUpGradient",
  style,
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const raw = eased * end;
      setCount(decimals > 0 ? parseFloat(raw.toFixed(decimals)) : Math.floor(raw));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, end, duration]);

  const numText = decimals > 0 ? count.toFixed(decimals) : count.toLocaleString();
  const text = prefix + numText + suffix;
  const viewBoxWidth = fontSize * text.length * 0.52;
  const viewBoxHeight = fontSize * 1.2;

  return (
    <div ref={containerRef} style={style}>
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        style={{ width: `${viewBoxWidth}px`, height: `${viewBoxHeight}px`, display: "block" }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={gradientFrom} />
            <stop offset="100%" stopColor={gradientTo} />
          </linearGradient>
        </defs>
        <text
          x="0"
          y={fontSize}
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
        >
          {text}
        </text>
      </svg>
    </div>
  );
}
