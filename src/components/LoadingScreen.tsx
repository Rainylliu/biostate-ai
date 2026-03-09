"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const startFadeOut = () => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 500);
    };

    if (document.readyState === "complete") {
      setTimeout(startFadeOut, 500);
    } else {
      window.addEventListener("load", () => {
        setTimeout(startFadeOut, 300);
      });
    }

    const fallback = setTimeout(startFadeOut, 5000);
    return () => clearTimeout(fallback);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        transition: "opacity 0.5s ease",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "auto",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/timer.svg"
        alt="Loading"
        style={{ width: "30%", height: "auto" }}
      />
    </div>
  );
}
