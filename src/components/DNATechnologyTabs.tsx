"use client";

import { useState } from "react";

const tabs = [
  {
    id: 0,
    label: "Coverage Distribution",
    iconInactive: "/images/DNA_charticon1_inactive.svg",
    iconActive: "/images/DNA_charticon1_active.svg",
    chart: "/images/DNA_chart1.svg",
    title: "Exceptional On-Target Performance and Coverage Uniformity",
  },
  {
    id: 1,
    label: "% On Target & Fold 80 Uniformity",
    iconInactive: "/images/DNA_charticon2_inactive.svg",
    iconActive: "/images/DNA_charticon2_active.svg",
    chart: "/images/DNA_chart2.svg",
    title: "Exceptional On-Target Performance and Coverage Uniformity",
  },
  {
    id: 2,
    label: "Zero-Coverage Reduction & 10 ng Concordance",
    iconInactive: "/images/DNA_charticon3_inactive.svg",
    iconActive: "/images/DNA_charticon3_active.svg",
    chart: "/images/DNA_chart3.svg",
    title: "Minimal Zero-Coverage Regions and High Concordance at Low Input",
  },
];

function TabDescription({ id }: { id: number }) {
  if (id === 0) {
    return (
      <>
        <p>While most WES providers guarantee raw sequencing output, true value depends on data quality.</p>
        <p>Biostate&apos;s optimized workflow achieves <strong>rapid coverage convergence</strong>, with <strong>&gt;95% of bases covered with &gt;30X</strong> (mean = 100X), significantly outperforming leading competitors.</p>
      </>
    );
  }
  if (id === 1) {
    return (
      <>
        <p>The data reveals an <strong>on-target rate of approximately 96%</strong>, with a <strong>Fold 80 Base Penalty of 1.52</strong>, indicating highly uniform sequencing depth distribution.</p>
        <p>These metrics demonstrate that our WES platform maximizes the utilization of sequencing reads, driving <strong>superior cost efficiency</strong>.</p>
      </>
    );
  }
  return (
    <>
      <p>Our platform achieves only <strong>1.2% zero-coverage regions</strong> across the exome, significantly reducing data gaps.</p>
      <p>Furthermore, <strong>concordance rates remain above 99%</strong> even at input levels as low as 10 ng, validating the platform&apos;s suitability for precious or limited clinical samples.</p>
    </>
  );
}

export default function DNATechnologyTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <div>
      {/* Tab buttons row */}
      <div
        className="dna-tabs-row"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        {tabs.map((t) => {
          const isActive = t.id === active;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className="dna-tab-btn"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                padding: "40px 32px",
                borderRadius: "25px",
                border: "1px solid transparent",
                backgroundImage: isActive
                  ? "linear-gradient(#ffffff, #ffffff), linear-gradient(135deg, #8258c8, #2c84c8)"
                  : "none",
                backgroundOrigin: isActive ? "border-box" : undefined,
                backgroundClip: isActive ? "padding-box, border-box" : undefined,
                backgroundColor: isActive ? "transparent" : "transparent",
                ...(isActive ? {} : { border: "1px solid #eeeeee" }),
                color: isActive ? "#111111" : "#111111",
                fontFamily: "'Sora', Arial, Helvetica, sans-serif",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "25px",
                letterSpacing: "-0.03em",
                cursor: "pointer",
                transition: "background-color 0.3s, border-color 0.3s",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src={isActive ? t.iconActive : t.iconInactive}
                alt=""
                width={55}
                height={55}
                style={{
                  flexShrink: 0,
                  transition: "opacity 0.3s ease",
                }}
              />
              {t.label}
              {/* Bottom elliptical glow */}
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "60%",
                    height: "30px",
                    borderRadius: "50%",
                    background: "#8D58C8",
                    filter: "blur(20px)",
                    opacity: 0.45,
                    pointerEvents: "none",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Content card */}
      <div
        className="dna-tab-content-card"
        style={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          boxShadow: "0 4px 32px rgba(0,0,0,0.06)",
          padding: "24px 32px",
          display: "flex",
          gap: "40px",
          alignItems: "center",
          border: "1px solid #eee",
          maxHeight: "calc(100vh - 280px)",
          overflow: "hidden",
        }}
      >
        {/* Left - Chart image */}
        <div
          className="dna-tab-chart"
          style={{
            flex: "0 0 50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={tab.chart}
            alt={tab.title}
            style={{
              width: "100%",
              maxHeight: "calc(100vh - 320px)",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Right - Text content */}
        <div
          className="dna-tab-text"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(28px, 3vw, 36px)",
              fontWeight: 500,
              margin: "0 0 20px 0",
              lineHeight: 1.25,
              color: "#111111",
            }}
          >
            {tab.title}
          </h3>

          <div
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: "#333333",
              lineHeight: "1.875em",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <TabDescription id={tab.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
