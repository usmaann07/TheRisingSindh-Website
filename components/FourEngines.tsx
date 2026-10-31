"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export function FourEngines() {
  const { t } = useLanguage();

  return (
    <section id="four-engines" className="py-20 md:py-28 bg-[#161412] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-scroll-reveal
          className="mb-3"
        >
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[#d97706] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
            <span>{t.fourEngines.badge}</span>
          </div>
        </div>

        <div
          data-scroll-reveal
          className="max-w-3xl mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.08]">
            {t.fourEngines.title}
          </h2>
          <p className="text-sm sm:text-base text-stone-400 mt-4 max-w-2xl font-normal">
            {t.fourEngines.subtitle}
          </p>
        </div>

        {/* 4 Step Numbered Cards */}
        <div data-scroll-reveal data-scroll-stagger="0.15" data-scroll-opacity-only className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {t.fourEngines.engines.map((engine, idx) => (
            <motion.div
              key={engine.id || idx}
              transition={{ duration: 0.65, delay: idx * 0.15 }}
              whileHover={{ y: -6, borderColor: "rgba(217, 119, 6, 0.45)" }}
              className="sand-card-dark p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="font-serif text-4xl sm:text-5xl font-light text-[#d97706]/60 group-hover:text-[#d97706] transition-colors mb-4">
                  0{idx + 1}
                </div>
                <div className="text-[11px] font-mono text-[#d97706] uppercase tracking-wider mb-1.5">
                  {engine.role}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-2.5">
                  {engine.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-normal">
                  {engine.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
