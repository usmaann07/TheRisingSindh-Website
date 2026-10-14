"use client";

import React from "react";

// Authentic Sindhi Ajrak motif block
export function AjrakTile({ className = "w-8 h-8 text-[#a62626]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} aria-hidden="true">
      {/* Outer Ajrak star rosette */}
      <path d="M50 5 L60 38 L95 50 L60 62 L50 95 L40 62 L5 50 L40 38 Z" opacity="0.9" fill="#a62626" />
      {/* Inner geometric diamond */}
      <polygon points="50,20 80,50 50,80 20,50" fill="#0f1c3f" stroke="#d4af37" strokeWidth="2.5" />
      {/* Center 8-point sun medallion */}
      <circle cx="50" cy="50" r="14" fill="#d4af37" />
      <circle cx="50" cy="50" r="8" fill="#faf7f2" />
      <circle cx="50" cy="50" r="3" fill="#a62626" />
      {/* Corner star accents */}
      <circle cx="15" cy="15" r="4" fill="#d4af37" />
      <circle cx="85" cy="15" r="4" fill="#d4af37" />
      <circle cx="15" cy="85" r="4" fill="#d4af37" />
      <circle cx="85" cy="85" r="4" fill="#d4af37" />
    </svg>
  );
}

// Ajrak ornamental decorative border
export function AjrakRibbon({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-3 flex overflow-hidden ${className}`}>
      <div className="w-full h-full bg-[repeating-linear-gradient(45deg,#a62626,#a62626_8px,#0a1128_8px,#0a1128_16px,#d4af37_16px,#d4af37_20px,#0f1c3f_20px,#0f1c3f_28px)] opacity-90 shadow-sm" />
    </div>
  );
}

// Ajrak emblem seal (inspired by Moenjodaro & Ajrak heritage)
export function AjrakSeal({ size = 48 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="relative rounded-full flex items-center justify-center p-1 bg-gradient-to-tr from-[#a62626] via-[#d4af37] to-[#0f1c3f] shadow-lg border border-[#d4af37]/40"
    >
      <div className="w-full h-full bg-[#0a1128] rounded-full flex items-center justify-center overflow-hidden">
        <AjrakTile className="w-4/5 h-4/5" />
      </div>
    </div>
  );
}
