"use client";

import { useState } from "react";
import WaveReveal from "./WaveReveal";

interface Location {
  id: string;
  name: string;
  city: string;
  /** Percentage position on the SVG (derived from SVG circle centers / viewBox 1337×678) */
  x: number;
  y: number;
  /** Tooltip opens above or below the dot */
  tooltipSide: "top" | "bottom";
}

// SVG circle centers (viewBox 1337×678):
// Houston:    (279, 318) → (20.87%, 46.90%)
// Palo Alto:  (195, 299) → (14.58%, 44.10%)
// Riyadh:     (791, 348) → (59.16%, 51.33%)
// Bengaluru:  (908, 385) → (67.91%, 56.78%)
// Shanghai:   (1072, 318) → (80.18%, 46.90%)
// Wuhan:      (1026, 325) → (76.74%, 47.94%)
const locations: Location[] = [
  { id: "houston", name: "Biostate Headquarters", city: "Houston", x: 20.87, y: 46.90, tooltipSide: "top" },
  { id: "paloalto", name: "K-Dense", city: "Palo Alto", x: 14.58, y: 44.10, tooltipSide: "top" },
  { id: "riyadh", name: "Biostate.AI MENA", city: "Riyadh", x: 59.16, y: 51.33, tooltipSide: "top" },
  { id: "bengaluru", name: "Bayosthiti AI", city: "Bengaluru", x: 67.91, y: 56.78, tooltipSide: "bottom" },
  { id: "shanghai", name: "Biosheng", city: "Shanghai", x: 80.18, y: 46.90, tooltipSide: "top" },
  { id: "wuhan", name: "Baisheng", city: "Wuhan", x: 76.74, y: 47.94, tooltipSide: "bottom" },
];

const countries = [
  {
    code: "US",
    svg: "/images/US.svg",
    name: "United States",
    entries: [
      { label: "Biostate AI (Houston, TX)", href: "https://www.biostate.ai/" },
      { label: "K-Dense (Palo Alto, CA)", href: "https://k-dense.ai/" },
    ],
  },
  {
    code: "CN",
    svg: "/images/CN.svg",
    name: "China",
    entries: [
      { label: "Biosheng (Shanghai)", href: "https://www.bioshengai.com/" },
      { label: "Baisheng (Wuhan)", href: "https://www.kindstar.com.cn/en/about" },
    ],
  },
  {
    code: "IN",
    svg: "/images/IN.svg",
    name: "India",
    entries: [
      { label: "Bayosthiti AI (Bengaluru)", href: "https://bayosthiti.ai/" },
    ],
  },
  {
    code: "KSA",
    svg: "/images/KSA.svg",
    name: "Saudi Arabia",
    entries: [
      { label: "Biostate.AI MENA (Riyadh)", href: "https://dynamicmultiome.com/" },
    ],
  },
];

export default function Section3GlobalMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section style={{ padding: "80px 24px 80px", background: "#ffffff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section header */}
        <p
          style={{
            fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
            fontSize: 14,
            fontWeight: 500,
            color: "#333",
            marginBottom: 12,
          }}
        >
          [ connection ]
        </p>
        <WaveReveal
          text="Global Collaboration Network"
          as="h2"
          style={{
            fontFamily: "'Sora', Arial, Helvetica, sans-serif",
            fontSize: 48,
            fontWeight: 400,
            color: "#111",
            margin: "0 0 48px 0",
            lineHeight: 1.15,
          }}
        />
      </div>

      {/* Map container */}
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div style={{ position: "relative", width: "100%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/globalmap.svg"
            alt="Global collaboration network map"
            style={{ width: "100%", height: "auto", display: "block" }}
            draggable={false}
          />

          {/* Invisible hover zones over SVG's built-in dots */}
          {locations.map((loc) => (
            <div
              key={loc.id}
              style={{
                position: "absolute",
                left: `${loc.x}%`,
                top: `${loc.y}%`,
                transform: "translate(-50%, -50%)",
                zIndex: hovered === loc.id ? 20 : 10,
              }}
              onMouseEnter={() => setHovered(loc.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Transparent hover area over SVG dot */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  cursor: "pointer",
                  position: "relative",
                }}
              />

              {/* Tooltip card */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  ...(loc.tooltipSide === "top"
                    ? { bottom: "100%", marginBottom: 4 }
                    : { top: "100%", marginTop: 4 }),
                  transform: "translateX(-50%)",
                  opacity: hovered === loc.id ? 1 : 0,
                  pointerEvents: hovered === loc.id ? "auto" : "none",
                  transition: "opacity 0.25s ease, transform 0.25s ease",
                  ...(hovered === loc.id
                    ? {}
                    : loc.tooltipSide === "top"
                      ? { transform: "translateX(-50%) translateY(6px)" }
                      : { transform: "translateX(-50%) translateY(-6px)" }),
                }}
              >
                {/* Connecting line */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    width: 1,
                    height: 16,
                    background: "#4550A3",
                    ...(loc.tooltipSide === "top"
                      ? { bottom: -16 }
                      : { top: -16 }),
                    transform: "translateX(-50%)",
                  }}
                />
                {/* Card */}
                <div
                  style={{
                    background: "linear-gradient(145deg, #3a3f5c, #2a2d47)",
                    borderRadius: 14,
                    padding: "16px 28px",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#ffffff",
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {loc.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                      fontSize: 14,
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.6)",
                      margin: "4px 0 0",
                      lineHeight: 1.4,
                    }}
                  >
                    {loc.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Country columns */}
        <div
          className="global-map-countries"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
            marginTop: 56,
          }}
        >
          {countries.map((country) => (
            <div key={country.code} style={{ position: "relative" }}>
              {/* Country code SVG */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={country.svg}
                alt={country.code}
                style={{
                  height: "clamp(56px, 6vw, 80px)",
                  width: "auto",
                  display: "block",
                  marginBottom: -8,
                  userSelect: "none",
                }}
                draggable={false}
              />
              {/* Country name */}
              <h3
                style={{
                  fontFamily: "'Sora', Arial, Helvetica, sans-serif",
                  fontSize: "clamp(22px, 2.5vw, 48px)",
                  fontWeight: 500,
                  color: "#1f1f1f",
                  margin: "0 0 12px",
                  lineHeight: 1.2,
                }}
              >
                {country.name}
              </h3>
              {/* Entries */}
              {country.entries.map((entry) => (
                <a
                  key={entry.label}
                  href={entry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="global-map-entry"
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#111111",
                    margin: "6px 0",
                    lineHeight: 1.5,
                    transition: "color 0.25s ease",
                    cursor: "pointer",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  {entry.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
