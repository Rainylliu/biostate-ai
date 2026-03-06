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
      <section className="pt-8 pb-16 lg:pt-10 lg:pb-24">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
            {/* Left - Image */}
            <div className="w-full lg:w-[43%]">
              <div
                className="relative w-full rounded-lg overflow-hidden"
                style={{ aspectRatio: "3/4" }}
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
            <div className="w-full lg:w-[57%] lg:pt-12">
              <h1
                className="text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-bold tracking-tight"
                style={{ fontFamily: "'Sora', sans-serif", lineHeight: "1.1" }}
              >
                Advancing
                <br />
                <span style={{ color: "#6766c8" }}>RNAseq</span>
                <br />
                Innovation
              </h1>

              <p
                className="mt-10 text-base max-w-md"
                style={{ color: "#515962", lineHeight: "1.75" }}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full mr-2 align-middle"
                  style={{ backgroundColor: "#515962" }}
                />
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
