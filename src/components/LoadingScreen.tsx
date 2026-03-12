"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export default function LoadingScreen({ onDone }: { onDone?: () => void }) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  const startFadeOut = useCallback((mountTime: number) => {
    const elapsed = Date.now() - mountTime;
    const remaining = Math.max(0, 800 - elapsed);

    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setVisible(false);
        onDoneRef.current?.();
      }, 500);
    }, remaining);
  }, []);

  useEffect(() => {
    const mountTime = Date.now();

    if (document.readyState === "complete") {
      startFadeOut(mountTime);
    } else {
      const onLoad = () => startFadeOut(mountTime);
      window.addEventListener("load", onLoad);
      const fallback = setTimeout(() => startFadeOut(mountTime), 5000);
      return () => {
        window.removeEventListener("load", onLoad);
        clearTimeout(fallback);
      };
    }
  }, [startFadeOut]);

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
