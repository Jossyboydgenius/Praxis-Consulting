"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
  /** Final number to count up to */
  value: number
  /** Text appended after the number (e.g. "+" or "%") */
  suffix?: string
  /** Text placed before the number */
  prefix?: string
  /** Duration of the count animation in ms */
  duration?: number
  /** Optional className for the wrapping span */
  className?: string
  /** Intersection threshold to start the animation */
  threshold?: number
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1800,
  className,
  threshold = 0.4,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)

  // Trigger when in view
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      setDisplay(value)
      setStarted(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, value])

  // Animate
  useEffect(() => {
    if (!started) return
    let rafId = 0
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // easeOutExpo for a satisfying odometer feel
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setDisplay(Math.round(value * eased))
      if (progress < 1) rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [started, value, duration])

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
