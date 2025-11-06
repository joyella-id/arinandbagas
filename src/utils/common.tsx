"use client";

import { useState, useEffect } from "react";

export const toTwoDigits = (num: number): string => {
  return num < 10 ? `0${num}` : `${num}`;
};

export const copyTextToClipboard = (text: string) => {
  // Copy the text inside the text field
  navigator.clipboard.writeText(text);
};

export const useWindowSize = () => {
  const isClient = typeof window === "object";
  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  });

  function handleResize() {
    setWindowSize({
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    });
  }

  useEffect(() => {
    if (!isClient) {
      console.error("no client");
    } else {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isClient]);

  return windowSize;
};

export const useMobile = () => {
  return (useWindowSize()?.width || 0) <= 480;
};
