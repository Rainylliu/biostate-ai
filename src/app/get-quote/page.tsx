import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Quote - biostate.AI",
  description: "Request a quote from biostate.AI.",
};

export default function GetQuotePage() {
  return (
    <div>
      {/* Page Header Banner */}
      <section
        style={{
          position: "relative",
          width: "calc(100% - 48px)",
          margin: "0 auto",
          marginTop: "12px",
          height: "320px",
        }}
      >
        {/* Main banner with rounded corners */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            borderRadius: "25px",
          }}
        >
          {/* Background image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/headerbg.png"
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Purple-blue gradient overlay at 60% opacity */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(140, 100, 220, 0.6), rgba(100, 170, 230, 0.6))",
            }}
          />
        </div>

        {/* Top-left notch overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "120px",
            height: "38%",
            background: "#ffffff",
            borderBottomRightRadius: "25px",
            zIndex: 2,
          }}
        />

        {/* Bottom-right notch overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "8%",
            height: "55%",
            background: "#ffffff",
            borderTopLeftRadius: "25px",
            zIndex: 2,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Title - centered */}
          <h1
            style={{
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 600,
              color: "#ffffff",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            / Get Quote /
          </h1>

          {/* Breadcrumb */}
          <div
            style={{
              position: "absolute",
              bottom: "24px",
              left: "64px",
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              fontSize: "14px",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#ffffff",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Home
            </Link>
            <span>/</span>
            <span>Get Quote</span>
          </div>

          {/* "Quote" outline text on the right */}
          <div
            style={{
              position: "absolute",
              right: "calc(8% + 6px)",
              top: "50%",
              transform: "translateY(-50%)",
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              fontSize: "clamp(60px, 7vw, 90px)",
              fontWeight: 700,
              color: "transparent",
              WebkitTextStroke: "1.2px rgba(255, 255, 255, 0.35)",
              writingMode: "vertical-rl",
              letterSpacing: "0.05em",
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            Quote
          </div>
        </div>
      </section>
    </div>
  );
}
