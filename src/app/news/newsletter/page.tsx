import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter - biostate.AI",
  description: "Subscribe to the biostate.AI newsletter.",
};

export default function NewsletterPage() {
  return (
    <div
      style={{
        fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
        padding: "120px 20px 80px",
        maxWidth: "1340px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(36px, 4vw, 56px)",
          fontWeight: 400,
          color: "#1a1a1a",
          marginBottom: "24px",
        }}
      >
        Newsletter
      </h1>
      <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
        Coming soon.
      </p>
    </div>
  );
}
