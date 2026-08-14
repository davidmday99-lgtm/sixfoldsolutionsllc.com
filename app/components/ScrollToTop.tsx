"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const resetScroll = () => {
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;

      root.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      root.style.scrollBehavior = previousBehavior;
    };

    resetScroll();
    const frame = window.requestAnimationFrame(resetScroll);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
