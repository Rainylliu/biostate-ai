import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team - biostate.AI",
  description: "Meet the team behind biostate.AI.",
};

export default function AboutUsPage() {
  return (
    <div className="pt-24">
      <section className="section">
        <div className="container text-center">
          <h1 className="section-heading">Team</h1>
          <p className="section-subheading mx-auto">Coming soon.</p>
        </div>
      </section>
    </div>
  );
}
