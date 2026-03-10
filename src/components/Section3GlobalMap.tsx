"use client";

import { useState } from "react";
import WaveReveal from "./WaveReveal";

interface Location {
  id: string;
  name: string;
  city: string;
  /** Percentage position on the map */
  x: number;
  y: number;
  /** Tooltip opens above or below the dot */
  tooltipSide: "top" | "bottom";
}

const locations: Location[] = [
  { id: "houston", name: "Biostate Headquarters", city: "Houston", x: 20.3, y: 45, tooltipSide: "top" },
  { id: "paloalto", name: "K-Dense", city: "Palo Alto", x: 14, y: 40, tooltipSide: "top" },
  { id: "shanghai", name: "Biosheng", city: "Shanghai", x: 79.5, y: 42, tooltipSide: "top" },
  { id: "wuhan", name: "Baisheng", city: "Wuhan", x: 76.5, y: 44.5, tooltipSide: "bottom" },
  { id: "bengaluru", name: "Bayosthiti AI", city: "Bengaluru", x: 69, y: 54, tooltipSide: "bottom" },
  { id: "riyadh", name: "Biostate.AI MENA", city: "Riyadh", x: 58, y: 44, tooltipSide: "top" },
];

const countries = [
  {
    code: "US",
    name: "United States",
    entries: ["Biostate AI (Houston, TX)", "K-Dense (Palo Alto, CA)"],
  },
  {
    code: "CN",
    name: "China",
    entries: ["Biosheng (Shanghai)", "Baisheng (Wuhan)"],
  },
  {
    code: "IN",
    name: "India",
    entries: ["Bayosthiti AI (Bengaluru)"],
  },
  {
    code: "KSA",
    name: "Saudi Arabia",
    entries: ["Biostate.AI MENA (Riyadh)"],
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

          {/* Interactive dots */}
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
              {/* Hover area - larger than visible dot */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  position: "relative",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Pulse ring */}
                <div
                  className="map-dot-pulse"
                  style={{
                    position: "absolute",
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "rgba(69, 80, 163, 0.15)",
                    opacity: hovered === loc.id ? 1 : 0,
                    transform: hovered === loc.id ? "scale(1.8)" : "scale(1)",
                    transition: "opacity 0.3s, transform 0.3s",
                  }}
                />
                {/* Dot */}
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #4550A3, #6B5CE7)",
                    boxShadow: "0 0 8px rgba(69, 80, 163, 0.4)",
                    transition: "transform 0.2s",
                    transform: hovered === loc.id ? "scale(1.3)" : "scale(1)",
                  }}
                />
              </div>

              {/* Tooltip card */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  ...(loc.tooltipSide === "top"
                    ? { bottom: "100%", marginBottom: 8 }
                    : { top: "100%", marginTop: 8 }),
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
              {/* Large background code */}
              <span
                style={{
                  fontFamily: "'Sora', Arial, Helvetica, sans-serif",
                  fontSize: "clamp(56px, 6vw, 80px)",
                  fontWeight: 700,
                  color: "transparent",
                  WebkitTextStroke: "1.5px #c8cfe0",
                  lineHeight: 1,
                  display: "block",
                  marginBottom: -8,
                  userSelect: "none",
                }}
              >
                {country.code}
              </span>
              {/* Country name */}
              <h3
                style={{
                  fontFamily: "'Sora', Arial, Helvetica, sans-serif",
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                  fontWeight: 600,
                  color: "#1f1f1f",
                  margin: "0 0 12px",
                  lineHeight: 1.2,
                }}
              >
                {country.name}
              </h3>
              {/* Entries */}
              {country.entries.map((entry) => (
                <p
                  key={entry}
                  className="global-map-entry"
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: 15,
                    fontWeight: 500,
                    color: "#555",
                    margin: "6px 0",
                    lineHeight: 1.5,
                    transition: "color 0.25s ease",
                    cursor: "default",
                  }}
                >
                  {entry}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
