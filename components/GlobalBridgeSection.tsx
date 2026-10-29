"use client";

import React from "react";
import { Users, Plane, FileCheck, ArrowUpRight, GraduationCap, Globe, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

interface GlobalBridgeProps {
  onOpenModal: (type: "lab-bench" | "campus-visit") => void;
}

export function GlobalBridgeSection({ onOpenModal }: GlobalBridgeProps) {
  const { t } = useLanguage();

  const getLaneIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Users className="w-5 h-5 text-[#d97706]" />;
      case 1:
        return <Plane className="w-5 h-5 text-[#d97706]" />;
      case 2:
        return <FileCheck className="w-5 h-5 text-[#d97706]" />;
      default:
        return <Users className="w-5 h-5 text-[#d97706]" />;
    }
  };

  return (
    <section id="global-bridge" className="py-20 md:py-28 bg-[#f4efea] text-[#1c1917] border-b border-[#eae3db] overflow-hidden relative">
      <span id="scholarships" className="sr-only" aria-hidden="true">Scholarships</span>
      <span id="international-trips" className="sr-only" aria-hidden="true">International Educational Trips</span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          data-scroll-reveal
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest text-[#d97706] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
            <span>{t.globalBridge.badge}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-stone-900 tracking-tight leading-[1.08]">
            {t.globalBridge.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {t.globalBridge.subtitle}
          </p>
        </div>

        {/* 3 Global Lanes */}
        <div data-scroll-reveal data-scroll-stagger="0.12" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {t.globalBridge.lanes.map((lane, idx) => (
            <div
              key={idx}
              className="sand-card p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl font-light text-stone-400">
                    {t.common.lanePrefix} {lane.laneNumber}
                  </span>
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-[#d97706]/20">
                    {getLaneIcon(idx)}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-normal text-stone-900 mb-1.5">
                  {lane.title}
                </h3>
                <div className="text-xs font-semibold text-[#d97706] mb-3">
                  {lane.highlight}
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  {lane.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-200/80 flex items-center justify-between text-xs font-semibold text-stone-700">
                <span>{t.common.directVentureTrack}</span>
                <ArrowUpRight className="w-4 h-4 text-[#d97706]" />
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Highlighting: Scholarships & International Educational Trips Showcase */}
        {t.globalBridge.scholarshipHighlight && t.globalBridge.internationalTripsHighlight && (
          <div className="mb-16">
            <div data-scroll-reveal data-scroll-stagger="0.12" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Highlight Card 1: Scholarships for Deserving & Talented Students */}
              <div
                className="sand-card p-8 sm:p-10 flex flex-col justify-between border-s-4 border-s-[#d97706] shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/15 border border-[#d97706]/30">
                      <GraduationCap className="w-6 h-6 text-[#d97706]" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#d97706] uppercase tracking-wider">
                      {t.globalBridge.scholarshipHighlight.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 tracking-tight mb-2">
                    {t.globalBridge.scholarshipHighlight.title}
                  </h3>

                  <p className="font-serif text-base text-[#d97706] mb-3">
                    {t.globalBridge.scholarshipHighlight.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal mb-6">
                    {t.globalBridge.scholarshipHighlight.description}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-stone-200/70">
                    {t.globalBridge.scholarshipHighlight.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-200/80 bg-amber-50/60 p-4 rounded-xl">
                  <p className="font-serif text-xs sm:text-sm italic text-stone-800">
                    “{t.globalBridge.scholarshipHighlight.valueProposition}”
                  </p>
                </div>
              </div>

              {/* Highlight Card 2: International Educational Trips & Cultural Exposure */}
              <div
                className="sand-card p-8 sm:p-10 flex flex-col justify-between border-s-4 border-s-[#d97706] shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/15 border border-[#d97706]/30">
                      <Globe className="w-6 h-6 text-[#d97706]" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#d97706] uppercase tracking-wider">
                      {t.globalBridge.internationalTripsHighlight.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 tracking-tight mb-2">
                    {t.globalBridge.internationalTripsHighlight.title}
                  </h3>

                  <p className="font-serif text-base text-[#d97706] mb-3">
                    {t.globalBridge.internationalTripsHighlight.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal mb-6">
                    {t.globalBridge.internationalTripsHighlight.description}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-stone-200/70">
                    {t.globalBridge.internationalTripsHighlight.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-200/80 bg-amber-50/60 p-4 rounded-xl">
                  <p className="font-serif text-xs sm:text-sm italic text-stone-800">
                    “{t.globalBridge.internationalTripsHighlight.valueProposition}”
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Closing Card */}
        <div className="sand-card p-8 sm:p-12 max-w-3xl mx-auto text-center">
          <p className="font-serif text-xl sm:text-2xl font-normal text-stone-900 leading-relaxed">
            “{t.globalBridge.closing}”
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenModal("lab-bench")}
              className="btn-amber-arrow cursor-pointer group"
            >
              <span className="btn-text">
                {t.common.partnerVentureCta}
              </span>
              <span className="btn-arrow-box group-hover:bg-black/25 transition-colors">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </span>
            </button>
            <button
              onClick={() => onOpenModal("campus-visit")}
              className="px-5 py-3 rounded-full bg-white border border-stone-300 hover:border-[#d97706] text-stone-800 text-xs font-semibold transition-all hover:bg-stone-50 cursor-pointer"
            >
              {t.nav.bookVisit}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
