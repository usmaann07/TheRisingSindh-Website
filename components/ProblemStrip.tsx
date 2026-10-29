"use client";

import React from "react";
import { ArrowLeftRight, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function ProblemStrip() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-[#f4efea] text-[#1c1917] border-b border-[#eae3db] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-scroll-reveal
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest text-[#d97706] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
            <span>{t.common.evidenceBehindNeed}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
            {t.common.problemStripTitle}<br />
            <span className="font-light">{t.common.problemStripHighlight}</span>
          </h2>
        </div>

        {/* 3 Sand Cards Bento Grid */}
        <div data-scroll-reveal data-scroll-stagger="0.1" className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          {/* Card 1 */}
          <div
            className="md:col-span-5 sand-card p-8 sm:p-10 flex flex-col justify-between hover:shadow-xl transition-all"
          >
            <div>
              <div className="font-serif text-5xl sm:text-6xl font-normal text-[#d97706] tracking-tight">
                32.8%
              </div>
              <h3 className="font-serif text-2xl font-normal text-stone-900 mt-4">
                {t.common.youthUnemploymentTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed font-normal">
                {t.common.youthUnemploymentDesc}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-200/80 text-[11px] font-mono text-stone-500">
              {t.common.youthUnemploymentSource}
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="md:col-span-7 sand-card p-8 sm:p-10 flex flex-col gap-8 hover:shadow-xl transition-all"
          >
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900">
                {t.common.instantProofTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2">
                {t.common.instantProofDesc}
              </p>
            </div>

            <div className="w-full py-6 px-8 rounded-2xl bg-[#f4efea] border border-stone-200/80 flex items-center justify-center gap-8">
              <div className="w-16 h-16 rounded-2xl bg-[#161412] text-white flex items-center justify-center font-bold text-sm shadow-md">
                {t.common.aiLab}
              </div>
              <ArrowLeftRight className="w-7 h-7 text-[#d97706]" />
              <div className="w-16 h-16 rounded-2xl bg-[#d97706] text-white flex items-center justify-center text-center font-bold text-sm shadow-md">
                {t.common.biseMetric}
              </div>
            </div>

            <div className="text-xs text-stone-600">
              {t.common.instantProofSub}
            </div>
          </div>

          {/* Card 3: Wide Card */}
          <div
            className="md:col-span-12 sand-card p-8 sm:p-12 hover:shadow-xl transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 tracking-tight">
                  {t.common.noMarketObsolescenceTitle}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  {t.common.noMarketObsolescenceDesc}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#d97706]">
                  <TrendingUp className="w-4 h-4" />
                  <span>{t.common.compoundingAdvantage}</span>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 rounded-2xl bg-[#f4efea] border border-stone-200/80">
                <div className="flex items-center justify-between pb-3 border-b border-stone-200 text-xs">
                  <div>
                    <span className="text-[10px] text-stone-500 font-semibold uppercase">{t.common.curriculumTrajectory}</span>
                    <div className="font-serif text-2xl font-normal text-stone-900 mt-0.5">{t.common.shippedProof10Years}</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-stone-200 text-stone-700 text-[11px] font-semibold">
                    {t.common.class1ToMatric}
                  </span>
                </div>

                <div className="h-32 sm:h-36 w-full mt-4 flex items-end">
                  <svg viewBox="0 0 500 130" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="warmGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#d97706" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#d97706" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 115 Q 120 105 200 80 T 360 40 T 500 10 L 500 130 L 0 130 Z"
                      fill="url(#warmGrad)"
                    />
                    <path
                      d="M 0 115 Q 120 105 200 80 T 360 40 T 500 10"
                      fill="none"
                      stroke="#d97706"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="500" cy="10" r="4.5" fill="#d97706" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
