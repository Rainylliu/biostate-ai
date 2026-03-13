"use client";

import { useState } from "react";
import { newsItems } from "@/data/newsItems";

const PER_PAGE = 9;

export default function NewsGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(newsItems.length / PER_PAGE);
  const safePage = Math.min(currentPage, totalPages);
  const pageItems = newsItems.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById("news-grid-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="news-grid-section"
      style={{ padding: "60px 0 80px", maxWidth: "1340px", margin: "0 auto", paddingLeft: "20px", paddingRight: "20px" }}
    >
      <div
        className="news-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "40px",
        }}
      >
        {pageItems.map((item, index) => (
          <article key={index} style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", borderRadius: "16px", overflow: "hidden", position: "relative" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  transition: "transform 0.3s ease",
                }}
                className="news-card-img"
              />
              <span
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "12px",
                  background: "rgba(255,255,255,0.9)",
                  borderRadius: "20px",
                  padding: "6px 16px",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#666",
                }}
              >
                {item.date}
              </span>
            </a>

            <div style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              padding: "0 20px 24px",
              borderLeft: "1px solid #656565",
              borderRight: "1px solid #656565",
              borderBottom: "1px solid #656565",
              borderRadius: "0 0 20px 20px",
            }}>
              <h4 style={{ margin: "20px 0 12px", fontSize: "18px", fontWeight: 600, lineHeight: 1.4, color: "#1a1a1a" }}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-title-link"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {item.title}
                </a>
              </h4>

              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#666", margin: "0 0 16px", flex: 1 }}>
                {item.excerpt}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="news-read-more"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#1a1a1a",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
              <span>Read More</span>
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 1l6 6-6 6" />
              </svg>
            </a>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div
          className="pub-pagination"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            marginTop: 48,
          }}
        >
          {safePage > 1 && (
            <button
              onClick={() => handlePageChange(safePage - 1)}
              className="advisor-page-btn advisor-page-nav advisor-nav-prev"
              style={{
                height: 40,
                padding: "0 14px",
                borderRadius: 10,
                border: "1px solid #8258c8",
                background: "#ffffff",
                color: "#333",
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                transition: "background 0.3s ease, color 0.3s ease",
              }}
            >
              Previous
              <span className="advisor-nav-arrow">
                <span className="advisor-nav-arrow-inner">
                  <svg width="16" height="16" viewBox="0 0 22 22" fill="none" style={{ transform: "scaleX(-1)" }}>
                    <path d="M6 16L16 6M16 6H7M16 6V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 22 22" fill="none" style={{ transform: "scaleX(-1)" }}>
                    <path d="M6 16L16 6M16 6H7M16 6V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
            </button>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => handlePageChange(p)}
              className="advisor-page-btn"
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                border: p === safePage ? "none" : "1px solid #8258c8",
                background: p === safePage ? "linear-gradient(135deg, #8258c8, #2c84c8)" : "#ffffff",
                color: p === safePage ? "#ffffff" : "#333",
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
              }}
            >
              {p}
            </button>
          ))}

          {safePage < totalPages && (
            <button
              onClick={() => handlePageChange(safePage + 1)}
              className="advisor-page-btn advisor-page-nav"
              style={{
                height: 40,
                padding: "0 14px",
                borderRadius: 10,
                border: "1px solid #8258c8",
                background: "#ffffff",
                color: "#333",
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                transition: "background 0.3s ease, color 0.3s ease",
              }}
            >
              Next
              <span className="advisor-nav-arrow">
                <span className="advisor-nav-arrow-inner">
                  <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
                    <path d="M6 16L16 6M16 6H7M16 6V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
                    <path d="M6 16L16 6M16 6H7M16 6V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
            </button>
          )}
        </div>
      )}
    </section>
  );
}
