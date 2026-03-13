"use client";

export default function AISection1() {
  return (
    <section
      style={{
        maxWidth: "1340px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "20px 24px 0",
      }}
    >
      {/* Hero Heading */}
      <div style={{ marginBottom: "48px" }}>
        <h1
          className="ai-hero-title"
          style={{
            fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
            fontSize: "clamp(48px, 7vw, 96px)",
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            margin: "0 0 8px 0",
            background:
              "linear-gradient(135deg, #8258c8 0%, #2c84c8 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          Biomedical AI
        </h1>
        <p
          className="ai-hero-subtitle"
          style={{
            fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
            fontSize: "clamp(32px, 5vw, 64px)",
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#111111",
            margin: 0,
          }}
        >
          Lift Healthspans for Everyone
        </p>
      </div>

      {/* Two-Card Row */}
      <div
        className="ai-s1-cards"
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "stretch",
        }}
      >
        {/* ── Left Card: Dark info card ── */}
        <div
          className="ai-s1-card-left"
          style={{
            flex: 1,
            backgroundColor: "#1a1a1a",
            borderRadius: "24px",
            padding: "48px 40px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "480px",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                margin: "0 0 32px 0",
                background:
                  "linear-gradient(135deg, #8258c8 0%, #2c84c8 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                maxWidth: "420px",
              }}
            >
              Transforming omics data into intelligence
            </h3>
            <p
              style={{
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.75)",
                margin: 0,
                maxWidth: "420px",
              }}
            >
              Our AI portfolio features two flagship technologies: K-Dense, our
              autonomous multi-agent scientific platform, and N-Act, our
              next-generation multi-omics intelligence model — together enabling
              precise, scalable, and clinically actionable insights.
            </p>
          </div>

          {/* Decorative AI icon at bottom-right */}
          <svg
            width="142"
            height="94"
            viewBox="0 0 142 94"
            fill="none"
            style={{
              alignSelf: "flex-end",
              marginTop: "32px",
              opacity: 0.5,
            }}
          >
            <path
              d="M0 93.5L40.5 0H62L102.5 93.5H80.5L72 71H30L21.5 93.5H0ZM36 54H66L51 12L36 54Z"
              fill="url(#ai-icon-grad)"
            />
            <path d="M112 0H132V93.5H112V0Z" fill="url(#ai-icon-grad)" />
            <defs>
              <linearGradient
                id="ai-icon-grad"
                x1="0"
                y1="0"
                x2="142"
                y2="94"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8258c8" />
                <stop offset="1" stopColor="#2c84c8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* ── Right Card: Video card ── */}
        <div
          className="ai-s1-card-right"
          style={{
            flex: 1,
            borderRadius: "24px",
            position: "relative",
            overflow: "hidden",
            minHeight: "480px",
            cursor: "pointer",
          }}
          onClick={() =>
            window.open("https://youtu.be/jP1K_8e7BjI", "_blank")
          }
        >
          {/* GIF Background */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/AI_video.gif"
            alt="AI Vision"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Gradient overlay for text readability */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(130, 88, 200, 0.25), rgba(44, 132, 200, 0.25))",
            }}
          />

          {/* Content overlay */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "48px 40px",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: "clamp(36px, 4vw, 56px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  margin: "0 0 auto 0",
                  background:
                    "linear-gradient(135deg, #8258c8 0%, #2c84c8 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Our Vision
              </h2>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: 1.8,
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  Track disease progression.
                  <br />
                  Predict the future.
                  <br />
                  Act earlier.
                </p>
              </div>

              {/* Watch video button */}
              <button
                className="book-a-call-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open("https://youtu.be/jP1K_8e7BjI", "_blank");
                }}
                style={{
                  flexShrink: 0,
                  backgroundColor: "#ffffff",
                  color: "#333",
                }}
              >
                Watch video
                <span className="book-a-call-arrow">
                  <span className="book-a-call-arrow-inner">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.5 3L11 8L5.5 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.5 3L11 8L5.5 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
