"use client";

import React from "react";
import { MapPin, Mail, ShieldCheck, Heart } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="school-background school-background--footer text-stone-400 pt-16 pb-12 border-t border-white/10">
      {/* Proof Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div data-scroll-reveal className="sand-card-dark p-4 sm:p-5">
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
              <li><a href="#why-we-exist" className="footer-link hover:text-white transition-colors">{t.nav.whyWeExist}</a></li>
              <li><a href="#the-model" className="footer-link hover:text-white transition-colors">{t.nav.theModel}</a></li>
              <li><a href="#what-our-students-do" className="footer-link hover:text-white transition-colors">{t.nav.whatStudentsDo}</a></li>
              <li><a href="#the-proof" className="footer-link hover:text-white transition-colors">{t.nav.theProof}</a></li>
              <li><a href="#global-bridge" className="footer-link hover:text-white transition-colors">{t.nav.globalBridge}</a></li>
              <li><a href="#sehwan-campus" className="footer-link hover:text-white transition-colors">{t.nav.sehwanCampus}</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              {t.common.programsTitle}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#the-model" className="footer-link hover:text-white transition-colors">{t.common.nurseryMatricBise}</a></li>
              <li><a href="#personality-grooming" className="footer-link hover:text-white transition-colors">{t.common.heroTrackGorakhTreks}</a></li>
              <li><a href="#student-incubator" className="footer-link hover:text-white transition-colors">{t.nav.studentIncubator}</a></li>
              <li><a href="#sehwan-campus" className="footer-link hover:text-white transition-colors">{t.common.eveningCommunityAcademy}</a></li>
              <li><a href="#sehwan-campus" className="footer-link hover:text-white transition-colors">{t.common.innovationLabBuilders}</a></li>
              <li><a href="#join-us" className="footer-link hover:text-white transition-colors">{t.common.saturdayBuildDays}</a></li>
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
            <div className="flex flex-col gap-2 pt-1 text-xs">
              <a
                href="https://www.facebook.com/DICSEHWAN"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link flex items-center gap-2 text-stone-400 transition-colors hover:text-white"
              >
                <svg aria-hidden="true" viewBox="0 0 16 16" className="site-social-icon h-4 w-4 shrink-0 fill-[#1877F2]">
                  <path d="M9.1 15V8.7h2.1l.3-2.5H9.1V4.6c0-.7.2-1.2 1.2-1.2h1.3V1.2C11.3 1.1 10.6 1 9.8 1 7.7 1 6.3 2.3 6.3 4.4v1.8H4v2.5h2.3V15z" />
                </svg>
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/therisingsindh/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link flex items-center gap-2 text-stone-400 transition-colors hover:text-white"
              >
                <svg aria-hidden="true" viewBox="0 0 16 16" className="site-social-icon h-4 w-4 shrink-0 fill-none stroke-current" strokeWidth="1.5">
                  <defs>
                    <linearGradient id="instagram-brand-gradient" x1="0" y1="1" x2="1" y2="0">
                      <stop offset="0%" stopColor="#FFDC80" />
                      <stop offset="35%" stopColor="#FCAF45" />
                      <stop offset="65%" stopColor="#F77737" />
                      <stop offset="82%" stopColor="#E1306C" />
                      <stop offset="100%" stopColor="#833AB4" />
                    </linearGradient>
                  </defs>
                  <g stroke="url(#instagram-brand-gradient)">
                  <rect x="2" y="2" width="12" height="12" rx="3.5" />
                  <circle cx="8" cy="8" r="2.7" />
                  <circle cx="11.7" cy="4.4" r=".7" className="fill-[#E1306C] stroke-none" />
                  </g>
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/therisingsindh/posts/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link flex items-center gap-2 text-stone-400 transition-colors hover:text-white"
              >
                <svg aria-hidden="true" viewBox="0 0 16 16" className="site-social-icon h-4 w-4 shrink-0 fill-[#0A66C2]">
                  <path d="M3.3 5.7H1V15h2.3zM2.2 1a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6M15 9.7c0-2.5-1.3-3.7-3.1-3.7a2.7 2.7 0 0 0-2.4 1.3V6H7.2v9h2.3v-4.5c0-1.2.2-2.3 1.7-2.3s1.5 1.3 1.5 2.4V15H15z" />
                </svg>
                <span>LinkedIn</span>
              </a>
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
