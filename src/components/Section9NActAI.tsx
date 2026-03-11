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
          <img
            src="/images/n-act1.svg"
            alt="N-Act AI"
            className="s9-logo"
          />

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
              src="/images/mission.svg"
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
            {/* Overlay button */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: archHover ? 1 : 0,
                transition: "opacity 0.3s ease",
                pointerEvents: "none",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
                  color: "#fff",
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "10px 20px",
                  borderRadius: 24,
                  boxShadow: "0 4px 12px rgba(255, 107, 107, 0.4)",
                }}
              >
                Explore AI Visualization
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
        }
        .s9-logo {
          width: 320px;
          max-width: 100%;
          height: auto;
          margin-bottom: 16px;
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
          background: #F3EEFF;
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
          .s9-logo {
            width: 240px;
          }
        }
      `}</style>
    </section>
  );
}
