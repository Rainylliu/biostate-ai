import type { Metadata } from "next";
import WaveReveal from "../../components/WaveReveal";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - biostate.AI",
  description: "Get in touch with biostate.AI.",
};

export default function ContactsPage() {
  return (
    <div id="contacts-top" style={{ overflowX: "hidden" }}>
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
            / Contact Us /
          </h1>

          <div
            style={{
              position: "absolute",
              right: "calc(8% + 6px)",
              top: "50%",
              transform: "translateY(-50%)",
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              fontSize: "clamp(48px, 5vw, 70px)",
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
            Contact
          </div>
        </div>
      </section>

      {/* ── Main Content: Two-column layout ── */}
      <section
        className="contacts-content"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px 120px",
          display: "flex",
          gap: "80px",
        }}
      >
        {/* ── Left Column: Info ── */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              color: "#999",
              textTransform: "lowercase",
              marginBottom: "16px",
            }}
          >
            [ get in touch ]
          </p>

          <WaveReveal
            text="We Are Here to Help You Level Up Your Research"
            as="h2"
            className="home-section-heading"
            style={{
              fontFamily: "'Sora', Arial, Helvetica, sans-serif",
              fontSize: 48,
              fontWeight: 400,
              color: "#333333",
              margin: "0 0 24px 0",
              lineHeight: 1.15,
            }}
            highlightWords={["Level", "Up"]}
            highlightStyle={{ color: "#6766c8" }}
          />

          <p
            style={{
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              color: "#555",
              lineHeight: 1.8,
              margin: "0 0 48px 0",
            }}
          >
            Speak with our experts to tailor solutions to your specific research needs.
          </p>

          {/* Contact info items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {/* Our Location */}
            <div>
              <h6
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #8258c8, #2c84c8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  margin: "0 0 8px 0",
                }}
              >
                Our Location
              </h6>
              <p
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#555",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                7505 Fannin St. Suite 610
                <br />
                Houston, TX
              </p>
            </div>

            {/* Email */}
            <div>
              <h6
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #8258c8, #2c84c8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  margin: "0 0 8px 0",
                }}
              >
                Email
              </h6>
              <p
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                <a
                  href="mailto:contact@biostate.ai"
                  style={{
                    color: "#555",
                    textDecoration: "underline",
                  }}
                >
                  contact@biostate.ai
                </a>
              </p>
            </div>

            {/* Social network */}
            <div>
              <h6
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #8258c8, #2c84c8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  margin: "0 0 12px 0",
                }}
              >
                Social network
              </h6>
              <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <a
                  href="https://www.facebook.com/people/Biostate-AI/61562900021094/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#555", display: "flex", transition: "color 0.2s" }}
                >
                  <svg width="20" height="20" viewBox="0 0 320 512" fill="currentColor">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/biostate.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#555", display: "flex", transition: "color 0.2s" }}
                >
                  <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/biostate-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#555", display: "flex", transition: "color 0.2s" }}
                >
                  <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/biostateai"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#555", display: "flex", transition: "color 0.2s" }}
                >
                  <svg width="20" height="20" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Column: Form ── */}
        <div style={{ flex: 1 }}>
          <h4
            style={{
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              fontSize: "28px",
              fontWeight: 600,
              color: "#111",
              margin: "0 0 32px 0",
            }}
          >
            Get in Touch
          </h4>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
