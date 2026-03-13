"use client";

import { useState, useCallback } from "react";

const YOUTUBE_VIDEO_ID = "jP1K_8e7BjI";

export default function AISection1() {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = useCallback(() => setShowVideo(true), []);
  const closeVideo = useCallback(() => setShowVideo(false), []);

  return (
    <section
      style={{
        maxWidth: "1340px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "20px 24px 0",
      }}
    >
      {/* Hero Heading */}
      <div style={{ marginBottom: "48px" }}>
        <h1
          className="ai-hero-title"
          style={{
            fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
            fontSize: "clamp(48px, 7vw, 96px)",
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            margin: "0 0 8px 0",
            background:
              "linear-gradient(135deg, #8258c8 0%, #2c84c8 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          Biomedical AI
        </h1>
        <p
          className="ai-hero-subtitle"
          style={{
            fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
            fontSize: "clamp(32px, 5vw, 64px)",
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#111111",
            margin: 0,
          }}
        >
          Lift Healthspans for Everyone
        </p>
      </div>

      {/* Two-Card Row */}
      <div
        className="ai-s1-cards"
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "stretch",
        }}
      >
        {/* ── Left Card: Dark info card ── */}
        <div
          className="ai-s1-card-left"
          style={{
            flex: "0 0 30%",
            backgroundColor: "#1F1F1F",
            borderRadius: "24px",
            padding: "54px 63px 40px 40px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "480px",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                margin: "0 0 32px 0",
                color: "#ffffff",
                maxWidth: "420px",
              }}
            >
              Transforming omics data into intelligence
            </h3>
            <p
              style={{
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.75)",
                margin: 0,
                maxWidth: "420px",
              }}
            >
              Our AI portfolio features two flagship technologies: K-Dense, our
              autonomous multi-agent scientific platform, and N-Act, our
              next-generation multi-omics intelligence model — together enabling
              precise, scalable, and clinically actionable insights.
            </p>
          </div>

          {/* Decorative AI icon at bottom-right */}
          <svg
            width="142"
            height="94"
            viewBox="0 0 142 94"
            fill="none"
            style={{
              alignSelf: "flex-end",
              marginTop: "32px",
              opacity: 0.35,
            }}
          >
            <path
              d="M0 93.5L40.5 0H62L102.5 93.5H80.5L72 71H30L21.5 93.5H0ZM36 54H66L51 12L36 54Z"
              fill="url(#ai-icon-grad)"
            />
            <path d="M112 0H132V93.5H112V0Z" fill="url(#ai-icon-grad)" />
            <defs>
              <linearGradient
                id="ai-icon-grad"
                x1="0"
                y1="0"
                x2="142"
                y2="94"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8258c8" />
                <stop offset="1" stopColor="#2c84c8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* ── Right Card: Video card ── */}
        <div
          className="ai-s1-card-right"
          style={{
            flex: "0 0 calc(70% - 24px)",
            borderRadius: "24px",
            position: "relative",
            overflow: "hidden",
            height: "480px",
            cursor: "pointer",
          }}
          onClick={openVideo}
        >
          {/* GIF Background */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/AI_video.gif"
            alt="AI Vision"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Light blue/purple tint overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(130, 88, 200, 0.2), rgba(44, 132, 200, 0.2))",
            }}
          />

          {/* Content overlay */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "48px 40px",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "clamp(36px, 4vw, 56px)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  margin: 0,
                  color: "#ffffff",
                }}
              >
                Our Vision
              </h2>
            </div>

            <div>
              <p
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                Track disease progression.
                <br />
                Predict the future.
                <br />
                Act earlier.
              </p>
            </div>
          </div>

          {/* ── Bottom-right notch with Watch video button ── */}
          {/* White notch area */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "280px",
              height: "80px",
              backgroundColor: "#ffffff",
              borderTopLeftRadius: "24px",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation();
              openVideo();
            }}
          >
            {/* Play icon circle */}
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1.5px solid #666",
                flexShrink: 0,
                marginTop: "10px",
              }}
            >
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                <path d="M0 0L10 6L0 12V0Z" fill="#333" />
              </svg>
            </span>
            <span
              style={{
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "16px",
                fontWeight: 500,
                color: "#333",
                marginTop: "10px",
              }}
            >
              Watch video
            </span>
          </div>
          {/* Concave corner - above notch */}
          <div
            style={{
              position: "absolute",
              bottom: "80px",
              right: 0,
              width: "25px",
              height: "25px",
              background:
                "radial-gradient(circle at 0% 0%, transparent 25px, #ffffff 25px)",
              zIndex: 2,
            }}
          />
          {/* Concave corner - left of notch */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: "280px",
              width: "25px",
              height: "25px",
              background:
                "radial-gradient(circle at 0% 0%, transparent 25px, #ffffff 25px)",
              zIndex: 2,
            }}
          />
        </div>
      </div>
      {/* ── Video Modal ── */}
      {showVideo && (
        <div
          onClick={closeVideo}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Close button */}
          <button
            onClick={closeVideo}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "32px",
              cursor: "pointer",
              lineHeight: 1,
              padding: "8px",
            }}
          >
            ×
          </button>
          {/* YouTube embed */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "90vw",
              maxWidth: "1100px",
              aspectRatio: "16 / 9",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
              title="Dynamic Multiome Intro Video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
