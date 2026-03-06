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
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            {/* Left - Image */}
            <div className="w-full lg:w-[45%]">
              <div className="relative w-full rounded-2xl overflow-hidden bg-gray-900" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/rna-hero.jpg"
                  alt="RNA molecular structure visualization"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="w-full lg:w-[55%] lg:pt-8">
              <h1
                className="text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-bold"
                style={{ fontFamily: "'Sora', sans-serif", lineHeight: "1.1" }}
              >
                Advancing
                <br />
                <span style={{ color: "#6766c8" }}>RNAseq</span>
                <br />
                Innovation
              </h1>

              <p className="mt-12 text-lg leading-relaxed text-brand-600 max-w-xl">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-400 mr-3 align-middle" />
                Biostate AI&apos;s platform connects samples, data, and clinical
                decisions — making precision health scalable, accessible, and
                actionable through low-cost sequencing and autonomous AI
                scientists.
              </p>

              <div className="mt-14">
                <Link
                  href="/get-quote"
                  className="inline-flex items-center gap-4 px-10 py-5 border border-brand-200 text-text text-lg font-medium rounded-2xl hover:border-text hover:bg-brand-50 transition-all group"
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
