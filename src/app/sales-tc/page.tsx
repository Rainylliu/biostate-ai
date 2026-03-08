import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Terms & Conditions - biostate.AI",
  description: "Biostate AI Sales Terms and Conditions.",
};

export default function SalesTCPage() {
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            borderRadius: "25px",
          }}
        >
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
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(140, 100, 220, 0.6), rgba(100, 170, 230, 0.6))",
            }}
          />
        </div>

        {/* Top-left notch */}
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

        {/* Bottom-right notch */}
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
            / Terms &amp; Conditions /
          </h1>
        </div>
      </section>

      {/* Content */}
      <section
        style={{
          padding: "80px 24px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
            fontSize: "32px",
            fontWeight: 700,
            color: "#111111",
            marginBottom: "32px",
          }}
        >
          Sales Terms &amp; Conditions
        </h2>
        <p
          style={{
            fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
            fontSize: "16px",
            color: "#555555",
            lineHeight: 1.7,
          }}
        >
          This page is under construction. Please contact us at{" "}
          <a href="mailto:contact@biostate.ai" style={{ color: "#45d0bd", textDecoration: "none" }}>
            contact@biostate.ai
          </a>{" "}
          for details regarding our sales terms and conditions.
        </p>
      </section>
    </div>
  );
}
