"use client";

const buttons = [
  {
    label: "RNA (BIRT + PERD)",
    href: "/rna",
    top: "38.93%",
  },
  {
    label: "AI Scientist (K-Dense)",
    href: "https://k-dense.ai/",
    top: "53.69%",
  },
  {
    label: "DNA (BIRT + MARE)",
    href: "/dna",
    top: "68.45%",
  },
  {
    label: "AML (N-Act)",
    href: "/ai",
    top: "83.20%",
  },
];

export default function Section5Pipeline() {
  return (
    <section
      className="container"
      style={{
        fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
        padding: "80px var(--space-6) 0",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1932 / 1030",
        }}
      >
        {/* Background SVG */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/pipeline.svg"
          alt="Pipeline: Prototyping Technologies for Impact"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            userSelect: "none",
            pointerEvents: "none",
          }}
          loading="lazy"
        />

        {/* Overlay buttons */}
        {buttons.map((btn) => (
          <a
            key={btn.label}
            href={btn.href}
            className="pipeline-btn"
            style={{
              position: "absolute",
              left: "2%",
              top: btn.top,
              width: "20%",
              height: "10%",
            }}
          >
            {btn.label}
          </a>
        ))}
      </div>
    </section>
  );
}
