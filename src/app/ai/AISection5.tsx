"use client";

import { useState } from "react";

export default function AISection5() {
  const [archHover, setArchHover] = useState(false);
  return (
    <>
      {/* ── Scrolling Banner ── */}
      <section
        className="s4-diagonal-banner"
        style={{
          transform: "rotate(-2.07deg)",
          backgroundImage: "linear-gradient(135deg, #45d0bd 0%, #44b6e9 100%)",
          margin: "40px -5px 0px -5px",
          padding: "50px 0px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="marquee-banner">
          <div className="marquee-banner-track">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="marquee-banner-text">
                /N-Act AI multi-omics intelligence model for precise and
                clinically actionable insights&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── N-Act AI Card ── */}
      <section
        style={{
          fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
          marginTop: "80px",
        }}
      >
        <div className="container">
          <div
            style={{
              position: "relative",
              backgroundColor: "#1F1F1F",
              borderRadius: "25px",
              padding: "20px",
            }}
          >
            {/* Tilted top piece */}
            <div
              className="rna-tilted-top"
              style={{
                position: "absolute",
                top: "-60px",
                left: "0",
                width: "100.1%",
                height: "140px",
                backgroundColor: "#1F1F1F",
                transform: "rotate(-2.0deg)",
                transformOrigin: "bottom center",
                zIndex: 0,
                borderRadius: "25px 25px 0 0",
              }}
            />

            <div
              className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center"
              style={{ position: "relative", zIndex: 1 }}
            >
              {/* Left - N-Act Image */}
              <div className="w-full lg:w-1/2 flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/N-act.png"
                  alt="N-Act AI Platform"
                  style={{
                    width: "80%",
                    height: "auto",
                    borderRadius: "16px",
                  }}
                />
              </div>

              {/* Right - Text Content */}
              <div className="w-full lg:w-1/2" style={{ padding: "20px 0" }}>
                {/* Tag */}
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#ffffff",
                    marginBottom: "16px",
                    opacity: 0.7,
                  }}
                >
                  [ flagship AI ]
                </p>

                {/* Heading */}
                <h2
                  style={{
                    fontSize: "clamp(48px, 5vw, 72px)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    color: "#ffffff",
                    margin: "0 0 24px 0",
                  }}
                >
                  N-Act AI
                </h2>

                {/* Description */}
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: 400,
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.75)",
                    margin: "0 0 48px 0",
                    maxWidth: "520px",
                  }}
                >
                  K-Dense conducts complete scientific research from hypothesis
                  to publication with minimal human intervention
                </p>

                {/* Feature Items */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                  }}
                >
                  {/* Feature 1 - icon1 teal */}
                  <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/icon1-teal.svg"
                      alt="AI-driven Discovery"
                      style={{ width: "64px", height: "64px", flexShrink: 0 }}
                    />
                    <div>
                      <h4
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "#ffffff",
                          margin: "0 0 8px 0",
                        }}
                      >
                        AI-driven Discovery
                      </h4>
                      <p
                        style={{
                          fontSize: "15px",
                          fontWeight: 400,
                          lineHeight: 1.7,
                          color: "rgba(255,255,255,0.7)",
                          margin: 0,
                          maxWidth: "460px",
                        }}
                      >
                        Detects molecular signatures across DNA, RNA, and proteins to
                        reveal hidden disease mechanisms.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 - icon3 teal */}
                  <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/icon3-teal.svg"
                      alt="Predictive Modeling"
                      style={{ width: "64px", height: "64px", flexShrink: 0 }}
                    />
                    <div>
                      <h4
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "#ffffff",
                          margin: "0 0 8px 0",
                        }}
                      >
                        Predictive Modeling
                      </h4>
                      <p
                        style={{
                          fontSize: "15px",
                          fontWeight: 400,
                          lineHeight: 1.7,
                          color: "rgba(255,255,255,0.7)",
                          margin: 0,
                          maxWidth: "460px",
                        }}
                      >
                        Learns patient-specific patterns to forecast disease risks and
                        treatment responses.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 - icon4 teal */}
                  <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/icon4-teal.svg"
                      alt="Explainable Insights"
                      style={{ width: "64px", height: "64px", flexShrink: 0 }}
                    />
                    <div>
                      <h4
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "#ffffff",
                          margin: "0 0 8px 0",
                        }}
                      >
                        Explainable Insights
                      </h4>
                      <p
                        style={{
                          fontSize: "15px",
                          fontWeight: 400,
                          lineHeight: 1.7,
                          color: "rgba(255,255,255,0.7)",
                          margin: 0,
                          maxWidth: "460px",
                        }}
                      >
                        Generates interpretable models — making biological decisions
                        transparent and reproducible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Two Image Cards ── */}
      <section
        style={{
          fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
          padding: "60px 0 0",
        }}
      >
        <div className="container">
          <div className="s5-two-cards">
            {/* AI Architecture card - interactive */}
            <div
              className="s5-arch-card"
              onMouseEnter={() => setArchHover(true)}
              onMouseLeave={() => setArchHover(false)}
              onClick={() =>
                window.open(
                  "https://dynamicmultiome.com/ai-visualization/",
                  "_blank"
                )
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/AI Architecture.svg"
                alt="Architecture Diagram"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                  transform: archHover ? "scale(1.02)" : "scale(1)",
                  transition: "transform 0.3s ease",
                }}
              />
              {/* CTA pill button */}
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
                    borderRadius: 12,
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

            {/* N-Act AI Analysis card */}
            <div className="s5-nact-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/n-act1.svg"
                alt="N-Act AI Analysis"
                style={{
                  width: "90%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: 20,
                }}
              />
            </div>
          </div>

          <style jsx>{`
            .s5-two-cards {
              display: grid;
              grid-template-columns: 5fr 7fr;
              gap: 24px;
              align-items: stretch;
            }
            .s5-arch-card {
              cursor: pointer;
              border-radius: 20px;
              overflow: visible;
              position: relative;
              height: 100%;
            }
            .s5-nact-card {
              border-radius: 20px;
              overflow: hidden;
              height: 100%;
              display: flex;
              justify-content: flex-end;
            }
            @media (max-width: 768px) {
              .s5-two-cards {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </div>
      </section>
      {/* ── AML Prognosis Section ── */}
      <section
        style={{
          fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
          padding: "100px 0 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration - section level */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/AML_bg.svg"
          alt=""
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "60%",
            height: "auto",
            opacity: 0.6,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div className="container">
          {/* Heading row */}
          <div style={{ marginBottom: "40px" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#888",
                marginBottom: "16px",
              }}
            >
              [ about ]
            </p>
            <h2
              style={{
                fontSize: "clamp(36px, 4.5vw, 60px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#1a1a1a",
                margin: 0,
                maxWidth: "560px",
              }}
            >
              Guiding Bone Marrow Transplant for AML Patients
            </h2>
          </div>

          {/* Cards grid - 1:1 ratio */}
          <div className="aml-grid">
            {/* Left Column - one card */}
            <div className="aml-left">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/AML_card1.svg"
                alt="AML Prognosis Statistics - Progression-Free Survival"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Right Column - two cards */}
            <div className="aml-right">
              {/* Card 2 - Identifies AML patients */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/AML_card2.svg"
                alt="Identifies AML patients with higher relapse risk based on initial bone marrow biopsy RNA"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "25px",
                  marginTop: "30px",
                }}
              />

              {/* Card 3 - Better than pathology */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/AML_card3.svg"
                alt="Better than pathology-based prognosis"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "25px",
                }}
              />
            </div>
          </div>

          <style jsx>{`
            .aml-grid {
              display: grid;
              grid-template-columns: 7fr 3fr;
              gap: 40px;
              align-items: start;
            }
            .aml-left {
              display: flex;
              flex-direction: column;
            }
            .aml-right {
              display: flex;
              flex-direction: column;
              gap: 20px;
              position: relative;
            }
            @media (max-width: 768px) {
              .aml-grid {
                grid-template-columns: 1fr !important;
              }
              .aml-bg-decor {
                display: none;
              }
            }
          `}</style>
        </div>
      </section>
    </>
  );
}
