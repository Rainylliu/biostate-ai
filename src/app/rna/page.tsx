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
      <section className="pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left - Image */}
            <div className="w-full lg:w-[42%]">
              <div
                className="relative w-full rounded-2xl overflow-hidden"
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
            <div className="w-full lg:w-[58%] lg:pl-4">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tight"
                style={{ fontFamily: "'Sora', sans-serif", lineHeight: "1.15" }}
              >
                Advancing
                <br />
                <span style={{ color: "#6766c8" }}>RNAseq</span>
                <br />
                Innovation
              </h1>

              <p
                className="mt-10 text-base leading-relaxed max-w-lg"
                style={{ color: "#515962", lineHeight: "1.8" }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full mr-2.5 align-middle" style={{ backgroundColor: "#515962" }} />
                Biostate AI&apos;s platform connects samples, data, and clinical
                decisions — making precision health scalable, accessible, and
                actionable through low-cost sequencing and autonomous AI
                scientists.
              </p>

              <div className="mt-12">
                <Link
                  href="/get-quote"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-brand-200 text-text text-base font-medium rounded-xl hover:border-text hover:bg-brand-50 transition-all group"
                >
                  Book a call
                  <svg
                    width="16"
                    height="16"
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
