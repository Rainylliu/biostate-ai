"use client";

import { useState, useEffect } from "react";

interface Advisor {
  name: string;
  institution: string;
  specialty: string;
  image: string;
}

const advisors: Advisor[] = [
  { name: "George Church", institution: "Harvard Med School", specialty: "NGS Tech", image: "/images/George Church.svg" },
  { name: "Robert Sanchez", institution: "HCA Florida Heart Inst", specialty: "Heart Disease", image: "/images/Robert Sanchez.svg" },
  { name: "Abhijit Patel", institution: "Yale Med School", specialty: "Lung Cancer", image: "/images/Abhijit Patel.svg" },
  { name: "Ghayas Issa", institution: "MD Anderson", specialty: "Leukemia", image: "/images/Ghayas Issa.svg" },
  { name: "Juan Cata", institution: "MD Anderson", specialty: "Chronic Pain", image: "/images/Juan Cata.svg" },
  { name: "Peter Dedon", institution: "MIT", specialty: "RNA Epigenetics", image: "/images/Peter Dedon.svg" },
  { name: "Sarah Elsea", institution: "Baylor College of Med.", specialty: "Inherited Diseases", image: "/images/Sarah Elsea.svg" },
  { name: "Fernando Santacruz", institution: "Houston Methodist", specialty: "COPD", image: "/images/Fernando Santacruz.svg" },
  { name: "Stanley Hazen", institution: "Cleveland Clinic", specialty: "Cardiovascular Disease", image: "/images/Stanley Hazen.svg" },
  { name: "Keith Flaherty", institution: "Massachusetts General Hospital", specialty: "Melanoma", image: "/images/Keith Flaherty.svg" },
  { name: "Yuzhang Wu", institution: "Chinese Acad. of Engr.", specialty: "Autoimmune Diseases", image: "/images/Yuzhang Wu.svg" },
  { name: "Xi Zhang", institution: "Xingqiao Hospital", specialty: "Blood Disorders", image: "/images/Xi Zhang.svg" },
  { name: "Arvind Kasaragod", institution: "Cloud 9 Hospitals", specialty: "Pediatric Diseases", image: "/images/Arvind Kasaragod.svg" },
];

type Breakpoint = "desktop" | "tablet" | "mobile";

function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>("desktop");
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w <= 768) setBp("mobile");
      else if (w <= 1024) setBp("tablet");
      else setBp("desktop");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return bp;
}

export default function AdvisorGrid() {
  const bp = useBreakpoint();
  const [page, setPage] = useState(1);

  // Desktop: show all, no pagination
  // Tablet: 3 per row, 9 per page (3 rows)
  // Mobile: 1 per row, 3 per page
  const perPage = bp === "desktop" ? advisors.length : bp === "tablet" ? 9 : 3;
  const totalPages = Math.ceil(advisors.length / perPage);
  const cols = bp === "desktop" ? 5 : bp === "tablet" ? 3 : 1;

  // Reset page when breakpoint changes
  useEffect(() => {
    setPage(1);
  }, [bp]);

  const start = (page - 1) * perPage;
  const visible = advisors.slice(start, start + perPage);

  return (
    <div>
      {/* Grid */}
      <div
        className="advisor-grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: bp === "mobile" ? "24px" : "20px 20px",
        }}
      >
        {visible.map((a) => (
          <div
            key={a.name}
            style={{
              background: "#ffffff",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              border: "1px solid #e8e8e8",
            }}
          >
            {/* Image */}
            <div
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                overflow: "hidden",
                background: "#f5f5f5",
              }}
            >
              <img
                src={a.image}
                alt={a.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            {/* Info */}
            <div style={{ padding: "16px 16px 20px" }}>
              <p
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#111",
                  margin: "0 0 6px 0",
                  lineHeight: 1.3,
                }}
              >
                {a.name}
              </p>
              <p
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: 13,
                  fontWeight: 400,
                  color: "#666",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                / {a.institution} /<br />
                {a.specialty}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination — only on tablet/mobile */}
      {totalPages > 1 && (
        <div
          className="advisor-pagination"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            marginTop: 40,
          }}
        >
          {/* Previous — hidden on first page */}
          {page > 1 && (
            <button
              onClick={() => setPage((p) => p - 1)}
              className="advisor-page-btn advisor-page-nav"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 20px",
                borderRadius: 10,
                border: "1px solid #8258c8",
                background: "#ffffff",
                color: "#333",
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              Previous
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: "rotate(180deg)" }}>
                <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className="advisor-page-btn"
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                border: p === page ? "none" : "1px solid #8258c8",
                background: p === page ? "linear-gradient(135deg, #8258c8, #2c84c8)" : "#ffffff",
                color: p === page ? "#ffffff" : "#333",
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: 14,
                fontWeight: 600,
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

          {/* Next — hidden on last page */}
          {page < totalPages && (
            <button
              onClick={() => setPage((p) => p + 1)}
              className="advisor-page-btn advisor-page-nav"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 20px",
                borderRadius: 10,
                border: "1px solid #8258c8",
                background: "#ffffff",
                color: "#333",
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              Next
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
