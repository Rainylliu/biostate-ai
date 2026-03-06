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
    <header
      className={`fixed top-[10px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1400px] transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      style={{ borderRadius: "25px" }}
    >
      <div className="flex items-center justify-between px-6 py-4">
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

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            className="text-xl font-bold font-heading tracking-tight"
            style={{ color: "#111111" }}
          >
            biostate<span className="text-accent">.</span>AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${
                pathname === item.href
                  ? "text-accent"
                  : "text-text hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/get-quote"
          className="hidden lg:inline-flex items-center px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors"
        >
          Get Quote
        </Link>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white rounded-b-[25px] px-6 pb-6 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-semibold tracking-wide border-b border-brand-75 ${
                pathname === item.href
                  ? "text-accent"
                  : "text-text hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/get-quote"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block text-center px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg"
          >
            Get Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
