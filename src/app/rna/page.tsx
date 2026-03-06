import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RNA Sequencing - biostate.AI",
  description:
    "Advancing RNAseq Innovation. Biostate AI's platform connects samples, data, and clinical decisions.",
};

export default function RNAPage() {
  return (
    <div>
      {/* Section 1 - Hero */}
      <section style={{ padding: "48px 0 80px" }}>
        <div className="container">
          <div className="flex flex-col lg:flex-row items-start" style={{ gap: "60px" }}>
            {/* Left - Image */}
            <div className="w-full lg:w-[45%]">
              <div className="w-full overflow-hidden" style={{ aspectRatio: "3/4", borderRadius: "20px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/media/rna-hero.svg"
                  alt="RNA molecular structure visualization"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="w-full lg:w-[55%]" style={{ paddingTop: "24px" }}>
              <h1
                style={{
                  fontFamily: "'Sora', sans-serif",
                  lineHeight: "1.08",
                  fontSize: "clamp(3rem, 6vw, 6.5rem)",
                  fontWeight: 700,
                  color: "#111",
                }}
              >
                Advancing
                <br />
                <span style={{ color: "#6766c8" }}>RNAseq</span>
                <br />
                Innovation
              </h1>

              <p style={{ marginTop: "48px", fontSize: "17px", lineHeight: "1.8", color: "#555", maxWidth: "520px" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#999",
                    marginRight: "12px",
                    verticalAlign: "middle",
                  }}
                />
                Biostate AI&apos;s platform connects samples, data, and clinical
                decisions — making precision health scalable, accessible, and
                actionable through low-cost sequencing and autonomous AI
                scientists.
              </p>

              <div style={{ marginTop: "56px" }}>
                <Link
                  href="/get-quote"
                  className="inline-flex items-center gap-5 hover:border-text hover:bg-brand-50 transition-all group"
                  style={{
                    padding: "18px 36px",
                    border: "1px solid #d0d0d0",
                    borderRadius: "16px",
                    fontSize: "17px",
                    fontWeight: 500,
                    color: "#333",
                  }}
                >
                  Book a call
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path
                      d="M4 12L12 4M12 4H5M12 4V11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
