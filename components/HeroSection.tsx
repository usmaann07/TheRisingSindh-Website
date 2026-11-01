"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

interface HeroSectionProps {
  onOpenModal: (type: "campus-visit") => void;
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  const { t } = useLanguage();
  const resultsSectionRef = useRef<HTMLElement>(null);
  const statRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const section = resultsSectionRef.current;
    const counters = statRefs.current.filter((counter): counter is HTMLSpanElement => counter !== null);
    if (!section || counters.length !== 3) return;

    const targets = [10.9, 3, 100];
    const duration = 800;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let active = false;
    let animationFrame = 0;
    let ordinalAnimation: Animation | null = null;

    const formatOrdinal = (value: number) => {
      const remainder = value % 100;
      const suffix = remainder >= 11 && remainder <= 13
        ? "th"
        : value % 10 === 1
          ? "st"
          : value % 10 === 2
            ? "nd"
            : value % 10 === 3
              ? "rd"
              : "th";
      return `${value}${suffix} / 30`;
    };

    const resetCounters = () => {
      counters[0].textContent = "0%";
      counters[1].textContent = "0 / 30";
      counters[2].textContent = "0%";
    };

    const showFinalValues = () => {
      counters[0].textContent = "10.9%";
      counters[1].textContent = "3rd / 30";
      counters[2].textContent = "100%";
    };

    const startSequence = () => {
      active = true;
      resetCounters();

      if (reducedMotion) {
        showFinalValues();
        return;
      }

      let counterIndex = 0;
      let startTime: number | null = null;
      let lastOrdinal = 0;

      const tick = (timestamp: number) => {
        if (!active) return;
        if (startTime === null) startTime = timestamp;

        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easedProgress = progress < 0.5
          ? 4 * Math.pow(progress, 3)
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        const value = targets[counterIndex] * easedProgress;

        if (counterIndex === 0) {
          const formattedValue = value.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
          counters[counterIndex].textContent = `${formattedValue}%`;
        } else if (counterIndex === 1) {
          const ordinal = Math.min(Math.floor(value), 3);
          if (ordinal !== lastOrdinal) {
            counters[counterIndex].textContent = formatOrdinal(ordinal);
            ordinalAnimation?.cancel();
            ordinalAnimation = counters[counterIndex].animate(
              [
                { opacity: 0.65, transform: "translateY(2px) scale(0.99)" },
                { opacity: 1, transform: "translateY(0) scale(1)" }
              ],
              { duration: 200, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
            );
            lastOrdinal = ordinal;
          }
        } else {
          counters[counterIndex].textContent = `${Math.floor(value)}%`;
        }

        if (progress < 1) {
          animationFrame = requestAnimationFrame(tick);
          return;
        }

        if (counterIndex === 0) counters[counterIndex].textContent = "10.9%";
        if (counterIndex === 1) counters[counterIndex].textContent = "3rd / 30";
        if (counterIndex === 2) counters[counterIndex].textContent = "100%";

        counterIndex += 1;
        startTime = null;
        if (counterIndex < counters.length) {
          animationFrame = requestAnimationFrame(tick);
        }
      };

      animationFrame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !active) {
          startSequence();
        } else if (!entry.isIntersecting && active) {
          active = false;
          cancelAnimationFrame(animationFrame);
          ordinalAnimation?.cancel();
          resetCounters();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => {
      active = false;
      cancelAnimationFrame(animationFrame);
      ordinalAnimation?.cancel();
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative bg-[#161412] text-white overflow-hidden">
      {/* Hero Architectural Area - Clean Solid Dark Background Without Overhead Shades */}
      <section id="home" className="relative min-h-[85vh] pt-32 pb-20 sm:pt-40 sm:pb-28 flex items-center bg-[#161412]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (Exact Webflow Inspo Typography & CTA) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow with small amber dot */}
              <div
                className="hero-entrance hero-entrance-eyebrow flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[#d97706] uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
                <span>{t.hero.badge}</span>
              </div>

              {/* Huge Editorial Serif Headline (Exact Screenshot Style) */}
              <h1
                className="font-serif text-5xl sm:text-6xl lg:text-[clamp(4rem,5vw,5.5rem)] font-normal tracking-tight text-white leading-[1.05]"
              >
                <span className="hero-entrance hero-entrance-heading block">{t.hero.title}</span>
                <span className="hero-entrance hero-entrance-heading hero-entrance-heading-second block font-light text-stone-200">{t.hero.highlight}</span>
              </h1>

              {/* Elegant Body Paragraph */}
              <p
                className="hero-entrance hero-entrance-subtitle text-sm sm:text-base text-stone-400 max-w-lg leading-relaxed font-normal"
              >
                {t.hero.subtitle}
              </p>

              {/* Distinctive Amber Action Button with Pill Border Radius & No Shadow */}
              <div className="hero-entrance hero-entrance-cta pt-2">
                <button
                  onClick={() => onOpenModal("campus-visit")}
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#b45309] hover:to-[#92400e] text-white font-semibold text-sm sm:text-base border border-amber-400/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden p-1.5 ps-6 group shadow-none"
                >
                  <span className="py-2 pe-3 tracking-wide">
                    {t.nav.bookVisit}
                  </span>
                  <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/25 flex items-center justify-center group-hover:bg-black/40 transition-colors shrink-0">
                    <ArrowUpRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </button>
              </div>

              {/* Slogan */}
              <div className="hero-entrance hero-entrance-slogan text-xs uppercase tracking-widest text-stone-500 font-mono pt-3">
                “{t.meta.slogan}”
              </div>
            </div>

            {/* Right Architectural Student Visual */}
            <div
              className="hero-entrance hero-entrance-visual lg:col-span-5 relative flex justify-center"
            >
              <div className="sand-card-dark relative overflow-hidden max-w-md w-full group">
                <Image
                  src="/images/hero-students.jpg"
                  alt="Students building AI prototypes in Sehwan"
                  width={580}
                  height={420}
                  priority
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-103 transition-all duration-500"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center justify-between text-xs text-stone-300">
                  <span>{t.proofStrip.items[3]}</span>
                  <span className="text-[#d97706] font-mono">{t.common.sehwanSharifLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Notched Stat Strip ("Results that speak for themselves" - Exact Screenshot 1 & 2) */}
      <section ref={resultsSectionRef} className="relative bg-[#f4efea] text-[#1c1917] pt-12 pb-14 border-t border-[#eae3db]">
        {/* Architectural Chamfer Notch on Top Right */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Editorial Serif Section Title */}
            <div data-scroll-reveal className="lg:col-span-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 tracking-tight leading-snug">
                {t.common.resultsSpeak}
              </h2>
            </div>

            {/* Right: 3 Clean Minimalist Stats with Subtitles */}
            <div data-scroll-reveal data-scroll-stagger="0.1" className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Stat 1 */}
              <div
                className="sand-card-inset p-4 sm:p-5 group"
              >
                <div className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight group-hover:text-[#d97706] transition-colors">
                  <span ref={(element) => { statRefs.current[0] = element; }} className="inline-block min-w-[8ch] whitespace-nowrap tabular-nums">0%</span>
                </div>
                <div className="text-[11px] uppercase tracking-wider text-stone-500 font-medium mt-1">
                  {t.common.degreeUnemployment}
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5">
                  {t.common.degreeUnemploymentSub}
                </div>
              </div>

              {/* Stat 2 */}
              <div
                className="sand-card-inset p-4 sm:p-5 group"
              >
                <div className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight group-hover:text-[#d97706] transition-colors">
                  <span ref={(element) => { statRefs.current[1] = element; }} className="inline-block min-w-[8ch] whitespace-nowrap tabular-nums">0 / 30</span>
                </div>
                <div className="text-[11px] uppercase tracking-wider text-stone-500 font-medium mt-1">
                  {t.common.siliconValleyRank}
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5">
                  {t.common.siliconValleyRankSub}
                </div>
              </div>

              {/* Stat 3 */}
              <div
                className="sand-card-inset p-4 sm:p-5 group"
              >
                <div className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight group-hover:text-[#d97706] transition-colors">
                  <span ref={(element) => { statRefs.current[2] = element; }} className="inline-block min-w-[8ch] whitespace-nowrap tabular-nums">0%</span>
                </div>
                <div className="text-[11px] uppercase tracking-wider text-stone-500 font-medium mt-1">
                  {t.common.boardProtected}
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5">
                  {t.common.boardProtectedSub}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
