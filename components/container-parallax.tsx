"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";

interface ContainerParallaxProps {
  children: ReactNode;
  maxRotation?: number;
  className?: string;
}

export function ContainerParallax({
  children,
  maxRotation = 10,
  className,
}: ContainerParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHoveringRef.current) return;
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const tiltY = e.clientX < centerX ? -maxRotation : maxRotation;
      setRotation({ x: -4, y: tiltY });
    };

    const handleMouseEnter = () => {
      isHoveringRef.current = true;
      setRotation({ x: -4, y: maxRotation });
    };

    const handleMouseLeave = () => {
      isHoveringRef.current = false;
      setRotation({ x: 0, y: 0 });
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxRotation]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        perspective: "1200px",
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: "transform 0.15s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}
