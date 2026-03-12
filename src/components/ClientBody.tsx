"use client";

import { createContext, useContext, useState } from "react";
import LoadingScreen from "./LoadingScreen";

const LoadedContext = createContext(false);
export const useLoaded = () => useContext(LoadedContext);

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <LoadedContext.Provider value={loaded}>
      <LoadingScreen onDone={() => setLoaded(true)} />
      <div style={{ visibility: loaded ? "visible" : "hidden" }}>
        {children}
      </div>
    </LoadedContext.Provider>
  );
}
