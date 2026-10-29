"use client";

import React, { useState } from "react";
import { Check, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function WhatOurStudentsDo() {
  const { t, isRTL } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="what-our-students-do" className="py-20 md:py-28 bg-[#f4efea] text-[#1c1917] border-b border-[#eae3db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-scroll-reveal className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest text-[#d97706] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
            <span>{t.whatStudentsDo.badge}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-stone-900 tracking-tight leading-[1.08]">
            {t.whatStudentsDo.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {t.whatStudentsDo.intro}
          </p>
        </div>

        {/* 6 Sand Cards Ladder */}
        <div data-scroll-reveal data-scroll-stagger="0.09" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.whatStudentsDo.ladder.map((step, idx) => (
            <button
              type="button"
              aria-pressed={activeStep === idx}
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`w-full text-start sand-card p-8 flex flex-col justify-between cursor-pointer ${
                activeStep === idx
                  ? "border-[#d97706] shadow-lg -translate-y-1"
                  : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-xl font-normal text-[#d97706]">{step.age}</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#f4efea] text-stone-700 font-semibold">
                    {step.grade}
                  </span>
                </div>
                <h4 className="font-serif text-xl font-normal text-stone-900 mb-2 leading-snug">
                  {step.task}
                </h4>
              </div>
              <p className="text-xs text-stone-500 pt-4 mt-4 border-t border-stone-100">
                {step.contrast}
              </p>
            </button>
          ))}
        </div>

        {/* Comparison Matrix in Sand Card */}
        <div data-scroll-reveal className="sand-card p-8 sm:p-12 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900">
              {t.common.systemComparisonMatrix}
            </h3>
            <p className="text-xs text-stone-500 mt-1">{t.common.systemComparisonSub}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-start border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className={`py-3 px-4 font-serif text-stone-600 font-normal text-base bg-stone-50 ${isRTL ? "rounded-tr-xl" : "rounded-tl-xl"} w-1/2`}>
                    {t.whatStudentsDo.comparison.headers[0]}
                  </th>
                  <th className={`py-3 px-4 font-serif text-[#d97706] font-normal text-base bg-amber-50/50 ${isRTL ? "rounded-tl-xl" : "rounded-tr-xl"} w-1/2`}>
                    {t.whatStudentsDo.comparison.headers[1]}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {t.whatStudentsDo.comparison.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/40 transition-colors">
                    <td className="py-3.5 px-4 text-stone-500">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                        <span>{row.typical}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-stone-900 font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                        <span>{row.rising}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
