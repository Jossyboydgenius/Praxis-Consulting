"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToggle() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const viewHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScroll = docHeight - viewHeight;
      const progress = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;

      setScrollProgress(progress);
      setIsAtBottom(scrollTop + viewHeight >= docHeight - 80);
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

  const radius = 21;
  const strokeWidth = 2.5;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      type="button"
      aria-label={isAtBottom ? "Scroll to top" : "Scroll down"}
      onClick={handleClick}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold shadow-lg shadow-navy/20 transition-all duration-300 hover:scale-105 hover:bg-navy-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy group",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0",
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full -rotate-90"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        {/* Track */}
        <circle
          className="text-white/10"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx="24"
          cy="24"
        />
        {/* Progress */}
        <circle
          className="text-gold transition-all duration-75 ease-out"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="24"
          cy="24"
        />
      </svg>
      <ArrowUp
        className={cn(
          "h-5 w-5 transition-transform duration-300 relative z-10 group-hover:scale-110",
          isAtBottom ? "rotate-0" : "rotate-180",
        )}
      />
    </button>
  );
}
