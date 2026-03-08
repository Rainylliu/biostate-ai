import type { Metadata } from "next";
import QuoteForm from "./QuoteForm";

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
            borderTopLeftRadius: "25px",
            borderBottomRightRadius: "25px",
            zIndex: 2,
          }}
        />
        {/* Top-left notch: concave corner at right edge (top-right of notch) */}
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
        {/* Top-left notch: concave corner at bottom edge (bottom-left of notch) */}
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
        {/* Bottom-right notch: concave corner at left edge (bottom-left of notch) */}
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
        {/* Bottom-right notch: concave corner at top edge (top-right of notch) */}
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

      {/* Section - Form Introduction */}
      <section
        style={{
          padding: "80px 24px 0",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 400,
            color: "#111111",
            textAlign: "center",
            lineHeight: 1.15,
            margin: "0 0 48px",
            whiteSpace: "nowrap",
          }}
        >
          RNAseq service Quote Request
        </h2>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <li style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              style={{ flexShrink: 0, marginTop: "6px" }}
            >
              <path
                d="M4 4L12 12M12 12H5M12 12V5"
                stroke="#999999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p
              style={{
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "16px",
                color: "#555555",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              To generate a quote for your institution/ company, please fill out the
              form below. A copy of the quote will be sent to the email you specify
              below, you can include any additional emails you would like to CC in
              this email.
            </p>
          </li>
          <li style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              style={{ flexShrink: 0, marginTop: "6px" }}
            >
              <path
                d="M4 4L12 12M12 12H5M12 12V5"
                stroke="#999999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p
              style={{
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "16px",
                color: "#555555",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              After you obtain a PO number from your institution, please send the
              PO document to contact@biostate.ai as soon as possible.
            </p>
          </li>
          <li style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              style={{ flexShrink: 0, marginTop: "6px" }}
            >
              <path
                d="M4 4L12 12M12 12H5M12 12V5"
                stroke="#999999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p
              style={{
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "16px",
                color: "#555555",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Purchase orders should be issued to Biostate AI, Incorporated If
              we&apos;re not yet a vendor at your institution, please have your buyer or
              lab manager reach out to us. Our onboarding team is very efficient
              and we can get set up very quickly. Here is our{" "}
              <a
                href="#"
                style={{
                  color: "#45d0bd",
                  textDecoration: "none",
                }}
              >
                W-9 form
              </a>
              .
            </p>
          </li>
        </ul>
      </section>

      {/* Form Section - centered */}
      <section
        style={{
          padding: "60px 24px 0",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <QuoteForm />
      </section>
    </div>
  );
}
