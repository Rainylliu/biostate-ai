"use client";

import { useState } from "react";

const tabs = [
  {
    id: 0,
    label: "Reproducibility",
    icon: "/images/chart1.svg",
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
    icon: "/images/chart3.svg",
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
    icon: "/images/chart2.svg",
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
      {/* Tab buttons */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginBottom: "0",
        }}
      >
        {tabs.map((t) => {
          const isActive = t.id === active;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                padding: "20px 24px",
                borderRadius: "16px 16px 0 0",
                border: "1px solid rgba(255,255,255,0.15)",
                borderBottom: isActive ? "none" : "1px solid rgba(255,255,255,0.15)",
                backgroundColor: isActive ? "#2a2a2a" : "transparent",
                color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                fontSize: "15px",
                fontWeight: isActive ? 600 : 400,
                cursor: "pointer",
                position: "relative",
                transition: "all 0.3s ease",
              }}
            >
              {/* Icon with color filter */}
              <img
                src={t.icon}
                alt=""
                width={28}
                height={28}
                style={{
                  filter: isActive
                    ? "brightness(0) saturate(100%) invert(35%) sepia(85%) saturate(600%) hue-rotate(190deg) brightness(95%) contrast(90%)"
                    : "brightness(0) invert(0.6)",
                  transition: "filter 0.3s ease",
                }}
              />
              {t.label}
              {/* Glow effect under active tab */}
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "60%",
                    height: "4px",
                    background: "#3580C7",
                    borderRadius: "4px",
                    boxShadow: "0 0 12px 4px rgba(53, 128, 199, 0.5)",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Content area */}
      <div
        style={{
          backgroundColor: "#2a2a2a",
          borderRadius: "0 0 20px 20px",
          padding: "56px",
          display: "flex",
          gap: "56px",
          alignItems: "center",
          minHeight: "480px",
        }}
      >
        {/* Left - Chart image */}
        <div
          style={{
            flex: "0 0 42%",
            backgroundColor: "#fff",
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <img
            src={tab.chart}
            alt={tab.title}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Right - Text content */}
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontSize: "36px",
              fontWeight: 500,
              color: "#fff",
              margin: "0 0 24px 0",
              lineHeight: 1.2,
            }}
          >
            {tab.title}
          </h3>

          <p
            style={{
              fontSize: "15px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              margin: "0 0 20px 0",
            }}
          >
            {tab.description}
          </p>

          <ul
            style={{
              listStyle: "disc",
              paddingLeft: "20px",
              margin: "0 0 28px 0",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {tab.bullets.map((b, i) => (
              <li
                key={i}
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.7,
                }}
              >
                <strong style={{ color: "#fff" }}>{b.bold}:</strong> {b.text}
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
