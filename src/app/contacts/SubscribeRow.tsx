"use client";

import { useState } from "react";

export default function SubscribeRow() {
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).fbq("track", "Lead");
    }

    setShowPopup(true);
    setEmail("");
  };

  return (
    <>
      <div className="contacts-subscribe-row" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div style={{ position: "relative" }}>
          <input
            type="email"
            placeholder="Email"
            className="footer-email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button
          className="book-a-call-btn book-a-call-btn-dark"
          onClick={handleSubscribe}
          type="button"
        >
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
          onClick={() => setShowPopup(false)}
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
              onClick={() => setShowPopup(false)}
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
