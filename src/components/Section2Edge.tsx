import Link from "next/link";
import WaveReveal from "./WaveReveal";

export default function Section2Edge() {
  return (
    <section
      style={{
        padding: "80px 20px 60px",
        background: "#ffffff",
      }}
    >
     <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      {/* Section header */}
      <div>
        <p
          style={{
            fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
            fontSize: 14,
            fontWeight: 500,
            color: "#333",
            marginBottom: 12,
          }}
        >
          [ process ]
        </p>
        <WaveReveal
          text="Biostate's Edge"
          as="h2"
          className="home-section-heading"
          style={{
            fontFamily: "'Sora', Arial, Helvetica, sans-serif",
            fontSize: 48,
            fontWeight: 400,
            color: "#111",
            margin: "0 0 48px 0",
            lineHeight: 1.15,
          }}
        />
      </div>

      {/* Flow diagram */}
      <div className="bs-flow">
        <img
          className="bs-flow__bg bs-flow__bg--desktop"
          src="/images/edge.svg"
          alt="Biostate workflow graphic"
          loading="lazy"
        />
        <img
          className="bs-flow__bg bs-flow__bg--mobile"
          src="/images/edge_mobile.svg"
          alt="Biostate workflow graphic"
          loading="lazy"
        />
        <Link href="/about-us" className="bs-flow__btn bs-flow__btn--sample">
          Sample Access
        </Link>
        <Link href="/rna" className="bs-flow__btn bs-flow__btn--wetlab">
          Wetlab Innovation
        </Link>
        <Link href="/ai" className="bs-flow__btn bs-flow__btn--bioai">
          Biomedical AI
        </Link>
      </div>
     </div>
    </section>
  );
}
