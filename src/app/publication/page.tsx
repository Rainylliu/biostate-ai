import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications - biostate.AI",
  description: "Publications from biostate.AI.",
};

export default function PublicationPage() {
  return (
    <div className="pt-24">
      <section className="section">
        <div className="container text-center">
          <h1 className="section-heading">Publications</h1>
          <p className="section-subheading mx-auto">Coming soon.</p>
        </div>
      </section>
    </div>
  );
}
