"use client";

import React, { useCallback, useEffect, useState } from "react";
import { X, CheckCircle2, Calendar, Phone, Sparkles, Send, Award, Users, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { useLanguage } from "@/lib/language-context";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "campus-visit" | "build-day" | "teach" | "lab-bench" | null;
}

export function ActionModal({ isOpen, onClose, type }: ModalProps) {
  const { t, isRTL } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gradeOrRole: "Class 6-7",
    track: "Train First AI Model",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage(t.common.validationName);
      return;
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 10) {
      setErrorMessage(t.common.validationPhone);
      return;
    }

    setErrorMessage("");
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#d97706", "#161412", "#f4efea"]
    });
  };

  const resetAndClose = useCallback(() => {
    setSubmitted(false);
    setErrorMessage("");
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") resetAndClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, resetAndClose]);

  if (!isOpen || !type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) resetAndClose();
      }}
    >
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="action-modal-title"
        className="relative w-full max-w-lg max-h-[calc(100dvh-2rem)] overflow-y-auto bg-[#161412] text-white border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <button
          type="button"
          onClick={resetAndClose}
          className={`absolute top-5 ${isRTL ? "left-5" : "right-5"} p-2 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 text-[#d97706] flex items-center justify-center border border-amber-500/30">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 id="action-modal-title" className="font-serif text-2xl font-normal text-white">
              {t.common.registrationReceived}
            </h3>
            <p className="text-sm text-stone-400 max-w-sm mx-auto">
              {t.common.registrationReceivedDesc}
            </p>
            <div className="pt-4">
              <button
                onClick={resetAndClose}
                className="px-6 py-2.5 rounded-full bg-[#d97706] hover:bg-[#b45309] text-white font-semibold text-xs shadow-sm transition-colors cursor-pointer"
              >
                {t.common.done}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-[#d97706] border border-amber-500/20">
                {type === "campus-visit" && <Calendar className="w-5 h-5" />}
                {type === "build-day" && <Sparkles className="w-5 h-5" />}
                {type === "teach" && <Award className="w-5 h-5" />}
                {type === "lab-bench" && <Users className="w-5 h-5" />}
              </div>
              <div>
                <h3 id="action-modal-title" className="font-serif text-xl sm:text-2xl font-normal text-white">
                  {type === "campus-visit" && t.common.bookCampusVisitTitle}
                  {type === "build-day" && t.common.saturdayBuildDayTitle}
                  {type === "teach" && t.common.applyToTeachTitle}
                  {type === "lab-bench" && t.common.labBenchTitle}
                </h3>
                <p className="text-xs text-[#d97706] font-mono">{t.common.modalSubtitle}</p>
              </div>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label htmlFor="modal-full-name" className="block text-xs font-semibold text-stone-300 mb-1">
                  {t.common.fullName}
                </label>
                <input
                  id="modal-full-name"
                  required
                  type="text"
                  placeholder={t.common.fullNamePlaceholder}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errorMessage) setErrorMessage("");
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-stone-500 focus:outline-none focus:border-[#d97706]"
                />
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-xs font-semibold text-stone-300 mb-1">
                  {t.common.whatsAppNumber}
                </label>
                <div className="relative">
                  <Phone className={`w-4 h-4 text-stone-500 absolute top-3 ${isRTL ? "right-3" : "left-3"}`} />
                  <input
                    id="modal-phone"
                    required
                    type="tel"
                    placeholder="0300 1234567"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errorMessage) setErrorMessage("");
                    }}
                    className={`w-full ${isRTL ? "pr-9 pl-3.5" : "pl-9 pr-3.5"} py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-stone-500 focus:outline-none focus:border-[#d97706]`}
                  />
                </div>
              </div>

              {type === "campus-visit" && (
                <div>
                  <label htmlFor="modal-grade" className="block text-xs font-semibold text-stone-300 mb-1">
                    {t.common.childClass}
                  </label>
                  <select
                    id="modal-grade"
                    value={formData.gradeOrRole}
                    onChange={(e) => setFormData({ ...formData, gradeOrRole: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c1917] border border-white/10 text-white focus:outline-none focus:border-[#d97706]"
                  >
                    <option value="Nursery - KG">{t.common.gradeNursery}</option>
                    <option value="Class 1-3">{t.common.grade1to3}</option>
                    <option value="Class 4-5">{t.common.grade4to5}</option>
                    <option value="Class 6-7">{t.common.grade6to7}</option>
                    <option value="Class 8">{t.common.grade8}</option>
                    <option value="Class 9-10">{t.common.grade9to10}</option>
                  </select>
                </div>
              )}

              {type === "build-day" && (
                <div>
                  <label htmlFor="modal-track" className="block text-xs font-semibold text-stone-300 mb-1">
                    {t.common.workshopTrack}
                  </label>
                  <select
                    id="modal-track"
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c1917] border border-white/10 text-white focus:outline-none focus:border-[#d97706]"
                  >
                    <option value="Train First AI Model">{t.common.trackAI}</option>
                    <option value="3D Printing & Hardware">{t.common.track3D}</option>
                    <option value="Film & Video Studio">{t.common.trackMedia}</option>
                    <option value="Pitch a Startup">{t.common.trackPitch}</option>
                  </select>
                </div>
              )}

              {type === "teach" && (
                <div>
                  <label htmlFor="modal-teaching-pitch" className="block text-xs font-semibold text-stone-300 mb-1">
                    {t.common.teachingPitch}
                  </label>
                  <input
                    id="modal-teaching-pitch"
                    type="text"
                    placeholder={t.common.teachNotesPlaceholder}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-stone-500 focus:outline-none focus:border-[#d97706]"
                  />
                </div>
              )}

              {type === "lab-bench" && (
                <div>
                  <label htmlFor="modal-project-summary" className="block text-xs font-semibold text-stone-300 mb-1">
                    {t.common.projectSummary}
                  </label>
                  <input
                    id="modal-project-summary"
                    type="text"
                    placeholder={t.common.labBenchPlaceholder}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-stone-500 focus:outline-none focus:border-[#d97706]"
                  />
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-white font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.common.submitRequest}</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-stone-400">
                {t.common.nextSeatsLimited}
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
