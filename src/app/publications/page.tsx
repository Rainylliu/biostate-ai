import type { Metadata } from "next";
import PublicationsList from "@/components/PublicationsList";
import { featuredPublications, fullPublications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Publications - biostate.AI",
  description: "Our publications and research at biostate.AI.",
};

export default function PublicationPage() {
  return (
    <div>
      {/* ── Wrapper with shared background image spanning hero + sections ── */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#ffffff",
        }}
      >
        {/* Background SVG */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/publication_bg.svg"
          alt=""
          className="pub-bg-img"
        />

        {/* ── Hero Section ── */}
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

        {/* ── Section 1: Featured Publications ── */}
        <section className="pub-featured-content" style={{ position: "relative" }}>
          <PublicationsList
            items={featuredPublications}
            title="Featured Publications"
            subtitle="A curated selection of our most impactful and widely recognized research."
            id="pub-featured"
          />
        </section>

        {/* ── Section 2: Full Publication Library ── */}
        <section className="pub-featured-content" style={{ position: "relative" }}>
          <PublicationsList
            items={fullPublications}
            title="Full Publication Library"
            subtitle="Browse our full collection of published research and papers."
            id="pub-full"
          />
        </section>
      </div>
    </div>
  );
}
