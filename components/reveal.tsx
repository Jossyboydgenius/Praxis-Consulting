"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type Direction = "up" | "down" | "left" | "right" | "none"

interface RevealProps {
  children: React.ReactNode
  /** Delay in ms before the animation kicks off once in view */
  delay?: number
  /** Duration in ms of the reveal transition */
  duration?: number
  /** Travel distance in pixels for the entrance */
  distance?: number
  /** Direction the element travels FROM */
  direction?: Direction
  /** Additional class names applied to the wrapper */
  className?: string
  /** Viewport intersection threshold (0–1) */
  threshold?: number
  /** If true, re-triggers every time element enters the viewport */
  repeat?: boolean
}

export function Reveal({
  children,
  delay = 0,
  duration = 700,
  distance = 24,
  direction = "up",
  className,
  threshold = 0.15,
  repeat = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (!repeat) observer.unobserve(entry.target)
          } else if (repeat) {
            setVisible(false)
          }
        })
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, repeat])

  const translateHidden = (() => {
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0)`
      case "down":
        return `translate3d(0, -${distance}px, 0)`
      case "left":
        return `translate3d(${distance}px, 0, 0)`
      case "right":
        return `translate3d(-${distance}px, 0, 0)`
      default:
        return "translate3d(0, 0, 0)"
    }
  })()

  return (
    <div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0, 0, 0)" : translateHidden,
      }}
    >
      {children}
    </div>
  )
}
