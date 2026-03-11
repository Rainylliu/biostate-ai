"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface Investor {
  name: string;
  image: string;
  link: string;
}

export default function InvestorCarousel({ investors }: { investors: Investor[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(390);
  const [visibleCount, setVisibleCount] = useState(3);
  const maxOffset = investors.length - visibleCount;

  useEffect(() => {
    function measure() {
      if (!trackRef.current) return;
      const container = trackRef.current.parentElement;
      if (!container) return;
      const w = container.clientWidth;
      const gap = 24;
      if (w < 640) {
        setVisibleCount(1);
        setCardWidth(w);
      } else if (w < 1024) {
        setVisibleCount(2);
        setCardWidth((w - gap) / 2);
      } else {
        setVisibleCount(3);
        setCardWidth((w - gap * 2) / 3);
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const prev = useCallback(() => setOffset((o) => Math.max(0, o - 1)), []);
  const next = useCallback(() => setOffset((o) => Math.min(maxOffset, o + 1)), [maxOffset]);

  // Auto-play
  useEffect(() => {
    const id = setInterval(() => {
      setOffset((o) => (o >= maxOffset ? 0 : o + 1));
    }, 4000);
    return () => clearInterval(id);
  }, [maxOffset]);

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
        <div>
          <p style={{ fontSize: 14, color: "#999", fontWeight: 500, marginBottom: 8 }}>[ investors ]</p>
          <h2 style={{ fontSize: 48, fontWeight: 700, color: "#111", lineHeight: 1.15, margin: 0 }}>
            Institutional investors
          </h2>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={prev}
            aria-label="Previous"
            style={{
              width: 48, height: 48, borderRadius: 12, border: "1.5px solid #ddd", background: "#fff",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
            }}
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next"
            style={{
              width: 48, height: 48, borderRadius: 12, border: "1.5px solid #ddd", background: "#fff",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
            }}
          >
            →
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div style={{ overflow: "hidden" }}>
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: 24,
            transition: "transform 0.4s ease",
            transform: `translateX(-${offset * (cardWidth + 24)}px)`,
          }}
        >
          {investors.map((inv) => (
            <a
              key={inv.name}
              href={inv.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: `0 0 ${cardWidth}px`,
                background: "#F0F2F4",
                borderRadius: 20,
                padding: 20,
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={inv.image}
                alt={inv.name}
                style={{ width: "100%", borderRadius: 16, display: "block", marginBottom: 16 }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h5 style={{ fontSize: 18, fontWeight: 600, color: "#111", margin: 0 }}>{inv.name}</h5>
                <span
                  style={{
                    width: 40, height: 40, borderRadius: 10, background: "#222", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0,
                  }}
                >
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
