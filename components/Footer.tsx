"use client";

import React from "react";
import { MapPin, Mail, ShieldCheck, Heart } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-[#161412] text-stone-400 pt-16 pb-12 border-t border-white/10">
      {/* Proof Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div data-scroll-reveal className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-around gap-4 text-center">
            {t.proofStrip.items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-stone-300">
                <ShieldCheck className="w-4 h-4 text-[#d97706] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-scroll-reveal data-scroll-stagger="0.09" className={`grid grid-cols-1 ${isRTL ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-4"} gap-8 pb-12 border-b border-white/10`}>
          {/* Col 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#d97706] text-white flex items-center justify-center font-bold text-xs">
                RS
              </div>
              <span className="font-serif text-lg font-normal text-white">The Rising Sindh</span>
            </div>
            <p className="text-xs font-semibold text-[#d97706]">
              “{t.footer.slogan}”
            </p>
            <p className="text-xs text-stone-500 leading-relaxed font-normal">
              {t.meta.positioning}
            </p>
            <div className="flex min-w-0 items-center gap-1.5 text-xs text-stone-500 pt-1">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{t.common.sehwanLocation}</span>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              {t.common.exploreTitle}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#why-we-exist" className="hover:text-white transition-colors">{t.nav.whyWeExist}</a></li>
              <li><a href="#the-model" className="hover:text-white transition-colors">{t.nav.theModel}</a></li>
              <li><a href="#what-our-students-do" className="hover:text-white transition-colors">{t.nav.whatStudentsDo}</a></li>
              <li><a href="#the-proof" className="hover:text-white transition-colors">{t.nav.theProof}</a></li>
              <li><a href="#global-bridge" className="hover:text-white transition-colors">{t.nav.globalBridge}</a></li>
              <li><a href="#sehwan-campus" className="hover:text-white transition-colors">{t.nav.sehwanCampus}</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              {t.common.programsTitle}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#the-model" className="hover:text-white transition-colors">{t.common.nurseryMatricBise}</a></li>
              <li><a href="#personality-grooming" className="hover:text-white transition-colors">{t.common.heroTrackGorakhTreks}</a></li>
              <li><a href="#student-incubator" className="hover:text-white transition-colors">{t.nav.studentIncubator}</a></li>
              <li><a href="#sehwan-campus" className="hover:text-white transition-colors">{t.common.eveningCommunityAcademy}</a></li>
              <li><a href="#sehwan-campus" className="hover:text-white transition-colors">{t.common.innovationLabBuilders}</a></li>
              <li><a href="#join-us" className="hover:text-white transition-colors">{t.common.saturdayBuildDays}</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              {t.common.valuesTitle}
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed font-normal">
              {t.footer.governanceNote}
            </p>
            <div className="flex min-w-0 items-center gap-1.5 text-xs text-stone-500 pt-1">
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span dir="ltr" className="break-all">admissions@therisingsindh.com</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div data-scroll-reveal className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>{t.footer.rights}</p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>{t.common.craftedWithPride}</span>
            <Heart className="w-3 h-3 text-[#d97706] fill-[#d97706]" />
            <span>{t.common.forSindhFuture}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
