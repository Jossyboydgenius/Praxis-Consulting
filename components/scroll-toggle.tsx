"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToggle() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const viewHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const nearBottom = scrollTop + viewHeight >= docHeight - 80;

      setIsAtBottom(nearBottom);
      setIsAtTop(scrollTop < 120);
      setIsVisible(scrollTop > 160);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const docHeight = document.documentElement.scrollHeight;
      const maxScroll = Math.max(0, docHeight - window.innerHeight);
      window.scrollTo({ top: maxScroll, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      aria-label={isAtBottom ? "Scroll to top" : "Scroll down"}
      onClick={handleClick}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-gold text-navy font-serif shadow-lg shadow-navy/20 transition-all duration-300 hover:bg-gold-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0",
      )}
    >
      <ArrowUp
        className={cn(
          "h-5 w-5 transition-transform duration-300",
          isAtBottom ? "rotate-0" : "rotate-180",
        )}
      />
    </button>
  );
}
