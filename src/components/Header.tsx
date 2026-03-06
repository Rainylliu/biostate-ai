"use client";

import Link from "next/link";
import Image from "next/image";
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
  const [menuHovered, setMenuHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const marqueeText = "RNA-seq starting from $60 per sample";

  return (
    <>
      {/* Top Info Bar */}
      <div
        className="flex items-center justify-between"
        style={{
          margin: "8px 20px",
          padding: "0 24px",
          height: "40px",
          fontSize: "14px",
          fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
          color: "#919191",
          fontWeight: 500,
          border: "1px solid #e6e8ea",
          borderRadius: "15px",
        }}
      >
        <span style={{ padding: "0 20px" }}>
          Email:{" "}
          <a
            href="mailto:contact@biostate.ai"
            className="hover:!text-[#45D0BD] transition-colors"
            style={{ fontWeight: 500, color: "#1f1f1f" }}
          >
            contact@biostate.ai
          </a>
        </span>
        <div className="flex items-center gap-4" style={{ padding: "0 20px" }}>
          <span>Follow us:</span>
          <a href="#" aria-label="Facebook" className="hover:!text-[#45D0BD] transition-colors" style={{ color: "#1f1f1f" }}>
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:!text-[#45D0BD] transition-colors" style={{ color: "#1f1f1f" }}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="#" aria-label="X" className="hover:!text-[#45D0BD] transition-colors" style={{ color: "#1f1f1f" }}>
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:!text-[#45D0BD] transition-colors" style={{ color: "#1f1f1f" }}>
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white"
        }`}
      >
        <div className="flex items-center justify-between" style={{ height: "105px", padding: "0 40px 0 64px" }}>
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

          {/* Menu icon + Logo */}
          <div className="flex items-center gap-8">
            {/* Menu grid icon */}
            <button
              aria-label="Menu"
              className="hidden lg:block cursor-pointer relative"
              style={{ width: 20, height: 20 }}
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
                src="/images/Logo_black.svg"
                alt="biostate.AI"
                style={{ height: "28px", width: "auto" }}
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold tracking-wider transition-all px-5 py-2.5 ${
                    isActive
                      ? "bg-[#1f1f1f] text-white"
                      : "text-[#1f1f1f] hover:bg-[#93c5fd80]"
                  }`}
                  style={{ fontFamily: "'Manrope', sans-serif", borderRadius: "10px" }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <Link
            href="/get-quote"
            className="hidden lg:inline-flex items-center justify-center text-sm font-semibold rounded-full transition-all hover:bg-[#f0fdfb]"
            style={{
              border: "1.5px solid #45D0BD",
              color: "#1f1f1f",
              fontFamily: "'Manrope', sans-serif",
              padding: "12px 40px",
              minWidth: "160px",
            }}
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

      {/* Scrolling Marquee Banner - Below Nav */}
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

    </>
  );
}
