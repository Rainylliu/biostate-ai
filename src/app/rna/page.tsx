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
      <section className="py-12 lg:py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left - Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900">
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
            <div className="w-full lg:w-1/2">
              <h1
                className="text-5xl lg:text-7xl font-bold leading-tight"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Advancing
                <br />
                <span style={{ color: "#6766c8" }}>RNAseq</span>
                <br />
                Innovation
              </h1>

              <p className="mt-8 text-lg leading-relaxed text-brand-600 max-w-lg">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-600 mr-2 align-middle" />
                Biostate AI&apos;s platform connects samples, data, and clinical
                decisions — making precision health scalable, accessible, and
                actionable through low-cost sequencing and autonomous AI
                scientists.
              </p>

              <div className="mt-10">
                <Link
                  href="/get-quote"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-brand-75 text-text text-base font-medium rounded-xl hover:border-text hover:bg-brand-50 transition-all group"
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
