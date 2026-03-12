import type { Metadata } from "next";
import DNATechnologyTabs from "@/components/DNATechnologyTabs";

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
                color: "#111111",
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

      {/* Section 2 - Optimized Chemistry / Technology Overview */}
      <section
        className="dna-section2"
        style={{
          padding: "48px 0",
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
                  color: "#111111",
                  margin: "0 0 12px 0",
                  letterSpacing: "0.02em",
                }}
              >
                [ overview ]
              </p>
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 64px)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: "#1a1a1a",
                  margin: 0,
                  maxWidth: "1000px",
                }}
              >
                Optimized Chemistry Delivers Superior Performance
              </h2>
            </div>

            {/* Right - Button */}
            <div>
              <a
                href="/pdf/BIRT-PERD-WhitePaper.pdf"
                download
                className="book-a-call-btn book-a-call-btn-gradient group"
              >
                Download the white paper
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
              </a>
            </div>
          </div>

          {/* Tabs Component */}
          <DNATechnologyTabs />
        </div>
      </section>
    </div>
  );
}
