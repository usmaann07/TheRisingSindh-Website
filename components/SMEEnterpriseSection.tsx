"use client";

import React, { useState } from "react";
import { 
  Building2, 
  Sparkles, 
  Wrench, 
  ShoppingBag, 
  Factory, 
  CheckCircle2, 
  ArrowUpRight, 
  Check, 
  Users, 
  Target, 
  TrendingUp,
  Cpu
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

interface SMEEnterpriseProps {
  onOpenModal?: (type: "campus-visit" | "build-day" | "lab-bench") => void;
}

export function SMEEnterpriseSection({ onOpenModal }: SMEEnterpriseProps) {
  const { t, isRTL } = useLanguage();
  const [selectedExample, setSelectedExample] = useState<number>(0);

  const getExampleIcon = (id: string) => {
    switch (id) {
      case "soap-making":
        return <Sparkles className="w-5 h-5 text-[#d97706]" />;
      case "mobile-repair":
        return <Cpu className="w-5 h-5 text-[#d97706]" />;
      case "footwear-manufacturing":
        return <ShoppingBag className="w-5 h-5 text-[#d97706]" />;
      case "local-workshops":
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
        return <Wrench className="w-4 h-4 text-[#d97706]" />;
      case 2:
        return <Users className="w-4 h-4 text-[#d97706]" />;
      case 3:
        return <CheckCircle2 className="w-4 h-4 text-[#d97706]" />;
      case 4:
        return <TrendingUp className="w-4 h-4 text-[#d97706]" />;
      case 5:
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
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
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
        </motion.div>

        {/* 2 Core Concept Explainer Cards: What is an SME & Why Connect Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1 }}
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.2 }}
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
          </motion.div>
        </div>

        {/* 4 Required Practical Examples Interactive Grid */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900">
              {t.smeEnterprises.examplesTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 font-normal">
              {t.smeEnterprises.examplesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {t.smeEnterprises.examples.map((example, idx) => {
              const isSelected = selectedExample === idx;
              return (
                <button
                  type="button"
                  key={example.id}
                  onClick={() => setSelectedExample(idx)}
                  className={`w-full text-start p-6 rounded-2xl transition-all cursor-pointer flex flex-col justify-between border ${
                    isSelected
                      ? "bg-white border-[#d97706] shadow-xl ring-2 ring-[#d97706]/20 -translate-y-1.5"
                      : "bg-[#f4efea] border-stone-200/90 hover:border-[#d97706]/40 hover:bg-stone-50/50"
                  }`}
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

                    <div className="text-[11px] font-mono text-[#d97706] uppercase tracking-wider mb-1">
                      {example.role}
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl font-normal text-stone-900 mb-2 leading-snug">
                      {example.title}
                    </h4>

                    <p className="text-xs text-stone-600 leading-relaxed font-normal line-clamp-3">
                      {example.businessDoes}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-[11px] font-semibold text-stone-700">
                    <span className="text-[#d97706]">
                      {isSelected ? (isRTL ? "منتخب تفصيل" : "Selected") : (isRTL ? "تفصيل ڏسو ←" : "View Details →")}
                    </span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#d97706]" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Example Detailed Showcase Banner */}
          {t.smeEnterprises.examples[selectedExample] && (
            <motion.div
              key={selectedExample}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="sand-card p-8 sm:p-10 max-w-5xl mx-auto border-s-4 border-s-[#d97706]"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-200/80">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="p-3 rounded-2xl bg-amber-500/15 border border-[#d97706]/30 shrink-0">
                    {getExampleIcon(t.smeEnterprises.examples[selectedExample].id)}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-[#d97706] uppercase tracking-wider block">
                      {t.smeEnterprises.examples[selectedExample].role}
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900">
                      {t.smeEnterprises.examples[selectedExample].title}
                    </h4>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 self-start lg:self-center">
                  {t.smeEnterprises.examples[selectedExample].tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 rounded-full bg-white border border-stone-200 text-[11px] font-medium text-stone-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div className="p-5 rounded-xl bg-white/70 border border-stone-200/70">
                  <h5 className="font-serif text-base font-normal text-stone-900 mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#d97706]" />
                    <span>{isRTL ? "هي ڪاروبار ڇا ڪندو آهي؟" : "What This Business Does in the Local Economy"}</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {t.smeEnterprises.examples[selectedExample].businessDoes}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-amber-50/50 border border-amber-200/60">
                  <h5 className="font-serif text-base font-normal text-[#92400e] mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#d97706]" />
                    <span>{isRTL ? "شاگرد ان مان ڇا سکندا آهن؟" : "What Students Learn From This Experience"}</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                    {t.smeEnterprises.examples[selectedExample].studentsLearn}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* 6 Core Learning Areas Bento Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-serif text-3xl font-normal text-stone-900">
              {t.smeEnterprises.learningOutcomesTitle}
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              {isRTL 
                ? "ڇهه بنيادي عملي ۽ فني شعبا جيڪي درسي تعليم کي حقيقي ڪم سان ڳنڍين ٿا" 
                : "Six essential practical competencies bridging academic curricula with real economic life"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.smeEnterprises.learningOutcomes.map((outcome, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Action Strip */}
        <div className="mt-16 text-center">
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
