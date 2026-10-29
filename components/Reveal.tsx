"use client";

import React from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.65
}: RevealProps) {
  return (
    <div
      data-scroll-reveal
      data-scroll-delay={delay}
      data-scroll-direction={direction}
      data-scroll-duration={duration}
      className={className}
    >
      {children}
    </div>
  );
}
