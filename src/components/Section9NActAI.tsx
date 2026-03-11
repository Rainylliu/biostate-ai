"use client";

import { useState } from "react";
import Link from "next/link";
import WaveReveal from "./WaveReveal";

export default function Section9NActAI() {
  const [archHover, setArchHover] = useState(false);

  return (
    <section
      style={{
        padding: "100px 20px 80px",
        background: "#ffffff",
      }}
    >
      <div className="s9-container">
        {/* Left - Content */}
        <div className="s9-left">
          {/* N-Act AI - stroke/outline text with gradient, no fill */}
          <svg
            viewBox="0 0 480 80"
            className="s9-outline-title"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="s9-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8258C8" />
                <stop offset="100%" stopColor="#2C84C8" />
              </linearGradient>
            </defs>
            <text
              x="0"
              y="62"
              fontFamily="'Sora', Arial, Helvetica, sans-serif"
              fontSize="72"
              fontWeight="400"
              fill="none"
              stroke="url(#s9-grad)"
              strokeWidth="1.5"
              letterSpacing="-1"
            >
              N-Act AI
            </text>
          </svg>

          <p className="s7-tag">[ about ]</p>

          <WaveReveal
            text="Turning biological signals into actionable clinical insights"
            as="h2"
            style={{
              fontFamily: "'Sora', Arial, Helvetica, sans-serif",
              fontSize: 48,
              fontWeight: 400,
              color: "#333333",
              margin: "0 0 24px 0",
              lineHeight: 1.15,
            }}
            highlightWords={[]}
            highlightStyle={{}}
          />

          <p
            style={{
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              fontSize: 16,
              fontWeight: 400,
              color: "#555",
              lineHeight: 1.7,
              margin: "0 0 32px 0",
            }}
          >
            Empowering clinicians with AI-driven predictions for earlier, smarter care.
          </p>

          <Link
            href="https://dynamicmultiome.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="book-a-call-btn"
          >
            Explore more
            <span className="book-a-call-arrow">
              <span className="book-a-call-arrow-inner">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 12L12 4M12 4H5M12 4V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 12L12 4M12 4H5M12 4V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </Link>
        </div>

        {/* Right - Two image cards */}
        <div className="s9-right">
          {/* N-Act AI Analysis card */}
          <div className="s9-card">
            <img
              src="/images/n-act1.svg"
              alt="N-Act AI Analysis"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 16,
              }}
            />
          </div>

          {/* AI Architecture card - interactive */}
          <div
            className="s9-card s9-card-arch"
            onMouseEnter={() => setArchHover(true)}
            onMouseLeave={() => setArchHover(false)}
            onClick={() =>
              window.open(
                "https://dynamicmultiome.com/ai-visualization/",
                "_blank"
              )
            }
            style={{ cursor: "pointer", position: "relative" }}
          >
            <img
              src="https://biostate.jamesflare.com/wp-content/uploads/2025/11/Architecture.svg"
              alt="Architecture Diagram"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 16,
                border: archHover
                  ? "2px solid #007bff"
                  : "2px solid transparent",
                boxShadow: archHover
                  ? "0 4px 8px rgba(0, 123, 255, 0.3)"
                  : "none",
                transform: archHover ? "scale(1.02)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
            />
            {/* CTA pill button - always visible */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "linear-gradient(135deg, #FF9A6C, #FF6B6B)",
                  color: "#fff",
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  padding: "14px 28px",
                  borderRadius: 40,
                  boxShadow: "0 6px 20px rgba(255, 107, 107, 0.45)",
                  whiteSpace: "nowrap",
                }}
              >
                Explore AI Visualization
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 12L12 4M12 4H5M12 4V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .s9-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: 48px;
          align-items: flex-start;
        }
        .s9-left {
          flex: 1;
          min-width: 0;
          background: #f0f2f4;
          border-radius: 24px;
          padding: 48px 40px;
        }
        .s9-outline-title {
          width: 400px;
          max-width: 100%;
          height: auto;
          margin: 0 0 16px 0;
          display: block;
        }
        .s9-right {
          flex: 0 0 520px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .s9-card {
          border-radius: 20px;
          overflow: hidden;
        }
        .s9-card-arch {
          background: transparent;
          border-radius: 20px;
          overflow: visible;
        }
        @media (max-width: 900px) {
          .s9-container {
            flex-direction: column;
          }
          .s9-right {
            flex: none;
            width: 100%;
          }
          .s9-outline-title {
            width: 260px;
          }
        }
      `}</style>
    </section>
  );
}
