"use client";

export default function AISection3() {
  return (
    <section
      style={{
        fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
        padding: "120px 0",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="container">
        <div
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
        >
          {/* Left - Text Content */}
          <div className="w-full lg:w-1/2">
            {/* Tag */}
            <p
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#333",
                marginBottom: "16px",
                opacity: 0.7,
              }}
            >
              [ technology ]
            </p>

            {/* Heading */}
            <h2
              style={{
                fontSize: "clamp(36px, 4vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "#000000",
                margin: "0 0 32px 0",
              }}
            >
              K-Dense AI advancing biology through autonomous discovery
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: "17px",
                fontWeight: 600,
                lineHeight: 1.8,
                color: "#333",
                margin: "0 0 32px 0",
                maxWidth: "560px",
              }}
            >
              Biostate&apos;s flagship AI system designed to autonomously analyze
              omics data, generate hypotheses, and summarize biological
              discoveries.
            </p>

            {/* Feature List */}
            <ul
              role="list"
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 48px 0",
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "16px",
                lineHeight: "1.875em",
                fontWeight: 500,
                color: "#333333",
              }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  marginBottom: "8px",
                }}
              >
                <span style={{ color: "#45d0bd", fontSize: "18px", flexShrink: 0 }}>↘</span>
                Discovered novel RNA biomarkers of aging
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <span style={{ color: "#45d0bd", fontSize: "18px", flexShrink: 0 }}>↘</span>
                Performs literature review, feature selection, and manuscript
                drafting autonomously
              </li>
            </ul>

            {/* CTA Button */}
            <a
              href="https://k-dense.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="book-a-call-btn book-a-call-btn-solid-teal"
            >
              Check out K-Dense
              <span className="book-a-call-arrow">
                <span className="book-a-call-arrow-inner">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
            </a>
          </div>

          {/* Right - Chart Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/K-Dense_data.svg"
              alt="AI Data Analysis and Interpretation - BixBench"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "560px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
