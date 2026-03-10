"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = () => {
    if (!email.trim() || !email.includes("@")) return;

    const fd = new FormData();
    fd.append("email", email);
    fd.append("nonce", "");
    fd.append("l", "182af885-1b25-4da3-8a35-04d6e396f426");
    fetch("https://listmonk.jamesflare.com/subscription/form", {
      method: "POST",
      body: fd,
      mode: "no-cors",
    });

    window.history.replaceState({}, "", "/?subscribed=thank-you");
    setShowPopup(true);
    setEmail("");
  };

  const closePopup = () => {
    setShowPopup(false);
    window.history.replaceState({}, "", "/");
  };

  return (
    <>
      {/* Hero Section - 100vh with video background */}
      <section className="hero-wrapper">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/images/Landingpage.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35))",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
            padding: "24px",
            gap: "24px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h1 className="hero-title">
            Helping 90% of humanity live to 90 years old.
          </h1>

          <p className="hero-subtitle">
            Biostate AI connects samples, data, and decisions to redefine
            precision health.
          </p>

          {/* Subscribe form */}
          <div className="hero-subscribe-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              className="hero-email-input"
            />
            <button
              type="button"
              onClick={handleSubscribe}
              className="book-a-call-btn book-a-call-btn-hero-subscribe"
              style={{ whiteSpace: "nowrap", height: "56px" }}
            >
              Subscribe
              <span className="book-a-call-arrow">
                <span className="book-a-call-arrow-inner">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </span>
            </button>
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
          onClick={closePopup}
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
              onClick={closePopup}
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
    </>
  );
}
