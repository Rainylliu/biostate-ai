import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RNA Sequencing - biostate.AI",
  description:
    "RNA sequencing analysis and data processing powered by Biostate AI.",
};

export default function RNAPage() {
  return (
    <div className="pt-24">
      {/* RNA page content will be built from screenshots */}
      <section className="section">
        <div className="container text-center">
          <h1 className="section-heading">RNA Sequencing</h1>
          <p className="section-subheading mx-auto">
            Content coming soon — awaiting page screenshots for 1:1 replica.
          </p>
        </div>
      </section>
    </div>
  );
}
