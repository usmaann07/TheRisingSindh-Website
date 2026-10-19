"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TheTurnSection } from "@/components/TheTurnSection";
import { ProblemStrip } from "@/components/ProblemStrip";
import { FourEngines } from "@/components/FourEngines";
import { WhatOurStudentsDo } from "@/components/WhatOurStudentsDo";
import { TheModelTimeline } from "@/components/TheModelTimeline";
import { SMEEnterpriseSection } from "@/components/SMEEnterpriseSection";
import { HeroTrackSection } from "@/components/HeroTrackSection";
import { TheProofSection } from "@/components/TheProofSection";
import { GlobalBridgeSection } from "@/components/GlobalBridgeSection";
import { TheMovementSection } from "@/components/TheMovementSection";
import { SehwanCampusSection } from "@/components/SehwanCampusSection";
import { JoinUsDoors } from "@/components/JoinUsDoors";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ActionModal } from "@/components/Modals";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  const [modalType, setModalType] = useState<"campus-visit" | "build-day" | "teach" | "lab-bench" | null>(null);

  const handleOpenModal = (type: "campus-visit" | "build-day" | "teach" | "lab-bench") => {
    setModalType(type);
  };

  const handleCloseModal = () => {
    setModalType(null);
  };

  return (
    <div className="min-h-screen bg-[#f4efea] text-[#1c1917] selection:bg-[#d97706] selection:text-white relative">
      {/* GSAP Mouse Cursor Follower */}
      <CustomCursor />

      {/* Enhanced Floating Pill Navigation with Increased Size & Functional Dropdown */}
      <Navbar onOpenModal={handleOpenModal} />

      <main>
        {/* Editorial Architectural Hero with Fluted Glass & Notched Stat Strip */}
        <HeroSection onOpenModal={handleOpenModal} />

        {/* Editorial Split Feature: Growth without systems is organized chaos */}
        <TheTurnSection />

        {/* Evidence Bento Grid: 32.8% Unemployment, Instant Proof, No Market Obsolescence */}
        <ProblemStrip />

        {/* Four Synchronized Engines: Deep Espresso Architectural Block */}
        <FourEngines />

        {/* What Our Students Do: Practice Ladder (Age 9 to 16) & Comparison Matrix */}
        <WhatOurStudentsDo />

        {/* Nursery to Matric Two-Layer Curriculum Interactive Timeline & Download Action */}
        <TheModelTimeline onOpenModal={handleOpenModal} />

        {/* SMEs & Real Enterprises: Practical Industry Learning & Local Workshops */}
        <SMEEnterpriseSection onOpenModal={handleOpenModal} />

        {/* Personality Grooming: Character, Communication, Life Skills & Mountain Trekking */}
        <HeroTrackSection />

        {/* The Proof: Founder Precedent from Sehwan to Silicon Valley with Video Proof */}
        <TheProofSection />

        {/* Global Bridge: Three Lanes, Scholarships & International Educational Trips */}
        <GlobalBridgeSection onOpenModal={handleOpenModal} />

        {/* The Movement: Sindh Renaissance, Moenjodaro & Build Here Stay Here */}
        <TheMovementSection onOpenModal={handleOpenModal} />

        {/* Sehwan Campus Blueprint, Innovation Lab & The Technology Layer */}
        <SehwanCampusSection onOpenModal={handleOpenModal} />

        {/* Join Us: Four Conversion Doors, Transparent FAQs & Content Governance */}
        <JoinUsDoors onOpenModal={handleOpenModal} />
      </main>

      {/* Global Architectural Footer */}
      <Footer />

      {/* Floating Action WhatsApp Desk */}
      <WhatsAppButton />

      {/* Fully Functional Interactive Application & Booking Modal */}
      <ActionModal
        isOpen={modalType !== null}
        onClose={handleCloseModal}
        type={modalType}
      />
    </div>
  );
}
