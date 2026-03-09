"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-full transition-colors hover:bg-[#f0f2f4]"
            style={{
              height: "44px",
              padding: "0 24px",
              border: "1px solid #1f1f1f",
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "#1f1f1f",
            }}
          >
            Contact expert
          </Link>
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
  );
}
