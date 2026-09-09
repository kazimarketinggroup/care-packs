"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProgrammesHeroProps {
  activeTab?: "Phase 1a: Early Years" | "Programme Roadmap" | "Distribution";
}

export default function ProgrammesHero({
  activeTab = "Phase 1a: Early Years",
}: ProgrammesHeroProps) {
  const tabs = [
    { label: "Phase 1a: Early Years", href: "/our-work/phase-1a-early-years", id: "phase-1a" },
    { label: "Programme Roadmap", href: "/our-work/programme-roadmap", id: "programme-roadmap" },
    { label: "Distribution", href: "/our-work/distribution", id: "distribution" },
  ];

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      if (activeTab === "Programme Roadmap") {
        const el = document.getElementById("programme-roadmap");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (activeTab === "Distribution") {
        const el = document.getElementById("distribution");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [activeTab]);

  return (
    <section className="relative w-full overflow-hidden bg-[#fdfafc] min-h-[480px] sm:min-h-[510px] md:min-h-[530px] flex flex-col justify-between">
      {/* Main Content Container */}
      <div className="max-w-[1247px] w-full mx-auto px-4 md:px-6 relative z-10 pt-12 sm:pt-14 md:pt-16 flex-1 flex flex-col justify-center pb-8 sm:pb-10">
        {/* Top Grid: Content on Left, Team Photo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & CTA buttons */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow Tag */}
            <span className="block text-[12px] sm:text-[12.5px] font-semibold tracking-[0.1em] text-[#ec008c] uppercase mb-3">
              OUR WORK
            </span>

            {/* Hero Title */}
            <h1 className="text-[34px] sm:text-[40px] md:text-[46px] lg:text-[48px] font-medium text-[#1b1b1b] leading-[1.18] tracking-tight mb-4 max-w-[540px]">
              Programmes
            </h1>

            {/* Hero Description matching screenshot */}
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#3a3a3f] max-w-[520px] mb-7">
              Our current programme focuses on families with babies and young children experiencing financial hardship providing essential hygiene items at the moment families need them most.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  const widget = document.getElementById("donation-widget");
                  if (widget) {
                    widget.scrollIntoView({ behavior: "smooth", block: "center" });
                    window.dispatchEvent(new CustomEvent("highlight-donation-widget"));
                  }
                }}
                className="px-6 h-[42px] bg-[#ec008c] hover:bg-[#d6007e] text-white text-[14.5px] font-semibold rounded-[5px] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              >
                Fund a pack
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("phase-1a");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="px-6 h-[42px] bg-white hover:bg-black/[0.02] border border-[#1b1b1b] text-[#1b1b1b] text-[14.5px] font-semibold rounded-[5px] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              >
                See the contents
              </button>
            </div>
          </div>

          {/* Right Column: Hero Team Image */}
          <div className="lg:col-span-6 w-full flex justify-end">
            <div className="relative w-full aspect-[4/2.6] sm:aspect-[4/2.5] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.08)] bg-gray-100 border border-black/[0.04]">
              <Image
                src="/assets/images/our_work_programmes__rectangle_8__86_1648.webp"
                alt="Care Packs team in pink shirts with trophy"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Solid Magenta Sub-navigation Tab Bar matching screenshot */}
      <div className="w-full bg-[#ec008c] py-2.5 sm:py-3 shadow-sm">
        <div className="max-w-[1247px] mx-auto px-4 md:px-6 flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.label;

            return (
              <Link
                key={tab.label}
                href={tab.href}
                onClick={(e) => {
                  const el = document.getElementById(tab.id);
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    window.history.pushState(null, "", `#${tab.id}`);
                  }
                }}
                className={`text-[13.5px] sm:text-[14px] font-medium px-4 sm:px-5 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-white text-[#ec008c] shadow-sm font-semibold"
                    : "text-white hover:text-white/85 hover:bg-white/10"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
