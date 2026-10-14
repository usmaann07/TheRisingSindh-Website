"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { Language, SiteContent, contentMap } from "./content";

const LANGUAGE_STORAGE_KEY = "rising_sindh_lang";
const languageSubscribers = new Set<() => void>();
let currentLanguage: Language = "en";

function getLanguageSnapshot(): Language {
  return currentLanguage;
}

function getServerLanguageSnapshot(): Language {
  return "en";
}

function subscribeToLanguage(onChange: () => void) {
  languageSubscribers.add(onChange);
  const handleStorage = (event: StorageEvent) => {
    if (event.key === LANGUAGE_STORAGE_KEY || event.key === null) {
      currentLanguage = event.newValue === "sd" || event.newValue === "ur"
        ? event.newValue
        : "en";
      onChange();
    }
  };

  window.addEventListener("storage", handleStorage);
  return () => {
    languageSubscribers.delete(onChange);
    window.removeEventListener("storage", handleStorage);
  };
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: SiteContent;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot
  );

  const setLanguage = (lang: Language) => {
    if (typeof window !== "undefined") {
      currentLanguage = lang;
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
      document.documentElement.dir = lang === "sd" || lang === "ur" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
      languageSubscribers.forEach((onChange) => onChange());
    }
  };

  useEffect(() => {
    document.documentElement.dir = language === "sd" || language === "ur" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const isRTL = language === "sd" || language === "ur";
  const t = contentMap[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
