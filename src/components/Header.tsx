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

  return (
    <>
      {/* Top Info Bar */}
      <div
        className="mx-8 mt-4 mb-2 py-4 px-10 flex items-center justify-between"
        style={{ borderRadius: "15px", border: "1px solid #e0e0e0", color: "#7e7e7e", fontSize: "14px" }}
      >
        <span>
          Email:{" "}
          <a
            href="mailto:contact@biostate.ai"
            className="font-semibold hover:text-accent transition-colors"
            style={{ color: "#111" }}
          >
            contact@biostate.ai
          </a>
        </span>
        <div className="flex items-center gap-5">
          <span style={{ color: "#b0b0b0" }}>Follow us:</span>
          <a href="#" aria-label="Facebook" className="hover:text-text transition-colors" style={{ color: "#555" }}>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-text transition-colors" style={{ color: "#555" }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="#" aria-label="X" className="hover:text-text transition-colors" style={{ color: "#555" }}>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-text transition-colors" style={{ color: "#555" }}>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 mx-8 mb-4 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white"
        }`}
        style={{ borderRadius: "50px", border: "1px solid #e0e0e0" }}
      >
        <div className="flex items-center justify-between px-10 py-5">
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
          <Link href="/" className="flex items-center gap-4">
            {/* Grid icon */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-text">
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
          <nav className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-6 py-2.5 text-[15px] font-semibold tracking-wide transition-all rounded-full ${
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
            className="hidden lg:inline-flex items-center justify-center text-[15px] font-semibold text-text rounded-full hover:border-text hover:bg-brand-50 transition-all"
            style={{ padding: "14px 40px", border: "1px solid #d0d0d0" }}
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
