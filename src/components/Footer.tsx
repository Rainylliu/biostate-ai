"use client";

import { useState } from "react";
import Link from "next/link";
import WaveReveal from "@/components/WaveReveal";

export default function Footer() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:contact@biostate.ai?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.fullName} (${formData.email})\n\n${formData.message}`)}`;
  };

  return (
    <footer
      style={{
        backgroundColor: "#1a1a1a",
        borderRadius: "25px",
        margin: "100px 20px 20px",
        overflow: "hidden",
      }}
    >
      {/* Part 1: Get in Touch */}
      <section
        style={{
          padding: "135px 0 60px",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              gap: "60px",
              alignItems: "flex-start",
            }}
          >
            {/* Left side */}
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#ffffff",
                  marginBottom: "20px",
                }}
              >
                [ get in touch ]
              </p>
              <WaveReveal
                text="We Are Here to Help You Level Up Your Research"
                as="h2"
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "64px",
                  fontWeight: 500,
                  lineHeight: "1.15em",
                  color: "#ffffff",
                  marginBottom: "30px",
                }}
              />
              <p
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#ffffff",
                  lineHeight: "1.8",
                  marginBottom: "50px",
                }}
              >
                Speak with our experts to tailor solutions to your specific research needs.
              </p>

              {/* Contact info */}
              <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <h6
                    style={{
                      fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#ffffff",
                      minWidth: "220px",
                    }}
                  >
                    Our Location
                  </h6>
                  <p
                    style={{
                      fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#ffffff",
                      lineHeight: "1.6",
                    }}
                  >
                    7505 Fannin St. Suite 610
                    <br />
                    Houston, TX
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <h6
                    style={{
                      fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#ffffff",
                      minWidth: "220px",
                    }}
                  >
                    Email
                  </h6>
                  <a
                    href="mailto:contact@biostate.ai"
                    className="footer-link-hover"
                    style={{
                      fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#ffffff",
                      textDecoration: "underline",
                    }}
                  >
                    contact@biostate.ai
                  </a>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <h6
                    style={{
                      fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#ffffff",
                      minWidth: "220px",
                    }}
                  >
                    Social network
                  </h6>
                  <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
                    <a href="https://www.facebook.com/p/Biostate-AI-61562900021094/" target="_blank" rel="noopener noreferrer" className="footer-link-hover" style={{ color: "#ffffff", display: "flex" }}>
                      <svg width="20" height="20" viewBox="0 0 320 512" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/biostate.ai" target="_blank" rel="noopener noreferrer" className="footer-link-hover" style={{ color: "#ffffff", display: "flex" }}>
                      <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/company/biostate-ai/" target="_blank" rel="noopener noreferrer" className="footer-link-hover" style={{ color: "#ffffff", display: "flex" }}>
                      <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                    </a>
                    <a href="https://x.com/biostateai" target="_blank" rel="noopener noreferrer" className="footer-link-hover" style={{ color: "#ffffff", display: "flex" }}>
                      <svg width="20" height="20" viewBox="0 0 512 512" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div
              style={{
                flex: "0 0 480px",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "40px",
              }}
            >
              <h4
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#111",
                  marginBottom: "30px",
                }}
              >
                Get in Touch
              </h4>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div className="floating-field">
                  <input
                    type="text"
                    placeholder=" "
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                  <label>Full Name</label>
                </div>
                <div className="floating-field">
                  <input
                    type="email"
                    placeholder=" "
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <label>Email</label>
                </div>
                <div className="floating-field">
                  <input
                    type="text"
                    placeholder=" "
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                  <label>Subject</label>
                </div>
                <div className="floating-field floating-textarea">
                  <textarea
                    placeholder=" "
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  <label>Message</label>
                </div>
                <button
                  type="submit"
                  className="book-a-call-btn"
                  style={{ alignSelf: "flex-start" }}
                >
                  Send message
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
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Bottom Footer */}
      <section
        style={{
          padding: "60px 0 40px",
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
          {/* Divider line */}
          <div
            style={{
              height: "1px",
              background: "linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.3), rgba(255,255,255,0.1))",
              marginBottom: "40px",
            }}
          />

          {/* Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.svg"
            alt="biostate.AI"
            style={{
              height: "48px",
              width: "auto",
              marginBottom: "40px",
              filter: "brightness(0) invert(1)",
            }}
          />

          {/* Main content row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "60px",
            }}
          >
            {/* Left - Big text */}
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
              Bio Meets AI
              <br />
              Brilliance
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

          {/* Copyright */}
          <p
            style={{
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.4)",
            }}
          >
            &copy; Biostate {new Date().getFullYear()}. All rights reserved.
          </p>
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
