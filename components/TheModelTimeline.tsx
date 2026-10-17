"use client";

import React, { useState } from "react";
import { Cpu, Briefcase, CheckCircle2, ChevronRight, Download } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

interface TheModelTimelineProps {
  onOpenModal: (type: "campus-visit") => void;
}

export function TheModelTimeline({ onOpenModal }: TheModelTimelineProps) {
  const { t, isRTL, language } = useLanguage();
  const [selectedGrade, setSelectedGrade] = useState(0);

  const stages = t.theModel.timelineStages;

  const handleDownloadPdf = () => {
    // Generate browser print/download view of the curriculum map
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html lang="${language}" dir="${isRTL ? "rtl" : "ltr"}">
          <head>
            <title>${t.nav.curriculumMap} | The Rising Sindh</title>
            <style>
              body { font-family: system-ui, sans-serif; padding: 40px; color: #1c1917; line-height: 1.6; }
              h1 { color: #d97706; margin-bottom: 8px; }
              h2 { color: #161412; border-bottom: 2px solid #eae3db; padding-bottom: 8px; margin-top: 32px; }
              .stage { margin-bottom: 24px; padding: 16px; border: 1px solid #eae3db; border-radius: 8px; }
              .stage-title { font-weight: bold; font-size: 18px; color: #d97706; }
              .pillar { margin-top: 8px; }
              .tag { display: inline-block; background: #f4efea; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
            </style>
          </head>
          <body>
            <h1>The Rising Sindh · ${t.nav.curriculumMap}</h1>
            <p>${t.nav.curriculumMapSub}</p>
            <hr/>
            ${stages
              .map(
                (s) => `
              <div class="stage">
                <div class="stage-title">${s.grade} <span class="tag">${s.milestone}</span></div>
                <div class="pillar"><strong>${t.common.computingPillarTitle}:</strong> ${s.computing}</div>
                <div class="pillar"><strong>${t.common.entrepreneurshipPillarTitle}:</strong> ${s.entrepreneurship}</div>
              </div>
            `
              )
              .join("")}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 300);
    }
  };

  return (
    <section id="the-model" className="py-20 md:py-28 bg-[#f4efea] text-[#1c1917] border-b border-[#eae3db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest text-[#d97706] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
            <span>{t.theModel.badge}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-stone-900 tracking-tight leading-[1.08]">
            {t.theModel.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg font-serif text-[#d97706]">
            {t.theModel.openingPromise}
          </p>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {t.theModel.promiseDetail}
          </p>
        </div>

        {/* Grade Selector Tabs (Interactive with Clean Amber Active State) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {stages.map((stage, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedGrade(idx)}
              className={`px-4 py-2 rounded-full font-medium text-xs sm:text-sm transition-all cursor-pointer ${
                selectedGrade === idx
                  ? "bg-[#161412] text-white shadow-sm border border-stone-800"
                  : "bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-50 border border-stone-200/80"
              }`}
            >
              {stage.grade}
            </button>
          ))}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="sand-card p-8 sm:p-12 max-w-4xl mx-auto mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-100 gap-4">
            <div>
              <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider font-mono">
                {t.common.stageSpecification}
              </span>
              <h3 className="font-serif text-3xl font-normal text-stone-900 mt-0.5">
                {stages[selectedGrade].grade}
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-50 text-[#d97706] border border-amber-200 text-xs font-semibold self-start sm:self-auto">
              {stages[selectedGrade].milestone}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className="p-6 rounded-2xl bg-[#f4efea] border border-stone-200/80">
              <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm mb-2">
                <Cpu className="w-4 h-4 text-[#d97706]" />
                <span>{t.common.computingPillarTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                {stages[selectedGrade].computing}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f4efea] border border-stone-200/80">
              <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm mb-2">
                <Briefcase className="w-4 h-4 text-[#d97706]" />
                <span>{t.common.entrepreneurshipPillarTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                {stages[selectedGrade].entrepreneurship}
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handleDownloadPdf}
              className="text-xs font-semibold text-stone-600 hover:text-stone-900 flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#d97706]" />
              <span>{t.common.printMap}</span>
            </button>
            <button
              onClick={() => onOpenModal("campus-visit")}
              className="text-xs font-bold text-[#d97706] hover:text-[#b45309] flex items-center gap-1 cursor-pointer"
            >
              <span>{t.common.seeFutureLayerLive}</span>
              <ChevronRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>

        {/* 5 Operating Pillars */}
        <div>
          <div className="text-center mb-10">
            <h3 className="font-serif text-3xl font-normal text-stone-900">
              {t.common.howWeTeachTitle}
            </h3>
            <p className="text-xs text-stone-500 mt-1">{t.common.howWeTeachSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {t.theModel.teachingPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="sand-card p-6"
              >
                <div className="flex items-center gap-2 mb-2 font-serif text-base font-normal text-stone-900">
                  <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0" />
                  <span>{pillar.title}</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
