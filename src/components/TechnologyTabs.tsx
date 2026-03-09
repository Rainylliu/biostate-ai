"use client";

import { useState } from "react";

const tabs = [
  {
    id: 0,
    label: "Reproducibility",
    icon: "/images/chart1inactive.svg",
    iconActive: "/images/chart1active.svg",
    chart: "/images/chart1.png",
    title: "Reproducibility",
    description:
      "BIRT+PERD delivers superior informative gene yield without distorting biological signals. By capturing the biological state during the initial RT stage, it ensures that your data remains a true reflection of the sample, free from library preparation noise.",
    bullets: [
      {
        bold: "Eliminate Batch Effects",
        text: "Early barcoding allows for immediate sample pooling, streamlining the workflow while maintaining high-fidelity results.",
      },
      {
        bold: "High-Fidelity Correlation",
        text: "DEG patterns align perfectly with gold-standard methods, providing reliable insights even for rare and low-abundance transcripts.",
      },
    ],
    footer: "Uncompromised biological accuracy at unprecedented scale.",
  },
  {
    id: 1,
    label: "Efficient rRNA Depletion",
    icon: "/images/chart3inactive.svg",
    iconActive: "/images/chart2active.svg",
    chart: "/images/chart2.png",
    title: "Efficient rRNA Depletion",
    description:
      "Especially effective for challenging samples like blood, where high globin and rRNA content can otherwise reduce data quality.",
    bullets: [
      {
        bold: "Optimized Information Depth",
        text: "By suppressing rRNA during reverse transcription, we maximize the capture of exonic and informative non-coding regions.",
      },
      {
        bold: "Enzyme-Free Efficiency",
        text: "The workflow achieves superior depletion without the bias or complexity of traditional RNase H or bead-capture steps.",
      },
    ],
    footer: "Maximize informative data while eliminating sequencing waste.",
  },
  {
    id: 2,
    label: "Scalable Multiplexing Without Bias",
    icon: "/images/chart2inactive.svg",
    iconActive: "/images/chart3active.svg",
    chart: "/images/chart3.png",
    title: "Scalable Multiplexing Without Bias",
    description:
      "Early pooling of 16–24 samples minimizes batch variability and drives significant cost efficiency.",
    bullets: [
      {
        bold: "Uniform Sample Representation",
        text: "Our proprietary barcoding ensures each sample is represented equally, preventing the data bias common in traditional multiplexing.",
      },
      {
        bold: "High-Quality Demultiplexing",
        text: "The streamlined workflow achieves consistent performance across all barcodes, ensuring accurate data separation for every library.",
      },
    ],
    footer:
      "Achieve massive sample throughput without sacrificing data integrity.",
  },
];

export default function TechnologyTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <div>
      {/* Tab buttons row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "12px",
          marginBottom: "12px",
        }}
      >
        {tabs.map((t) => {
          const isActive = t.id === active;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "32px",
                minHeight: "120px",
                borderRadius: "15px",
                border: "1px solid #3f3f3f",
                backgroundColor: "#282828",
                color: isActive ? "#fff" : "rgba(255,255,255,0.45)",
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "20px",
                fontWeight: 400,
                cursor: "pointer",
                position: "relative",
                transition: "all 0.3s ease",
                overflow: "hidden",
              }}
            >
              {/* Icon */}
              <img
                src={isActive ? t.iconActive : t.icon}
                alt=""
                width={40}
                height={40}
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
                    background: "#3580C7",
                    filter: "blur(20px)",
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
        style={{
          backgroundColor: "#282828",
          border: "1px solid #3f3f3f",
          borderRadius: "15px",
          padding: "32px",
          display: "flex",
          gap: "48px",
          alignItems: "stretch",
          minHeight: "560px",
        }}
      >
        {/* Left - Chart image */}
        <div
          style={{
            flex: "0 0 40%",
            backgroundColor: "#fff",
            borderRadius: "14px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={tab.chart}
            alt={tab.title}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "calc(100% - 40px)",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Right - Text content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h3
            style={{
              fontSize: "40px",
              fontWeight: 500,
              color: "#fff",
              margin: "0 0 32px 0",
              lineHeight: 1.15,
            }}
          >
            {tab.title}
          </h3>

          <p
            style={{
              fontSize: "15px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.75,
              margin: "0 0 20px 0",
            }}
          >
            {tab.description}
          </p>

          <ul
            style={{
              listStyle: "disc",
              paddingLeft: "20px",
              margin: "0 0 32px 0",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {tab.bullets.map((b, i) => (
              <li
                key={i}
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.75,
                }}
              >
                <strong style={{ color: "#fff", fontWeight: 700 }}>{b.bold}:</strong> {b.text}
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: "15px",
              fontWeight: 700,
              color: "#fff",
              margin: 0,
            }}
          >
            {tab.footer}
          </p>
        </div>
      </div>
    </div>
  );
}
