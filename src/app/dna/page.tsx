import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DNA Sequencing - biostate.AI",
  description: "DNA sequencing services powered by biostate.AI.",
};

export default function DNAPage() {
  return (
    <div className="pt-24">
      <section className="section">
        <div className="container text-center">
          <h1 className="section-heading">DNA Sequencing</h1>
          <p className="section-subheading mx-auto">Coming soon.</p>
        </div>
      </section>
    </div>
  );
}
