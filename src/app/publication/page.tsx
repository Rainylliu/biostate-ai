import type { Metadata } from "next";
import PublicationsList from "@/components/PublicationsList";

export const metadata: Metadata = {
  title: "Publications - biostate.AI",
  description: "Our publications and research at biostate.AI.",
};

export default function PublicationPage() {
  return (
    <div>
      {/* ── Wrapper with shared background image spanning hero + featured ── */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#ffffff",
        }}
      >
        {/* Background SVG – full width, natural height, top-aligned */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/publication_bg.svg"
          alt=""
          className="pub-bg-img"
        />

        {/* ── Section 1: Hero ── */}
        <section
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "120px 20px 80px",
          }}
        >
          <h1
            className="pub-hero-title"
            style={{
              fontFamily: "'Sora', Arial, Helvetica, sans-serif",
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
            className="pub-hero-subtitle"
            style={{
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
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

        {/* ── Section 2: Featured Publications ── */}
        <section className="pub-featured-content" style={{ position: "relative" }}>
          <PublicationsList />
        </section>
      </div>
    </div>
  );
}
