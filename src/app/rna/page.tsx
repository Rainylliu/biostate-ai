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
      <section className="py-16 lg:py-24" style={{ marginTop: "80px" }}>
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
      <section style={{ marginTop: "80px", fontFamily: "'Manrope', Arial, Helvetica, sans-serif" }}>
        <div className="container">
          {/* Section Tag */}
          <WaveReveal
            text="[ pricing ]"
            as="p"
            style={{
              display: "block",
              fontSize: "0.875rem",
              lineHeight: "2.142857em",
              fontWeight: 500,
              letterSpacing: "normal",
              color: "#1f1f1f",
              marginBottom: "16px",
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
            }}
          />

          {/* Section Heading */}
          <WaveReveal
            text="What types of RNA sequencing samples do we handle?"
            as="h2"
            delay={300}
            style={{
              fontSize: "48px",
              fontWeight: 400,
              lineHeight: "1.15em",
              textAlign: "left",
              color: "#1f1f1f",
              marginBottom: "20px",
            }}
          />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Standard Samples Card */}
            <div
              className="rounded-[25px] flex flex-col justify-between relative"
              style={{
                background: "linear-gradient(114deg, #C6F8F1 0%, #A3F5FF 100%)",
                minHeight: "520px",
                padding: "68px 68px 68px 82px",
                margin: "10px",
              }}
            >
              {/* Icon 1 */}
              <img
                src="/images/icon1.svg"
                alt="Standard Samples"
                width={62}
                height={70}
                style={{ position: "absolute", top: "68px", right: "40px" }}
              />
              {/* Card Header */}
              <div>
                <div className="mb-8">
                  <h3
                    style={{
                      textAlign: "left",
                      fontSize: "40px",
                      fontWeight: 400,
                      lineHeight: "1em",
                      letterSpacing: "-0.03em",
                      color: "#1f1f1f",
                    }}
                  >
                    Standard Samples
                  </h3>
                </div>

                {/* Bullet Points */}
                <ul style={{ paddingTop: "32px", fontSize: "16px", color: "#333", fontWeight: 500, lineHeight: "1.875em", display: "flex", flexDirection: "column", gap: "12px", listStyle: "none" }}>
                  <li className="flex items-baseline gap-2"><img src="/images/arrow1.svg" alt="" className="w-[5px] h-[5px] shrink-0" /> Cultured animal cells with &gt;30,000 cells</li>
                  <li className="flex items-baseline gap-2"><img src="/images/arrow1.svg" alt="" className="w-[5px] h-[5px] shrink-0" /> Extracted RNA from Mammalian samples</li>
                  <li className="flex items-baseline gap-2"><img src="/images/arrow1.svg" alt="" className="w-[5px] h-[5px] shrink-0" /> {"The Conc. ≥ 16 ng/μL (min 10 μl)"}</li>
                </ul>
              </div>

              {/* Price + CTA */}
              <div className="mt-10">
                <div className="flex items-baseline mb-6">
                  <span style={{ fontSize: "60px", fontWeight: 400, lineHeight: "1em", letterSpacing: "-0.03em", color: "#111111", fontFamily: "'Sora', system-ui, sans-serif" }}>
                    $60
                  </span>
                  <span style={{ fontSize: "20px", fontWeight: 400, color: "#1f1f1f", fontFamily: "'Sora', system-ui, sans-serif" }}>
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
              className="rounded-[25px] flex flex-col justify-between relative"
              style={{
                backgroundColor: "#f0f2f4",
                minHeight: "520px",
                padding: "68px 68px 68px 82px",
                margin: "10px",
              }}
            >
              {/* Icon 2 */}
              <img
                src="/images/icon2.svg"
                alt="Specialty Samples"
                width={68}
                height={73}
                style={{ position: "absolute", top: "68px", right: "40px" }}
              />
              {/* Card Header */}
              <div>
                <div className="mb-8">
                  <h3
                    style={{
                      textAlign: "left",
                      fontSize: "40px",
                      fontWeight: 400,
                      lineHeight: "1em",
                      letterSpacing: "-0.03em",
                      color: "#1f1f1f",
                    }}
                  >
                    Specialty Samples
                  </h3>
                </div>

                {/* Bullet Points */}
                <ul style={{ paddingTop: "32px", fontSize: "16px", color: "#333", fontWeight: 500, lineHeight: "1.875em", display: "flex", flexDirection: "column", gap: "12px", listStyle: "none" }}>
                  <li className="flex items-baseline gap-2"><img src="/images/arrow1.svg" alt="" className="w-[5px] h-[5px] shrink-0" /> Specialty and low-concentration RNA (evRNA, cfRNA)</li>
                  <li className="flex items-baseline gap-2"><img src="/images/arrow1.svg" alt="" className="w-[5px] h-[5px] shrink-0" /> Biospecimens and clinical samples (whole blood, plasma, serum, PBMC, tissues, FFPE)</li>
                  <li className="flex items-baseline gap-2"><img src="/images/arrow1.svg" alt="" className="w-[5px] h-[5px] shrink-0" /> {"Unusual organisms (plants, octopus, axolotl, ...)"}</li>
                  <li className="flex items-baseline gap-2"><img src="/images/arrow1.svg" alt="" className="w-[5px] h-[5px] shrink-0" /> {"Degraded RNA (RIN number between 2 and 7)"}</li>
                </ul>
              </div>

              {/* Price + CTA + Note */}
              <div className="mt-10">
                <div className="flex items-baseline mb-6">
                  <span style={{ fontSize: "60px", fontWeight: 400, lineHeight: "1em", letterSpacing: "-0.03em", color: "#111111", fontFamily: "'Sora', system-ui, sans-serif" }}>
                    $110
                  </span>
                  <span style={{ fontSize: "20px", fontWeight: 400, color: "#1f1f1f", fontFamily: "'Sora', system-ui, sans-serif" }}>
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
