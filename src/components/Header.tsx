"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "TEAM", href: "/about-us" },
  { label: "PUBLICATIONS", href: "/publication" },
  { label: "RNA", href: "/rna" },
  { label: "DNA", href: "/dna" },
  { label: "AI", href: "/ai" },
  { label: "NEWS", href: "/news" },
];

export default function Header() {
  const pathname = usePathname();
  // Lock isHome once true — pushState to /thank-you shouldn't break header
  const isHomeRef = useRef(pathname === "/");
  if (pathname === "/") isHomeRef.current = true;
  else if (pathname !== "/thank-you") isHomeRef.current = false;
  const isHome = isHomeRef.current;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuHovered, setMenuHovered] = useState(false);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On home page: transparent header overlaying hero, white text
  const isTransparent = isHome && !scrolled;

  // Lock body scroll when side panel or mobile menu is open
  useEffect(() => {
    if (sidePanelOpen || mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [sidePanelOpen, mobileOpen]);

  const marqueeText = "RNA-seq starting from $60 per sample";

  const textColor = isTransparent ? "#ffffff" : "#1f1f1f";
  const mutedColor = isTransparent ? "rgba(255,255,255,0.7)" : "#919191";

  return (
    <>
      {/* Top Info Bar - hidden on home page, outside wrapper so sticky header works */}
      {!isHome && (
      <div
        className="info-top-bar flex items-center justify-between"
        style={{
          margin: "8px 20px",
          padding: "0 24px",
          height: "40px",
          fontSize: "14px",
          fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
          color: mutedColor,
          fontWeight: 500,
          border: `1px solid ${isTransparent ? "rgba(255,255,255,0.25)" : "#e6e8ea"}`,
          borderRadius: "15px",
          transition: "border-color 0.3s ease, color 0.3s ease",
        }}
      >
        <span className="info-top-email" style={{ padding: "0 20px" }}>
          Email:{" "}
          <a
            href="mailto:contact@biostate.ai"
            className="hover:!text-[#45D0BD] transition-colors"
            style={{
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              fontSize: "14px",
              lineHeight: "1.875em",
              fontWeight: 500,
              letterSpacing: "0em",
              color: textColor,
              transition: "color 0.3s ease",
            }}
          >
            contact@biostate.ai
          </a>
        </span>
        <div className="info-top-social flex items-center gap-4" style={{ padding: "0 20px" }}>
          <span className="info-top-follow-label">Follow us:</span>
          <a href="https://www.facebook.com/people/Biostate-AI/61562900021094/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:!text-[#45D0BD] transition-colors" style={{ color: textColor, transition: "color 0.3s ease" }}>
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/biostate.ai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:!text-[#45D0BD] transition-colors" style={{ color: textColor, transition: "color 0.3s ease" }}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="https://x.com/biostateai" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:!text-[#45D0BD] transition-colors" style={{ color: textColor, transition: "color 0.3s ease" }}>
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/biostate-ai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:!text-[#45D0BD] transition-colors" style={{ color: textColor, transition: "color 0.3s ease" }}>
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>
      )}

      {/* Main Header */}
      <header
        className={`${isHome ? "" : "sticky top-0 z-50"} ${!isTransparent ? "bg-white" : ""} ${scrolled ? "header-slide-down" : ""}`}
        style={{
          ...(isHome ? {
            position: scrolled ? "fixed" : "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            transition: "background-color 0.3s ease",
          } : undefined),
          ...(scrolled ? {
            width: "calc(100% - 40px)",
            margin: "0 auto",
            borderRadius: "0 0 25px 25px",
            boxShadow: "0px 5px 23px 4px rgba(0, 0, 0, 0.1)",
          } : undefined),
        }}
      >
        <div className="flex items-center justify-between" style={{ height: "105px", padding: "0 40px 0 64px" }}>
          {/* Menu icon + Logo */}
          <div className="flex items-center gap-8">
            {/* Menu grid icon */}
            <button
              aria-label="Menu"
              className="hidden lg:block cursor-pointer relative"
              style={{ width: 20, height: 20 }}
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
                style={{
                  opacity: menuHovered ? 0 : 1,
                  filter: isTransparent ? "brightness(0) invert(1)" : undefined,
                  transition: "opacity 0.5s, filter 0.3s ease",
                }}
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
                style={{
                  height: "28px",
                  width: "auto",
                  filter: isTransparent ? "brightness(0) invert(1)" : undefined,
                  transition: "filter 0.3s ease",
                }}
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center" style={{ gap: "5px" }}>
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-tab transition-all ${
                    isActive
                      ? ""
                      : isTransparent ? "home-nav-hover" : "hover:bg-[#F0F2F4]"
                  }`}
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "1.5em",
                    letterSpacing: "0em",
                    textTransform: "uppercase" as const,
                    borderRadius: "10px",
                    padding: "10px 20px",
                    backgroundColor: isActive ? "#1f1f1f" : undefined,
                    color: isActive
                      ? "#ffffff"
                      : (isTransparent ? "#ffffff" : "#1f1f1f"),
                    transition: "color 0.3s ease, background-color 0.3s ease",
                  }}
                >
                  <span className="nav-tab-text">
                    <span>{item.label}</span>
                    <span>{item.label}</span>
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <Link
            href="/get-quote"
            className={`get-quote-btn hidden lg:inline-flex rounded-full${pathname === "/rna" ? " get-quote-btn-rna" : ""}${isTransparent ? " get-quote-btn-transparent" : ""}`}
            style={{
              color: isTransparent ? "#ffffff" : "#1f1f1f",
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "normal",
              transition: "color 0.3s ease",
            }}
          >
            <span className="get-quote-inner">{pathname === "/rna" ? "Get Quote" : "Get in Touch"}</span>
          </Link>

          {/* Hamburger (mobile) - right side */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{ color: isTransparent ? "#ffffff" : "#1f1f1f" }}
          >
            <span className="block w-6 h-0.5 bg-current" />
            <span className="block w-6 h-0.5 bg-current" />
            <span className="block w-6 h-0.5 bg-current" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className="lg:hidden fixed inset-0 z-[100]"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu Panel (from right) */}
      <div
        className="lg:hidden fixed top-0 right-0 z-[101] h-full"
        style={{
          width: "75vw",
          maxWidth: 380,
          background: "#ffffff",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        {/* Close button */}
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "20px 24px 0" }}>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{ background: "none", border: "none", cursor: "pointer", color: "#1f1f1f" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ padding: "32px 40px", display: "flex", flexDirection: "column", gap: 8 }}>
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  textTransform: "uppercase" as const,
                  color: isActive ? "#45D0BD" : "#1f1f1f",
                  textDecoration: "none",
                  padding: "8px 0",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Divider */}
        <div style={{ margin: "0 40px", borderTop: "1px solid #e0e0e0" }} />

        {/* Contacts */}
        <div style={{ padding: "32px 40px", flex: 1 }}>
          <p style={{
            fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
            fontSize: 12,
            fontWeight: 700,
            color: "#919191",
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            marginBottom: 12,
          }}>CONTACTS</p>
          <a
            href="mailto:contact@biostate.ai"
            style={{
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              fontSize: 15,
              fontWeight: 400,
              color: "#1f1f1f",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            contact@biostate.ai
          </a>

          {/* Follow us */}
          <p style={{
            fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
            fontSize: 12,
            fontWeight: 700,
            color: "#919191",
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            marginTop: 32,
            marginBottom: 16,
          }}>FOLLOW US:</p>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="https://www.facebook.com/people/Biostate-AI/61562900021094/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: "#1f1f1f" }}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/biostate.ai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "#1f1f1f" }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://x.com/biostateai" target="_blank" rel="noopener noreferrer" aria-label="X" style={{ color: "#1f1f1f" }}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/biostate-ai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "#1f1f1f" }}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>

          {/* Get in Touch button */}
          <div style={{ marginTop: 40 }}>
            <Link
              href="/get-quote"
              onClick={() => setMobileOpen(false)}
              className="get-quote-btn inline-flex rounded-full"
              style={{
                color: "#1f1f1f",
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              <span className="get-quote-inner">Get in Touch</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scrolling Marquee Banner - Only on RNA page */}
      {pathname === "/rna" && (
        <div
          className="w-full overflow-hidden"
          style={{
            background: "linear-gradient(90deg, #45d0bd, #44b6e9)",
            padding: "10px 0",
          }}
        >
          <div
            className="flex whitespace-nowrap"
            style={{
              animation: "marquee 8s linear infinite",
            }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="text-white text-sm font-semibold"
                style={{ fontFamily: "'Manrope', Arial, Helvetica, sans-serif", paddingRight: "8vw" }}
              >
                {marqueeText}
              </span>
            ))}
          </div>
        </div>
      )}
      {/* end header area */}

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

      {/* Side Panel - uses uploaded Side panel.svg as background */}
      <div
        className="fixed top-0 left-0 z-[101] h-full"
        style={{
          /* SVG aspect ratio: 460/945 ≈ 0.4868, so width = height * 0.4868 */
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

        {/* Close button overlay on the right strip (85.2% to 100% = 392-460 of SVG) */}
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
