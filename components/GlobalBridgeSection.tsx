"use client";

import React from "react";
import { Users, Plane, FileCheck, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

interface GlobalBridgeProps {
  onOpenModal: (type: "lab-bench") => void;
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
    <section id="global-bridge" className="py-20 md:py-28 bg-[#f4efea] text-[#1c1917] border-b border-[#eae3db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest text-[#d97706] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
            <span>{t.globalBridge.badge}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-stone-900 tracking-tight leading-[1.08]">
            {t.globalBridge.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {t.globalBridge.subtitle}
          </p>
        </div>

        {/* 3 Lanes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-700">
                <span>{t.common.directVentureTrack}</span>
                <ArrowUpRight className="w-4 h-4 text-[#d97706]" />
              </div>
            </div>
          ))}
        </div>

        {/* Closing Card */}
        <div className="sand-card p-8 sm:p-12 max-w-3xl mx-auto text-center">
          <p className="font-serif text-xl sm:text-2xl font-normal text-stone-900 leading-relaxed">
            “{t.globalBridge.closing}”
          </p>
          <div className="mt-6">
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
          </div>
        </div>
      </div>
    </section>
  );
}
