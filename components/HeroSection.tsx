"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

interface HeroSectionProps {
  onOpenModal: (type: "campus-visit") => void;
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <div className="relative bg-[#161412] text-white overflow-hidden">
      {/* Hero Architectural Area - Clean Solid Dark Background Without Overhead Shades */}
      <section id="home" className="relative min-h-[85vh] pt-32 pb-20 sm:pt-40 sm:pb-28 flex items-center bg-[#161412]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (Exact Webflow Inspo Typography & CTA) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Eyebrow with small amber dot */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[#d97706] uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] animate-ping" />
                <span>{t.hero.badge}</span>
              </motion.div>

              {/* Huge Editorial Serif Headline (Exact Screenshot Style) */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-5xl sm:text-7xl lg:text-[76px] font-normal tracking-tight text-white leading-[1.05]"
              >
                {t.hero.title}<br />
                <span className="italic font-light text-stone-200">{t.hero.highlight}</span>
              </motion.h1>

              {/* Elegant Body Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-sm sm:text-base text-stone-400 max-w-lg leading-relaxed font-normal"
              >
                {t.hero.subtitle}
              </motion.p>

              {/* Distinctive Amber Action Button with Pill Border Radius & No Shadow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="pt-2"
              >
                <button
                  onClick={() => onOpenModal("campus-visit")}
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#b45309] hover:to-[#92400e] text-white font-semibold text-sm sm:text-base border border-amber-400/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer overflow-hidden p-1.5 pl-6 group shadow-none"
                >
                  <span className="py-2 pr-3 tracking-wide">
                    {t.nav.bookVisit}
                  </span>
                  <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/25 flex items-center justify-center group-hover:bg-black/40 transition-colors shrink-0">
                    <ArrowUpRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </button>
              </motion.div>

              {/* Slogan */}
              <div className="text-xs uppercase tracking-widest text-stone-500 font-mono pt-3">
                “{t.meta.slogan}”
              </div>
            </motion.div>

            {/* Right Architectural Student Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-w-md w-full group">
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Asymmetric Notched Stat Strip ("Results that speak for themselves" - Exact Screenshot 1 & 2) */}
      <section className="relative bg-[#f4efea] text-[#1c1917] pt-12 pb-14 border-t border-[#eae3db]">
        {/* Architectural Chamfer Notch on Top Right */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Editorial Serif Section Title */}
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 tracking-tight leading-snug">
                {t.common.resultsSpeak}
              </h2>
            </div>

            {/* Right: 3 Clean Minimalist Stats with Subtitles */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Stat 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="border-l border-stone-300/80 pl-6 group"
              >
                <div className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight group-hover:text-[#d97706] transition-colors">
                  10.9%
                </div>
                <div className="text-[11px] uppercase tracking-wider text-stone-500 font-medium mt-1">
                  {t.common.degreeUnemployment}
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5">
                  {t.common.degreeUnemploymentSub}
                </div>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="border-l border-stone-300/80 pl-6 group"
              >
                <div className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight group-hover:text-[#d97706] transition-colors">
                  3rd / 30
                </div>
                <div className="text-[11px] uppercase tracking-wider text-stone-500 font-medium mt-1">
                  {t.common.siliconValleyRank}
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5">
                  {t.common.siliconValleyRankSub}
                </div>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="border-l border-stone-300/80 pl-6 group"
              >
                <div className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight group-hover:text-[#d97706] transition-colors">
                  100%
                </div>
                <div className="text-[11px] uppercase tracking-wider text-stone-500 font-medium mt-1">
                  {t.common.boardProtected}
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5">
                  {t.common.boardProtectedSub}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
