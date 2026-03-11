"use client";

const desktopButtons = [
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

const mobileButtons = [
  {
    label: ["RNA", "(BIRT + PERD)"],
    href: "/rna",
    left: "19.5%",
    top: "30%",
  },
  {
    label: ["AI Scientist", "(K-Dense)"],
    href: "https://k-dense.ai/",
    left: "38%",
    top: "30%",
  },
  {
    label: ["DNA", "(BIRT + MARE)"],
    href: "/dna",
    left: "56%",
    top: "30%",
  },
  {
    label: ["AML", "(N-Act)"],
    href: "/ai",
    left: "74%",
    top: "30%",
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
      {/* Desktop version */}
      <div
        className="pipeline-desktop"
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1932 / 1030",
        }}
      >
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
        {desktopButtons.map((btn) => (
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

      {/* Mobile version */}
      <div
        className="pipeline-mobile"
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1932 / 1030",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/pipeline_mobile.svg"
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
        {mobileButtons.map((btn, i) => (
          <a
            key={i}
            href={btn.href}
            className="pipeline-btn-mobile"
            style={{
              position: "absolute",
              left: btn.left,
              top: btn.top,
            }}
          >
            {btn.label[0]}
            <br />
            {btn.label[1]}
          </a>
        ))}
      </div>
    </section>
  );
}
