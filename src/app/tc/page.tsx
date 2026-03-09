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
            src="/images/terms.svg"
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
                "linear-gradient(135deg, rgba(90, 50, 180, 0.6), rgba(50, 120, 200, 0.6))",
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
            background:
              "radial-gradient(circle at 100% 100%, transparent 25px, #ffffff 25px)",
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
            background:
              "radial-gradient(circle at 100% 100%, transparent 25px, #ffffff 25px)",
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
            background:
              "radial-gradient(circle at 0% 0%, transparent 25px, #ffffff 25px)",
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
            background:
              "radial-gradient(circle at 0% 0%, transparent 25px, #ffffff 25px)",
            zIndex: 2,
          }}
        />

        {/* Title */}
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

      {/* PDF Embed Section */}
      <section
        style={{
          padding: "60px 24px 20px",
          maxWidth: "1080px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid #E6EAF2",
            boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
          }}
        >
          {/* PDF Header */}
          <div
            style={{
              padding: "22px 26px",
              background: "linear-gradient(90deg, #45D0BD, #44B6E9)",
              color: "white",
            }}
          >
            <div
              style={{
                fontSize: "22px",
                fontWeight: 700,
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                letterSpacing: "-0.5px",
              }}
            >
              View the PDF Document
            </div>
          </div>

          {/* PDF Preview Embed */}
          <div style={{ width: "100%", background: "white" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "120%",
              }}
            >
              <iframe
                src="/pdf/T&C-03062026.pdf"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                title="Biostate AI Terms and Conditions PDF"
              />
            </div>
          </div>

          {/* CTA Footer */}
          <div
            style={{
              padding: "26px",
              textAlign: "center",
              background: "#F9FBFF",
            }}
          >
            <div style={{ display: "inline-flex", gap: "16px", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
              <a
                href="/get-quote"
                className="book-a-call-btn book-a-call-btn-solid-teal"
              >
                Request a Quote
                <span className="book-a-call-arrow">
                  <span className="book-a-call-arrow-inner">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
              </a>
              <a
                href="/pdf/T&C-03062026.pdf"
                download
                className="book-a-call-btn book-a-call-btn-solid-teal"
              >
                Download
                <span className="book-a-call-arrow">
                  <span className="book-a-call-arrow-inner">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
              </a>
            </div>
            <div
              style={{
                marginTop: "14px",
                fontSize: "12px",
                color: "#6B7280",
                lineHeight: "18px",
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              }}
            >
              By submitting, you agree to Biostate&apos;s{" "}
              <a
                href="/tc"
                style={{ color: "#44B6E9", textDecoration: "none" }}
              >
                Terms &amp; Conditions
              </a>
              .
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
