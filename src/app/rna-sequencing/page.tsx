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
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 40px",
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
                    background: "linear-gradient(135deg, #45d0bd, #6766c8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
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
                className="inline-flex items-center gap-3 rounded-full transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #45d0bd, #44b6e9)",
                  padding: "14px 28px",
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#ffffff",
                }}
              >
                Get My Quote
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="12" x2="12" y2="4" />
                  <polyline points="5 4 12 4 12 11" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
