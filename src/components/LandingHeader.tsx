"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [menuHovered, setMenuHovered] = useState(false);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when Calendly popup or side panel is open
  useEffect(() => {
    if (calendlyOpen || sidePanelOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [calendlyOpen, sidePanelOpen]);

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
            {/* Menu grid icon with hover effect and side panel trigger */}
            <button
              aria-label="Menu"
              className="cursor-pointer relative"
              style={{ width: 20, height: 20, background: "transparent", border: "none", padding: 0 }}
              onClick={() => setSidePanelOpen(true)}
              onMouseEnter={() => setMenuHovered(true)}
              onMouseLeave={() => setMenuHovered(false)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/menu.svg"
                alt="Menu"
                width={20}
                height={20}
                className="absolute inset-0 transition-opacity duration-500"
                style={{ opacity: menuHovered ? 0 : 1 }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/menu-hover.svg"
                alt="Menu"
                width={20}
                height={20}
                className="absolute inset-0 transition-opacity duration-500"
                style={{ opacity: menuHovered ? 1 : 0 }}
              />
            </button>
            <Link href="/" className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.svg"
                alt="biostate.AI"
                style={{ height: "24px", width: "auto" }}
              />
            </Link>
          </div>

          {/* Right: Nav + CTA buttons */}
          <div className="flex items-center gap-3">
            {/* Nav items */}
            <nav className="hidden md:flex items-center gap-1" style={{ marginRight: "48px" }}>
              <Link
                href="/pricing"
                className="transition-colors hover:bg-[#F0F2F4]"
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0em",
                  textTransform: "uppercase" as const,
                  borderRadius: "10px",
                  padding: "10px 20px",
                  color: "#1f1f1f",
                }}
              >
                PRICING
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <button
                  className="transition-colors hover:bg-[#F0F2F4] flex items-center gap-1 cursor-pointer"
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0em",
                    textTransform: "uppercase" as const,
                    borderRadius: "10px",
                    padding: "10px 20px",
                    color: "#1f1f1f",
                    background: "transparent",
                    border: "none",
                  }}
                >
                  RESOURCES
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    style={{
                      marginLeft: "4px",
                      transition: "transform 0.2s",
                      transform: resourcesOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {/* Dropdown */}
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    paddingTop: "8px",
                    opacity: resourcesOpen ? 1 : 0,
                    pointerEvents: resourcesOpen ? "auto" : "none",
                    transition: "opacity 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#1f1f1f",
                      borderRadius: "16px",
                      padding: "16px 0",
                      minWidth: "200px",
                    }}
                  >
                    <Link
                      href="/white-paper"
                      className="block transition-colors hover:!text-[#45D0BD]"
                      style={{
                        fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#ffffff",
                        padding: "12px 28px",
                      }}
                    >
                      White paper
                    </Link>
                    <a
                      href="https://www.biostate.ai/blog-grid/"
                      className="block transition-colors hover:!text-[#45D0BD]"
                      style={{
                        fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#ffffff",
                        padding: "12px 28px",
                      }}
                    >
                      Blogs
                    </a>
                  </div>
                </div>
              </div>
            </nav>
            <button
              onClick={() => setCalendlyOpen(true)}
              className="contact-expert-btn hidden sm:inline-flex rounded-full cursor-pointer"
              style={{
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#1f1f1f",
              }}
            >
              <span className="contact-expert-inner">Contact expert</span>
            </button>
            <Link
              href="/get-quote"
              className="get-quote-btn get-quote-btn-rna hidden sm:inline-flex rounded-full"
              style={{
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#1f1f1f",
              }}
            >
              <span className="get-quote-inner">Request a quote</span>
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

      {/* Side Panel Overlay */}
      <div
        className="fixed inset-0 z-[100]"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          opacity: sidePanelOpen ? 1 : 0,
          pointerEvents: sidePanelOpen ? "auto" : "none",
          transition: "opacity 0.4s ease",
        }}
        onClick={() => setSidePanelOpen(false)}
      />

      {/* Side Panel - uses Side panel.svg as background */}
      <div
        className="fixed top-0 left-0 z-[101] h-full"
        style={{
          width: "calc(100vh * 460 / 945)",
          maxWidth: "90vw",
          transform: sidePanelOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* SVG background layer */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Side panel.svg"
          alt=""
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "fill" }}
          draggable={false}
        />

        {/* Interactive overlay on the main dark area (left 84.6% of panel = 389/460) */}
        <div
          className="absolute top-0 left-0 h-full flex flex-col"
          style={{ width: "84.6%" }}
        >
          {/* Content area - vertically centered */}
          <div className="flex-1 flex flex-col justify-center" style={{ padding: "0 10.5%" }}>
            <p
              style={{
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "clamp(11px, 1.5vw, 14px)",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              CONTACTS
            </p>
            <p
              style={{
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "18px",
                fontWeight: 400,
                color: "#ffffff",
                lineHeight: 1.4,
                marginBottom: "0",
              }}
            >
              7505 Fannin St. Suite 610
            </p>
            <p
              style={{
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "18px",
                fontWeight: 400,
                color: "#ffffff",
                lineHeight: 1.4,
                marginBottom: "28px",
              }}
            >
              Houston, TX
            </p>
            <a
              href="mailto:contact@biostate.ai"
              className="hover:!text-[#45D0BD] transition-colors"
              style={{
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "18px",
                fontWeight: 400,
                color: "#ffffff",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              contact@biostate.ai
            </a>

            {/* Get in Touch button - matches header style */}
            <div style={{ marginTop: "48px" }}>
              <Link
                href="/get-quote"
                onClick={() => setSidePanelOpen(false)}
                className="get-quote-btn get-quote-btn-dark inline-flex rounded-full"
                style={{
                  color: "#1f1f1f",
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  letterSpacing: "normal",
                }}
              >
                <span className="get-quote-inner">Get in Touch</span>
              </Link>
            </div>
          </div>

          {/* Bottom social icons */}
          <div
            className="flex items-center gap-12"
            style={{ padding: "24px 10.5% 40px" }}
          >
            <a href="https://www.facebook.com/people/Biostate-AI/61562900021094/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: "#ffffff" }} className="hover:!text-[#45D0BD] transition-colors">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/biostate.ai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "#ffffff" }} className="hover:!text-[#45D0BD] transition-colors">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://x.com/biostateai" target="_blank" rel="noopener noreferrer" aria-label="X" style={{ color: "#ffffff" }} className="hover:!text-[#45D0BD] transition-colors">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/biostate-ai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "#ffffff" }} className="hover:!text-[#45D0BD] transition-colors">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        {/* Close button overlay on the right strip */}
        <button
          onClick={() => setSidePanelOpen(false)}
          className="absolute top-0 h-full flex flex-col items-center cursor-pointer"
          style={{
            left: "85.2%",
            width: "14.8%",
            paddingTop: "28px",
            background: "transparent",
            border: "none",
            color: "#ffffff",
          }}
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="side-panel-close-x" style={{ flexShrink: 0, marginBottom: "8px" }}>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          <span
            style={{
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              fontSize: "17px",
              fontWeight: 400,
              writingMode: "vertical-rl",
              letterSpacing: "0.08em",
            }}
          >
            Close
          </span>
        </button>
      </div>
    </>
  );
}
