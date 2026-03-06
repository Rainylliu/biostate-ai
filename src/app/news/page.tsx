import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News - biostate.AI",
  description: "Latest news from biostate.AI.",
};

export default function NewsPage() {
  return (
    <div className="pt-24">
      <section className="section">
        <div className="container text-center">
          <h1 className="section-heading">News</h1>
          <p className="section-subheading mx-auto">Coming soon.</p>
        </div>
      </section>
    </div>
  );
}
