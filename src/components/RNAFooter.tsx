"use client";

import { useState } from "react";
import Link from "next/link";

export default function RNAFooter() {
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = () => {
    if (!subscribeEmail.trim() || !subscribeEmail.includes("@")) return;

    const fd = new FormData();
    fd.append("email", subscribeEmail);
    fd.append("nonce", "");
    fd.append("l", "182af885-1b25-4da3-8a35-04d6e396f426");
    fetch("https://listmonk.jamesflare.com/subscription/form", {
      method: "POST",
      body: fd,
      mode: "no-cors",
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).fbq("track", "Lead");
    }

    window.history.pushState({}, "", window.location.pathname.replace(/\/$/, "") + "/thank-you");
    setShowPopup(true);
    setSubscribeEmail("");
  };

  const processSteps = [
    {
      label: "Sample receipt",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3h6v7l3-2v8l-3-2v7H9v-7l-3 2V8l3 2V3z" />
        </svg>
      ),
    },
    {
      label: "Sequencing",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
        </svg>
      ),
    },
    {
      label: "Analysis",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
          <path d="M8 11h6M11 8v6" />
        </svg>
      ),
    },
    {
      label: "Delivery",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v12M12 15l-4-4M12 15l4-4M5 21h14" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      style={{
        backgroundColor: "#1a1a1a",
        borderRadius: "25px",
        margin: "40px 20px 20px",
        overflow: "hidden",
      }}
    >
      {/* Part 1: Getting Started CTA */}
      <section
        style={{
          padding: "100px 0 80px",
          textAlign: "center",
        }}
      >
        <div className="container">
          {/* Badge */}
          <span
            style={{
              display: "inline-block",
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              color: "#ffffff",
              backgroundColor: "#45d0bd",
              borderRadius: "20px",
              padding: "6px 20px",
              marginBottom: "30px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Getting Started
          </span>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Sora', Arial, Helvetica, sans-serif",
              fontSize: "52px",
              fontWeight: 500,
              lineHeight: 1.2,
              color: "#ffffff",
              marginBottom: "20px",
            }}
          >
            Ready to Start Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8258c8, #2c84c8)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              RNA-Seq
            </span>
            <br />
            Project?
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.6)",
              marginBottom: "50px",
            }}
          >
            We handle everything from sample receipt to data delivery
          </p>

          {/* Process Steps */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0",
              marginBottom: "50px",
            }}
          >
            {processSteps.map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      border: "1px solid rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {step.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {step.label}
                  </span>
                </div>
                {i < processSteps.length - 1 && (
                  <div
                    style={{
                      width: "100px",
                      height: "2px",
                      margin: "0 16px",
                      background: "linear-gradient(90deg, #45d0bd, #44b6e9)",
                      borderRadius: "1px",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/get-quote"
              className="book-a-call-btn book-a-call-btn-solid-teal group"
            >
              Get My Quote Now
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
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Gq3OABJbBRGGfHXFMlbfbMhJFfUVm-2XNDRnr-9VFfheh0sCjYUtRfWSjzfHMNUKQFHOoL_78"
              target="_blank"
              rel="noopener noreferrer"
              className="book-a-call-btn book-a-call-btn-dark group"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="12" height="12" rx="1.5" />
                <path d="M2 6.5h12M5.5 1.5v3M10.5 1.5v3" />
              </svg>
              Schedule a 15-Min Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Part 2: Bottom Footer */}
      <section
        style={{
          padding: "80px 0 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Purple-teal glow at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "0",
            right: "0",
            height: "300px",
            background: "radial-gradient(ellipse at 30% 100%, rgba(69, 208, 189, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 100%, rgba(130, 88, 200, 0.15) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {/* Main content row: big text + email subscribe */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "50px",
            }}
          >
            {/* Left - Big gradient text */}
            <h2
              style={{
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "64px",
                fontWeight: 500,
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                background: "linear-gradient(135deg, rgb(69, 208, 189), rgb(68, 182, 233))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              RNA Sequencing
              <br />
              Meets AI Brilliance
            </h2>

            {/* Right - Email subscribe */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={{ position: "relative" }}>
                <input
                  type="email"
                  placeholder="Email"
                  className="footer-email-input"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: "16px",
                    padding: "12px 0",
                    backgroundColor: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.3)",
                    outline: "none",
                    color: "#ffffff",
                    width: "300px",
                  }}
                />
              </div>
              <button className="book-a-call-btn book-a-call-btn-dark" onClick={handleSubscribe}>
                Subscribe
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
              </button>
            </div>
          </div>

          {/* Divider line */}
          <div
            style={{
              height: "1px",
              background: "linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.3), rgba(255,255,255,0.1))",
              marginBottom: "50px",
            }}
          />

          {/* Info grid: 3 columns — logo | location+follow | phone+email */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto auto",
              gap: "0 80px",
              marginBottom: "50px",
            }}
          >
            {/* Row 1, Col 1: Logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.svg"
              alt="biostate.AI"
              style={{
                height: "36px",
                width: "auto",
                filter: "brightness(0) invert(1)",
                gridRow: "1 / 3",
                alignSelf: "start",
              }}
            />

            {/* Row 1, Col 2: Location */}
            <div>
              <h6
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "8px",
                }}
              >
                Location
              </h6>
              <p
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: "1.6",
                }}
              >
                7505 Fannin St. Suite 610
                <br />
                Houston, TX
              </p>
            </div>

            {/* Row 1, Col 3: Phone */}
            <div>
              <h6
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "8px",
                }}
              >
                Phone
              </h6>
              <p
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                +1 (713) 489 9827
              </p>
            </div>

            {/* Row 2, Col 2: Follow us — left-aligned with Location */}

            {/* Follow us */}
            <div style={{ marginTop: "30px" }}>
              <h6
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "12px",
                }}
              >
                Follow us
              </h6>
              <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <a href="https://www.facebook.com/people/Biostate-AI/61562900021094/" target="_blank" rel="noopener noreferrer" className="footer-link-hover" style={{ color: "#FFFFFF99", display: "flex" }}>
                  <svg width="18" height="18" viewBox="0 0 320 512" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                </a>
                <a href="https://x.com/biostateai" target="_blank" rel="noopener noreferrer" className="footer-link-hover" style={{ color: "#FFFFFF99", display: "flex" }}>
                  <svg width="18" height="18" viewBox="0 0 512 512" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/biostate-ai/" target="_blank" rel="noopener noreferrer" className="footer-link-hover" style={{ color: "#FFFFFF99", display: "flex" }}>
                  <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                </a>
                <a href="https://www.youtube.com/@biostateai" target="_blank" rel="noopener noreferrer" className="footer-link-hover" style={{ color: "#FFFFFF99", display: "flex" }}>
                  <svg width="18" height="18" viewBox="0 0 576 512" fill="currentColor"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                </a>
              </div>
            </div>

            {/* Row 2, Col 3: Email */}
            <div style={{ marginTop: "30px" }}>
              <h6
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "8px",
                }}
              >
                Email
              </h6>
              <a
                href="mailto:contact@biostate.ai"
                className="footer-link-hover"
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "underline",
                }}
              >
                contact@biostate.ai
              </a>
            </div>
          </div>

          {/* Copyright bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "20px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p
              style={{
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.4)",
              }}
            >
              &copy;{" "}
              <Link href="/" className="footer-link-hover" style={{ color: "#45d0bd", textDecoration: "none" }}>
                biostate
              </Link>{" "}
              {new Date().getFullYear()}. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              <Link
                href="/terms"
                className="footer-link-hover"
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                }}
              >
                Terms of use
              </Link>
              <Link
                href="/privacy"
                className="footer-link-hover"
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "underline",
                }}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Success Popup */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10, 9, 16, 0.55)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
          onClick={() => { window.history.back(); setShowPopup(false); }}
        >
          <div
            style={{
              background: "#0a0910",
              borderRadius: "20px",
              padding: "36px 40px",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 20px 80px rgba(0,0,0,0.5)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h4
              style={{
                margin: "0 0 10px 0",
                color: "#fff",
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              Subscribed Successfully
            </h4>
            <p
              style={{
                margin: "0 0 18px 0",
                color: "rgba(255,255,255,0.75)",
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "14px",
              }}
            >
              Thank you for joining our mailing list.
            </p>
            <button
              onClick={() => { window.history.back(); setShowPopup(false); }}
              style={{
                padding: "10px 32px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                background: "linear-gradient(90deg, #9b57ff, #46b6ff)",
                color: "#fff",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
