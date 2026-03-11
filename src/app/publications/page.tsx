import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications - biostate.AI",
  description: "Our publications and research at biostate.AI.",
};

export default function PublicationPage() {
  return (
    <div>
      {/* ── Hero Section ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 20px 80px",
          background: "#ffffff",
        }}
      >
        {/* Background SVG */}
        <img
          src="/images/publication_bg.svg"
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            userSelect: "none",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <h1
          style={{
            position: "relative",
            fontFamily: "'Sora', Arial, Helvetica, sans-serif",
            fontSize: 100,
            fontWeight: 500,
            color: "#111",
            lineHeight: 1.15,
            margin: "0 0 24px 0",
          }}
        >
          Our{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #8258c8, #2c84c8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Publications
          </span>
        </h1>

        <p
          style={{
            position: "relative",
            fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
            fontSize: 18,
            fontWeight: 400,
            color: "#555",
            lineHeight: 1.6,
            maxWidth: 600,
            margin: 0,
          }}
        >
          Advancing scientific understanding through evidence-based research
          <br />
          and collaborative innovation.
        </p>
      </section>
    </div>
  );
}
