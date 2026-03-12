"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const slides = [
  {
    label: "USA",
    title: "K-Dense",
    description:
      "K-Dense is a Biostate AI spinout focused on autonomous scientific research - from hypothesis to publication.",
    location: "United States (Palo Alto, CA)",
    href: "https://k-dense.ai/",
    bg: "/images/K-Dense.png",
  },
  {
    label: "CN",
    title: "Biosheng",
    description:
      "Baiaosheng is a subsidiary of Biostate AI in China, dedicated to advancing precision medicine and intelligent diagnostics through local innovation and implementation.",
    location: "China (Shanghai)",
    href: "https://www.bioshengai.com/",
    bg: "/images/Baiaosheng.png",
  },
  {
    label: "KSA",
    title: "Biostate.AI MENA",
    description:
      "Biostate MENA is a Biostate AI subsidiary in Saudi Arabia, focused on population-scale multi-omics and AI-driven precision health implementation.",
    location: "Saudi Arabia (Riyadh)",
    href: "https://dynamicmultiome.com/",
    bg: "/images/Biostate.AI MENA.png",
  },
  {
    label: "CN",
    title: "Baisheng 百生",
    description:
      "Baisheng is a joint venture between Biostate AI and Kindstar Global (a publicly listed company), combining world-class omics innovation with large-scale clinical deployment.",
    location: "China (Wuhan)",
    href: "https://www.kindstar.com.cn/en",
    bg: "/images/Baisheng.png",
  },
  {
    label: "IN",
    title: "Bayosthiti AI",
    description:
      "Bayosthiti AI is a Biostate AI subsidiary in India, advancing AI-driven precision and lifetime health management.",
    location: "India (Bengaluru)",
    href: "https://bayosthiti.ai/",
    bg: "/images/Bayosthiti AI.png",
  },
];

export default function Section4Ecosystem() {
  const [current, setCurrent] = useState(0);
  const [bgOpacity, setBgOpacity] = useState(1);
  const [bgSrc, setBgSrc] = useState(slides[0].bg);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = slides.length;

  const goTo = useCallback(
    (index: number) => {
      const next = ((index % total) + total) % total;
      setBgOpacity(0);
      setTimeout(() => {
        setBgSrc(slides[next].bg);
        setBgOpacity(1);
      }, 200);
      setCurrent(next);
    },
    [total]
  );

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) return;
    autoPlayRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % total;
        setBgOpacity(0);
        setTimeout(() => {
          setBgSrc(slides[next].bg);
          setBgOpacity(1);
        }, 200);
        return next;
      });
    }, 5000);
  }, [total]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  // Touch support
  const touchStartX = useRef<number | null>(null);

  return (
    <section className="s4-section" style={{ fontFamily: "'Manrope', Arial, Helvetica, sans-serif" }}>
      {/* Scrolling Banner — full-width, breaks out of parent padding */}
      <div
        style={{
          transform: "rotate(-2.07deg)",
          backgroundImage: "linear-gradient(92deg, #45D0BD 0%, #44B6E9 100%)",
          margin: "40px -40px 0px -40px",
          padding: "50px 0px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="marquee-banner">
          <div className="marquee-banner-track">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="marquee-banner-text">
                / Biostate ecosystem — where innovation connects across science
                and AI.&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Trapezoid Slider */}
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div
        ref={containerRef}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
        className="trapezoid-slider"
        style={{
          position: "relative",
          width: "100%",
          height: "calc(100vh - 200px)",
          maxHeight: 700,
          margin: "40px auto 0",
          overflow: "hidden",
          borderRadius: 20,
          backgroundImage: `url(${bgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.4s ease-in-out",
        }}
      >
        {/* Trapezoid background with image */}
        <svg
          className="trapezoid-svg"
          viewBox="0 0 1400 700"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "block",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          <defs>
            <pattern
              id="trapezoidPattern"
              patternUnits="userSpaceOnUse"
              width="1400"
              height="700"
            >
              <image
                href={bgSrc}
                width="1400"
                height="700"
                preserveAspectRatio="xMidYMid slice"
                style={{
                  transition: "opacity 0.4s ease-in-out",
                  opacity: bgOpacity,
                }}
              />
            </pattern>
          </defs>
          <path
            d="M0 700 L0 62 A20 20 0 0 1 20 50 L1400 0 L1400 700 Z"
            fill="url(#trapezoidPattern)"
          />
        </svg>

        {/* Slider content */}
        <div
          className="trapezoid-content"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "0 100px",
            boxSizing: "border-box",
            gap: 40,
            zIndex: 2,
          }}
        >
          <div
            style={{
              position: "relative",
              width: 340,
              maxWidth: "100%",
              paddingBottom: 72,
            }}
          >
            {/* Prev / Next */}
            <button
              onClick={() => goTo(current - 1)}
              className="trapezoid-nav-btn"
              style={{
                position: "absolute",
                left: -70,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 5,
              }}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={() => goTo(current + 1)}
              className="trapezoid-nav-btn"
              style={{
                position: "absolute",
                right: -70,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 5,
              }}
              aria-label="Next"
            >
              ›
            </button>

            {/* Cards */}
            <div
              className="trapezoid-card-wrapper"
              style={{
                width: "100%",
                height: "min(420px, calc(100vh - 320px))",
                borderRadius: 24,
                overflow: "hidden",
              }}
              onTouchStart={(e) => {
                touchStartX.current = e.changedTouches[0]?.clientX ?? null;
              }}
              onTouchEnd={(e) => {
                if (touchStartX.current === null) return;
                const diff =
                  touchStartX.current - (e.changedTouches[0]?.clientX ?? 0);
                if (Math.abs(diff) > 50) goTo(current + (diff > 0 ? 1 : -1));
                touchStartX.current = null;
              }}
            >
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: `translate3d(-${current * 100}%, 0, 0)`,
                }}
              >
                {slides.map((slide) => (
                  <div
                    key={slide.title}
                    style={{ flex: "0 0 100%", width: "100%", height: "100%" }}
                  >
                    <div
                      style={{
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        borderRadius: 24,
                        padding: 35,
                        height: "100%",
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            display: "inline-block",
                            background: "rgba(255, 255, 255, 0.2)",
                            color: "white",
                            padding: "2px 16px",
                            borderRadius: 20,
                            fontSize: 12,
                            fontWeight: 300,
                            letterSpacing: 0.5,
                            backdropFilter: "blur(10px)",
                            marginBottom: 0,
                          }}
                        >
                          {slide.label}
                        </span>
                        <h2
                          style={{
                            color: "white",
                            fontSize: 28,
                            fontWeight: 600,
                            lineHeight: 1.3,
                            marginBottom: 15,
                          }}
                        >
                          {slide.title}
                        </h2>
                        <p
                          style={{
                            color: "rgba(255, 255, 255, 0.9)",
                            fontSize: 16,
                            fontWeight: 300,
                            lineHeight: 1.6,
                            marginBottom: 20,
                          }}
                        >
                          {slide.description}
                        </p>
                        <p
                          style={{
                            color: "rgba(255, 255, 255, 0.8)",
                            fontSize: 14,
                            fontWeight: 300,
                            marginBottom: 30,
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          📍 {slide.location}
                        </p>
                      </div>
                      <a
                        href={slide.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="trapezoid-explore-link"
                      >
                        Visit website →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination dots */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  height: 32,
                  padding: "0 20px",
                  background: "rgba(15, 23, 42, 0.35)",
                  borderRadius: 999,
                  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.25)",
                }}
              >
                {slides.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => goTo(i)}
                    style={{
                      width: i === current ? 24 : 12,
                      height: 12,
                      borderRadius: i === current ? 50 : "50%",
                      background:
                        i === current
                          ? "white"
                          : "rgba(255, 255, 255, 0.4)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
