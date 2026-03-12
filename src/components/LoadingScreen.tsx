"use client";

import { useState, useEffect, useRef } from "react";

export default function LoadingScreen({ onDone }: { onDone?: () => void }) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const mountTime = Date.now();
    const MIN_DISPLAY = 800; // minimum ms to show the loading screen

    const startFadeOut = () => {
      const elapsed = Date.now() - mountTime;
      const remaining = Math.max(0, MIN_DISPLAY - elapsed);

      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setVisible(false);
          onDone?.();
        }, 500);
      }, remaining);
    };

    if (document.readyState === "complete") {
      startFadeOut();
    } else {
      const onLoad = () => startFadeOut();
      window.addEventListener("load", onLoad);
      // fallback
      const fallback = setTimeout(startFadeOut, 5000);
      return () => {
        window.removeEventListener("load", onLoad);
        clearTimeout(fallback);
      };
    }
  }, [onDone]);

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
        style={{ width: "20%", height: "auto" }}
      />
    </div>
  );
}
