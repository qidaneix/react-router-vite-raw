import { useLocation } from "react-router-dom";
import React, { useRef } from "react";

export function useCreateCache(
  element: React.ReactElement | null
): React.ReactElement | null {
  const cacheRef = useRef<Record<string, React.ReactElement | null>>({});

  const { pathname, search, hash } = useLocation();
  const theKey = pathname + search + hash;

  if (!Object.prototype.hasOwnProperty.call(cacheRef.current, theKey)) {
    cacheRef.current[theKey] = element;
  }

  return (
    <>
      {Object.entries(cacheRef.current).map(([key, element]) => {
        const isMatch = key === theKey;
        return (
          <div key={key} style={{ display: isMatch ? "block" : "none" }}>
            {element}
          </div>
        );
      })}
    </>
  );
}
