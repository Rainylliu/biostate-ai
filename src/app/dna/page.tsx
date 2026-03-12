import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "DNA Sequencing - biostate.AI",
  description:
    "DNA as the Foundation of Precision Health. Biostate's whole exome sequencing platform delivers high coverage uniformity and exceptional reproducibility.",
};

export default function DNAPage() {
  return (
    <div style={{ overflowX: "hidden" }}>
      {/* Section 1 - Hero */}
      <section
        className="dna-hero-section"
        style={{
          background: "linear-gradient(180deg, #e8dff5 0%, #ede6f6 40%, #f5f0fa 70%, #ffffff 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "120px",
          paddingBottom: "60px",
        }}
      >
        {/* Subtle grid/line overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(180,160,210,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(180,160,210,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        {/* Diagonal decorative lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-20%",
              right: "-10%",
              width: "80%",
              height: "140%",
              borderLeft: "1px solid rgba(180,160,210,0.12)",
              transform: "rotate(35deg)",
              transformOrigin: "top left",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "-20%",
              right: "5%",
              width: "80%",
              height: "140%",
              borderLeft: "1px solid rgba(180,160,210,0.10)",
              transform: "rotate(35deg)",
              transformOrigin: "top left",
            }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-[4%]">
            {/* Left - DNA Hero Image */}
            <div className="w-full lg:w-[50%]" style={{ position: "relative", zIndex: 1 }}>
              <div
                className="relative w-full"
                style={{ aspectRatio: "1 / 1" }}
              >
                <Image
                  src="/images/DNA_hero.svg"
                  alt="DNA molecular structure visualization"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right - Content */}
            <div
              className="w-full lg:w-[50%] flex flex-col justify-center"
              style={{
                position: "relative",
                zIndex: 1,
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontWeight: 500,
              }}
            >
              {/* Tag */}
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#555555",
                  marginBottom: "16px",
                  letterSpacing: "0.02em",
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                }}
              >
                [ Grants for 30 free sample available ! ]
              </p>

              {/* Heading */}
              <h1
                className="text-5xl md:text-6xl lg:text-[80px]"
                style={{
                  fontWeight: 400,
                  lineHeight: "1.1em",
                  letterSpacing: "-0.01em",
                  color: "#1a1a1a",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    background: "linear-gradient(135deg, #5B8DEF 0%, #7C5CE7 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  DNA
                </span>{" "}
                as the
                <br />
                Foundation of
                <br />
                Precision Health
              </h1>

              {/* Description */}
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7em",
                  color: "#444444",
                  marginTop: "28px",
                  paddingRight: "5%",
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontWeight: 400,
                }}
              >
                Biostate&apos;s whole exome sequencing platform delivers high coverage uniformity,
                minimal zero-coverage regions, and exceptional reproducibility, enabling accurate
                detection of disease-related genetic variants across all sample types.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
