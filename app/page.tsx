"use client";

import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TheTurnSection } from "@/components/TheTurnSection";
import { ProblemStrip } from "@/components/ProblemStrip";
import { FourEngines } from "@/components/FourEngines";
import { WhatOurStudentsDo } from "@/components/WhatOurStudentsDo";
import { TheModelTimeline } from "@/components/TheModelTimeline";
import { SMEEnterpriseSection } from "@/components/SMEEnterpriseSection";
import { HeroTrackSection } from "@/components/HeroTrackSection";
import { TheProofSection } from "@/components/TheProofSection";
import { GlobalBridgeSection } from "@/components/GlobalBridgeSection";
import { TheMovementSection } from "@/components/TheMovementSection";
import { SehwanCampusSection } from "@/components/SehwanCampusSection";
import { JoinUsDoors } from "@/components/JoinUsDoors";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ActionModal } from "@/components/Modals";
import { CustomCursor } from "@/components/CustomCursor";
import { useLanguage } from "@/lib/language-context";

export default function Home() {
  const animationRootRef = useRef<HTMLDivElement>(null);
  const refreshAnimationsRef = useRef<() => void>(() => {});
  const { language } = useLanguage();
  const [modalType, setModalType] = useState<"campus-visit" | "build-day" | "teach" | "lab-bench" | null>(null);

  useEffect(() => {
    const root = animationRootRef.current;
    if (!root) return;

    let active = true;
    let cleanupAnimations = () => {};
    let refreshScrollTriggers = () => {};
    let refreshFrame = 0;
    const refresh = () => {
      if (!active || refreshFrame) return;

      refreshFrame = requestAnimationFrame(() => {
        refreshFrame = 0;
        if (active) refreshScrollTriggers();
      });
    };
    refreshAnimationsRef.current = refresh;

    const resizeObserver = typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(refresh)
      : null;
    resizeObserver?.observe(root);

    const initializeScrollAnimations = async () => {
      const { gsap, ScrollTrigger } = await import("@/lib/gsap");
      if (!active) return;

      refreshScrollTriggers = () => ScrollTrigger.refresh();
      const matchMedia = gsap.matchMedia();
      cleanupAnimations = () => matchMedia.revert();

      matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
        const context = gsap.context(() => {}, root);
        try {
          context.add(() => {
            root.querySelectorAll<HTMLElement>("[data-scroll-reveal]").forEach((element) => {
              const targets: HTMLElement[] = element.hasAttribute("data-scroll-stagger")
                ? Array.from(element.children).filter(
                    (child): child is HTMLElement => child instanceof HTMLElement
                  )
                : [element];
              const direction = element.dataset.scrollDirection;
              const animateTransform = !element.hasAttribute("data-scroll-opacity-only");

              if (targets.length === 0) return;

              gsap.fromTo(
                targets,
                {
                  autoAlpha: 0,
                  ...(animateTransform && {
                    x: direction === "left" ? -24 : direction === "right" ? 24 : 0,
                    y: direction === "up" ? 24 : direction === "down" ? -24 : direction === "none" ? 0 : 24,
                    scale: 0.985
                  })
                },
                {
                  autoAlpha: 1,
                  ...(animateTransform && { x: 0, y: 0, scale: 1 }),
                  duration: Number(element.dataset.scrollDuration) || 0.7,
                  delay: Number(element.dataset.scrollDelay) || 0,
                  stagger: Number(element.dataset.scrollStagger) || 0,
                  ease: "power3.out",
                  ...(animateTransform && {
                    onComplete: () => gsap.set(targets, { clearProps: "transform" }),
                    onReverseComplete: () => gsap.set(targets, { clearProps: "transform" })
                  }),
                  scrollTrigger: {
                    trigger: element,
                    start: "top 88%",
                    end: "bottom 12%",
                    toggleActions: "play reverse play reverse",
                    invalidateOnRefresh: true
                  }
                }
              );
            });
          });
        } catch (error) {
          context.revert();
          throw error;
        }

        return () => context.revert();
      });

      refresh();
    };

    void initializeScrollAnimations().catch((error: unknown) => {
      cleanupAnimations();
      if (active) console.error("Failed to initialize scroll animations", error);
    });

    document.addEventListener("load", refresh, true);
    document.fonts.ready.then(refresh);
    if (document.readyState === "complete") refresh();

    return () => {
      active = false;
      refreshAnimationsRef.current = () => {};
      if (refreshFrame) cancelAnimationFrame(refreshFrame);
      document.removeEventListener("load", refresh, true);
      resizeObserver?.disconnect();
      cleanupAnimations();
    };
  }, []);

  useEffect(() => {
    refreshAnimationsRef.current();
  }, [language]);

  const handleOpenModal = (type: "campus-visit" | "build-day" | "teach" | "lab-bench") => {
    setModalType(type);
  };

  const handleCloseModal = () => {
    setModalType(null);
  };

  return (
    <div ref={animationRootRef} className="min-h-screen bg-[#f4efea] text-[#1c1917] selection:bg-[#d97706] selection:text-white relative">
      {/* GSAP Mouse Cursor Follower */}
      <CustomCursor />

      {/* Enhanced Floating Pill Navigation with Increased Size & Functional Dropdown */}
      <Navbar onOpenModal={handleOpenModal} />

      <main>
        {/* Editorial Architectural Hero with Fluted Glass & Notched Stat Strip */}
        <HeroSection onOpenModal={handleOpenModal} />

        {/* Editorial Split Feature: Growth without systems is organized chaos */}
        <TheTurnSection />

        {/* Evidence Bento Grid: 32.8% Unemployment, Instant Proof, No Market Obsolescence */}
        <ProblemStrip />

        {/* Four Synchronized Engines: Deep Espresso Architectural Block */}
        <FourEngines />

        {/* What Our Students Do: Practice Ladder (Age 9 to 16) & Comparison Matrix */}
        <WhatOurStudentsDo />

        {/* Nursery to Matric Two-Layer Curriculum Interactive Timeline & Download Action */}
        <TheModelTimeline onOpenModal={handleOpenModal} />

        {/* SMEs & Real Enterprises: Practical Industry Learning & Local Workshops */}
        <SMEEnterpriseSection onOpenModal={handleOpenModal} />

        {/* Personality Grooming: Character, Communication, Life Skills & Mountain Trekking */}
        <HeroTrackSection />

        {/* The Proof: Founder Precedent from Sehwan to Silicon Valley with Video Proof */}
        <TheProofSection />

        {/* Global Bridge: Three Lanes, Scholarships & International Educational Trips */}
        <GlobalBridgeSection onOpenModal={handleOpenModal} />

        {/* The Movement: Sindh Renaissance, Moenjodaro & Build Here Stay Here */}
        <TheMovementSection onOpenModal={handleOpenModal} />

        {/* Sehwan Campus Blueprint, Innovation Lab & Technology and Community */}
        <SehwanCampusSection onOpenModal={handleOpenModal} />

        {/* Join Us: Four Conversion Doors, Transparent FAQs & Content Governance */}
        <JoinUsDoors onOpenModal={handleOpenModal} />
      </main>

      {/* Global Architectural Footer */}
      <Footer />

      {/* Floating Action WhatsApp Desk */}
      <WhatsAppButton />

      {/* Fully Functional Interactive Application & Booking Modal */}
      <ActionModal
        isOpen={modalType !== null}
        onClose={handleCloseModal}
        type={modalType}
      />
    </div>
  );
}
