import Link from "next/link";
import WaveReveal from "./WaveReveal";

export default function Section7Wetlab() {
  return (
    <section
      style={{
        padding: "100px 20px 80px",
        background: "#ffffff",
      }}
    >
      {/* ── Part 1: Intro Header ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto 80px" }}>
      <div style={{ maxWidth: 800 }}>
        <p className="s7-tag">[ about ]</p>
        <WaveReveal
          text="Next-Gen Wetlab Technology for 85% Lower Cost"
          as="h2"
          style={{
            fontFamily: "'Sora', Arial, Helvetica, sans-serif",
            fontSize: 48,
            fontWeight: 400,
            color: "#333333",
            margin: "0 0 32px 0",
            lineHeight: 1.15,
          }}
          highlightWords={["Wetlab", "Technology"]}
          highlightStyle={{ color: "#6766c8" }}
        />
        <p
          style={{
            fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
            fontSize: 16,
            fontWeight: 400,
            color: "#333",
            lineHeight: 1.8,
            maxWidth: 1000,
          }}
        >
          Biostate&apos;s Wetlab Technology enables large-scale, high-fidelity
          RNA and DNA sequencing for real biological data generation. Through
          patented technologies like BIRT, PERD, MARE, our wetlab platform
          collects transcriptomic and genomic data at unprecedented scale and
          cost efficiency — forming the foundation for Biostate&apos;s AI-driven
          disease prediction and drug response models.
        </p>
      </div>
      </div>

      {/* ── Part 2: RNAseq (image left, content right) ── */}
      <div className="s7-row" style={{ maxWidth: 1200, margin: "0 auto 100px" }}>
        <div className="s7-col-img">
          <img
            src="/images/Wetlab1.svg"
            alt="BIRT + PERD RNAseq technology"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 20,
              display: "block",
            }}
          />
        </div>
        <div className="s7-col-text">
          <p className="s7-tag">[ how it works ]</p>
          <h3
            style={{
              fontFamily: "'Sora', Arial, Helvetica, sans-serif",
              fontSize: 48,
              fontWeight: 400,
              color: "#333333",
              lineHeight: 1.15,
              margin: "0 0 28px 0",
            }}
          >
            Discover the science behind{" "}
            <span style={{ color: "#6766c8" }}>RNAseq</span>
          </h3>

          <Link href="/rna" className="book-a-call-btn" style={{ marginBottom: 36 }}>
            Explore more
            <span className="book-a-call-arrow">
              <span className="book-a-call-arrow-inner">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </span>
          </Link>

          {/* 3 info items with icons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {/* 01 The problem */}
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <img
                src="/images/Wetlabicon1.svg"
                alt=""
                style={{ width: 48, height: 48, flexShrink: 0, marginTop: 2 }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#111",
                    margin: "0 0 6px 0",
                  }}
                >
                  01. The problem
                </p>
                <p
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: 15,
                    fontWeight: 400,
                    color: "#555",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Traditional RNA sequencing is costly and noisy, making it hard
                  to detect subtle disease signals.
                </p>
              </div>
            </div>

            {/* 02 Our breakthrough solution */}
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <img
                src="/images/Wetlabicon2.svg"
                alt=""
                style={{ width: 48, height: 48, flexShrink: 0, marginTop: 2 }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#111",
                    margin: "0 0 6px 0",
                  }}
                >
                  02. Our breakthrough solution
                </p>
                <p
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: 15,
                    fontWeight: 400,
                    color: "#555",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  BIRT (Barcode-Integrated Reverse Transcription) + PERD
                  (Probes for Excess RNA Depletion) enable efficient,
                  multiplexed RNA processing with cleaner data.
                </p>
              </div>
            </div>

            {/* 03 Proven impact */}
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <img
                src="/images/Wetlabicon3.svg"
                alt=""
                style={{ width: 48, height: 48, flexShrink: 0, marginTop: 2 }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#111",
                    margin: "0 0 6px 0",
                  }}
                >
                  03. Proven impact
                </p>
                <p
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: 15,
                    fontWeight: 400,
                    color: "#555",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <strong>10× less sample required and 10× cheaper</strong>{" "}
                  RNAseq: unlocking earlier, data-driven insights for precision
                  medicine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Part 3: DNAseq (content left, image right) ── */}
      <div className="s7-row" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="s7-col-text">
          <p className="s7-tag">[ how it works ]</p>
          <h3
            style={{
              fontFamily: "'Sora', Arial, Helvetica, sans-serif",
              fontSize: 48,
              fontWeight: 400,
              color: "#333333",
              lineHeight: 1.15,
              margin: "0 0 28px 0",
            }}
          >
            Discover how{" "}
            <span style={{ color: "#6766c8" }}>DNAseq</span> enables newborn
            screening
          </h3>

          <Link href="/dna" className="book-a-call-btn" style={{ marginBottom: 36 }}>
            Explore more
            <span className="book-a-call-arrow">
              <span className="book-a-call-arrow-inner">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </span>
          </Link>

          {/* 3 info items with outline numbers */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {/* 01 The problem */}
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              <span className="s7-outline-num">01</span>
              <div>
                <p
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#111",
                    margin: "0 0 6px 0",
                  }}
                >
                  The problem
                </p>
                <p
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: 15,
                    fontWeight: 400,
                    color: "#555",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Over 90% of genetic diseases are diagnosed 2–7 years late,
                  early signs are missed and damage becomes irreversible.
                </p>
              </div>
            </div>

            {/* 02 Our breakthrough solution */}
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              <span className="s7-outline-num">02</span>
              <div>
                <p
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#111",
                    margin: "0 0 6px 0",
                  }}
                >
                  Our breakthrough solution
                </p>
                <p
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: 15,
                    fontWeight: 400,
                    color: "#555",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  MARE (Massively Accurate Rare Exome), a pending-patent
                  DNAseq, delivers <strong>&gt;98%</strong> exome coverage and
                  detects <strong>5,000+</strong> inherited diseases years
                  before symptoms.
                </p>
              </div>
            </div>

            {/* 03 Proven impact */}
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              <span className="s7-outline-num">03</span>
              <div>
                <p
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#111",
                    margin: "0 0 6px 0",
                  }}
                >
                  Proven impact
                </p>
                <p
                  style={{
                    fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                    fontSize: 15,
                    fontWeight: 400,
                    color: "#555",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Detect early. Extend life. Enable proactive care and prevent
                  avoidable disability and death.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="s7-col-img">
          <img
            src="/images/Wetlab2.svg"
            alt="MARE DNAseq newborn screening technology"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 20,
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}
