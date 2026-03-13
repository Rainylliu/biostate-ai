"use client";

export default function AISection5() {
  return (
    <>
      {/* ── Scrolling Banner ── */}
      <section
        className="s4-diagonal-banner"
        style={{
          transform: "rotate(-2.07deg)",
          backgroundImage: "linear-gradient(135deg, #45d0bd 0%, #44b6e9 100%)",
          margin: "40px -5px 0px -5px",
          padding: "50px 0px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="marquee-banner">
          <div className="marquee-banner-track">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="marquee-banner-text">
                /N-Act AI multi-omics intelligence model for precise and
                clinically actionable insights&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── N-Act AI Card ── */}
      <section
        style={{
          fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
          marginTop: "80px",
        }}
      >
        <div className="container">
          <div
            style={{
              position: "relative",
              backgroundColor: "#1F1F1F",
              borderRadius: "25px",
              padding: "60px 20px 20px",
            }}
          >
            {/* Tilted top piece */}
            <div
              className="rna-tilted-top"
              style={{
                position: "absolute",
                top: "-60px",
                left: "0",
                width: "100.1%",
                height: "140px",
                backgroundColor: "#1F1F1F",
                transform: "rotate(-2.0deg)",
                transformOrigin: "bottom center",
                zIndex: 0,
                borderRadius: "25px 25px 0 0",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Top section - Tag, Heading, Description */}
              <div style={{ maxWidth: "800px", marginBottom: "56px" }}>
                {/* Tag */}
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#ffffff",
                    marginBottom: "16px",
                    opacity: 0.7,
                  }}
                >
                  [ flagship AI ]
                </p>

                {/* Heading */}
                <h2
                  style={{
                    fontSize: "clamp(48px, 5vw, 72px)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    color: "#ffffff",
                    margin: "0 0 24px 0",
                  }}
                >
                  N-Act AI
                </h2>

                {/* Description */}
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: 400,
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.75)",
                    margin: 0,
                    maxWidth: "680px",
                  }}
                >
                  K-Dense conducts complete scientific research from hypothesis
                  to publication with minimal human intervention
                </p>
              </div>

              {/* Feature Items */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "48px",
                  maxWidth: "800px",
                }}
              >
                {/* Feature 1 - icon1 */}
                <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/icon1.svg"
                    alt="AI-driven Discovery"
                    style={{ width: "64px", height: "64px", flexShrink: 0 }}
                  />
                  <div>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#ffffff",
                        margin: "0 0 8px 0",
                      }}
                    >
                      AI-driven Discovery
                    </h4>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: 400,
                        lineHeight: 1.7,
                        color: "rgba(255,255,255,0.7)",
                        margin: 0,
                        maxWidth: "600px",
                      }}
                    >
                      Detects molecular signatures across DNA, RNA, and proteins to
                      reveal hidden disease mechanisms.
                    </p>
                  </div>
                </div>

                {/* Feature 2 - icon2 */}
                <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/icon2.svg"
                    alt="Predictive Modeling"
                    style={{ width: "64px", height: "64px", flexShrink: 0 }}
                  />
                  <div>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#ffffff",
                        margin: "0 0 8px 0",
                      }}
                    >
                      Predictive Modeling
                    </h4>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: 400,
                        lineHeight: 1.7,
                        color: "rgba(255,255,255,0.7)",
                        margin: 0,
                        maxWidth: "600px",
                      }}
                    >
                      Learns patient-specific patterns to forecast disease risks and
                      treatment responses.
                    </p>
                  </div>
                </div>

                {/* Feature 3 - icon4 */}
                <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/icon4.svg"
                    alt="Explainable Insights"
                    style={{ width: "64px", height: "64px", flexShrink: 0 }}
                  />
                  <div>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#ffffff",
                        margin: "0 0 8px 0",
                      }}
                    >
                      Explainable Insights
                    </h4>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: 400,
                        lineHeight: 1.7,
                        color: "rgba(255,255,255,0.7)",
                        margin: 0,
                        maxWidth: "600px",
                      }}
                    >
                      Generates interpretable models — making biological decisions
                      transparent and reproducible.
                    </p>
                  </div>
                </div>
              </div>

              {/* N-Act SVG */}
              <div style={{ marginTop: "60px", display: "flex", justifyContent: "center" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/N-act.svg"
                  alt="N-Act AI"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "900px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
