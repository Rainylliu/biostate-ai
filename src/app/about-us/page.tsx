import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team - biostate.AI",
  description: "Meet the team behind biostate.AI.",
};

export default function AboutUsPage() {
  return (
    <div>
      {/* ── Section 1: Hero ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "180px 20px 100px",
          background: "#ffffff",
        }}
      >
        {/* Background SVG */}
        <img
          src="/images/circlebg2.svg"
          alt=""
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            minWidth: 1200,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />

        {/* Content */}
        <h1
          style={{
            position: "relative",
            fontFamily: "'Sora', Arial, Helvetica, sans-serif",
            fontSize: 100,
            fontWeight: 500,
            color: "#222",
            lineHeight: 1.15,
            margin: "-60px 0 24px 0",
          }}
        >
          The <span style={{ color: "#6766c8" }}>Team</span> Behind
          <br />
          Biostate AI
        </h1>

        <p
          style={{
            position: "relative",
            fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
            fontSize: 16,
            fontWeight: 400,
            color: "#666",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          Scientists, engineers, and innovators building the future of biology.
        </p>
      </section>
    </div>
  );
}
