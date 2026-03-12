import type { Metadata } from "next";
import Link from "next/link";
import TechnologyTabs from "@/components/TechnologyTabs";

export const metadata: Metadata = {
  title: "DNA Sequencing - biostate.AI",
  description:
    "DNA as the Foundation of Precision Health. Biostate's whole exome sequencing platform delivers high coverage uniformity and exceptional reproducibility.",
};

export default function DNAPage() {
  return (
    <div style={{ overflowX: "hidden" }}>
      {/* Section 1 - Hero: SVG as full-width background, pulled up behind header */}
      <section
        className="dna-hero-section"
        style={{ position: "relative", width: "100%" }}
      >
        {/* SVG background — fills full screen width, auto height to keep aspect ratio */}
        <img
          src="/images/DNA_hero.svg"
          alt=""
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />

        {/* Text overlay positioned on the right half */}
        <div
          className="dna-hero-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 6%",
          }}
        >
          <div
            className="dna-hero-content"
            style={{
              width: "50%",
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
            }}
          >
            {/* Tag */}
            <p
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#555555",
                marginBottom: "16px",
                letterSpacing: "0.02em",
              }}
            >
              [ intro ]
            </p>

            {/* Heading */}
            <h1
              className="dna-hero-title"
              style={{
                fontSize: "clamp(36px, 5vw, 80px)",
                fontWeight: 400,
                lineHeight: "1.15em",
                letterSpacing: "-0.01em",
                paddingTop: "4px",
                color: "#1a1a1a",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, rgb(130, 88, 200), rgb(44, 132, 200))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                  display: "inline-block",
                  padding: "0.1em 0",
                  margin: "-0.1em 0",
                }}
              >
                DNA
              </span>{" "}
              as the
              <br />
              Foundation of
              <br />
              Precision Health
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: "clamp(13px, 1.1vw, 16px)",
                lineHeight: "1.7em",
                color: "#444444",
                marginTop: "28px",
                paddingRight: "5%",
                fontWeight: 400,
              }}
            >
              Biostate&apos;s whole exome sequencing platform delivers high coverage uniformity,
              minimal zero-coverage regions, and exceptional reproducibility, enabling accurate
              detection of disease-related genetic variants across all sample types.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - BIRT + PERD v3 Technology */}
      <section
        style={{
          padding: "80px 0",
          fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 60px",
          }}
        >
          {/* Dark card container */}
          <div
            style={{
              backgroundColor: "#1a1a1a",
              borderRadius: "24px",
              padding: "64px 56px 72px",
            }}
          >
            {/* Header row */}
            <div
              className="dna-tech-header"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "56px",
              }}
            >
              {/* Left - Title */}
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.5)",
                    margin: "0 0 12px 0",
                  }}
                >
                  [technology]
                </p>
                <h2
                  style={{
                    fontSize: "clamp(36px, 4vw, 52px)",
                    fontWeight: 500,
                    lineHeight: 1.15,
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  BIRT + PERD v3
                  <br />
                  Sequencing Technology
                </h2>
              </div>

              {/* Right - Description + Button */}
              <div style={{ textAlign: "left", maxWidth: "360px" }}>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    color: "#fff",
                    lineHeight: 1.6,
                    margin: "0 0 24px 0",
                  }}
                >
                  More usable reads. Lower cost. Broader
                  <br />
                  transcriptome coverage.
                </p>
                <Link
                  href="/pdf/20250402-BIRT%2BPERD%20One%20Page.pdf"
                  download
                  className="book-a-call-btn book-a-call-btn-dark group"
                >
                  Download Technical Overview
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
                </Link>
              </div>
            </div>

            {/* Tabs Component */}
            <TechnologyTabs />
          </div>
        </div>
      </section>
    </div>
  );
}
