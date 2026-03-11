import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team - biostate.AI",
  description: "Meet the team behind biostate.AI.",
};

export default function AboutUsPage() {
  return (
    <div>
      {/* ── Section 1: Hero ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "180px 20px 100px",
          background: "#ffffff",
        }}
      >
        {/* Background SVG */}
        <img
          src="/images/circlebg2.svg"
          alt=""
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60%",
            minWidth: 800,
            userSelect: "none",
          }}
        />

        {/* Content */}
        <h1
          style={{
            position: "relative",
            fontFamily: "'Sora', Arial, Helvetica, sans-serif",
            fontSize: 100,
            fontWeight: 500,
            color: "#222",
            lineHeight: 1.15,
            margin: "-60px 0 24px 0",
          }}
        >
          The <span style={{ color: "#6766c8" }}>Team</span> Behind
          <br />
          Biostate AI
        </h1>

        <p
          style={{
            position: "relative",
            fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
            fontSize: 16,
            fontWeight: 400,
            color: "#666",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          Scientists, engineers, and innovators building the future of biology.
        </p>

        {/* ── David Zhang Profile ── */}
        <div
          style={{
            position: "relative",
            display: "flex",
            gap: 60,
            alignItems: "stretch",
            maxWidth: 1100,
            width: "100%",
            marginTop: 80,
            textAlign: "left",
          }}
        >
          {/* Photo */}
          <div style={{ flexShrink: 0, width: 400 }}>
            <img
              src="/images/david.svg"
              alt="David Zhang, Ph.D."
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 20,
                display: "block",
              }}
            />
          </div>

          {/* Info */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2
              style={{
                fontFamily: "'Sora', Arial, Helvetica, sans-serif",
                fontSize: 48,
                fontWeight: 400,
                color: "#222",
                margin: "0 0 8px 0",
                lineHeight: 1.15,
              }}
            >
              David Zhang, Ph.D.
            </h2>
            <p
              style={{
                fontFamily: "'Sora', Arial, Helvetica, sans-serif",
                fontSize: 22,
                fontWeight: 600,
                color: "#222",
                margin: "0 0 32px 0",
              }}
            >
              Co-founder and CEO
            </p>

            {/* Bullet items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Item 1 */}
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  paddingBottom: 24,
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <img src="/images/icon1.svg" alt="" style={{ width: 48, height: 48, flexShrink: 0 }} />
                <p
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: 15,
                    fontWeight: 400,
                    color: "#333",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Presidential award-winning bioengineering professor with 60+ top publications and 40+ patents.
                </p>
              </div>

              {/* Item 2 */}
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  paddingBottom: 24,
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <img src="/images/icon4.svg" alt="" style={{ width: 48, height: 48, flexShrink: 0 }} />
                <p
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: 15,
                    fontWeight: 400,
                    color: "#333",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Previously Associate Professor of Bioengineering at Rice University (2013–2021); Co-founder &amp; CEO of NuProbe Global.
                </p>
              </div>

              {/* Item 3 */}
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  paddingBottom: 24,
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <img src="/images/icon5.svg" alt="" style={{ width: 48, height: 48, flexShrink: 0 }} />
                <p
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: 15,
                    fontWeight: 400,
                    color: "#333",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Raised $100M+ venture capital from Sequoia and AstraZeneca; reached $21M annual revenue in 2022.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
