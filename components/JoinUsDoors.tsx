"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, PhoneCall, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

const WHATSAPP_NUMBER = "923468204081";

interface JoinUsDoorsProps {
  onOpenModal: (type: "campus-visit" | "build-day" | "teach" | "lab-bench") => void;
}

export function JoinUsDoors({ onOpenModal }: JoinUsDoorsProps) {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const getWhatsAppMessage = () => {
    if (language === "sd") {
      return encodeURIComponent("سلام! مان دي رائزنگ سنڌ سيوهڻ ڪيمپس ۾ داخلا ۽ فيس اسڪالرشپ بابت پڇڻ چاهيان ٿو.");
    }
    if (language === "ur") {
      return encodeURIComponent("السلام علیکم! میں دی رائزنگ سندھ سہون کیمپس میں داخلے اور فیس اسکالرشپ کے متعلق معلومات لینا چاہتا ہوں۔");
    }
    return encodeURIComponent("Hello! I would like to inquire about admissions and scholarships at The Rising Sindh Sehwan.");
  };

  return (
    <section id="join-us" className="py-20 md:py-28 bg-[#f4efea] text-[#1c1917] border-b border-[#eae3db] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-scroll-reveal
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest text-[#d97706] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
            <span>{t.joinUs.badge}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-stone-900 tracking-tight leading-[1.08]">
            {t.joinUs.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600">
            {t.common.fourDoorsSubtitle}
          </p>
        </div>

        {/* 2 Primary Doors (Sand & Espresso luxury cards) */}
        <div data-scroll-reveal data-scroll-stagger="0.1" data-scroll-opacity-only className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {/* Door 1: Parents (Warm white sand card) */}
          <motion.button
            type="button"
            aria-haspopup="dialog"
            whileHover={{ y: -5 }}
            onClick={() => onOpenModal("campus-visit")}
            className="sand-card w-full text-start p-8 sm:p-10 cursor-pointer flex flex-col justify-between min-h-[260px] group hover:shadow-xl transition-all"
          >
            <div>
              <span className="text-[11px] font-semibold text-[#d97706] uppercase tracking-wider block mb-2">{t.common.forParentsBadge}</span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
                {t.joinUs.doors[0]?.title || "Campus Visit"}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2.5 leading-relaxed font-normal">
                {t.joinUs.doors[0]?.description}
              </p>
            </div>
            <div className="pt-6 flex items-center justify-between text-stone-900 font-semibold text-sm">
              <span>{t.joinUs.doors[0]?.ctaText || t.common.bookTourCta}</span>
              <div className="w-9 h-9 rounded-lg bg-stone-100 group-hover:bg-[#d97706] group-hover:text-white transition-colors flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.button>

          {/* Door 2: Students (Deep espresso card) */}
          <motion.button
            type="button"
            aria-haspopup="dialog"
            whileHover={{ y: -5 }}
            onClick={() => onOpenModal("build-day")}
            className="sand-card-dark w-full text-start p-8 sm:p-10 text-white cursor-pointer flex flex-col justify-between min-h-[260px] group"
          >
            <div>
              <span className="text-[11px] font-semibold text-[#d97706] uppercase tracking-wider block mb-2">{t.common.forStudentsBadge}</span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
                {t.joinUs.doors[1]?.title || "Saturday Build Day"}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-2.5 leading-relaxed font-normal">
                {t.joinUs.doors[1]?.description}
              </p>
            </div>
            <div className="pt-6 flex items-center justify-between text-white font-semibold text-sm">
              <span>{t.joinUs.doors[1]?.ctaText || t.common.registerBuildDayCta}</span>
              <div className="w-9 h-9 rounded-lg bg-white/10 group-hover:bg-[#d97706] transition-colors flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.button>
        </div>

        {/* Secondary Doors */}
        <div data-scroll-reveal data-scroll-stagger="0.1" className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto mb-16">
          <button
            type="button"
            aria-haspopup="dialog"
            onClick={() => onOpenModal("teach")}
            className="sand-card w-full text-start p-6 cursor-pointer flex items-center justify-between group"
          >
            <div>
              <div className="font-serif text-lg font-normal text-stone-900">{t.common.forTeachersBadge}</div>
              <div className="text-xs text-stone-500 mt-0.5">{t.common.teachersCardDesc}</div>
            </div>
            <div className="w-8 h-8 rounded-lg bg-stone-100 group-hover:bg-[#d97706] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </button>

          <button
            type="button"
            aria-haspopup="dialog"
            onClick={() => onOpenModal("lab-bench")}
            className="sand-card w-full text-start p-6 cursor-pointer flex items-center justify-between group"
          >
            <div>
              <div className="font-serif text-lg font-normal text-stone-900">{t.common.forBuildersBadge}</div>
              <div className="text-xs text-stone-500 mt-0.5">{t.common.buildersCardDesc}</div>
            </div>
            <div className="w-8 h-8 rounded-lg bg-stone-100 group-hover:bg-[#d97706] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* WhatsApp Parents Button */}
        <div data-scroll-reveal className="text-center mb-16">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${getWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-stone-300/80 text-stone-800 hover:border-[#d97706] text-xs sm:text-sm font-semibold transition-all shadow-xs"
          >
            <PhoneCall className="w-4 h-4 text-[#d97706]" />
            <span>{t.common.whatsappParentsPrompt}</span>
          </a>
        </div>

        {/* FAQs in Sand Card */}
        <div data-scroll-reveal className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl font-normal text-stone-900">
              {t.common.faqTitle}
            </h3>
            <p className="text-xs text-stone-500 mt-1">{t.common.faqSubtitle}</p>
          </div>

          <div className="space-y-3">
            {t.joinUs.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="sand-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-start flex items-center justify-between gap-4 font-serif text-base font-normal text-stone-900 hover:text-[#d97706] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content Governance Transparency */}
        <div data-scroll-reveal className="sand-card max-w-3xl mx-auto p-5 text-xs text-stone-500 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#d97706] shrink-0 mt-0.5" />
          <p>
            <strong>{t.common.bindingGovernanceTitle}</strong> {t.common.bindingGovernanceDesc}
          </p>
        </div>
      </div>
    </section>
  );
}
