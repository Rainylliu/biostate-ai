"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "./LoadingScreen";

const LoadedContext = createContext(false);
export const useLoaded = () => useContext(LoadedContext);

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loaded, setLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState(pathname);

  // Detect route changes and replay loading animation
  useEffect(() => {
    if (pathname !== prevPath) {
      setPrevPath(pathname);
      setLoaded(false);
      setShowLoading(true);
    }
  }, [pathname, prevPath]);

  const handleDone = useCallback(() => {
    setLoaded(true);
    setShowLoading(false);
  }, []);

  return (
    <LoadedContext.Provider value={loaded}>
      {showLoading && <LoadingScreen onDone={handleDone} />}
      <div style={{ visibility: loaded ? "visible" : "hidden" }}>
        {children}
      </div>
    </LoadedContext.Provider>
  );
}
