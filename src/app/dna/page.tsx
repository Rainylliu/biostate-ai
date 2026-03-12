import type { Metadata } from "next";

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
        style={{ position: "relative", width: "100%", marginTop: "-161px" }}
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
              [ Grants for 30 free sample available ! ]
            </p>

            {/* Heading */}
            <h1
              className="dna-hero-title"
              style={{
                fontSize: "clamp(36px, 5vw, 80px)",
                fontWeight: 400,
                lineHeight: "1.1em",
                letterSpacing: "-0.01em",
                color: "#1a1a1a",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  background: "linear-gradient(135deg, #5B8DEF 0%, #7C5CE7 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
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
    </div>
  );
}
