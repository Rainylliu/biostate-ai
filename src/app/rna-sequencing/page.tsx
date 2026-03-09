import type { Metadata } from "next";
import TechnologyTabs from "@/components/TechnologyTabs";

export const metadata: Metadata = {
  title: "Total RNA Sequencing from $60/sample - biostate.AI",
  description:
    "Total RNA-Seq starting at $60 per sample. Powered by proprietary BIRT+PERD v3 technology. Works with FFPE, blood, plasma, degraded RNA (RIN >2).",
};

export default function RNASequencingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          paddingTop: "40px",
          paddingBottom: "60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bg3.png"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 40px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            className="flex flex-col lg:flex-row lg:items-start lg:justify-between"
            style={{ gap: "40px" }}
          >
            {/* Left: Title */}
            <div style={{ flex: "1 1 0" }}>
              <h1
                style={{
                  fontFamily: "'Sora', Arial, Helvetica, sans-serif",
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 500,
                  lineHeight: 1.1,
                  color: "#1f1f1f",
                  marginBottom: "0",
                }}
              >
                Total RNA-Seq Starting
                <br />
                at{" "}
                <span
                  style={{
                    backgroundImage: "linear-gradient(135deg, #8258c8, #2c84c8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  $60 per Sample
                </span>
              </h1>
            </div>

            {/* Right: Subtext + Button */}
            <div
              style={{
                flex: "0 0 auto",
                paddingTop: "12px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#1f1f1f",
                  marginBottom: "24px",
                }}
              >
                Powered by proprietary BIRT+PERD v3 technology
                <br />
                Works with FFPE, blood, plasma, degraded RNA (RIN &gt;2)
              </p>
              <a
                href="/get-quote"
                className="book-a-call-btn book-a-call-btn-solid-teal group"
              >
                Get My Quote
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

        {/* Key Highlights + Video */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "48px 40px 0",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "24px",
              alignItems: "stretch",
            }}
          >
            {/* Left: Key Highlights Card */}
            <div
              style={{
                flex: "0 0 380px",
                borderRadius: "20px",
                border: "1px solid #E6EAF2",
                background: "#ffffff",
                padding: "40px 36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#1f1f1f",
                    margin: "0 0 28px 0",
                  }}
                >
                  Key Highlights (quick scan):
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {[
                    "From $60/sample",
                    "10 ng input supported",
                    "Up to 99% rRNA depletion",
                    "Globin depletion for blood",
                    "OmicsWeb Copilot for Bioinformatics",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#1f1f1f",
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M3 8.5L6.5 12L13 4" stroke="#45D0BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ marginTop: "32px" }}>
                <a
                  href="/pdf/20250402-BIRT+PERD One Page.pdf"
                  download
                  className="book-a-call-btn"
                >
                  Download White Paper
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

            {/* Right: YouTube Video */}
            <div
              style={{
                flex: 1,
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid #E6EAF2",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "56.25%",
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/qzjxfsyo_N4?si=nRrwiJh-cLDBunAH"
                  title="2024 Biostate RNAseq Technology"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Still Paying $200+? */}
      <section
        style={{
          padding: "80px 24px",
          background: "#ffffff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* bg4 left background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bg4.png"
          alt=""
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: "auto",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Title */}
          <h2
            style={{
              fontFamily: "'Sora', Arial, Helvetica, sans-serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 500,
              color: "#1f1f1f",
              lineHeight: 1.2,
              margin: "0 0 16px 0",
            }}
          >
            Still Paying{" "}
            <span style={{ color: "#EF6464" }}>$200+</span>{" "}
            per Sample for RNA-seq?
          </h2>

          {/* Subtitle */}
          <h3
            style={{
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              color: "#1f1f1f",
              margin: "32px 0 48px 0",
            }}
          >
            Traditional workflows:
          </h3>

          {/* 4 Icon Cards */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "nowrap",
              marginBottom: "48px",
            }}
          >
            {[
              { icon: "/images/1.svg", text: "$200+ per sample typical cost" },
              { icon: "/images/2.svg", text: "~75% of cost from library prep" },
              { icon: "/images/3.svg", text: "Up to 80% reads wasted on rRNA" },
              { icon: "/images/4.svg", text: "Poly(A) bias misses lncRNA & regulatory RNAs" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  width: "auto",
                  whiteSpace: "nowrap",
                }}
              >
                <div style={{ height: "72px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={item.icon} alt="" width={56} height={56} />
                </div>
                <p
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#444",
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <img
                    src="/images/wrong.svg"
                    alt=""
                    width={20}
                    height={20}
                    style={{ flexShrink: 0 }}
                  />
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Result Banner */}
          <div
            style={{
              background: "#FEF2F2",
              borderLeft: "4px solid #EF6464",
              borderRadius: "0 12px 12px 0",
              padding: "20px 32px",
              maxWidth: "680px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "14px",
                margin: 0,
                lineHeight: 1.6,
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <img src="/images/warning.svg" alt="" width={16} height={16} />
                <strong style={{ color: "#7F1D1D" }}>Result:</strong>
              </span>
              <span style={{ color: "#7F1D1D" }}>
                Fewer replicates.{" "}&nbsp;|&nbsp;{" "}Smaller studies.{" "}&nbsp;|&nbsp;{" "}Limited power.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Our Pricing */}
      <section
        style={{
          padding: "100px 0",
          fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 60px",
            display: "flex",
            gap: "60px",
            alignItems: "flex-start",
          }}
        >
          {/* Left Column - 38% */}
          <div style={{ flex: "0 0 38%", maxWidth: "38%" }}>
            {/* OUR SOLUTION bubble */}
            <span
              style={{
                display: "inline-block",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "#44B6E9",
                backgroundColor: "rgba(68, 182, 233, 0.2)",
                borderRadius: "999px",
                padding: "6px 20px",
                marginBottom: "24px",
              }}
            >
              OUR SOLUTION
            </span>

            <h2
              style={{
                fontFamily: "'Sora', Arial, Helvetica, sans-serif",
                fontSize: "48px",
                fontWeight: 500,
                lineHeight: 1.1,
                color: "#1f1f1f",
                margin: "0 0 28px 0",
              }}
            >
              Our Pricing
            </h2>

            <p
              style={{
                fontSize: "15px",
                fontWeight: 400,
                color: "#666",
                lineHeight: 1.7,
                margin: "0 0 48px 0",
              }}
            >
              Powered by BIRT+PERD — 24-sample pooling cuts library
              <br />
              prep cost by 70%
            </p>

            {/* Checkmarks */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "48px" }}>
              {[
                "10M reads included",
                "Single-end 300–450bp default",
                "Paired-end available on request",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 9.5L7.5 13L14 6" stroke="#45D0BD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontSize: "17px", fontWeight: 700, color: "#1f1f1f" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Download Price Card Button */}
            <a
              href="/pdf/20260223 RNA_Seq- Price Card_2026.pdf"
              download
              className="book-a-call-btn book-a-call-btn-solid-teal group"
            >
              Download Price Card
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

          {/* Right Column - Cards 62% */}
          <div style={{ flex: "0 0 62%", maxWidth: "62%", display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Standard Samples Card - $60 */}
            <div
              style={{
                background: "linear-gradient(135deg, #E3FFFB 0%, #C6EDFF 100%)",
                borderRadius: "20px",
                padding: "56px 56px",
                minHeight: "280px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "42px",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: "#1f1f1f",
                  margin: 0,
                  whiteSpace: "nowrap",
                  flex: "0 0 220px",
                }}
              >
                Standard
                <br />
                Samples
              </h3>
              <ul
                style={{
                  flex: 1,
                  listStyle: "disc",
                  paddingLeft: "20px",
                  margin: 0,
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "#1f1f1f",
                  lineHeight: 2.4,
                  whiteSpace: "nowrap",
                }}
              >
                <li>{"Cultured Animal Cells (>30k cells)"}</li>
                <li>Extracted RNA (Mammalian)</li>
                <li>{"For Conc. ≥ 16 ng/μL (min 10 μL)"}</li>
              </ul>
              <div style={{ whiteSpace: "nowrap", marginLeft: "24px", display: "flex", alignItems: "baseline" }}>
                <span
                  style={{
                    fontFamily: "'Sora', Arial, Helvetica, sans-serif",
                    fontSize: "72px",
                    fontWeight: 700,
                    color: "#1f1f1f",
                    lineHeight: 1,
                  }}
                >
                  $60
                </span>
                <span
                  style={{
                    fontFamily: "'Sora', Arial, Helvetica, sans-serif",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "#1f1f1f",
                  }}
                >
                  /sample
                </span>
              </div>
            </div>

            {/* Specialized Samples Card - $110 */}
            <div
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: "20px",
                padding: "56px 56px",
                minHeight: "280px",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <h3
                style={{
                  fontSize: "42px",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: "#1f1f1f",
                  margin: 0,
                  whiteSpace: "nowrap",
                  flex: "0 0 220px",
                }}
              >
                Specialized
                <br />
                Samples
              </h3>
              <ul
                style={{
                  flex: 1,
                  listStyle: "disc",
                  paddingLeft: "20px",
                  margin: 0,
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "#1f1f1f",
                  lineHeight: 1.8,
                  minWidth: "240px",
                }}
              >
                <li>Specialty and low-concentration RNA (evRNA, etc..)</li>
                <li>Biospecimens and clinical samples (whole blood, plasma, serum, PBMC, tissues, FFPE, etc..)</li>
                <li>Unusual organisms (plants, octopus, axolotl, ...)</li>
              </ul>
              <div style={{ whiteSpace: "nowrap", marginLeft: "24px", display: "flex", alignItems: "baseline" }}>
                <span
                  style={{
                    fontFamily: "'Sora', Arial, Helvetica, sans-serif",
                    fontSize: "72px",
                    fontWeight: 700,
                    color: "#1f1f1f",
                    lineHeight: 1,
                  }}
                >
                  $110
                </span>
                <span
                  style={{
                    fontFamily: "'Sora', Arial, Helvetica, sans-serif",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "#1f1f1f",
                  }}
                >
                  /sample
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - BIRT + PERD v3 Technology */}
      <section
        style={{
          padding: "30px 0 100px",
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
                <a
                  href="https://drive.google.com/file/d/1WtAcCwAINXq3dIKEAyVHqMO_e7o8ch59/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
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
                </a>
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
