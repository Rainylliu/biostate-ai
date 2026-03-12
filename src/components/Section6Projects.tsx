"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import WaveReveal from "./WaveReveal";

const PAGES = [
  [
    "/images/project-1-1.svg",
    "/images/project-1-2.svg",
    "/images/project-1-3.svg",
    "/images/project-1-4.svg",
  ],
  [
    "/images/project-2-1.svg",
    "/images/project-2-2.svg",
    "/images/project-2-3.svg",
    "/images/project-2-4.svg",
  ],
  [
    "/images/project-3-1.svg",
    "/images/project-3-2.svg",
    "/images/project-3-3.svg",
    "/images/project-3-4.svg",
  ],
  [
    "/images/project-4-1.svg",
    "/images/project-4-2.svg",
    "/images/project-4-3.svg",
    "/images/project-4-4.svg",
  ],
];

const PAGE_COUNT = PAGES.length;
const AUTOPLAY_MS = 5000;

export default function Section6Projects() {
  const [page, setPage] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setPage((p) => (p + 1) % PAGE_COUNT);
    }, AUTOPLAY_MS);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const goTo = (idx: number) => {
    setPage(((idx % PAGE_COUNT) + PAGE_COUNT) % PAGE_COUNT);
    startTimer();
  };

  return (
    <section
      className="s6-section"
      style={{
        background: "#ffffff",
        fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
      }}
    >
     <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      {/* ── Header Row ── */}
      <div className="s6-header">
        <div>
          <p
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#333",
              marginBottom: 12,
            }}
          >
            [ collaboration ]
          </p>
          <WaveReveal
            text="Building the Future of Medicine Through Global Collaboration"
            as="h2"
            className="home-section-heading"
            style={{
              fontFamily: "'Sora', Arial, Helvetica, sans-serif",
              fontSize: 64,
              fontWeight: 400,
              color: "#111",
              margin: 0,
              lineHeight: 1.15,
            }}
          />
        </div>

        {/* 20+ stat */}
        <div className="s6-stat">
          <span className="s6-stat-number">20+</span>
          <span className="s6-stat-label">
            Collaborating
            <br />
            Institutions
          </span>
        </div>
      </div>

      {/* ── Desktop Gallery Card (4 columns) ── */}
      <div className="s6-card s6-desktop">
        <div className="s6-gallery">
          <div
            className="s6-track"
            style={{
              transform: `translateX(-${page * (100 / PAGE_COUNT)}%)`,
            }}
          >
            {PAGES.map((imgs, pi) => (
              <div className="s6-page s6-page-desktop" key={pi}>
                {imgs.map((src, ii) => (
                  <div className="s6-imgbox" key={ii}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`project-${pi + 1}-${ii + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="s6-indicator">
          {Array.from({ length: PAGE_COUNT }).map((_, i) => (
            <button
              key={i}
              className={`s6-dot${i === page ? " s6-dot-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Mobile Gallery Card (2×2 grid) ── */}
      <div className="s6-card s6-mobile">
        <div className="s6-gallery">
          <div
            className="s6-track"
            style={{
              transform: `translateX(-${page * (100 / PAGE_COUNT)}%)`,
            }}
          >
            {PAGES.map((imgs, pi) => (
              <div className="s6-page s6-page-mobile" key={pi}>
                {imgs.map((src, ii) => (
                  <div className="s6-imgbox" key={ii}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`project-${pi + 1}-${ii + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="s6-indicator">
          {Array.from({ length: PAGE_COUNT }).map((_, i) => (
            <button
              key={i}
              className={`s6-dot${i === page ? " s6-dot-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
     </div>
    </section>
  );
}
