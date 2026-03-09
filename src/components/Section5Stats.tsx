"use client";

import CountUp from "./CountUp";

const stats = [
  { end: 92.4, decimals: 1, suffix: "%", label: "Q30 Base Rate", sub: ">80% industry standard" },
  { end: 93.2, decimals: 1, suffix: "%", label: "Mapping Rate", sub: "Typical range: 70–85%" },
  { end: 0, decimals: 0, suffix: "", label: "Replicate Correlation", sub: "", static: ">0.95" },
  { end: 99.8, decimals: 1, suffix: "%", label: "rRNA Depletion", sub: "" },
];

export default function Section5Stats() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, auto)",
          gap: "80px",
        }}
      >
      {stats.map((stat, i) => (
        <div key={i}>
          <div style={{ height: "100px", marginBottom: "16px", overflow: "visible" }}>
            {stat.static ? (
              <svg
                viewBox="0 0 240 90"
                style={{ width: "240px", height: "90px", display: "block" }}
              >
                <defs>
                  <linearGradient id="staticGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#45D0BD" />
                    <stop offset="100%" stopColor="#44B6E9" />
                  </linearGradient>
                </defs>
                <text
                  x="0"
                  y="72"
                  fontFamily="'Sora', Arial, Helvetica, sans-serif"
                  fontSize="72"
                  fontWeight="600"
                  fill="none"
                  stroke="url(#staticGradient)"
                  strokeWidth="2"
                >
                  {stat.static}
                </text>
              </svg>
            ) : (
              <CountUp
                end={stat.end}
                decimals={stat.decimals}
                suffix={stat.suffix}
                fontSize={72}
                fontWeight={600}
                strokeWidth={2}
                gradientId={`statsGrad${i}`}
              />
            )}
          </div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#1f1f1f",
              margin: "0 0 4px 0",
            }}
          >
            {stat.label}
          </p>
          {stat.sub && (
            <p
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#888",
                margin: 0,
              }}
            >
              {stat.sub}
            </p>
          )}
        </div>
      ))}
      </div>
    </div>
  );
}
