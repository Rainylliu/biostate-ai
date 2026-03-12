"use client";

import { useState, useEffect } from "react";
import WaveReveal from "./WaveReveal";

export interface Publication {
  url: string;
  categories: string[];
  title: string;
  journal: string;
  date: string;
  year: number;
}

type SortKey = "newest" | "oldest" | "title_az" | "title_za" | "journal_az" | "journal_za";

function sortItems(items: Publication[], sort: SortKey): Publication[] {
  const copy = [...items];
  switch (sort) {
    case "newest":     return copy.sort((a, b) => b.year - a.year);
    case "oldest":     return copy.sort((a, b) => a.year - b.year);
    case "title_az":   return copy.sort((a, b) => a.title.localeCompare(b.title));
    case "title_za":   return copy.sort((a, b) => b.title.localeCompare(a.title));
    case "journal_az": return copy.sort((a, b) => a.journal.localeCompare(b.journal));
    case "journal_za": return copy.sort((a, b) => b.journal.localeCompare(a.journal));
    default: return copy;
  }
}

function usePerPage(desktopCount: number) {
  const [perPage, setPerPage] = useState(desktopCount);
  useEffect(() => {
    const update = () => setPerPage(window.innerWidth <= 768 ? 4 : desktopCount);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [desktopCount]);
  return perPage;
}

interface PublicationsListProps {
  items: Publication[];
  title: string;
  subtitle: string;
  id: string;
  desktopPerPage?: number;
}

export default function PublicationsList({ items, title, subtitle, id, desktopPerPage = 6 }: PublicationsListProps) {
  const [currentSort, setCurrentSort] = useState<SortKey>("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = usePerPage(desktopPerPage);

  const sorted = sortItems(items, currentSort);
  const totalPages = Math.ceil(sorted.length / perPage);
  const safePage = Math.min(currentPage, totalPages);
  const pageItems = sorted.slice((safePage - 1) * perPage, safePage * perPage);

  const handleSortChange = (value: string) => {
    setCurrentSort(value as SortKey);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Header + Sort Bar */}
      <div id={id} className="pub-section-header">
        <div>
          <WaveReveal
            text={title}
            as="h2"
            className="pub-featured-title"
            style={{
              fontFamily: "'Sora', Arial, Helvetica, sans-serif",
              fontSize: 40,
              fontWeight: 600,
              color: "#111",
              margin: "0 0 12px 0",
              lineHeight: 1.15,
            }}
          />
          <p
            className="pub-featured-subtitle"
            style={{
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              fontSize: 16,
              fontWeight: 400,
              color: "#555",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
        </div>
        <div className="pub-filter-group">
          <div className="pub-filter-label">SORT BY</div>
          <select
            className="pub-sort-select"
            value={currentSort}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="title_az">Title A–Z</option>
            <option value="title_za">Title Z–A</option>
            <option value="journal_az">Journal A–Z</option>
            <option value="journal_za">Journal Z–A</option>
          </select>
        </div>
      </div>

      {/* Publication List */}
      <div className="pub-list">
        {pageItems.map((item, idx) => (
          <div key={idx} className="pub-item">
            <div className="pub-item-categories">
              {item.categories.map((cat, ci) => (
                <span key={ci} className="pub-category-tag">{cat}</span>
              ))}
            </div>
            <h3 className="pub-item-title">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </h3>
            <p className="pub-item-meta">
              {item.journal}{item.date ? `\uFF5C${item.date}` : ""}
            </p>
            <span className="pub-read-more">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <span className="pub-cta-arrow pub-cta-arrow-left">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M4 1h9v9M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="pub-cta-text">Read Full Article</span>
                <span className="pub-cta-arrow pub-cta-arrow-right">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M4 1h9v9M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </span>
          </div>
        ))}
      </div>

      {/* Pagination — same style as advisor grid */}
      {totalPages > 1 && (
        <div
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
    </div>
  );
}
