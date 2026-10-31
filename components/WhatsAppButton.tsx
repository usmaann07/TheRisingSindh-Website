"use client";

import React, { useState } from "react";
import { MessageSquare, PhoneCall, X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const WHATSAPP_NUMBER = "923468204081";

export function WhatsAppButton() {
  const { language, t, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const getWhatsAppMessage = () => {
    if (language === "sd") {
      return encodeURIComponent("سلام! مان دي رائزنگ سنڌ سيوهڻ ڪيمپس ۾ داخلا ۽ دوري بابت معلومات وٺڻ چاهيان ٿو.");
    }
    if (language === "ur") {
      return encodeURIComponent("السلام علیکم! میں دی رائزنگ سندھ سہون کیمپس کے دورے اور داخلے کے بارے میں معلوم کرنا چاہتا ہوں۔");
    }
    return encodeURIComponent("Hello! I would like to book a campus visit and learn about admissions at The Rising Sindh, Sehwan.");
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${getWhatsAppMessage()}`;

  return (
    <div className={`fixed bottom-6 ${isRTL ? "left-6 items-start" : "right-6 items-end"} z-40 flex flex-col`}>
      {isOpen && (
        <div 
          className="sand-card-dark mb-3 w-72 p-4 text-white animate-in fade-in slide-in-from-bottom-2 duration-150"
          dir={isRTL ? "rtl" : "ltr"}
        >
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d97706] animate-pulse" />
              <span className="text-xs font-semibold text-[#d97706]">
                {t.common.admissionsDeskOnline}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-white p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="py-2.5 text-xs text-stone-300 leading-relaxed font-normal">
            {t.common.admissionsDeskSub}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.common.openWhatsAppChat}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-[#161412] hover:bg-black text-white font-medium rounded-full shadow-2xl transition-all duration-200 hover:scale-105 border border-white/15 cursor-pointer"
        aria-label="Contact via WhatsApp"
      >
        <span className="w-2 h-2 rounded-full bg-[#d97706]" />
        <PhoneCall className="w-4 h-4 text-white" />
        <span className="text-xs font-semibold tracking-wide">
          {t.common.whatsAppLabel}
        </span>
      </button>
    </div>
  );
}
