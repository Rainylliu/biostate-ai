import type { Metadata } from "next";
import NewsGrid from "@/components/NewsGrid";

export const metadata: Metadata = {
  title: "In the News - biostate.AI",
  description: "Latest news and press coverage about biostate.AI.",
};

export default function NewsPage() {
  return (
    <div style={{ fontFamily: "'Manrope', Arial, Helvetica, sans-serif" }}>
      {/* Header Banner */}
      <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 20px", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/News_header.svg"
          alt="In The News"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      <NewsGrid />
    </div>
  );
}
