import type { Metadata } from "next";
import AISection1 from "./AISection1";
import AISection2 from "./AISection2";
import AISection3 from "./AISection3";
import AISection4 from "./AISection4";

export const metadata: Metadata = {
  title: "AI Platform - biostate.AI",
  description: "AI platform powered by biostate.AI.",
};

export default function AIPage() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <AISection1 />
      <AISection2 />
      <AISection3 />
      <AISection4 />
    </div>
  );
}
