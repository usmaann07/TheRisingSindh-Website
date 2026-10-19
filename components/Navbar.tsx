"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, ChevronDown, BookOpen, Building2, Rocket } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { Language } from "@/lib/content";

interface NavbarProps {
  onOpenModal: (type: "campus-visit" | "build-day" | "teach" | "lab-bench") => void;
}

export function Navbar({ onOpenModal }: NavbarProps) {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileModelOpen, setMobileModelOpen] = useState(false);
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setModelDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModelDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleLangChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
      <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between pointer-events-auto">
        {/* Floating Centered Pill Navbar with Perfect Internal Alignment & Clean Subtle Shadow */}
        <div className="w-full bg-[#161412]/92 backdrop-blur-xl border border-white/12 rounded-full px-3.5 sm:px-5 2xl:px-6 py-2 sm:py-2.5 shadow-lg shadow-black/25 flex items-center justify-between gap-2 xl:gap-2.5 2xl:gap-4 text-white transition-all duration-200">
          {/* Logo - Sized & Aligned */}
          <Link href="#home" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#d97706] to-[#b45309] flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md group-hover:scale-105 transition-transform shrink-0">
              TRS
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-normal tracking-tight text-white leading-none whitespace-nowrap">
                The Rising Sindh
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#d97706] font-mono mt-0.5 hidden 2xl:block whitespace-nowrap">
                {t.common.brandSubtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Center Navigation Links - Fully Multilingual */}
          <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1.5 text-[11px] 2xl:text-xs font-medium text-stone-300 shrink">
            <a
              href="#why-we-exist"
              className="px-1.5 2xl:px-2 py-1 rounded-lg text-stone-300 hover:text-[#f59e0b] hover:bg-[#d97706]/15 transition-all whitespace-nowrap"
            >
              {t.nav.whyWeExist}
            </a>

            {/* Functional Dropdown for The Model */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                aria-expanded={modelDropdownOpen}
                aria-haspopup="true"
                className="transition-all flex items-center gap-1 px-1.5 2xl:px-2 py-1.5 rounded-lg text-stone-300 hover:text-[#f59e0b] hover:bg-[#d97706]/15 cursor-pointer whitespace-nowrap"
              >
                <span>{t.nav.theModel}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${modelDropdownOpen ? "rotate-180 text-[#f59e0b]" : "text-stone-400"}`} />
              </button>

              {modelDropdownOpen && (
                <div className={`absolute top-full ${isRTL ? "right-0" : "left-0"} mt-3 w-64 bg-[#1c1917] border border-white/10 rounded-2xl p-2 shadow-2xl text-xs space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50`}>
                  <a
                    href="#the-model"
                    onClick={() => setModelDropdownOpen(false)}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-[#d97706]/15 transition-colors text-stone-200 hover:text-[#f59e0b]"
                  >
                    <BookOpen className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">{t.nav.curriculumMap}</div>
                      <div className="text-[11px] text-stone-400">{t.nav.curriculumMapSub}</div>
                    </div>
                  </a>
                  <a
                    href="#student-incubator"
                    onClick={() => setModelDropdownOpen(false)}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-[#d97706]/15 transition-colors text-stone-200 hover:text-[#f59e0b]"
                  >
                    <Rocket className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">{t.nav.studentIncubator}</div>
                      <div className="text-[11px] text-stone-400">{t.nav.studentIncubatorSub}</div>
                    </div>
                  </a>
                  <a
                    href="#sehwan-campus"
                    onClick={() => setModelDropdownOpen(false)}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-[#d97706]/15 transition-colors text-stone-200 hover:text-[#f59e0b]"
                  >
                    <Building2 className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">{t.nav.eveningAcademyNav}</div>
                      <div className="text-[11px] text-stone-400">{t.nav.eveningAcademyNavSub}</div>
                    </div>
                  </a>
                  <a
                    href="#global-bridge"
                    onClick={() => setModelDropdownOpen(false)}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-[#d97706]/15 transition-colors text-stone-200 hover:text-[#f59e0b]"
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">{t.nav.globalBridge}</div>
                      <div className="text-[11px] text-stone-400">{t.globalBridge.subtitle}</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a
              href="#personality-grooming"
              className="px-1.5 2xl:px-2 py-1 rounded-lg text-stone-300 hover:text-[#f59e0b] hover:bg-[#d97706]/15 transition-all whitespace-nowrap"
            >
              {t.nav.theHeroTrackNav}
            </a>
            <a
              href="#what-our-students-do"
              className="px-1.5 2xl:px-2 py-1 rounded-lg text-stone-300 hover:text-[#f59e0b] hover:bg-[#d97706]/15 transition-all whitespace-nowrap"
            >
              {t.nav.whatStudentsDo}
            </a>
            <a
              href="#the-proof"
              className="px-1.5 2xl:px-2 py-1 rounded-lg text-stone-300 hover:text-[#f59e0b] hover:bg-[#d97706]/15 transition-all whitespace-nowrap"
            >
              {t.nav.theProof}
            </a>
            <a
              href="#sehwan-campus"
              className="px-1.5 2xl:px-2 py-1 rounded-lg text-stone-300 hover:text-[#f59e0b] hover:bg-[#d97706]/15 transition-all whitespace-nowrap"
            >
              {t.nav.sehwanCampus}
            </a>
            <a
              href="#the-movement"
              className="px-1.5 2xl:px-2 py-1 rounded-lg text-stone-300 hover:text-[#f59e0b] hover:bg-[#d97706]/15 transition-all whitespace-nowrap"
            >
              {t.nav.theMovement}
            </a>
          </nav>

          {/* Right Action & Multilingual Switcher - Guaranteed Inside Pill */}
          <div className="flex items-center gap-2 2xl:gap-3 shrink-0">
            {/* Language Switcher */}
            <div className="hidden xl:flex items-center bg-white/10 p-0.5 rounded-full text-[10px] 2xl:text-xs font-medium text-stone-300 border border-white/5 shrink-0">
              <button
                onClick={() => handleLangChange("sd")}
                className={`px-2 py-0.5 2xl:px-2.5 2xl:py-1 rounded-full transition-all cursor-pointer ${
                  language === "sd" ? "bg-white text-stone-900 font-bold shadow-xs" : "hover:text-[#f59e0b] hover:bg-[#d97706]/15"
                }`}
                title="سنڌي ٻولي"
              >
                سنڌي
              </button>
              <button
                onClick={() => handleLangChange("ur")}
                className={`px-2 py-0.5 2xl:px-2.5 2xl:py-1 rounded-full transition-all cursor-pointer ${
                  language === "ur" ? "bg-white text-stone-900 font-bold shadow-xs" : "hover:text-[#f59e0b] hover:bg-[#d97706]/15"
                }`}
                title="اردو زبان"
              >
                اردو
              </button>
              <button
                onClick={() => handleLangChange("en")}
                className={`px-2 py-0.5 2xl:px-2.5 2xl:py-1 rounded-full transition-all cursor-pointer ${
                  language === "en" ? "bg-white text-stone-900 font-bold shadow-xs" : "hover:text-[#f59e0b] hover:bg-[#d97706]/15"
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Amber Action Button - Soft Orange Glow on Hover */}
            <button
              onClick={() => onOpenModal("campus-visit")}
              className="hidden xl:flex px-3 2xl:px-4 py-1.5 sm:py-2 rounded-full bg-[#d97706] hover:bg-[#ea580c] hover:shadow-[0_0_15px_rgba(234,88,12,0.5)] text-white text-[11px] 2xl:text-xs font-semibold items-center gap-1.5 transition-all hover:scale-102 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>{t.nav.bookVisit}</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </button>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 text-stone-300 hover:text-[#f59e0b] rounded-lg hover:bg-[#d97706]/15 transition-colors"
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer - Fully Translated */}
      {mobileMenuOpen && (
        <div 
          dir={isRTL ? "rtl" : "ltr"}
          id="mobile-navigation"
          className="xl:hidden max-w-6xl max-h-[calc(100dvh-6rem)] overflow-y-auto mx-auto mt-3 bg-[#161412]/95 backdrop-blur-2xl border border-white/12 rounded-3xl p-5 sm:p-6 text-white pointer-events-auto shadow-2xl animate-in slide-in-from-top-3 duration-200"
        >
          <div className="flex flex-col space-y-4 text-sm font-medium">
            <div className="flex justify-end pb-3 border-b border-white/10">
              <div
                aria-label="Language"
                className="flex items-center bg-white/10 p-1 rounded-full text-xs font-medium text-stone-300"
              >
                <button
                  type="button"
                  onClick={() => handleLangChange("sd")}
                  aria-pressed={language === "sd"}
                  className={`px-2.5 py-1 rounded-full transition-all ${language === "sd" ? "bg-white text-stone-900 font-bold" : "hover:text-[#f59e0b]"}`}
                >
                  سنڌي
                </button>
                <button
                  type="button"
                  onClick={() => handleLangChange("ur")}
                  aria-pressed={language === "ur"}
                  className={`px-2.5 py-1 rounded-full transition-all ${language === "ur" ? "bg-white text-stone-900 font-bold" : "hover:text-[#f59e0b]"}`}
                >
                  اردو
                </button>
                <button
                  type="button"
                  onClick={() => handleLangChange("en")}
                  aria-pressed={language === "en"}
                  className={`px-2.5 py-1 rounded-full transition-all ${language === "en" ? "bg-white text-stone-900 font-bold" : "hover:text-[#f59e0b]"}`}
                >
                  EN
                </button>
              </div>
            </div>
            <a
              href="#why-we-exist"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-stone-300 hover:text-white border-b border-white/5"
            >
              {t.nav.whyWeExist}
            </a>
            <div className="border-b border-white/5">
              <button
                type="button"
                onClick={() => setMobileModelOpen(!mobileModelOpen)}
                aria-expanded={mobileModelOpen}
                className="w-full py-1 text-stone-300 hover:text-white flex items-center justify-between"
              >
                <span>{t.nav.theModel}</span>
                <ChevronDown className={`w-4 h-4 text-[#d97706] transition-transform ${mobileModelOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileModelOpen && (
                <div className="flex flex-col ps-4 pb-2 space-y-3 text-[13px]">
                  <a
                    href="#the-model"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-stone-400 hover:text-white"
                  >
                    {t.nav.curriculumMap}
                  </a>
                  <a
                    href="#student-incubator"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-stone-400 hover:text-white"
                  >
                    {t.nav.studentIncubator}
                  </a>
                  <a
                    href="#sehwan-campus"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-stone-400 hover:text-white"
                  >
                    {t.nav.eveningAcademyNav}
                  </a>
                  <a
                    href="#global-bridge"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-stone-400 hover:text-white"
                  >
                    {t.nav.globalBridge}
                  </a>
                </div>
              )}
            </div>
            <a
              href="#personality-grooming"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-stone-300 hover:text-white border-b border-white/5"
            >
              {t.nav.theHeroTrackNav}
            </a>
            <a
              href="#what-our-students-do"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-stone-300 hover:text-white border-b border-white/5"
            >
              {t.nav.whatStudentsDo}
            </a>
            <a
              href="#the-proof"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-stone-300 hover:text-white border-b border-white/5"
            >
              {t.nav.theProof}
            </a>
            <a
              href="#sehwan-campus"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-stone-300 hover:text-white border-b border-white/5"
            >
              {t.common.sehwanCampusLabNav}
            </a>
            <a
              href="#the-movement"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-stone-300 hover:text-white border-b border-white/5"
            >
              {t.common.theMovementNav}
            </a>

            <div className="pt-2 grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal("campus-visit");
                }}
                className="w-full py-3 rounded-xl bg-[#d97706] text-white font-semibold text-center text-xs flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>{t.nav.bookVisit}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal("build-day");
                }}
                className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-center text-xs flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>{t.common.saturdayBuildDays}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
