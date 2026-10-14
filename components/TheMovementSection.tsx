"use client";

import React from "react";
import { Sparkles, Heart, CheckCircle2, Film, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { AjrakSeal } from "./AjrakPattern";

interface TheMovementProps {
  onOpenModal: (type: "campus-visit") => void;
}

export function TheMovementSection({ onOpenModal }: TheMovementProps) {
  const { t } = useLanguage();

  return (
    <section id="the-movement" className="py-20 md:py-28 bg-[#f4efea] text-[#1c1917] border-b border-[#eae3db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest text-[#d97706] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
            <span>{t.theMovement.badge}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-stone-900 tracking-tight leading-[1.08]">
            {t.theMovement.title}
          </h2>
        </div>

        {/* 3 Core Manifestos */}
        <div className="space-y-6 max-w-4xl mx-auto mb-16">
          {/* 1: The Inheritance */}
          <div className="sand-card p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-3">
              <AjrakSeal size={32} />
              <h3 className="font-serif text-2xl font-normal text-stone-900">
                {t.theMovement.inheritance.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              {t.theMovement.inheritance.desc}
            </p>
          </div>

          {/* 2: The Global Village */}
          <div className="sand-card p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-3 text-[#d97706]">
              <Sparkles className="w-5 h-5 text-[#d97706]" />
              <h3 className="font-serif text-2xl font-normal text-stone-900">
                {t.theMovement.globalVillage.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              {t.theMovement.globalVillage.desc}
            </p>
          </div>

          {/* 3: Build Here, Stay Here */}
          <div className="sand-card p-8 sm:p-10 border-l-4 border-l-[#d97706]">
            <div className="flex items-center gap-3 mb-3 text-[#d97706]">
              <Heart className="w-5 h-5 text-[#d97706]" />
              <h3 className="font-serif text-2xl font-normal text-stone-900">
                {t.theMovement.buildHere.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              {t.theMovement.buildHere.desc}
            </p>
          </div>
        </div>

        {/* 10-Year Picture */}
        <div className="sand-card p-8 sm:p-12 max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900">
              {t.theMovement.tenYearPicture.title}
            </h3>
            <p className="text-xs text-[#d97706] font-semibold mt-1">
              {t.theMovement.tenYearPicture.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {t.theMovement.tenYearPicture.points.map((point, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#f4efea] border border-stone-200/80 flex items-start gap-2.5 text-xs text-stone-700"
              >
                <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <div className="flex items-center gap-2">
              <Film className="w-4 h-4 text-[#d97706]" />
              <span>{t.common.positiveSindhDocNote}</span>
            </div>
          </div>
        </div>

        {/* Invitation CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-serif text-xl sm:text-2xl font-normal text-stone-900 mb-6 leading-relaxed italic">
            “{t.theMovement.invitation}”
          </p>
          <button
            onClick={() => onOpenModal("campus-visit")}
            className="btn-amber-arrow cursor-pointer group"
          >
            <span className="btn-text">
              {t.common.joinTheMovementCta}
            </span>
            <span className="btn-arrow-box group-hover:bg-black/25 transition-colors">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
