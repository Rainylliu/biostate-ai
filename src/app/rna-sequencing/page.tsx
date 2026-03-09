import type { Metadata } from "next";

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
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 600,
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
          background: "linear-gradient(180deg, #f5f7fb 0%, #ffffff 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Title */}
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              color: "#1f1f1f",
              lineHeight: 1.2,
              margin: "0 0 16px 0",
            }}
          >
            Still Paying{" "}
            <span style={{ color: "#E85B5B" }}>$200+</span>{" "}
            per Sample for
            <br />
            RNA-seq?
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
              flexWrap: "wrap",
              marginBottom: "48px",
            }}
          >
            {[
              {
                icon: (
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <circle cx="28" cy="44" rx="12" ry="3" stroke="#333" strokeWidth="1.5" />
                    <ellipse cx="28" cy="38" rx="12" ry="3" stroke="#333" strokeWidth="1.5" />
                    <ellipse cx="28" cy="32" rx="12" ry="3" stroke="#333" strokeWidth="1.5" />
                    <ellipse cx="28" cy="26" rx="12" ry="3" stroke="#333" strokeWidth="1.5" />
                    <line x1="16" y1="26" x2="16" y2="44" stroke="#333" strokeWidth="1.5" />
                    <line x1="40" y1="26" x2="40" y2="44" stroke="#333" strokeWidth="1.5" />
                    <circle cx="28" cy="14" r="6" stroke="#333" strokeWidth="1.5" />
                    <text x="28" y="18" textAnchor="middle" fontSize="10" fill="#333" fontWeight="600">$</text>
                  </svg>
                ),
                text: "$200+ per sample typical cost",
              },
              {
                icon: (
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <rect x="22" y="8" width="12" height="40" rx="6" stroke="#333" strokeWidth="1.5" />
                    <line x1="22" y1="16" x2="34" y2="16" stroke="#333" strokeWidth="1.5" />
                    <rect x="24" y="18" width="8" height="12" rx="1" fill="#e0e0e0" />
                    <circle cx="28" cy="6" r="2" fill="#333" />
                  </svg>
                ),
                text: "~75% of cost from library prep",
              },
              {
                icon: (
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <rect x="10" y="40" width="6" height="8" fill="#e0e0e0" stroke="#333" strokeWidth="1" />
                    <rect x="18" y="32" width="6" height="16" fill="#e0e0e0" stroke="#333" strokeWidth="1" />
                    <rect x="26" y="24" width="6" height="24" fill="#e0e0e0" stroke="#333" strokeWidth="1" />
                    <rect x="34" y="16" width="6" height="32" fill="#e0e0e0" stroke="#333" strokeWidth="1" />
                    <path d="M12 36L20 28L28 20L38 14" stroke="#333" strokeWidth="1.5" fill="none" />
                    <path d="M34 14H40V20" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                text: "Up to 80% reads wasted on rRNA",
              },
              {
                icon: (
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <path d="M28 8V48" stroke="#333" strokeWidth="1.5" />
                    <path d="M28 8C22 14 22 20 28 26C34 20 34 14 28 8Z" stroke="#333" strokeWidth="1.5" fill="none" />
                    <path d="M28 26C22 32 22 38 28 44C34 38 34 32 28 26Z" stroke="#333" strokeWidth="1.5" fill="none" />
                    <line x1="22" y1="12" x2="28" y2="18" stroke="#333" strokeWidth="1" />
                    <line x1="34" y1="12" x2="28" y2="18" stroke="#333" strokeWidth="1" />
                    <line x1="22" y1="32" x2="28" y2="38" stroke="#333" strokeWidth="1" />
                    <line x1="34" y1="32" x2="28" y2="38" stroke="#333" strokeWidth="1" />
                  </svg>
                ),
                text: "Poly(A) bias misses lncRNA & regulatory RNAs",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  width: "220px",
                }}
              >
                <div style={{ height: "72px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {item.icon}
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
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "18px",
                      height: "18px",
                      borderRadius: "4px",
                      background: "#FDEAEA",
                      color: "#E85B5B",
                      fontSize: "12px",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    !
                  </span>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Result Banner */}
          <div
            style={{
              background: "#FDF2F2",
              borderLeft: "4px solid #E85B5B",
              borderRadius: "0 12px 12px 0",
              padding: "20px 32px",
              maxWidth: "680px",
              margin: "0 auto",
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "14px",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L1 14H15L8 1Z" fill="#E85B5B" />
                  <text x="8" y="13" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="700">!</text>
                </svg>
                <strong style={{ color: "#E85B5B" }}>Result:</strong>
              </span>
              <br />
              <span style={{ color: "#888" }}>
                Fewer replicates.{" "}&nbsp;|&nbsp;{" "}Smaller studies.{" "}&nbsp;|&nbsp;{" "}Limited power.
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
