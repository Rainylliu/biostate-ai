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
        <div className="container">
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
      </section>
    </div>
  );
}
