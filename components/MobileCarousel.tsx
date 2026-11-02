"use client";

import React, { forwardRef, HTMLAttributes, useCallback, useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

interface MobileCarouselProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const MobileCarousel = forwardRef<HTMLDivElement, MobileCarouselProps>(
  function MobileCarousel({ children, className, onScroll, ...props }, forwardedRef) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isReversingRef = useRef(false);
  const [isReversing, setIsReversing] = useState(false);

  const setDirection = (reversing: boolean) => {
    isReversingRef.current = reversing;
    setIsReversing(reversing);
  };

  const getNearestCardIndex = (carousel: HTMLDivElement) => {
    const isRTL = getComputedStyle(carousel).direction === "rtl";
    const start = isRTL
      ? carousel.getBoundingClientRect().right
      : carousel.getBoundingClientRect().left;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    Array.from(carousel.children).forEach((child, index) => {
      const bounds = child.getBoundingClientRect();
      const distance = Math.abs((isRTL ? bounds.right : bounds.left) - start);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    return nearestIndex;
  };

  const updatePosition = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel || carousel.children.length < 2) {
      setDirection(true);
      return;
    }

    const nearestIndex = getNearestCardIndex(carousel);
    if (nearestIndex === 0) setDirection(false);
    else if (nearestIndex === carousel.children.length - 1) setDirection(true);
  }, []);

  useEffect(() => {
    updatePosition();
    const carousel = carouselRef.current;
    if (!carousel || typeof ResizeObserver === "undefined") return;

    const resizeObserver = new ResizeObserver(updatePosition);
    resizeObserver.observe(carousel);
    return () => resizeObserver.disconnect();
  }, [updatePosition]);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    onScroll?.(event);
    if (animationFrameRef.current !== null) return;

    animationFrameRef.current = window.requestAnimationFrame(() => {
      animationFrameRef.current = null;
      updatePosition();
    });
  };

  useEffect(
    () => () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    },
    []
  );

  const scrollToAdjacentCard = () => {
    const carousel = carouselRef.current;
    if (!carousel || carousel.children.length < 2) return;

    const nearestIndex = getNearestCardIndex(carousel);
    const direction = isReversingRef.current ? -1 : 1;
    const nextIndex = Math.max(
      0,
      Math.min(carousel.children.length - 1, nearestIndex + direction)
    );
    carousel.children[nextIndex]?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "nearest",
      inline: "start"
    });
  };

  return (
    <div className="mobile-carousel-shell">
      <div
        {...props}
        ref={(node) => {
          carouselRef.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        role="region"
        data-mobile-carousel
        className={className}
        onScroll={handleScroll}
      >
        {children}
      </div>
      <button
        type="button"
        className={`mobile-carousel-arrow${isReversing ? " is-at-end" : ""}`}
        onClick={scrollToAdjacentCard}
        aria-label={isReversing ? "Show previous cards" : "Show next cards"}
      >
        <ChevronRight aria-hidden="true" />
      </button>
    </div>
  );
  }
);

MobileCarousel.displayName = "MobileCarousel";
