"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onDone={() => setLoaded(true)} />
      <div style={{ visibility: loaded ? "visible" : "hidden" }}>
        {children}
      </div>
    </>
  );
}
