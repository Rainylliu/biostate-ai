"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const marqueeText = "RNA-seq starting from $60 per sample";

  return (
    <>
      {/* Scrolling Marquee Banner - TOP */}
      <div
        className="w-full overflow-hidden"
        style={{
          backgroundColor: "#45d0bd",
          padding: "10px 0",
        }}
      >
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "marquee 20s linear infinite",
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="text-white text-sm font-semibold mx-12"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* Top Info Bar */}
      <div
        className="flex items-center justify-between"
        style={{
          margin: "0 20px",
          padding: "4px 20px 5px",
          fontSize: "14px",
          fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
          color: "#919191",
          borderBottom: "1px solid #e6e8ea",
          borderRadius: "0 0 25px 25px",
        }}
      >
        <span>
          Email:{" "}
          <a
            href="mailto:contact@biostate.ai"
            className="hover:text-text transition-colors"
            style={{ fontWeight: 700, color: "#333" }}
          >
            contact@biostate.ai
          </a>
        </span>
        <div className="flex items-center gap-4">
          <span>Follow us:</span>
          <a href="#" aria-label="Facebook" className="text-brand-400 hover:text-text transition-colors">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="text-brand-400 hover:text-text transition-colors">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="#" aria-label="X" className="text-brand-400 hover:text-text transition-colors">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="text-brand-400 hover:text-text transition-colors">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 mx-6 mt-1 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white"
        }`}
        style={{ borderRadius: "50px", border: "1px solid #e6e8ea" }}
      >
        <div className="flex items-center justify-between px-8 py-4">
          {/* Hamburger (mobile) */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-transform ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-transform ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Logo with grid icon */}
          <Link href="/" className="flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-text">
              <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: "'Sora', sans-serif", color: "#111" }}>
              bios<span style={{ letterSpacing: "-0.02em" }}>t</span>ate.AI
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-6 py-2.5 text-sm font-semibold tracking-wide transition-all rounded-full ${
                    isActive
                      ? "bg-brand-950 text-white"
                      : "text-text hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <Link
            href="/get-quote"
            className="hidden lg:inline-flex items-center px-10 py-3.5 border border-brand-200 text-text text-base font-semibold rounded-full hover:border-text hover:bg-brand-50 transition-all"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden bg-white rounded-b-[25px] px-6 pb-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 text-sm font-semibold tracking-wide border-b border-brand-75 ${
                    isActive
                      ? "text-primary"
                      : "text-text hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/get-quote"
              onClick={() => setMobileOpen(false)}
              className="mt-4 block text-center px-5 py-2.5 border border-brand-75 text-text text-sm font-semibold rounded-full"
            >
              Get Quote
            </Link>
          </nav>
        )}
      </header>

    </>
  );
}
