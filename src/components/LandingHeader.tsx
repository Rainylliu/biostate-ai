"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when Calendly popup is open
  useEffect(() => {
    if (calendlyOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [calendlyOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white ${scrolled ? "header-slide-down" : ""}`}
        style={{
          padding: "12px 20px",
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{
            height: "60px",
            padding: "0 24px",
            border: "1px solid #e6e8ea",
            borderRadius: "16px",
            backgroundColor: "#ffffff",
          }}
        >
          {/* Left: Menu icon + Logo */}
          <div className="flex items-center gap-6">
            {/* Menu grid icon - same as main header */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/menu.svg"
              alt="Menu"
              width={20}
              height={20}
            />
            <Link href="/" className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.svg"
                alt="biostate.AI"
                style={{ height: "24px", width: "auto" }}
              />
            </Link>
          </div>

          {/* Right: CTA buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCalendlyOpen(true)}
              className="hidden sm:inline-flex items-center justify-center rounded-full transition-colors hover:bg-[#f0f2f4] cursor-pointer"
              style={{
                height: "44px",
                padding: "0 24px",
                border: "1px solid #1f1f1f",
                background: "transparent",
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#1f1f1f",
              }}
            >
              Contact expert
            </button>
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center rounded-full transition-opacity hover:opacity-90"
              style={{
                height: "44px",
                padding: "0 24px",
                background: "linear-gradient(135deg, #45d0bd, #44b6e9)",
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              Request a quote
            </Link>
          </div>
        </div>
      </header>

      {/* Calendly Popup Overlay */}
      {calendlyOpen && (
        <div
          className="fixed inset-0 z-[9999]"
          style={{ backgroundColor: "rgba(31, 31, 31, 0.6)" }}
        >
          {/* Close overlay on background click */}
          <div
            className="absolute inset-0"
            onClick={() => setCalendlyOpen(false)}
          />
          {/* Popup container */}
          <div
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              maxWidth: "1000px",
              height: "90vh",
              maxHeight: "680px",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#ffffff",
            }}
          >
            <iframe
              src="https://calendly.com/rachan-raj-biostate/biostate-ai-introduction-services?embed_type=PopupText"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Select a Date & Time - Calendly"
            />
          </div>
          {/* Close button */}
          <button
            onClick={() => setCalendlyOpen(false)}
            className="absolute cursor-pointer"
            style={{
              top: "calc(50% - min(45vh, 340px) - 40px)",
              right: "calc(50% - min(500px, 50%))",
              width: "32px",
              height: "32px",
              background: "transparent",
              border: "none",
              color: "#ffffff",
              fontSize: "28px",
              lineHeight: 1,
            }}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
