"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export function TheProofSection() {
  const { t } = useLanguage();

  return (
    <section id="the-proof" className="py-20 md:py-28 bg-[#f4efea] text-[#1c1917] border-b border-[#eae3db] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-widest text-[#d97706] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
            <span>{t.common.livingPrecedent}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-stone-900 tracking-tight leading-[1.08]">
            {t.theProof.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {t.theProof.intro.includes("Ali Murtaza Solangi") ? (
              <>
                {t.theProof.intro.split("Ali Murtaza Solangi")[0]}
                <span className="inline-flex items-center px-2 py-0.5 mx-1 rounded-md bg-amber-100/90 text-amber-950 font-bold border border-amber-300 shadow-xs">
                  Ali Murtaza Solangi
                </span>
                {t.theProof.intro.split("Ali Murtaza Solangi")[1]}
              </>
            ) : (
              t.theProof.intro
            )}
          </p>
        </motion.div>

        {/* Investor Precedent Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="sand-card p-8 sm:p-12 mb-16 max-w-4xl mx-auto text-center"
        >
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d97706]">
            {t.common.investorPrecedent}
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 mt-3 mb-3">
            “{t.theProof.investorTitle}”
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
            {t.theProof.investorDesc}
          </p>
        </motion.div>

        {/* Founder Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-[24px] overflow-hidden shadow-2xl border border-stone-300/80 bg-white p-2">
              <div className="relative rounded-[18px] overflow-hidden">
                <Image
                  src="/images/founder-evidence.jpg"
                  alt="Ali Murtaza Solangi presenting at National Technology Conference"
                  width={700}
                  height={520}
                  className="w-full h-auto object-cover max-h-[460px]"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-stone-900/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 flex items-center justify-between text-white text-[11px]">
                  <span className="font-medium text-stone-200">{t.common.nationalStage}</span>
                  <span className="text-[#d97706] font-semibold">{t.common.verifiedArchive}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="sand-card p-8">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 leading-snug">
                {t.theProof.whyItMatters.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                {t.theProof.whyItMatters.desc}
              </p>
            </div>

            <div className="space-y-2">
              {t.theProof.milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-stone-200/80 flex items-start gap-3 text-xs hover:border-[#d97706]/40 transition-colors"
                >
                  <span className="px-2 py-0.5 rounded bg-amber-50 text-[#d97706] font-mono font-bold shrink-0">
                    {m.year}
                  </span>
                  <div>
                    <span className="font-bold text-stone-900">{m.stage}: </span>
                    <span className="text-stone-600">{m.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Founder Quote Band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75 }}
          className="sand-card p-8 sm:p-12 max-w-4xl mx-auto text-center border-2 border-amber-200/60 shadow-xl bg-gradient-to-b from-[#fdfbf9] to-[#f7f2ed]"
        >
          <p className="font-serif text-xl sm:text-2xl font-normal text-stone-900 leading-relaxed">
            {t.theProof.founderQuote.quote}
          </p>
          <div className="mt-6 pt-5 border-t border-amber-200/50 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-amber-400/25 to-amber-500/15 border border-amber-400/50 shadow-xs mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#d97706] animate-pulse" />
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-amber-950">
                {t.theProof.founderQuote.name}
              </span>
            </div>
            <div className="text-xs font-semibold tracking-wider uppercase text-[#d97706]">
              {t.theProof.founderQuote.role}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
