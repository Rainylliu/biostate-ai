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
    description:
      "Our WES technology demonstrates rapid coverage convergence to target depth across the exome. As shown above, >95% of targeted bases achieve >30X coverage at a mean depth of 100X, ensuring reliable variant calling even in challenging genomic regions.",
  },
  {
    id: 1,
    label: "% On Target & Fold 80 Uniformity",
    iconInactive: "/images/DNA_charticon2_inactive.svg",
    iconActive: "/images/DNA_charticon2_active.svg",
    chart: "/images/DNA_chart2.svg",
    title: "Exceptional On-Target Performance and Coverage Uniformity",
    description:
      "The data reveals an on-target rate of approximately 96%, with a Fold 80 Base Penalty of 1.52, indicating highly uniform sequencing depth distribution. These metrics demonstrate that our WES platform maximizes the utilization of sequencing reads, driving superior cost efficiency.",
  },
  {
    id: 2,
    label: "Zero-Coverage Reduction & 10 ng Concordance",
    iconInactive: "/images/DNA_charticon3_inactive.svg",
    iconActive: "/images/DNA_charticon3_active.svg",
    chart: "/images/DNA_chart3.svg",
    title: "Minimal Zero-Coverage Regions and High Concordance at Low Input",
    description:
      "Our platform achieves only 1.2% zero-coverage regions across the exome, significantly reducing data gaps. Furthermore, concordance rates remain above 99% even at input levels as low as 10 ng, validating the platform's suitability for precious or limited clinical samples.",
  },
];

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
          marginBottom: "24px",
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
                gap: "16px",
                padding: "28px 32px",
                borderRadius: "16px",
                border: isActive ? "1.5px solid transparent" : "1.5px solid #d8d8e0",
                backgroundImage: isActive
                  ? "linear-gradient(160deg, rgba(255,255,255,0.95) 40%, rgba(200,180,240,0.25) 100%), linear-gradient(135deg, #8258c8, #2c84c8)"
                  : "none",
                backgroundOrigin: isActive ? "border-box" : undefined,
                backgroundClip: isActive ? "padding-box, border-box" : undefined,
                backgroundColor: isActive ? "transparent" : "#fff",
                color: isActive ? "#1a1a1a" : "#999",
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "17px",
                fontWeight: isActive ? 600 : 400,
                cursor: "pointer",
                transition: "all 0.3s ease",
                minHeight: "88px",
              }}
            >
              <img
                src={isActive ? t.iconActive : t.iconInactive}
                alt=""
                width={40}
                height={40}
                style={{
                  flexShrink: 0,
                  transition: "opacity 0.3s ease",
                }}
              />
              {t.label}
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
          padding: "48px",
          display: "flex",
          gap: "48px",
          alignItems: "center",
          minHeight: "480px",
          border: "1px solid #eee",
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
              height: "auto",
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
          }}
        >
          <h3
            style={{
              fontSize: "clamp(24px, 2.5vw, 36px)",
              fontWeight: 600,
              margin: "0 0 24px 0",
              lineHeight: 1.25,
              backgroundImage:
                "linear-gradient(135deg, rgb(130, 88, 200), rgb(44, 132, 200))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              display: "inline-block",
              padding: "0.1em 0",
            }}
          >
            {tab.title}
          </h3>

          <p
            style={{
              fontSize: "15px",
              fontWeight: 400,
              color: "#555",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {tab.description}
          </p>
        </div>
      </div>
    </div>
  );
}
