"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mic, Users, Mountain, Shield, Flame, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export function HeroTrackSection() {
  const { t } = useLanguage();
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  return (
    <section id="hero-track" className="py-20 md:py-28 bg-[#f4efea] text-[#1c1917] border-b border-[#eae3db] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[#d97706] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
              <span>{t.heroTrack.badge}</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl font-normal text-stone-900 tracking-tight leading-[1.08]">
              {t.heroTrack.title}
            </h2>

            <p className="font-serif text-lg italic text-[#d97706]">
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
                  className={`w-full text-left sand-card p-5 cursor-pointer transition-all ${
                    selectedPillar === idx ? "border-[#d97706] shadow-md bg-stone-50/50" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2 font-serif text-base font-normal text-stone-900">
                      {idx === 0 && <Mic className="w-4 h-4 text-[#d97706]" />}
                      {idx === 1 && <Users className="w-4 h-4 text-[#d97706]" />}
                      {idx === 2 && <Mountain className="w-4 h-4 text-[#d97706]" />}
                      {idx === 3 && <Shield className="w-4 h-4 text-[#d97706]" />}
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

            {/* The Hero Oath at Class 9 */}
            <div className="sand-card p-6 border-l-4 border-l-[#d97706]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d97706] mb-1.5">
                <Flame className="w-4 h-4 text-[#d97706]" />
                <span>{t.heroTrack.heroOath.title}</span>
              </div>
              <p className="font-serif text-base sm:text-lg font-normal text-stone-900 italic leading-relaxed">
                {t.heroTrack.heroOath.text}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Clean Framed Photo */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-[24px] overflow-hidden shadow-xl border border-stone-300/80 bg-white p-2">
              <Image
                src="/images/hero-track.jpg"
                alt="Students on Gorakh Hills survival trek"
                width={600}
                height={450}
                className="w-full h-auto rounded-[18px] object-cover"
              />
              <div className="p-4 flex items-center justify-between text-xs text-stone-600">
                <span className="font-serif text-sm font-normal text-stone-900">{t.common.gorakhTrekTitle}</span>
                <span className="text-[#d97706] font-mono">{t.common.elevation5688}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
