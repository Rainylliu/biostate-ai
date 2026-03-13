import type { Metadata } from "next";
import AISection1 from "./AISection1";

export const metadata: Metadata = {
  title: "AI Platform - biostate.AI",
  description: "AI platform powered by biostate.AI.",
};

export default function AIPage() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <AISection1 />
    </div>
  );
}
