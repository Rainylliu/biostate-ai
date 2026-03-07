import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WaveReveal from "@/components/WaveReveal";
import CountUp from "@/components/CountUp";

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

              <p className="leading-relaxed" style={{ fontSize: "18px", color: "#333333", margin: "35px 10px 35px 0px", paddingLeft: "6px", paddingRight: "10%" }}>
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
                  className="book-a-call-btn book-a-call-btn-teal group"
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
              color: "#333333",
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
              color: "#333333",
              marginBottom: "20px",
            }}
          />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Standard Samples Card */}
            <div
              className="rounded-[25px] flex flex-col relative"
              style={{
                background: "linear-gradient(114deg, #C6F8F1 0%, #A3F5FF 100%)",
                minHeight: "580px",
                padding: "68px 68px 240px 82px",
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
                      color: "#333333",
                    }}
                  >
                    Standard Samples
                  </h3>
                </div>

                {/* Bullet Points */}
                <ul style={{ paddingTop: "32px", fontSize: "16px", color: "#333333", fontWeight: 500, lineHeight: "1.875em", display: "flex", flexDirection: "column", gap: "12px", listStyle: "none" }}>
                  <li className="flex items-baseline gap-2"><img src="/images/arrow1.svg" alt="" className="w-[5px] h-[5px] shrink-0" /> Cultured animal cells with &gt;30,000 cells</li>
                  <li className="flex items-baseline gap-2"><img src="/images/arrow1.svg" alt="" className="w-[5px] h-[5px] shrink-0" /> Extracted RNA from Mammalian samples</li>
                  <li className="flex items-baseline gap-2"><img src="/images/arrow1.svg" alt="" className="w-[5px] h-[5px] shrink-0" /> {"The Conc. ≥ 16 ng/μL (min 10 μl)"}</li>
                </ul>
              </div>

              {/* Price + CTA */}
              <div style={{ position: "absolute", top: "360px", left: "82px", right: "68px" }}>
                <div className="flex items-baseline" style={{ marginBottom: "20px" }}>
                  <span style={{ fontSize: "60px", fontWeight: 700, lineHeight: "1em", letterSpacing: "-0.03em", color: "#333333", fontFamily: "'Sora', Arial, Helvetica, sans-serif" }}>
                    $60
                  </span>
                  <span style={{ fontSize: "20px", fontWeight: 400, color: "#333333", fontFamily: "'Sora', Arial, Helvetica, sans-serif" }}>
                    /sample
                  </span>
                </div>
                <Link
                  href="/get-quote"
                  className="book-a-call-btn book-a-call-btn-teal group"
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
              className="rounded-[25px] flex flex-col relative"
              style={{
                backgroundColor: "#f0f2f4",
                minHeight: "580px",
                padding: "68px 68px 240px 82px",
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
                      color: "#333333",
                    }}
                  >
                    Specialty Samples
                  </h3>
                </div>

                {/* Bullet Points */}
                <ul style={{ paddingTop: "32px", fontSize: "16px", color: "#333333", fontWeight: 500, lineHeight: "1.875em", display: "flex", flexDirection: "column", gap: "12px", listStyle: "none" }}>
                  <li className="flex items-baseline gap-2"><img src="/images/arrow1.svg" alt="" className="w-[5px] h-[5px] shrink-0" /> Specialty and low-concentration RNA (evRNA, cfRNA)</li>
                  <li className="flex items-baseline gap-2"><img src="/images/arrow1.svg" alt="" className="w-[5px] h-[5px] shrink-0" /> Biospecimens and clinical samples (whole blood, plasma, serum, PBMC, tissues, FFPE)</li>
                  <li className="flex items-baseline gap-2"><img src="/images/arrow1.svg" alt="" className="w-[5px] h-[5px] shrink-0" /> {"Unusual organisms (plants, octopus, axolotl, ...)"}</li>
                  <li className="flex items-baseline gap-2"><img src="/images/arrow1.svg" alt="" className="w-[5px] h-[5px] shrink-0" /> {"Degraded RNA (RIN number between 2 and 7)"}</li>
                </ul>
              </div>

              {/* Price + CTA + Note */}
              <div style={{ position: "absolute", top: "360px", left: "82px", right: "68px" }}>
                <div className="flex items-baseline" style={{ marginBottom: "20px" }}>
                  <span style={{ fontSize: "60px", fontWeight: 700, lineHeight: "1em", letterSpacing: "-0.03em", color: "#333333", fontFamily: "'Sora', Arial, Helvetica, sans-serif" }}>
                    $110
                  </span>
                  <span style={{ fontSize: "20px", fontWeight: 400, color: "#333333", fontFamily: "'Sora', Arial, Helvetica, sans-serif" }}>
                    /sample
                  </span>
                </div>
                <Link
                  href="/get-quote"
                  className="book-a-call-btn book-a-call-btn-teal group"
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
                <p style={{ marginTop: "20px", fontSize: "17px", color: "#333333", fontWeight: 500 }}>
                  Potential discount with large (1000+) batch
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - BIRT Technology */}
      <section
        style={{
          marginTop: "80px",
          fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
          position: "relative",
          overflow: "hidden",
          minHeight: "700px",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Image
            src="/images/bg2.png"
            alt=""
            fill
            className="object-cover object-right"
            style={{ objectPosition: "right center" }}
          />
          {/* Fade overlay from image to white */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "40%",
              height: "100%",
              background: "linear-gradient(to right, transparent, white)",
            }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left spacer for background image */}
            <div className="w-full lg:w-[45%]" />

            {/* Right - Content */}
            <div className="w-full lg:w-[55%] py-16 lg:py-24">
              {/* BIRT Large Title */}
              <h2
                style={{
                  padding: "0px 5px 0px 0px",
                  fontSize: "200px",
                  fontWeight: 700,
                  lineHeight: "1em",
                  letterSpacing: "-0.05em",
                  background: "linear-gradient(135deg, #8258c8, #2c84c8)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "white",
                  WebkitTextStrokeWidth: "4px",
                  paintOrder: "stroke fill",
                  marginBottom: "30px",
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                }}
              >
                BIRT
              </h2>

              {/* Technology Tag */}
              <WaveReveal
                text="[ technology ]"
                as="p"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  lineHeight: "2.142857em",
                  fontWeight: 500,
                  letterSpacing: "normal",
                  color: "#333333",
                  marginBottom: "16px",
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                }}
              />

              {/* Section Heading */}
              <WaveReveal
                text="Affordable and Scalable RNA Sequencing Platform"
                as="h3"
                delay={300}
                style={{
                  fontSize: "48px",
                  fontWeight: 400,
                  lineHeight: "1.15em",
                  textAlign: "left",
                  color: "#333333",
                  marginBottom: "25px",
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontSize: "18px",
                  color: "#333333",
                  fontWeight: 500,
                  lineHeight: "1.8em",
                  marginBottom: "20px",
                }}
              >
                Biostate has developed an innovative solution that integrates two
                proprietary technologies: BIRT (Barcode-Integrated Reverse
                Transcription) for sample multiplexing and PERD (Probes for Excess
                RNA Depletion) for non-enzymatic depletion of ribosomal RNA.
              </p>

              {/* Highlights */}
              <div style={{ marginBottom: "30px" }}>
                <h1
                  style={{
                    textAlign: "left",
                    fontSize: "48px",
                    fontWeight: 700,
                    lineHeight: "1.3em",
                    letterSpacing: "-0.05em",
                    background: "linear-gradient(90deg, #45D0BD, #44B6E9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    margin: 0,
                  }}
                >
                  10× more affordable
                  <br />
                  10× less input
                </h1>
              </div>

              {/* CTA Button */}
              <a
                href="https://drive.google.com/file/d/1WtAcCwAINXq3dIKEAyVHqMO_e7o8ch59/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="book-a-call-btn book-a-call-btn-solid-teal group"
              >
                Download the white paper
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
      </section>

      {/* Section 4 - Scrolling Banner */}
      <section
        style={{
          transform: "rotate(-2.07deg)",
          backgroundImage: "linear-gradient(92deg, #45D0BD 0%, #44B6E9 100%)",
          margin: "40px -5px 0px -5px",
          padding: "50px 0px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="marquee-banner">
          <div className="marquee-banner-track">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="marquee-banner-text">
                /Join us in powering the next era of precision medicine through innovative RNA sequencing.&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - BIRT Workflow Card (tilted top + rectangle body) */}
      <section
        style={{
          fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
          marginTop: "80px",
        }}
      >
        <div className="container">
          <div
            style={{
              position: "relative",
              backgroundColor: "#1F1F1F",
              borderRadius: "25px",
              padding: "20px",
            }}
          >
            {/* Tilted top piece - same angle as banner */}
            <div
              style={{
                position: "absolute",
                top: "-60px",
                left: "0",
                width: "100.1%",
                height: "140px",
                backgroundColor: "#1F1F1F",
                transform: "rotate(-2.0deg)",
                transformOrigin: "bottom center",
                zIndex: 0,
                borderRadius: "25px 25px 0 0",
              }}
            />
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center" style={{ position: "relative", zIndex: 1 }}>
              {/* Left - Workflow Diagram */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src="/images/workflow.png"
                  alt="BIRT Workflow Diagram"
                  style={{ width: "80%", height: "auto" }}
                />
              </div>

              {/* Right - Text Content */}
              <div className="w-full lg:w-1/2">
                {/* Workflow Outline Text - gradient stroke, no fill */}
                <svg viewBox="0 0 500 90" style={{ width: "100%", maxWidth: "500px", marginBottom: "40px" }}>
                  <defs>
                    <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#45D0BD" />
                      <stop offset="100%" stopColor="#44B6E9" />
                    </linearGradient>
                  </defs>
                  <text
                    x="0"
                    y="75"
                    fontFamily="'Manrope', Arial, Helvetica, sans-serif"
                    fontSize="100"
                    fontWeight="800"
                    letterSpacing="-3"
                    fill="none"
                    stroke="url(#gradientStroke)"
                    strokeWidth="1.5"
                  >
                    Workflow
                  </text>
                </svg>

                {/* About Tag */}
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#ffffff",
                    marginBottom: "16px",
                    opacity: 0.7,
                  }}
                >
                  [ about ]
                </p>

                {/* Heading */}
                <h3
                  style={{
                    fontSize: "48px",
                    fontWeight: 400,
                    lineHeight: "1.15em",
                    color: "#ffffff",
                    marginBottom: "24px",
                  }}
                >
                  Efficient, Scalable, and
                  <br />
                  Reproducible RNA
                  <br />
                  Sequencing
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "1.8em",
                    color: "rgba(255,255,255,0.75)",
                    marginBottom: "24px",
                  }}
                >
                  BIRT simplifies RNA sequencing through a unified barcoding and amplification process — replacing
                  complex, multi-step library preparation with a faster, more reliable workflow.
                  <br />
                  It reduces reagent use, shortens turnaround time, and ensures consistent high-quality data across
                  large sample sets.
                </p>

                {/* Bold highlight */}
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    lineHeight: "1.8em",
                    color: "#ffffff",
                  }}
                >
                  10× lower cost and 90% less RNA input — without compromising accuracy or reproducibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - High Reproducibility and Superior Data Quality */}
      <section
        style={{
          fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
          marginTop: "20px",
        }}
      >
        <div className="container">
          <div
            style={{
              backgroundColor: "#F0F2F4",
              borderRadius: "25px",
              padding: "80px 20px",
            }}
          >
          {/* Top Row - 20,000+ and Heading */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16" style={{ marginBottom: "60px" }}>
            {/* Left - 20,000+ outline text */}
            <div className="flex items-end gap-2">
              <CountUp end={20000} suffix="+" style={{ marginLeft: "40px" }} />
              <span
                style={{
                  writingMode: "vertical-rl",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#333333",
                  letterSpacing: "0.05em",
                  marginBottom: "8px",
                }}
              >
                samples tested
              </span>
            </div>

            {/* Right - Heading and Description */}
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#333333",
                  marginBottom: "16px",
                }}
              >
                [ about ]
              </p>
              <h2
                style={{
                  fontSize: "48px",
                  fontWeight: 400,
                  lineHeight: "1.15em",
                  color: "#333333",
                  marginBottom: "20px",
                }}
              >
                High Reproducibility and
                <br />
                Superior Data Quality
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "1.8em",
                  color: "#333333",
                }}
              >
                Validated across hundreds of samples with consistent, high-fidelity performance.
              </p>
            </div>
          </div>

          {/* Bottom Row - Two Chart Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ padding: "40px" }}>
            {/* Left - High Reproducibility */}
            <div style={{ paddingRight: "11%" }}>
              <div
                className="chart-card"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                  padding: "30px",
                  marginBottom: "24px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/images/chart1.svg"
                  alt="High Reproducibility Scatter Plot"
                  className="chart-card-img"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <h3
                style={{
                  fontSize: "32px",
                  fontWeight: 500,
                  color: "#111111",
                  letterSpacing: "-0.03em",
                  margin: "50px 0px 10px 0px",
                }}
              >
                High Reproducibility Across Barcodes
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "1.6em",
                  color: "#333333",
                  marginBottom: "8px",
                }}
              >
                Each point represents gene expression from replicate
                samples — tightly aligned along the diagonal line, confirming
                reproducible results across runs.
              </p>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#333333",
                }}
              >
                Result: Correlation &gt; 0.98 between replicates.
              </p>
            </div>

            {/* Right - Superior Quality */}
            <div style={{ paddingLeft: "11%", marginTop: "11%" }}>
              <div
                className="chart-card"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                  padding: "30px",
                  marginBottom: "24px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/images/chart2.svg"
                  alt="Superior Transcriptome Coverage Bar Chart"
                  className="chart-card-img"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <h3
                style={{
                  fontSize: "32px",
                  fontWeight: 500,
                  color: "#111111",
                  letterSpacing: "-0.03em",
                  margin: "50px 0px 10px 0px",
                }}
              >
                Superior Transcriptome Coverage
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "1.6em",
                  color: "#333333",
                  marginBottom: "8px",
                }}
              >
                Compared with conventional RNA sequencing, BIRT + PERD
                detects a higher number of expressed genes from the same
                RNA input.
              </p>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#333333",
                }}
              >
                Result: ~15% increase in gene detection per sample.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section
        style={{
          maxWidth: "1800px",
          margin: "20px auto 0 auto",
          padding: "0 60px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "stretch",
          }}
        >
          {/* Left card */}
          <div style={{ flex: "0 0 auto", width: "calc((903 / (903 + 956)) * 100%)" }}>
            <img
              src="/images/section6card1.svg"
              alt="Our capabilities"
              style={{ width: "100%", height: "100%", display: "block", objectFit: "cover", borderRadius: "25px" }}
            />
          </div>
          {/* Right column */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <img
              src="/images/section6card2.svg"
              alt="Validated across key sample types"
              style={{ width: "100%", display: "block", borderRadius: "25px" }}
            />
            <img
              src="/images/section6card3.svg"
              alt="Unique sample types"
              style={{ width: "100%", display: "block", borderRadius: "25px" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
