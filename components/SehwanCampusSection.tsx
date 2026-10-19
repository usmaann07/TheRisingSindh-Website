"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowUpRight, Check } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

interface SehwanCampusProps {
  onOpenModal: (type: "campus-visit" | "lab-bench") => void;
}

export function SehwanCampusSection({ onOpenModal }: SehwanCampusProps) {
  const { t } = useLanguage();
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);

  return (
    <section id="sehwan-campus" className="py-20 md:py-28 bg-[#f4efea] text-[#1c1917] border-b border-[#eae3db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest text-[#d97706] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
            <span>{t.sehwanCampus.badge}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-stone-900 tracking-tight leading-[1.08]">
            {t.sehwanCampus.title}
          </h2>
        </div>

        {/* Campus Photo & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5 relative">
            <div className="rounded-[24px] overflow-hidden shadow-xl border border-stone-300/80 bg-white p-2">
              <Image
                src="/images/sehwan-lab.jpg"
                alt="Sehwan Campus Innovation Hub"
                width={600}
                height={450}
                className="w-full h-auto rounded-[18px] object-cover"
              />
              <div className="p-4 flex items-center justify-between text-xs text-stone-600">
                <span className="font-serif text-sm font-normal text-stone-900">{t.common.makersInnovationHub}</span>
                <span className="text-[#d97706] font-mono">{t.common.sehwanSharifLabel}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="sand-card p-6">
              <h3 className="font-serif text-xl font-normal text-stone-900 mb-1.5">
                {t.common.whySehwanTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                {t.sehwanCampus.whySehwan}
              </p>
            </div>

            <div className="sand-card p-6">
              <h3 className="font-serif text-xl font-normal text-[#d97706] mb-1.5">
                {t.common.cityProjectsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                {t.sehwanCampus.cityProjects}
              </p>
            </div>

            {/* Campus Spine */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2 font-mono">
                {t.common.campusSpineTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                {t.sehwanCampus.campusSpine.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d97706] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technology and Community */}
        <div className="sand-card p-8 sm:p-12 mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-[#d97706] border border-amber-200 uppercase tracking-wider font-mono">
              {t.common.afterHoursEngine}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 mt-3">
              {t.sehwanCampus.eveningAcademy.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed font-normal">
              {t.sehwanCampus.eveningAcademy.opening}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.sehwanCampus.eveningAcademy.tracks.map((track, idx) => (
              <button
                type="button"
                aria-pressed={selectedTrack === idx}
                key={idx}
                onClick={() => setSelectedTrack(selectedTrack === idx ? null : idx)}
                className={`w-full text-start p-6 rounded-2xl bg-[#f4efea] border border-stone-200/80 hover:border-[#d97706]/40 transition-all cursor-pointer ${
                  selectedTrack === idx ? "border-[#d97706] shadow-sm bg-amber-50/20" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-serif text-lg font-normal text-stone-900">{track.name}</h4>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white border border-stone-200 text-stone-700">
                    {track.duration}
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed mb-3 font-normal">
                  {track.outcome}
                </p>
                <div className="text-[11px] text-[#d97706] font-semibold pt-2 border-t border-stone-200 flex items-center justify-between">
                  <span>{t.common.alignedWithLabel}: {track.alignedWith}</span>
                  {selectedTrack === idx && <Check className="w-3.5 h-3.5 text-[#d97706]" />}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Innovation Lab Benches Card */}
        <div className="sand-card p-8 sm:p-10 max-w-4xl mx-auto mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-serif text-2xl font-normal text-stone-900">
                {t.sehwanCampus.innovationLab.title}
              </h3>
              <p className="text-xs text-stone-600 mt-1 font-normal">
                {t.sehwanCampus.innovationLab.desc}
              </p>
            </div>
            <button
              onClick={() => onOpenModal("lab-bench")}
              className="btn-amber-arrow cursor-pointer group shrink-0"
            >
              <span className="btn-text">{t.common.applyForBenchCta}</span>
              <span className="btn-arrow-box group-hover:bg-black/25 transition-colors">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {t.sehwanCampus.innovationLab.benches.map((b, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#f4efea] border border-stone-200/80 text-xs text-stone-700">
                <span className="text-[#d97706] font-mono font-bold block mb-0.5">0{idx + 1}.</span>
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* Partners Strip */}
        <div className="text-center">
          <span className="text-xs font-semibold text-stone-400 uppercase tracking-widest block mb-4 font-mono">
            {t.common.partnersTitle}
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {t.sehwanCampus.partners.map((partner, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs text-center">
                <div className="font-serif text-base font-normal text-stone-900">{partner.name}</div>
                <div className="text-[11px] text-stone-500 mt-0.5 font-normal">{partner.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
