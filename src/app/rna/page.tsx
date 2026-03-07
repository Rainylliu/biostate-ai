import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WaveReveal from "@/components/WaveReveal";

export const metadata: Metadata = {
  title: "RNA Sequencing - biostate.AI",
  description:
    "Advancing RNAseq Innovation. Biostate AI's platform connects samples, data, and clinical decisions.",
};

export default function RNAPage() {
  return (
    <div>
      {/* Section 1 - Hero */}
      <section className="py-16 lg:py-24" style={{ marginTop: "40px" }}>
        <div className="container">
          <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-[8%]">
            {/* Background circle */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ zIndex: 0 }}
            >
              <Image
                src="/images/circle-bg2.svg"
                alt=""
                width={900}
                height={900}
                className="opacity-100"
                style={{ width: "120%", maxWidth: "none", height: "auto" }}
              />
            </div>
            {/* Left - Image */}
            <div className="w-full lg:w-[50%] lg:ml-8" style={{ position: "relative", zIndex: 1 }}>
              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{
                  aspectRatio: "1 / 1",
                  background: "linear-gradient(160deg, #1a2332 0%, #0d1117 50%, #0a2a2a 100%)",
                }}
              >
                <Image
                  src="/images/rna-hero.svg"
                  alt="RNA molecular structure visualization"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="w-full lg:w-[50%] flex flex-col justify-center" style={{ position: "relative", zIndex: 1, fontFamily: "'Manrope', Arial, Helvetica, sans-serif", fontWeight: 500, fontStyle: "normal", letterSpacing: "0em", wordSpacing: "0px", textTransform: "none" as const }}>
              <h1
                className="text-6xl md:text-7xl lg:text-[100px] text-left"
                style={{ fontWeight: 400, lineHeight: "1em", letterSpacing: "0.02em" }}
              >
                Advancing
                <br />
                <span style={{ color: "#6766c8" }}>RNAseq</span>
                <br />
                Innovation
              </h1>

              <p className="leading-relaxed" style={{ fontSize: "16px", color: "#333333", margin: "35px 10px 35px 0px", paddingLeft: "6px", paddingRight: "10%" }}>
                Biostate AI&apos;s platform connects samples, data, and clinical
                decisions — making precision health scalable, accessible, and
                actionable through low-cost sequencing and autonomous AI
                scientists.
              </p>

              <div style={{ marginTop: "35px", paddingLeft: "6px" }}>
                <a
                  href="https://calendly.com/rachan-raj-biostate/biostate-ai-introduction-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="book-a-call-btn group"
                >
                  Book a call
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
        </div>
      </section>

      {/* Section 2 - Pricing / Sample Types */}
      <section className="py-16 lg:py-24" style={{ fontFamily: "'Manrope', Arial, Helvetica, sans-serif" }}>
        <div className="container">
          {/* Section Tag */}
          <WaveReveal>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#919191",
                marginBottom: "16px",
                letterSpacing: "0.02em",
              }}
            >
              {"[ pricing ]"}
            </p>
          </WaveReveal>

          {/* Section Heading */}
          <WaveReveal delay={150}>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 400,
                lineHeight: "1.15em",
                color: "#1f1f1f",
                marginBottom: "48px",
              }}
            >
              What types of RNA sequencing samples do we handle?
            </h2>
          </WaveReveal>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Standard Samples Card */}
            <div
              className="rounded-[25px] p-10 lg:p-12 flex flex-col justify-between"
              style={{
                background: "linear-gradient(135deg, #b2f5ea 0%, #e0faf5 40%, #f0faf8 100%)",
                minHeight: "520px",
              }}
            >
              {/* Card Header */}
              <div>
                <div className="flex items-start justify-between mb-8">
                  <h3
                    style={{
                      fontSize: "clamp(28px, 3vw, 40px)",
                      fontWeight: 400,
                      lineHeight: "1.2em",
                      color: "#1f1f1f",
                    }}
                  >
                    Standard Samples
                  </h3>
                  {/* Atom/molecule icon */}
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1f1f1f" strokeWidth="1.2">
                    <ellipse cx="32" cy="32" rx="28" ry="12" transform="rotate(0 32 32)" />
                    <ellipse cx="32" cy="32" rx="28" ry="12" transform="rotate(60 32 32)" />
                    <ellipse cx="32" cy="32" rx="28" ry="12" transform="rotate(120 32 32)" />
                    <circle cx="32" cy="32" r="3" fill="#1f1f1f" stroke="none" />
                  </svg>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-4" style={{ fontSize: "16px", color: "#333", fontWeight: 400 }}>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1f1f1f] shrink-0" />
                    Cultured animal cells with &gt;30,000 cells
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1f1f1f] shrink-0" />
                    Extracted RNA from Mammalian samples
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1f1f1f] shrink-0" />
                    {"The Conc. ≥ 16 ng/μL (min 10 μl)"}
                  </li>
                </ul>
              </div>

              {/* Price + CTA */}
              <div className="mt-10">
                <div className="flex items-baseline mb-6">
                  <span style={{ fontSize: "clamp(56px, 6vw, 80px)", fontWeight: 400, lineHeight: "1em", color: "#1f1f1f" }}>
                    $60
                  </span>
                  <span style={{ fontSize: "20px", fontWeight: 400, color: "#1f1f1f" }}>
                    /sample
                  </span>
                </div>
                <Link
                  href="/get-quote"
                  className="book-a-call-btn group"
                >
                  Get started
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
                </Link>
              </div>
            </div>

            {/* Specialty Samples Card */}
            <div
              className="rounded-[25px] p-10 lg:p-12 flex flex-col justify-between"
              style={{
                backgroundColor: "#f0f2f4",
                minHeight: "520px",
              }}
            >
              {/* Card Header */}
              <div>
                <div className="flex items-start justify-between mb-8">
                  <h3
                    style={{
                      fontSize: "clamp(28px, 3vw, 40px)",
                      fontWeight: 400,
                      lineHeight: "1.2em",
                      color: "#1f1f1f",
                    }}
                  >
                    Specialty Samples
                  </h3>
                  {/* Flask/beaker icon */}
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1f1f1f" strokeWidth="1.2">
                    <path d="M24 8h16M26 8v18l-12 26a3 3 0 002.8 4h30.4a3 3 0 002.8-4L38 26V8" />
                    <path d="M22 44h20" strokeDasharray="2 3" />
                    <circle cx="34" cy="38" r="2" fill="#1f1f1f" stroke="none" />
                    <circle cx="40" cy="48" r="1.5" fill="#1f1f1f" stroke="none" />
                  </svg>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-4" style={{ fontSize: "16px", color: "#333", fontWeight: 400 }}>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1f1f1f] shrink-0" />
                    Specialty and low-concentration RNA (evRNA, cfRNA)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1f1f1f] shrink-0" />
                    Biospecimens and clinical samples (whole blood, plasma, serum, PBMC, tissues, FFPE)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1f1f1f] shrink-0" />
                    {"Unusual organisms (plants, octopus, axolotl, ...)"}
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1f1f1f] shrink-0" />
                    {"Degraded RNA (RIN number between 2 and 7)"}
                  </li>
                </ul>
              </div>

              {/* Price + CTA + Note */}
              <div className="mt-10">
                <div className="flex items-baseline mb-6">
                  <span style={{ fontSize: "clamp(56px, 6vw, 80px)", fontWeight: 400, lineHeight: "1em", color: "#1f1f1f" }}>
                    $110
                  </span>
                  <span style={{ fontSize: "20px", fontWeight: 400, color: "#1f1f1f" }}>
                    /sample
                  </span>
                </div>
                <Link
                  href="/get-quote"
                  className="book-a-call-btn group"
                >
                  Get started
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
                </Link>
                <p style={{ marginTop: "20px", fontSize: "15px", color: "#666", fontWeight: 400 }}>
                  Potential discount with large (1000+) batch
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
