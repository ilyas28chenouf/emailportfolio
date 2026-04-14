"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { smooth_scrolling, smooth_scrolling_duration } from "@/data/config";

// Private - not exported
let lenisInstance: Lenis | null = null;

// Only export accessor function
export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function SmoothScrollingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const rafId = useRef<number | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    // Prevent double initialization in Strict Mode
    if (initializedRef.current) return;

    if (smooth_scrolling) {
      lenisInstance = new Lenis({
        smoothWheel: true,
        duration: smooth_scrolling_duration,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      initializedRef.current = true;

      const raf = (time: number) => {
        lenisInstance?.raf(time);
        rafId.current = requestAnimationFrame(raf);
      };

      rafId.current = requestAnimationFrame(raf);
    }

    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
      lenisInstance?.destroy();
      lenisInstance = null;
      initializedRef.current = false;
    };
  }, [smooth_scrolling]);

  return <>{children}</>;
}
