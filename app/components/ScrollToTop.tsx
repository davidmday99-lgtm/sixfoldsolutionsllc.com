"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    let secondFrame = 0;

    const resetScroll = () => {
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;

      root.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      root.style.scrollBehavior = previousBehavior;
    };

    resetScroll();
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(resetScroll);
    });
    const finalReset = window.setTimeout(resetScroll, 150);

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(finalReset);
    };
  }, [pathname]);

  return null;
}
