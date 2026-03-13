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
            className="dna-grant-card"
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
              className="dna-grant-bg"
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
              className="dna-grant-content"
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
        className="no-section-padding"
        style={{
          fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
          marginTop: "20px",
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
              className="dna-sample-card"
              style={{
                borderRadius: "25px",
                padding: "40px",
                position: "relative",
                overflow: "hidden",
                minHeight: "400px",
              }}
            >
              <img
                src="/images/DNA_card1.svg"
                alt=""
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
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
                    marginBottom: "80px",
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
            </div>

            {/* Card 2 - Dried Blood Spot */}
            <div
              className="dna-sample-card"
              style={{
                borderRadius: "25px",
                padding: "40px",
                minHeight: "400px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src="/images/DNA_card2.svg"
                alt=""
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
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
                    marginBottom: "80px",
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
              className="dna-sample-card"
              style={{
                borderRadius: "25px",
                padding: "40px",
                position: "relative",
                overflow: "hidden",
                minHeight: "400px",
              }}
            >
              <img
                src="/images/DNA_card3.svg"
                alt=""
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
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
                  marginBottom: "80px",
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
        </div>
      </section>
      {/* Section 4 - MARE */}
      <section
        className="dna-mare-section"
        style={{
          fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
          marginTop: "20px",
        }}
      >
        {/* MARE Hero with background */}
        <div
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <img
            className="dna-mare-bg"
            src="/images/MARE_bg.svg"
            alt=""
            style={{
              display: "block",
              width: "40%",
              height: "auto",
              marginLeft: "auto",
            }}
          />
          {/* Title overlay */}
          <div
            className="dna-mare-overlay"
            style={{
              position: "absolute",
              bottom: "60px",
              left: 0,
              width: "100%",
              padding: "0 60px",
            }}
          >
            <div className="container">
              <h2
                className="dna-mare-title"
                style={{
                  fontSize: "clamp(36px, 5vw, 72px)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: "#1a1a1a",
                  maxWidth: "800px",
                }}
              >
                <span
                  style={{
                    backgroundImage: "linear-gradient(135deg, #45D0BD, #44B6E9)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  MARE
                </span>
                {" "}— Multiplexed Amplification to Rescue Enrichment
              </h2>
            </div>
          </div>
        </div>

        {/* MARE About section */}
        <div className="container" style={{ marginTop: "60px" }}>
          <div
            className="dna-mare-about"
            style={{
              display: "flex",
              gap: "60px",
              alignItems: "flex-start",
            }}
          >
            {/* Left - Label */}
            <div style={{ flexShrink: 0 }}>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#111111",
                  letterSpacing: "0.02em",
                }}
              >
                / about /
              </p>
            </div>

            {/* Right - Description + Bullet Points */}
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "1.875em",
                  color: "#333333",
                  marginBottom: "32px",
                }}
              >
                MARE is a targeted enrichment technology engineered to rescue difficult genomic regions
                that standard WES consistently misses—especially exons with extreme GC content.
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "≈260% median target coverage, vs. ~30% (Competitor A) and <10% (Competitor B)",
                  "Maintains >150% normalized coverage on challenging exons such as RALGAPA1 exon 25",
                  "Fully customizable panels for clinically relevant or high-value gene sets",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{ flexShrink: 0, marginTop: "6px" }}
                    >
                      <path
                        d="M4 4L12 12M12 12H5M12 12V5"
                        stroke="#999999"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "1.875em",
                        color: "#333333",
                        margin: 0,
                      }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* MARE Data Row 1: Chart left, Content right */}
        <div className="s7-row dna-mare-row1" style={{ maxWidth: 1200, margin: "-80px auto 100px" }}>
          <div className="s7-col-img">
            <img
              src="/images/MARE_chart1.svg"
              alt="Coverage Rescue chart - 48 loci"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 20,
                display: "block",
              }}
            />
          </div>
          <div className="s7-col-text">
            <p className="s7-tag">/data /</p>
            <h3
              style={{
                fontFamily: "'Sora', Arial, Helvetica, sans-serif",
                fontSize: 40,
                fontWeight: 400,
                color: "#333333",
                lineHeight: 1.15,
                margin: "0 0 40px 0",
              }}
            >
              Coverage Rescue in Difficult Genomic Regions

            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <img
                  src="/images/MARE_charticon1.svg"
                  alt=""
                  className="s7-wetlab-icon"
                  style={{ width: 48, height: 48, flexShrink: 0, marginTop: 2 }}
                />
                <div>
                  <p
                    style={{
                      fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#111",
                      margin: "0 0 6px 0",
                    }}
                  >
                    01. MARE boosts coverage nearly 10×
                  </p>
                  <p
                    style={{
                      fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "#555",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    With MARE, difficult loci reach ~270% normalized coverage—dramatically higher than standard workflows.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <img
                  src="/images/MARE_charticon2.svg"
                  alt=""
                  className="s7-wetlab-icon"
                  style={{ width: 48, height: 48, flexShrink: 0, marginTop: 2 }}
                />
                <div>
                  <p
                    style={{
                      fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#111",
                      margin: "0 0 6px 0",
                    }}
                  >
                    02. Standard WES fails in these regions
                  </p>
                  <p
                    style={{
                      fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "#555",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Without MARE, coverage drops to ~30%, leaving critical diagnostic regions insufficiently captured.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <img
                  src="/images/MARE_charticon3.svg"
                  alt=""
                  className="s7-wetlab-icon"
                  style={{ width: 48, height: 48, flexShrink: 0, marginTop: 2 }}
                />
                <div>
                  <p
                    style={{
                      fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#111",
                      margin: "0 0 6px 0",
                    }}
                  >
                    03. MARE significantly outperforms competitors
                  </p>
                  <p
                    style={{
                      fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "#555",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Competitor A achieves &lt;10% coverage, while MARE consistently delivers full and reliable target enrichment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MARE Data Row 2: Content left, Chart right */}
        <div className="s7-row" style={{ maxWidth: 1200, margin: "0 auto", marginBottom: 40 }}>
          <div className="s7-col-text">
            <p className="s7-tag">/ data /</p>
            <h3
              style={{
                fontFamily: "'Sora', Arial, Helvetica, sans-serif",
                fontSize: 40,
                fontWeight: 400,
                color: "#333333",
                lineHeight: 1.15,
                margin: "0 0 28px 0",
              }}
            >
              MARE Maintains Coverage in GC-Rich Exons
            </h3>

            <p
              style={{
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: 16,
                fontWeight: 400,
                color: "#555",
                lineHeight: 1.7,
                margin: "0 0 36px 0",
              }}
            >
              In challenging high-GC exons like RALGAPA1 exon 25, MARE preserves over 10× higher coverage than competing methods, securing data others can&apos;t capture.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <span className="s7-outline-num">01</span>
                <div>
                  <p
                    style={{
                      fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#111",
                      margin: "0 0 6px 0",
                    }}
                  >
                    MARE Sustains High Coverage
                  </p>
                  <p
                    style={{
                      fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "#555",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    MARE maintains &gt;150% normalized coverage across the difficult RALGAPA1 exon 25, demonstrating stable enrichment in GC-rich regions.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <span className="s7-outline-num">02</span>
                <div>
                  <p
                    style={{
                      fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#111",
                      margin: "0 0 6px 0",
                    }}
                  >
                    Competitors Fail in Critical Exons
                  </p>
                  <p
                    style={{
                      fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "#555",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Both standard WES and other commercial kits drop below 15% coverage, leaving essential diagnostic loci undetected.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <span className="s7-outline-num">03</span>
                <div>
                  <p
                    style={{
                      fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#111",
                      margin: "0 0 6px 0",
                    }}
                  >
                    Reliable Detection Where It Matters Most
                  </p>
                  <p
                    style={{
                      fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "#555",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    MARE ensures uniform signal in even the hardest-to-capture regions—providing complete visibility for precision diagnostics.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="s7-col-img">
            <img
              src="/images/MARE_chart2.svg"
              alt="RALGAPA1 exon coverage comparison"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 20,
                display: "block",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
