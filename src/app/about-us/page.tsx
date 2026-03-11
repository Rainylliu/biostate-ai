import type { Metadata } from "next";
import InvestorCarousel from "./InvestorCarousel";

export const metadata: Metadata = {
  title: "Team - biostate.AI",
  description: "Meet the team behind biostate.AI.",
};

export default function AboutUsPage() {
  return (
    <div>
      {/* ── Section 1: Hero ── */}
      <section
        className="team-hero-section"
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
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60%",
            minWidth: 800,
            userSelect: "none",
          }}
        />

        {/* Content */}
        <h1
          className="team-hero-title"
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
          className="team-profile"
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
          <div className="team-profile-photo" style={{ flexShrink: 0, width: 400 }}>
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
              className="team-profile-name"
              style={{
                fontFamily: "'Sora', Arial, Helvetica, sans-serif",
                fontSize: 64,
                fontWeight: 500,
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

      {/* ── Section 2: Global Constellation ── */}
      <section
        style={{
          padding: "80px 20px",
          background: "#ffffff",
        }}
      >
        {/* Map container */}
        <div
          className="gc-wrapper"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto",
            aspectRatio: "1883 / 1080",
          }}
        >
          {/* Background map */}
          <img
            src="/images/Global Constellation.png"
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              zIndex: 1,
              borderRadius: 20,
            }}
          />

          {/* Dashed connection lines */}
          <svg
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              pointerEvents: "none",
            }}
            viewBox="0 0 1883 1080"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line x1="942" y1="560" x2="942" y2="460" stroke="#49C9B2" strokeWidth="4" strokeDasharray="8 10" />
            <line x1="360" y1="500" x2="1520" y2="500" stroke="#49C9B2" strokeWidth="4" strokeDasharray="8 10" />
            <line x1="360" y1="500" x2="360" y2="620" stroke="#49C9B2" strokeWidth="4" strokeDasharray="8 10" />
            <line x1="942" y1="500" x2="942" y2="620" stroke="#49C9B2" strokeWidth="4" strokeDasharray="8 10" />
            <line x1="1520" y1="500" x2="1520" y2="620" stroke="#49C9B2" strokeWidth="4" strokeDasharray="8 10" />
            <line x1="650" y1="500" x2="650" y2="920" stroke="#49C9B2" strokeWidth="4" strokeDasharray="8 10" />
            <line x1="1200" y1="500" x2="1200" y2="920" stroke="#49C9B2" strokeWidth="4" strokeDasharray="8 10" />
          </svg>

          {/* TopCo */}
          <a
            href="https://www.biostate.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="gc-node"
            style={{ position: "absolute", zIndex: 3, top: "25%", left: "50%", transform: "translateX(-50%)" }}
          >
            <img src="/images/Biostate AI (TopCo).svg" alt="Biostate AI (TopCo)" style={{ width: 250, height: "auto" }} />
          </a>

          {/* Row 2: K-Dense, Biostate AI MENA, Biosheng AI */}
          <a
            href="https://k-dense.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="gc-node"
            style={{ position: "absolute", zIndex: 3, top: "50%", left: "9%" }}
          >
            <img src="/images/K-Dense.svg" alt="K-Dense" style={{ width: 250, height: "auto" }} />
          </a>
          <a
            href="https://dynamicmultiome.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="gc-node"
            style={{ position: "absolute", zIndex: 3, top: "50%", left: "50%", transform: "translateX(-50%)" }}
          >
            <img src="/images/Biostate AI MENA.svg" alt="Biostate AI MENA" style={{ width: 250, height: "auto" }} />
          </a>
          <a
            href="https://www.bioshengai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="gc-node"
            style={{ position: "absolute", zIndex: 3, top: "50%", right: "8%" }}
          >
            <img src="/images/Biosheng AI.svg" alt="Biosheng AI" style={{ width: 250, height: "auto" }} />
          </a>

          {/* Row 3: JV Baisheng, Bayosthiti */}
          <a
            href="https://www.kindstar.com.cn/en"
            target="_blank"
            rel="noopener noreferrer"
            className="gc-node"
            style={{ position: "absolute", zIndex: 3, top: "75%", left: "24%" }}
          >
            <img src="/images/JV Baisheng.svg" alt="JV Baisheng" style={{ width: 250, height: "auto" }} />
          </a>
          <a
            href="https://bayosthiti.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="gc-node"
            style={{ position: "absolute", zIndex: 3, top: "75%", right: "25%" }}
          >
            <img src="/images/Bayosthiti.svg" alt="Bayosthiti" style={{ width: 250, height: "auto" }} />
          </a>
        </div>
      </section>

      {/* ── Section 3: Team Leaders ── */}
      <section
        style={{
          fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
          padding: "0 20px 80px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              backgroundColor: "#F0F2F4",
              borderRadius: 25,
              padding: "80px 40px",
            }}
          >
            {/* Header */}
            <p style={{ fontSize: 14, fontWeight: 500, color: "#333", marginBottom: 12 }}>
              [ leader ]
            </p>
            <h2
              style={{
                fontFamily: "'Sora', Arial, Helvetica, sans-serif",
                fontSize: 48,
                fontWeight: 400,
                color: "#111",
                margin: "0 0 60px 0",
                lineHeight: 1.15,
              }}
            >
              Team Leaders
            </h2>

            {/* 3×2 Grid */}
            <div
              className="team-leaders-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "60px 40px",
                alignItems: "start",
              }}
            >
              {/* Jeremy Sobotta */}
              <div>
                <img
                  src="/images/Jeremy Sobotta.svg"
                  alt="Jeremy Sobotta"
                  style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 20, display: "block", marginBottom: 20 }}
                />
                <h3 style={{ fontSize: 24, fontWeight: 700, color: "#111", lineHeight: 1.3, marginBottom: 16 }}>
                  Jeremy Sobotta | CFO, Biostate AI
                </h3>
                <ul style={{ fontSize: 16, color: "#333", fontWeight: 400, lineHeight: 1.7, listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  <li style={{ display: "flex", gap: 8 }}><span style={{ flexShrink: 0 }}>↘</span><span>CFO, Padagis LLC (2023–2025); CFO, Perimeter Medical Imaging AI (2019–2023); Senior Financial Leader, Stryker (2008–2019);</span></li>
                  <li style={{ display: "flex", gap: 8 }}><span style={{ flexShrink: 0 }}>↘</span><span>Deployed $4B+ in M&amp;A capital with extensive experience in transaction, integration, and scaling of biotech and medtech enterprises</span></li>
                </ul>
              </div>

              {/* Kutapa Muthanna */}
              <div style={{ marginTop: 40 }}>
                <img
                  src="/images/Kutapa Muthanna.svg"
                  alt="Kutapa Muthanna"
                  style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 20, display: "block", marginBottom: 20 }}
                />
                <h3 style={{ fontSize: 24, fontWeight: 700, color: "#111", lineHeight: 1.3, marginBottom: 16 }}>
                  Kutapa Muthanna | CEO, Bayosthiti AI (India Subsidiary)
                </h3>
                <ul style={{ fontSize: 16, color: "#333", fontWeight: 400, lineHeight: 1.7, listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  <li style={{ display: "flex", gap: 8 }}><span style={{ flexShrink: 0 }}>↘</span><span>Director, KPMG (2014–2024);</span></li>
                  <li style={{ display: "flex", gap: 8 }}><span style={{ flexShrink: 0 }}>↘</span><span>Lead Software Engineer, Fidelity (2005–2014)</span></li>
                </ul>
              </div>

              {/* Mohammad Alkweihewi */}
              <div>
                <img
                  src="/images/Mohammad Alkweihewi.svg"
                  alt="Mohammad Alkweihewi"
                  style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 20, display: "block", marginBottom: 20 }}
                />
                <h3 style={{ fontSize: 24, fontWeight: 700, color: "#111", lineHeight: 1.3, marginBottom: 16 }}>
                  Mohammad Alkweihewi | CEO, Biostate AI MENA (KSA Subsidiary)
                </h3>
                <ul style={{ fontSize: 16, color: "#333", fontWeight: 400, lineHeight: 1.7, listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  <li style={{ display: "flex", gap: 8 }}><span style={{ flexShrink: 0 }}>↘</span><span>Managing Director, Eurofins Clinical KSA, (2024-2025);</span></li>
                  <li style={{ display: "flex", gap: 8 }}><span style={{ flexShrink: 0 }}>↘</span><span>Director of Private Sector Partnerships, Ministry of Health KSA, (2023-2024);</span></li>
                  <li style={{ display: "flex", gap: 8 }}><span style={{ flexShrink: 0 }}>↘</span><span>Director of Research, Princess Noura University, (2021-2023)</span></li>
                </ul>
              </div>

              {/* Zoe Zheng */}
              <div>
                <img
                  src="/images/Zoe Zheng.svg"
                  alt="Zoe Zheng"
                  style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 20, display: "block", marginBottom: 20 }}
                />
                <h3 style={{ fontSize: 24, fontWeight: 700, color: "#111", lineHeight: 1.3, marginBottom: 16 }}>
                  Zoe Zheng | CEO, Biosheng (China Subsidiary)
                </h3>
                <ul style={{ fontSize: 16, color: "#333", fontWeight: 400, lineHeight: 1.7, listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  <li style={{ display: "flex", gap: 8 }}><span style={{ flexShrink: 0 }}>↘</span><span>Partner, Alpha Ventures (2023–2024);</span></li>
                  <li style={{ display: "flex", gap: 8 }}><span style={{ flexShrink: 0 }}>↘</span><span>Principal, Matrix Partners China (2018–2022)</span></li>
                </ul>
              </div>

              {/* Alden Yao */}
              <div style={{ marginTop: 40 }}>
                <img
                  src="/images/Alden Yao.svg"
                  alt="Alden Yao"
                  style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 20, display: "block", marginBottom: 20 }}
                />
                <h3 style={{ fontSize: 24, fontWeight: 700, color: "#111", lineHeight: 1.3, marginBottom: 16 }}>
                  Alden Yao | CEO, Baisheng (Wuhan JV)
                </h3>
                <ul style={{ fontSize: 16, color: "#333", fontWeight: 400, lineHeight: 1.7, listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  <li style={{ display: "flex", gap: 8 }}><span style={{ flexShrink: 0 }}>↘</span><span>Kindstar Global Gene Technology Co., Ltd., Deputy General Manager of the subsidiary. (2012–Present)</span></li>
                </ul>
              </div>

              {/* Timothy Kassis */}
              <div>
                <img
                  src="/images/Timothy Kassis.svg"
                  alt="Timothy Kassis, Ph.D."
                  style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 20, display: "block", marginBottom: 20 }}
                />
                <h3 style={{ fontSize: 24, fontWeight: 700, color: "#111", lineHeight: 1.3, marginBottom: 16 }}>
                  Timothy Kassis, Ph.D. | Co-Founder &amp; Head of AI, K-Dense
                </h3>
                <ul style={{ fontSize: 16, color: "#333", fontWeight: 400, lineHeight: 1.7, listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  <li style={{ display: "flex", gap: 8 }}><span style={{ flexShrink: 0 }}>↘</span><span>Head of AI and Data Metaworks (2021–2025);</span></li>
                  <li style={{ display: "flex", gap: 8 }}><span style={{ flexShrink: 0 }}>↘</span><span>Instructor, MIT (2011–2021)</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── Section 4: Institutional Investors ── */}
      <section
        style={{
          fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
          padding: "150px 20px 35px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <InvestorCarousel
            investors={[
              { name: "Shekhar Kirani", image: "/images/Shekhar Kirani.svg", link: "https://www.accel.com/people/shekhar-kirani#bay-area" },
              { name: "Haomiao Huang", image: "/images/Haomiao Huang.svg", link: "https://www.mattervp.com/team" },
              { name: "Yiran Liu", image: "/images/Yiran Liu.svg", link: "https://www.visionpluscapital.com/en/list.php?pid=1" },
              { name: "Rouz Jazayeri", image: "/images/Rouz Jazayeri.svg", link: "https://catapult.vc/about/" },
              { name: "Chinmaya Sharma", image: "/images/Chinmaya Sharma.svg", link: "https://www.infoedgeventures.in/team" },
              { name: "Fred Farina", image: "/images/Fred Farina.svg", link: "https://innovation.caltech.edu/ottcp-directory/fred-farina" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
