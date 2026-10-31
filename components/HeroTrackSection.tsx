"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageSquare, ShieldCheck, Mountain, Users, Flame, Check } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function HeroTrackSection() {
  const { t } = useLanguage();
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <MessageSquare className="w-4 h-4 text-[#d97706]" />;
      case 1:
        return <ShieldCheck className="w-4 h-4 text-[#d97706]" />;
      case 2:
        return <Mountain className="w-4 h-4 text-[#d97706]" />;
      case 3:
        return <Users className="w-4 h-4 text-[#d97706]" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-[#d97706]" />;
    }
  };

  return (
    <section id="personality-grooming" className="py-20 md:py-28 bg-[#f4efea] text-[#1c1917] border-b border-[#eae3db] overflow-hidden relative">
      <span id="hero-track" className="sr-only" aria-hidden="true">Personality Grooming</span>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div
            data-scroll-reveal
            data-scroll-direction="left"
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[#d97706] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
              <span>{t.heroTrack.badge}</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl font-normal text-stone-900 tracking-tight leading-[1.08]">
              {t.heroTrack.title}
            </h2>

            <p className="font-serif text-lg text-[#d97706]">
              {t.heroTrack.subtitle}
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
              {t.heroTrack.description}
            </p>

            {/* 4 Clean Sand Feature Cards with Interactive Click Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {t.heroTrack.features.map((feat, idx) => (
                <button
                  type="button"
                  aria-pressed={selectedPillar === idx}
                  key={idx}
                  onClick={() => setSelectedPillar(selectedPillar === idx ? null : idx)}
                  className={`w-full text-start sand-card p-5 cursor-pointer transition-all ${
                    selectedPillar === idx ? "border-[#d97706] shadow-md bg-stone-50/50" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2 font-serif text-base font-normal text-stone-900">
                      {getPillarIcon(idx)}
                      <span>{feat.title}</span>
                    </div>
                    {selectedPillar === idx && <Check className="w-3.5 h-3.5 text-[#d97706]" />}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </button>
              ))}
            </div>

            {/* The Student Character Pledge at Class 9 */}
            <div className="sand-card p-6 border-s-4 border-s-[#d97706]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d97706] mb-1.5">
                <Flame className="w-4 h-4 text-[#d97706]" />
                <span>{t.heroTrack.heroOath.title}</span>
              </div>
              <p className="font-serif text-base sm:text-lg font-normal text-stone-900 leading-relaxed">
                {t.heroTrack.heroOath.text}
              </p>
            </div>
          </div>

          {/* Right Column: Clean Framed Photo */}
          <div
            data-scroll-reveal
            data-scroll-direction="right"
            data-scroll-delay="0.15"
            className="lg:col-span-5 relative"
          >
            <div className="sand-card overflow-hidden p-2">
              <Image
                src="/images/hero-track.jpg"
                alt="Students on mountain trekking expedition across Sindh"
                width={600}
                height={450}
                className="w-full h-auto rounded-[18px] object-cover"
              />
              <div className="p-4 flex items-center justify-between text-xs text-stone-600">
                <span className="font-serif text-sm font-normal text-stone-900">{t.common.gorakhTrekTitle}</span>
                <span className="text-[#d97706] font-mono text-[11px] font-semibold">{t.common.elevation5688}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
