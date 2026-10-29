"use client";

import React from "react";
import { 
  Building2, 
  Sparkles, 
  Wrench, 
  ShoppingBag, 
  Factory, 
  CheckCircle2, 
  ArrowUpRight, 
  Users, 
  Target, 
  TrendingUp,
  Cpu
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

interface SMEEnterpriseProps {
  onOpenModal?: (type: "campus-visit" | "build-day" | "lab-bench") => void;
}

export function SMEEnterpriseSection({ onOpenModal }: SMEEnterpriseProps) {
  const { t, language } = useLanguage();

  const getExampleIcon = (id: string) => {
    switch (id) {
      case "data-cable-manufacturing":
        return <Cpu className="w-5 h-5 text-[#d97706]" />;
      case "plastic-bottle-manufacturing":
        return <ShoppingBag className="w-5 h-5 text-[#d97706]" />;
      case "ro-water-treatment":
        return <Wrench className="w-5 h-5 text-[#d97706]" />;
      case "small-soap-making":
        return <Sparkles className="w-5 h-5 text-[#d97706]" />;
      case "mobile-repairing":
        return <Cpu className="w-5 h-5 text-[#d97706]" />;
      case "chappal-making":
        return <ShoppingBag className="w-5 h-5 text-[#d97706]" />;
      case "local-mechanical-craft-workshops":
        return <Wrench className="w-5 h-5 text-[#d97706]" />;
      default:
        return <Factory className="w-5 h-5 text-[#d97706]" />;
    }
  };

  const getOutcomeIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Factory className="w-4 h-4 text-[#d97706]" />;
      case 1:
        return <Users className="w-4 h-4 text-[#d97706]" />;
      case 2:
        return <CheckCircle2 className="w-4 h-4 text-[#d97706]" />;
      case 3:
        return <TrendingUp className="w-4 h-4 text-[#d97706]" />;
      case 4:
        return <Target className="w-4 h-4 text-[#d97706]" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-[#d97706]" />;
    }
  };

  return (
    <section id="student-incubator" className="py-20 md:py-28 bg-[#f4efea] text-[#1c1917] border-b border-[#eae3db] overflow-hidden relative">
      <span id="sme-enterprises" className="sr-only" aria-hidden="true">SMEs and Real Enterprises</span>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          data-scroll-reveal
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest text-[#d97706] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
            <span>{t.smeEnterprises.badge}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-stone-900 tracking-tight leading-[1.08]">
            {t.smeEnterprises.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {t.smeEnterprises.subtitle}
          </p>
        </div>

        {/* 2 Core Concept Explainer Cards: What is an SME & Why Connect Education */}
        <div data-scroll-reveal data-scroll-stagger="0.1" className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          <div
            className="sand-card p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-2 rounded-xl bg-amber-500/10 border border-[#d97706]/20">
                  <Building2 className="w-5 h-5 text-[#d97706]" />
                </div>
                <h3 className="font-serif text-2xl font-normal text-stone-900">
                  {t.smeEnterprises.whatIsSmeTitle}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                {t.smeEnterprises.whatIsSmeDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-500">
              <span className="font-mono text-[#d97706] font-semibold">{t.common.smallMediumEnterprises}</span>
              <span>{t.common.sindhLocalEconomy}</span>
            </div>
          </div>

          <div
            className="sand-card p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-2 rounded-xl bg-amber-500/10 border border-[#d97706]/20">
                  <Factory className="w-5 h-5 text-[#d97706]" />
                </div>
                <h3 className="font-serif text-2xl font-normal text-stone-900">
                  {t.smeEnterprises.whyConnectTitle}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                {t.smeEnterprises.whyConnectDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-500">
              <span className="font-mono text-[#d97706] font-semibold">{t.common.realWorldPractice}</span>
              <span>{t.common.vocationalCareerPathways}</span>
            </div>
          </div>
        </div>

        {/* 4 Required Practical Examples */}
        <div className="mb-20">
          <div data-scroll-reveal className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900">
              {t.smeEnterprises.examplesTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 font-normal">
              {t.smeEnterprises.examplesSubtitle}
            </p>
          </div>

          <div data-scroll-reveal data-scroll-stagger="0.08" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.smeEnterprises.examples.map((example, idx) => (
              <div
                key={example.id}
                className="w-full text-start p-6 rounded-2xl transition-all flex flex-col justify-between border bg-[#f4efea] border-stone-200/90 hover:border-[#d97706]/40 hover:bg-stone-50/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-[#d97706]/20">
                      {getExampleIcon(example.id)}
                    </div>
                    <span className="font-mono text-xs font-bold text-[#d97706]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg sm:text-xl font-normal text-stone-900 mb-2 leading-snug">
                    {example.title}
                  </h4>

                  <p className="text-xs text-stone-600 leading-relaxed font-normal line-clamp-3">
                    {`${example.businessDoes} ${example.studentsLearn}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Core Learning Areas Bento Grid */}
        <div className="max-w-6xl mx-auto">
          <div data-scroll-reveal className="text-center mb-10">
            <h3 className="font-serif text-3xl font-normal text-stone-900">
              {t.smeEnterprises.learningOutcomesTitle}
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              {language === "sd"
                ? "پنج عملي ۽ فني شعبا جيڪي درسي تعليم کي حقيقي ڪم سان ڳنڍين ٿا"
                : language === "ur"
                  ? "پانچ عملی اور فنی شعبے جو نصابی تعلیم کو حقیقی کام سے جوڑتے ہیں"
                  : "Five practical skills connecting classroom learning with real work"}
            </p>
          </div>

          <div data-scroll-reveal data-scroll-stagger="0.08" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.smeEnterprises.learningOutcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="sand-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="p-1.5 rounded-lg bg-amber-500/10 border border-[#d97706]/20">
                      {getOutcomeIcon(idx)}
                    </div>
                    <h4 className="font-serif text-base sm:text-lg font-normal text-stone-900">
                      {outcome.title}
                    </h4>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {outcome.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action Strip */}
        <div data-scroll-reveal className="mt-16 text-center">
          <button
            onClick={() => onOpenModal?.("campus-visit")}
            className="btn-amber-arrow cursor-pointer group inline-flex"
          >
            <span className="btn-text">
              {t.nav.bookVisit}
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
