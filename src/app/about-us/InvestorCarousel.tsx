"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface Investor {
  name: string;
  image: string;
  link: string;
}

function NavArrow({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={isLeft ? "Previous" : "Next"}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "8px 12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "color 0.3s ease",
        color: hovered ? "#45d0bd" : "#111111",
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d={isLeft ? "M13 4L7 10L13 16" : "M7 4L13 10L7 16"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function CardArrow() {
  return (
    <span className="investor-card-arrow-btn">
      <span className="investor-card-arrow-icon">
        <span className="investor-card-arrow-inner">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M6 16L16 6M16 6H7M16 6V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M6 16L16 6M16 6H7M16 6V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </span>
    </span>
  );
}

export default function InvestorCarousel({ investors }: { investors: Investor[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const cardW = 360;
  const cardH = 490;
  const [cardWidth, setCardWidth] = useState(cardW);
  const [visibleCount, setVisibleCount] = useState(4);
  const gap = 24;
  const maxOffset = investors.length - visibleCount;

  useEffect(() => {
    function measure() {
      const vw = window.innerWidth;
      if (vw < 640) {
        setVisibleCount(1);
        setCardWidth(vw - 40);
      } else if (vw < 1024) {
        setVisibleCount(2);
        setCardWidth((vw - 40 - gap) / 2);
      } else {
        // Fixed 390px cards on desktop
        setVisibleCount(Math.floor((vw - 40 + gap) / (cardW + gap)));
        setCardWidth(cardW);
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
      {/* Header - constrained to content width */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
          <div>
            <p style={{ fontSize: 14, color: "#333", fontWeight: 500, marginBottom: 8 }}>[ investors ]</p>
            <h2 style={{ fontFamily: "'Sora', Arial, Helvetica, sans-serif", fontSize: 60, fontWeight: 400, color: "#111", letterSpacing: "-0.05em", lineHeight: 1.15, margin: 0 }}>
              Institutional investors
            </h2>
          </div>
          {/* Pill-shaped nav with gradient border */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              borderRadius: 9999,
              padding: 1,
              background: "linear-gradient(118deg, #6366f1 0%, #8b5cf6 100%)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: 94,
                height: 48,
                borderRadius: 9999,
                background: "#fff",
                overflow: "hidden",
                justifyContent: "space-around",
              }}
            >
              <NavArrow direction="left" onClick={prev} />
              <NavArrow direction="right" onClick={next} />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel - full viewport width */}
      <div style={{ overflow: "hidden", padding: "0 20px" }}>
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: gap,
            transition: "transform 0.4s ease",
            transform: `translateX(-${offset * (cardWidth + gap)}px)`,
          }}
        >
          {investors.map((inv) => (
            <div
              key={inv.name}
              style={{
                flex: `0 0 ${cardWidth}px`,
                height: cardH,
                background: "#F0F2F4",
                borderRadius: 20,
                padding: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <a
                href={inv.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", width: 320, height: 320, margin: "0 auto 16px", overflow: "hidden", borderRadius: 16, flexShrink: 0 }}
              >
                <img
                  src={inv.image}
                  alt={inv.name}
                  style={{ width: 320, height: 320, objectFit: "cover", display: "block" }}
                />
              </a>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <a
                  href={inv.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <h5 className="investor-card-name">{inv.name}</h5>
                </a>
                <a href={inv.link} target="_blank" rel="noopener noreferrer">
                  <CardArrow />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
