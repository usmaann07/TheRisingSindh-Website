"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function TheTurnSection() {
  const { t } = useLanguage();

  return (
    <section id="why-we-exist" className="py-20 md:py-28 bg-[#f4efea] text-[#1c1917] border-b border-[#eae3db] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Split Showcase (Exact Webflow Inspo Screenshot Lower Half) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Framed Documentary Photograph with Rounded Corners */}
          <div
            data-scroll-reveal
            data-scroll-direction="left"
            className="lg:col-span-6 relative"
          >
            <div className="rounded-[24px] overflow-hidden shadow-2xl border border-stone-300/80 bg-white p-2 group">
              <Image
                src="/images/sehwan-lab.jpg"
                alt="Student building at modern wooden desk with tech hardware"
                width={600}
                height={500}
                className="w-full h-auto rounded-[18px] object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right: Editorial Serif Headline & Amber CTA Button */}
          <div
            data-scroll-reveal
            data-scroll-direction="right"
            data-scroll-delay="0.15"
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[#d97706] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
              <span>{t.theTurn.badge}</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight leading-[1.08]">
              {t.theTurn.title}
            </h2>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal max-w-lg">
              {t.theTurn.description}
            </p>

            <div className="pt-2">
              <a
                href="#the-model"
                className="btn-amber-arrow cursor-pointer group"
              >
                <span className="btn-text">
                  {t.nav.theModel}
                </span>
                <span className="btn-arrow-box group-hover:bg-black/25 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
