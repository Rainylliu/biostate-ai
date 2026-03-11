"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import WaveReveal from "./WaveReveal";

echarts.use([BarChart, GridComponent, TooltipComponent, CanvasRenderer]);

function BixBenchChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current, undefined, {
      renderer: "canvas",
    });
    chartInstance.current = chart;

    const finalData = [34.4, 22.9];
    const labels = ["K-Dense Analyst", "GPT-5"];

    chart.setOption({
      backgroundColor: "transparent",
      grid: { left: 50, right: 30, top: 10, bottom: 20 },
      xAxis: {
        type: "category",
        data: labels,
        axisTick: { show: false },
        axisLine: { lineStyle: { color: "#B9C6D6" } },
        axisLabel: { fontSize: 12, color: "#3A5168" },
      },
      yAxis: {
        type: "value",
        name: "Accuracy (%)",
        nameGap: 18,
        max: 40,
        splitNumber: 4,
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { lineStyle: { color: "#E1EAF3" } },
        axisLabel: { formatter: "{value}", color: "#3A5168" },
      },
      tooltip: {
        trigger: "item",
        formatter: (params: { name: string; value: number }) =>
          `${params.name}<br/><b>${params.value}%</b>`,
      },
      series: [
        {
          type: "bar",
          data: [0, 0],
          barWidth: 60,
          itemStyle: {
            borderRadius: [12, 12, 12, 12],
            shadowBlur: 10,
            shadowColor: "rgba(59,161,255,0.25)",
            color: (p: { dataIndex: number }) => {
              return p.dataIndex === 0
                ? new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    { offset: 0, color: "#9CD2FF" },
                    { offset: 1, color: "#3BA1FF" },
                  ])
                : new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    { offset: 0, color: "#E5E8EF" },
                    { offset: 1, color: "#C9CED9" },
                  ]);
            },
          },
          label: {
            show: true,
            position: "top",
            formatter: ({ value }: { value: number }) =>
              value ? `${value}%` : "",
            backgroundColor: "#fff",
            borderRadius: 8,
            padding: [4, 8],
            color: "#2A3A4A",
            fontWeight: "600" as const,
          },
          animationEasing: "cubicOut",
          animationDuration: 2048,
        },
      ],
    });

    // Play growth animation when visible
    let played = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !played) {
            played = true;
            chart.setOption({
              series: [
                {
                  data: finalData,
                  animationDelay: (idx: number) => idx * 200,
                },
              ],
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(chartRef.current);

    const handleResize = () => chart.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      chart.dispose();
    };
  }, []);

  return (
    <div
      style={{
        background: "#E9F4FE",
        borderRadius: 20,
        padding: 18,
        boxShadow: "0 2px 6px rgba(0,0,0,.06)",
      }}
    >
      <p
        style={{
          fontFamily: "ui-sans-serif, system-ui, 'Segoe UI', Roboto, Helvetica, Arial",
          fontWeight: 700,
          fontSize: 22,
          lineHeight: 1.2,
          textAlign: "center",
          margin: "6px 0 12px",
        }}
      >
        BixBench (Open Answer)
      </p>
      <div
        ref={chartRef}
        style={{
          width: "100%",
          height: 440,
          background: "transparent",
        }}
      />
      <p
        style={{
          marginTop: 4,
          textAlign: "center",
          fontSize: 14,
          color: "#111827",
        }}
      >
        David Sinclair KOL -quote, text:state-of-art
      </p>
    </div>
  );
}

export default function Section8KDense() {
  return (
    <section
      style={{
        padding: "100px 20px 80px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          gap: 60,
          alignItems: "flex-start",
        }}
      >
        {/* Left - Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p className="s7-tag">[ about ]</p>
          <WaveReveal
            text="K-Dense: Autonomous AI Scientist"
            as="h2"
            style={{
              fontFamily: "'Sora', Arial, Helvetica, sans-serif",
              fontSize: 48,
              fontWeight: 400,
              color: "#333333",
              margin: "0 0 32px 0",
              lineHeight: 1.15,
            }}
            highlightWords={["K-Dense:"]}
            highlightStyle={{ color: "#45D0BD" }}
          />

          <Link
            href="https://k-dense.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="book-a-call-btn"
            style={{ marginBottom: 48 }}
          >
            Check out K-Dense
            <span className="book-a-call-arrow">
              <span className="book-a-call-arrow-inner">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 12L12 4M12 4H5M12 4V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 12L12 4M12 4H5M12 4V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </Link>

          {/* Two feature cards */}
          <div style={{ display: "flex", gap: 40 }}>
            {/* Model Excellence */}
            <div style={{ flex: 1 }}>
              <img
                src="/images/icon1.svg"
                alt=""
                style={{ width: 80, height: 80, marginBottom: 16 }}
              />
              <p
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#111",
                  margin: "0 0 8px 0",
                }}
              >
                Model Excellence
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
                Created state-of-art benchmark performance, 50%+ better than
                GPT-5
              </p>
            </div>

            {/* Write Like Scientists */}
            <div style={{ flex: 1 }}>
              <img
                src="/images/icon2.svg"
                alt=""
                style={{ width: 80, height: 80, marginBottom: 16 }}
              />
              <p
                style={{
                  fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#111",
                  margin: "0 0 8px 0",
                }}
              >
                Write Like Scientists
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
                Produces publication-ready text in Nature-Cell style
              </p>
            </div>
          </div>
        </div>

        {/* Right - BixBench Chart */}
        <div style={{ flex: "0 0 420px", minWidth: 0 }}>
          <BixBenchChart />
        </div>
      </div>
    </section>
  );
}
