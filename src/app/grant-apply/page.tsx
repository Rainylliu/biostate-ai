import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply Grants - biostate.AI",
  description: "Apply for grants from biostate.AI to support your research.",
};

export default function GrantApplyPage() {
  return (
    <div id="grant-top" style={{ overflowX: "hidden" }}>
      {/* Page Header Banner */}
      <section
        className="get-quote-hero"
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

          {/* Purple-blue gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(130, 88, 200, 0.6), rgba(44, 132, 200, 0.6))",
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
            borderTopLeftRadius: "25px",
            borderBottomRightRadius: "25px",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "120px",
            width: "25px",
            height: "25px",
            background: "radial-gradient(circle at 100% 100%, transparent 25px, #ffffff 25px)",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "38%",
            left: 0,
            width: "25px",
            height: "25px",
            background: "radial-gradient(circle at 100% 100%, transparent 25px, #ffffff 25px)",
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
            borderBottomRightRadius: "25px",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: "8%",
            width: "25px",
            height: "25px",
            background: "radial-gradient(circle at 0% 0%, transparent 25px, #ffffff 25px)",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "55%",
            right: 0,
            width: "25px",
            height: "25px",
            background: "radial-gradient(circle at 0% 0%, transparent 25px, #ffffff 25px)",
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
            / Apply Grants /
          </h1>

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
              writingMode: "vertical-rl" as const,
              letterSpacing: "0.05em",
              lineHeight: 1,
              userSelect: "none" as const,
              pointerEvents: "none" as const,
            }}
          >
            Grant
          </div>
        </div>
      </section>

      {/* Title */}
      <h2
        style={{
          fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
          fontSize: "clamp(40px, 5vw, 64px)",
          fontWeight: 400,
          color: "#111111",
          textAlign: "center",
          lineHeight: 1.15,
          margin: "0",
          padding: "80px 24px 48px",
        }}
      >
        Grant Application
      </h2>

      {/* Placeholder content */}
      <section
        style={{
          padding: "0 24px 120px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
            fontSize: "18px",
            color: "#555555",
            lineHeight: 1.8,
            textAlign: "center",
          }}
        >
          Grant application form coming soon. Please contact{" "}
          <a
            href="mailto:contact@biostate.ai"
            style={{ color: "#8258C8", textDecoration: "none" }}
          >
            contact@biostate.ai
          </a>{" "}
          for more information.
        </p>
      </section>
    </div>
  );
}
