import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="py-16 lg:py-24" style={{ marginTop: "40px" }}>
        <div className="container">
          <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Background circle */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ zIndex: 0 }}
            >
              <Image
                src="/images/circle-bg1.svg"
                alt=""
                width={900}
                height={900}
                className="opacity-100"
                style={{ maxWidth: "110%", height: "auto" }}
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
                style={{ fontWeight: 400, lineHeight: "1em", letterSpacing: "normal" }}
              >
                Advancing
                <br />
                <span style={{ color: "#6766c8" }}>RNAseq</span>
                <br />
                Innovation
              </h1>

              <p className="leading-relaxed" style={{ fontSize: "16px", color: "#333333", margin: "35px 10px 35px 0px", paddingRight: "10%" }}>
                Biostate AI&apos;s platform connects samples, data, and clinical
                decisions — making precision health scalable, accessible, and
                actionable through low-cost sequencing and autonomous AI
                scientists.
              </p>

              <div className="mt-10 lg:mt-14">
                <Link
                  href="/get-quote"
                  className="inline-flex items-center gap-6 px-10 py-5 border border-brand-200 text-text text-lg font-medium rounded-2xl hover:border-text hover:bg-brand-50 transition-all group"
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
