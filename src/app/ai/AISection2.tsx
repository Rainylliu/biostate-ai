"use client";

export default function AISection2() {
  return (
    <>
      {/* ── Scrolling Banner ── */}
      <section
        className="s4-diagonal-banner"
        style={{
          transform: "rotate(-2.07deg)",
          backgroundImage: "linear-gradient(135deg, #8258c8 0%, #2c84c8 100%)",
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
                /K-Dense AI advancing scientific breakthrough through autonomous
                AI model&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── K-Dense AI Card ── */}
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
              padding: "20px",
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
            <div
              className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center"
              style={{ position: "relative", zIndex: 1 }}
            >
              {/* Left - K-Dense Image */}
              <div className="w-full lg:w-1/2 flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/K-dense_ai.png"
                  alt="K-Dense AI Platform"
                  style={{
                    width: "80%",
                    height: "auto",
                    borderRadius: "16px",
                  }}
                />
              </div>

              {/* Right - Text Content */}
              <div className="w-full lg:w-1/2" style={{ padding: "20px 0" }}>
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
                  K-Dense AI
                </h2>

                {/* Description */}
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: 400,
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.75)",
                    margin: "0 0 48px 0",
                    maxWidth: "520px",
                  }}
                >
                  K-Dense conducts complete scientific research from hypothesis
                  to publication with minimal human intervention
                </p>

                {/* Feature Items */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                  }}
                >
                  {/* Feature 1 - icon1 */}
                  <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/icon1.svg"
                      alt="Broad Tool Usage"
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
                        Broad Tool Usage
                      </h4>
                      <p
                        style={{
                          fontSize: "15px",
                          fontWeight: 400,
                          lineHeight: 1.7,
                          color: "rgba(255,255,255,0.7)",
                          margin: 0,
                          maxWidth: "460px",
                        }}
                      >
                        Integrates 20+ bioinformatics and chemistry programs
                        directly into reasoning.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 - icon5 */}
                  <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/icon5.svg"
                      alt="Think with Reflexion"
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
                        Think with Reflexion
                      </h4>
                      <p
                        style={{
                          fontSize: "15px",
                          fontWeight: 400,
                          lineHeight: 1.7,
                          color: "rgba(255,255,255,0.7)",
                          margin: 0,
                          maxWidth: "460px",
                        }}
                      >
                        Validates each step through self-check and correction
                        cycles, refining hypotheses and catching errors early for
                        more reliable scientific reasoning.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 - icon4 */}
                  <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/icon4.svg"
                      alt="Write Like Scientists"
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
                        Write Like Scientists
                      </h4>
                      <p
                        style={{
                          fontSize: "15px",
                          fontWeight: 400,
                          lineHeight: 1.7,
                          color: "rgba(255,255,255,0.7)",
                          margin: 0,
                          maxWidth: "460px",
                        }}
                      >
                        Logs all data, code, and citations for full
                        auditability. And produces publication-ready text in
                        Nature-Cell style.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
