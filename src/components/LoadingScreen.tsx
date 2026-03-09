"use client";

import { useState, useEffect, useRef } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const startFadeOut = () => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 500);
    };

    // Fade out when the page finishes loading
    if (document.readyState === "complete") {
      // Already loaded, give a minimum display time
      setTimeout(startFadeOut, 500);
    } else {
      window.addEventListener("load", () => {
        setTimeout(startFadeOut, 300);
      });
    }

    // Safety fallback: fade out after 5s max
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
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{ width: "200px", height: "auto" }}
      >
        <source src="/images/timer3s.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
