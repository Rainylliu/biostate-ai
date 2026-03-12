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
          marginTop: "-40px",
          padding: "0 0 48px",
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
              marginBottom: "80px",
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

      {/* Section 3 - Scrolling Banner */}
      <section
        className="s4-diagonal-banner"
        style={{
          transform: "rotate(-2.07deg)",
          backgroundImage: "linear-gradient(92deg, #8258C8 0%, #2C84C8 100%)",
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
                / Consistent chemistry — delivering reliable coverage across every sample type.&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Grant Card (tilted top + rectangle body) */}
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
              borderRadius: "25px",
              backgroundColor: "#1F1F1F",
            }}
          >
            {/* Tilted top piece - same angle as banner */}
            <div
              className="dna-tilted-top"
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

            {/* Background SVG - fills entire card */}
            <img
              src="/images/DNA_grant.svg"
              alt=""
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                borderRadius: "25px",
                paddingTop: "100px",
              }}
            />

            {/* Content overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                padding: "60px",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <div
                className="flex flex-col lg:flex-row gap-12 lg:gap-8"
                style={{ width: "100%" }}
              >
                {/* Left - Heading */}
                <div className="w-full lg:w-1/2">
                  <h3
                    className="dna-grant-title"
                    style={{
                      fontSize: "40px",
                      fontWeight: 400,
                      lineHeight: "1.15em",
                      color: "#ffffff",
                    }}
                  >
                    Consistent Performance Across Challenging Sample Types
                  </h3>
                </div>

                {/* Right - Description + Button */}
                <div className="w-full lg:w-1/2" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "1.8em",
                      color: "rgba(255,255,255,0.75)",
                      marginBottom: "40px",
                    }}
                  >
                    Biostate&apos;s optimized workflow demonstrates exceptional
                    performance across key metrics, overcoming the coverage
                    uniformity and duplication challenges that undermine variant
                    detection in standard WES workflows.
                  </p>

                  <div>
                    <a
                      href="/grant-apply"
                      className="book-a-call-btn book-a-call-btn-gradient group"
                    >
                      Apply Grants
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Sample Type Cards */}
      <section
        style={{
          fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
          marginTop: "50px",
        }}
      >
        <div className="container">
          <div
            className="dna-sample-cards"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "20px",
            }}
          >
            {/* Card 1 - FFPE Tissue */}
            <div
              style={{
                borderRadius: "25px",
                padding: "40px",
                background: "linear-gradient(180deg, #E88BA7 0%, #D4A057 100%)",
                minHeight: "360px",
              }}
            >
              <h4
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  color: "#ffffff",
                  marginBottom: "24px",
                }}
              >
                FFPE Tissue (Single 4-micron Slide)
              </h4>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "1.875em",
                  color: "#ffffff",
                  marginBottom: "16px",
                }}
              >
                Biostate achieves <strong>~140X mean target coverage at 40M reads</strong> from FFPE samples, despite severe degradation.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "1.875em",
                  color: "#ffffff",
                }}
              >
                This performance supports reliable somatic variant detection even from challenging clinical materials.
              </p>
            </div>

            {/* Card 2 - Dried Blood Spot */}
            <div
              style={{
                borderRadius: "25px",
                padding: "40px",
                background: "linear-gradient(180deg, #8258C8 0%, #45D0BD 100%)",
                minHeight: "360px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background overlay image effect */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "url('/images/DNA_grant.svg') center/cover no-repeat",
                  opacity: 0.3,
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <h4
                  style={{
                    fontSize: "28px",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    color: "#ffffff",
                    marginBottom: "24px",
                  }}
                >
                  Dried Blood Spot (Half-Circle)
                </h4>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "1.875em",
                    color: "#ffffff",
                  }}
                >
                  A single half-circle dried blood spot yields <strong>~140X mean target coverage</strong>, demonstrating consistent performance even with limited DNA input.
                </p>
              </div>
            </div>

            {/* Card 3 - Benchmark Genomic DNA */}
            <div
              style={{
                borderRadius: "25px",
                padding: "40px",
                background: "#C8A8E8",
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 2px, transparent 2px)",
                backgroundSize: "20px 20px",
                minHeight: "360px",
              }}
            >
              <h4
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  color: "#ffffff",
                  marginBottom: "24px",
                }}
              >
                Benchmark Genomic DNA
              </h4>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "1.875em",
                  color: "#ffffff",
                }}
              >
                Benchmark genomic DNA processed through the same workflow also reaches <strong>~140X coverage</strong>, confirming strong chemistry performance across both high-quality and compromised input types.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
