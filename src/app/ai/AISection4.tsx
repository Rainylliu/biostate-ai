"use client";

import { useState, useCallback } from "react";

export default function AISection4() {
  const [showPaper, setShowPaper] = useState(false);

  const openPaper = useCallback(() => setShowPaper(true), []);
  const closePaper = useCallback(() => setShowPaper(false), []);

  return (
    <section
      className="ai-section4"
      style={{
        fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
        padding: "120px 0",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="container">
        {/* === Aging Sub-section === */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start mb-12 lg:mb-8">
          {/* Left - Title */}
          <div className="w-full lg:w-1/2">
            <h2
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#000000",
                margin: 0,
              }}
            >
              World&apos;s Best
              <br />
              Measure of{" "}
              <span style={{ background: "linear-gradient(90deg, #45d0bd, #44b6e9)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Aging</span>
            </h2>
          </div>
          {/* Right - Description + Button */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start" style={{ paddingTop: "8px" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "#333",
                margin: "0 0 24px 0",
                maxWidth: "480px",
              }}
            >
              Collaborating with David Sinclair from Harvard Medical School, we
              developed the world&apos;s best model for predicting age and uncovered
              novel science, including the discovery of 4 new RNA biomarkers of
              aging.
            </p>
            <button
              type="button"
              onClick={openPaper}
              className="book-a-call-btn book-a-call-btn-solid-teal"
              style={{ alignSelf: "flex-start", cursor: "pointer" }}
            >
              Read the paper
              <span className="book-a-call-arrow">
                <span className="book-a-call-arrow-inner">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Aging Images Row */}
        <div className="ai-s4-images-row flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* David Sinclair Photo */}
          <div className="w-full lg:w-1/3" style={{ position: "relative", overflow: "hidden", borderRadius: "20px", minHeight: "300px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="hidden lg:block"
              src="/images/David Sinclair.png"
              alt="David Sinclair"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="block lg:hidden"
              src="/images/David Sinclair_mobile.svg"
              alt="David Sinclair"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Aging Chart */}
          <div className="w-full lg:w-2/3 flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Aging.png"
              alt="Aging biomarkers chart - Chronological Age vs Genes"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>

        {/* === Drug Lead Sub-section === */}
        <div
          className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start"
          style={{ marginTop: "120px" }}
        >
          {/* Left - Title */}
          <div className="w-full lg:w-1/2">
            <h2
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#000000",
                margin: 0,
              }}
            >
              Fast and Novel{" "}
              <span style={{ background: "linear-gradient(90deg, #45d0bd, #44b6e9)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Drug
              <br />
              Lead</span>{" "}
              Discovery
            </h2>
          </div>
          {/* Right - Description */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start" style={{ paddingTop: "8px" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "#333",
                margin: 0,
                maxWidth: "480px",
              }}
            >
              Collaborating with Swamy Vijayan, CEO of Zafrens, we accelerated
              three months of work into just four days with K-Dense and uncovered
              previously unrecognized cell-state patterns linked to compound
              response.
            </p>
          </div>
        </div>

        {/* Drug Lead Images Row */}
        <div
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch"
          style={{ marginTop: "48px" }}
        >
          {/* Drug Lead Chart */}
          <div className="w-full lg:w-2/3 flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Drug Lead.png"
              alt="Top 10 Compounds in PC1-PC2 Space"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          {/* Swamy Vijayan Photo */}
          <div className="w-full lg:w-1/3" style={{ position: "relative", overflow: "hidden", borderRadius: "20px", minHeight: "300px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="hidden lg:block"
              src="/images/Swamy Vijayan.png"
              alt="Swamy Vijayan"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="block lg:hidden"
              src="/images/Swamy Vijayan_mobile.svg"
              alt="Swamy Vijayan"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── PDF Modal ── */}
      {showPaper && (
        <div
          onClick={closePaper}
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
            onClick={closePaper}
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
              zIndex: 10000,
            }}
          >
            ×
          </button>
          {/* PDF embed */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "90vw",
              maxWidth: "1100px",
              height: "85vh",
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor: "#ffffff",
            }}
          >
            <iframe
              src="/pdf/BIRT-PERD-WhitePaper.pdf"
              title="White Paper - BIRT PERD"
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
