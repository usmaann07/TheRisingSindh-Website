"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.22,
        ease: "power2.out"
      });

      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.04,
        ease: "none"
      });
    };

    const onMouseEnterInteractive = () => {
      gsap.to(cursor, {
        scale: 1.4,
        backgroundColor: "rgba(217, 119, 6, 0.12)",
        borderColor: "rgba(217, 119, 6, 0.7)",
        duration: 0.18
      });
    };

    const onMouseLeaveInteractive = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "rgba(217, 119, 6, 0.03)",
        borderColor: "rgba(217, 119, 6, 0.35)",
        duration: 0.18
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    const interactiveElements = document.querySelectorAll("button, a, input, select, .sand-card, .sand-card-dark, .sand-card-inset, .btn-amber-arrow");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      {/* Sleek, delicate compact outer ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4.5 h-4.5 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] border border-[#d97706]/40 bg-[#d97706]/5 hidden md:block transition-colors"
      />
      {/* Crisp mini center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-[#d97706] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[10000] hidden md:block"
      />
    </>
  );
}
