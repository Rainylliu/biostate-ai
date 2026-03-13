"use client";

export default function AISection4() {
  return (
    <section
      style={{
        fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
        padding: "120px 0",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="container">
        {/* === Aging Sub-section === */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start mb-12 lg:mb-8">
          {/* Left - Title */}
          <div className="w-full lg:w-1/2">
            <h2
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#000000",
                margin: 0,
              }}
            >
              World&apos;s Best
              <br />
              Measure of{" "}
              <span style={{ color: "#45d0bd" }}>Aging</span>
            </h2>
          </div>
          {/* Right - Description + Button */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start" style={{ paddingTop: "8px" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "#333",
                margin: "0 0 24px 0",
                maxWidth: "480px",
              }}
            >
              Collaborating with David Sinclair from Harvard Medical School, we
              developed the world&apos;s best model for predicting age and uncovered
              novel science, including the discovery of 4 new RNA biomarkers of
              aging.
            </p>
            <a
              href="#"
              className="book-a-call-btn book-a-call-btn-solid-teal"
              style={{ alignSelf: "flex-start" }}
            >
              Read the paper
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
        </div>

        {/* Aging Images Row */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* David Sinclair Photo */}
          <div className="w-full lg:w-5/12 relative" style={{ minHeight: "400px" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/David Sinclair.png"
                alt="David Sinclair"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  minHeight: "400px",
                }}
              />
              {/* Quote overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "24px",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                }}
              >
                <p
                  style={{
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: 1.6,
                    margin: 0,
                    maxWidth: "260px",
                  }}
                >
                  &ldquo; K-Dense has discovered novel science, including 4 new RNA
                  biomarkers of aging. &rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Aging Chart */}
          <div className="w-full lg:w-7/12 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Aging.png"
              alt="Aging biomarkers chart - Chronological Age vs Genes"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "640px",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>

        {/* === Drug Lead Sub-section === */}
        <div
          className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start"
          style={{ marginTop: "120px" }}
        >
          {/* Left - Title */}
          <div className="w-full lg:w-1/2">
            <h2
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#000000",
                margin: 0,
              }}
            >
              Fast and Novel{" "}
              <span style={{ color: "#45d0bd" }}>Drug
              <br />
              Lead</span>{" "}
              Discovery
            </h2>
          </div>
          {/* Right - Description */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start" style={{ paddingTop: "8px" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "#333",
                margin: 0,
                maxWidth: "480px",
              }}
            >
              Collaborating with Swamy Vijayan, CEO of Zafrens, we accelerated
              three months of work into just four days with K-Dense and uncovered
              previously unrecognized cell-state patterns linked to compound
              response.
            </p>
          </div>
        </div>

        {/* Drug Lead Images Row */}
        <div
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch"
          style={{ marginTop: "48px" }}
        >
          {/* Drug Lead Chart */}
          <div className="w-full lg:w-7/12 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Drug Lead.png"
              alt="Top 10 Compounds in PC1-PC2 Space"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "640px",
                borderRadius: "12px",
              }}
            />
          </div>

          {/* Swamy Vijayan Photo */}
          <div className="w-full lg:w-5/12 relative" style={{ minHeight: "400px" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Swamy Vijayan.png"
                alt="Swamy Vijayan"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  minHeight: "400px",
                }}
              />
              {/* Quote overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "24px",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                }}
              >
                <p
                  style={{
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: 1.6,
                    margin: 0,
                    maxWidth: "280px",
                    marginLeft: "auto",
                    textAlign: "right",
                  }}
                >
                  &ldquo; From our data, K-Dense found 2 out of our 3 lead drug
                  candidates, and we are very excited to experimentally test the
                  novel hit. &rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
