"use client";

import { ReactNode, useState, useEffect } from "react";
import { useIntersectionObserver } from "@/utils/intersectionObserver";

export const ClientOnlyWrapper = ({ children }: { children: ReactNode }) => {
  const [rendered, setRendered] = useState(false);
  useIntersectionObserver();
  // useEnableEditDynamicText(rendered);
  useEffect(() => {
    setRendered(true);
  }, []);

  if (!rendered) {
    return <></>;
  }
  return <>{children}</>;
};
