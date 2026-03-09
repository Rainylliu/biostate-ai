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
    </div>
  );
}
