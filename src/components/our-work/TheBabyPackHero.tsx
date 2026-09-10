"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TheBabyPackHeroProps {
  activeTab?: "What is in the pack" | "How it is costed" | "Who receives it";
}

export default function TheBabyPackHero({
  activeTab = "What is in the pack",
}: TheBabyPackHeroProps) {
  const tabs = [
    { label: "What is in the pack", href: "/our-work/what-is-in-the-pack", id: "what-is-in-the-pack" },
    { label: "How it is costed", href: "/our-work/how-it-is-costed", id: "how-it-is-costed" },
    { label: "Who receives it", href: "/our-work/who-receives-it", id: "who-receives-it" },
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
      if (activeTab === "How it is costed") {
        const el = document.getElementById("how-it-is-costed");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (activeTab === "Who receives it") {
        const el = document.getElementById("who-receives-it");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [activeTab]);

  return (
    <section className="relative w-full overflow-hidden bg-[#fff9fc] min-h-[480px] sm:min-h-[510px] md:min-h-[530px] flex flex-col justify-between">
      {/* Background Decorative Gradient/Wave */}
      <div className="absolute top-0 right-0 w-full max-w-[850px] h-[480px] bg-gradient-to-bl from-[#ffdff3]/40 via-[#fff0f8]/30 to-transparent pointer-events-none rounded-bl-[140px] -z-0" />

      {/* Main Content Container */}
      <div className="max-w-[1247px] w-full mx-auto px-4 md:px-6 relative z-10 pt-10 sm:pt-14 md:pt-16 flex-1 flex flex-col justify-center pb-10 sm:pb-12">
        {/* Top Grid: Content on Left, 3 Photos on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Headlines & CTA buttons */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow Tag */}
            <span className="block text-[12px] sm:text-[12.5px] font-semibold tracking-[0.08em] text-[#ec008c] uppercase mb-3">
              OUR WORK
            </span>

            {/* Hero Title */}
            <h1 className="text-[34px] sm:text-[40px] md:text-[46px] lg:text-[48px] font-bold text-[#1b1b1b] leading-[1.18] tracking-tight mb-4 max-w-[540px]">
              The Baby Pack
            </h1>

            {/* Hero Description */}
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#3a3a3f] max-w-[520px] mb-8">
              Every Care Packs baby care pack contains eight essential items, selected for safety, utility and comfort for newborns. Each pack costs approximately £10 to build and deliver.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("how-it-is-costed");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  } else {
                    const widget = document.getElementById("donation-widget");
                    if (widget) {
                      widget.scrollIntoView({ behavior: "smooth", block: "center" });
                      window.dispatchEvent(new CustomEvent("highlight-donation-widget"));
                    }
                  }
                }}
                className="px-6 h-[42px] bg-[#ec008c] hover:bg-[#d6007e] text-white text-[13px] sm:text-[13.5px] font-bold uppercase tracking-wider rounded-[5px] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              >
                FUND A PACK - £10
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("how-it-is-costed");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="px-6 h-[42px] bg-white hover:bg-black/[0.02] border border-[#1b1b1b] text-[#1b1b1b] text-[13px] sm:text-[13.5px] font-bold uppercase tracking-wider rounded-[5px] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              >
                SEE COST BREAKDOWN
              </button>
            </div>
          </div>

          {/* Right Column: 3 Side-by-Side Images */}
          <div className="lg:col-span-6 w-full">
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
              {/* Image 1: Volunteer organizing shelves */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] bg-gray-100 border border-black/[0.03]">
                <Image
                  src="/assets/images/our_work_the_baby_pack__rectangle_12__91_2498.webp"
                  alt="Volunteer checking supplies on shelves"
                  fill
                  priority
                  sizes="(max-width: 640px) 30vw, 20vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Image 2: Two volunteers packing boxes */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] bg-gray-100 border border-black/[0.03]">
                <Image
                  src="/assets/images/our_work_the_baby_pack__rectangle_13__91_2499.webp"
                  alt="Volunteers packing care pack boxes"
                  fill
                  priority
                  sizes="(max-width: 640px) 30vw, 20vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Image 3: Packed baby care pack box */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] bg-gray-100 border border-black/[0.03]">
                <Image
                  src="/assets/images/our_work_the_baby_pack__rectangle_14__91_2500.webp"
                  alt="Open baby care pack with essential items"
                  fill
                  priority
                  sizes="(max-width: 640px) 30vw, 20vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Solid Magenta Sub-navigation Tab Bar */}
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
                    : "text-white hover:text-white/90 hover:bg-white/10"
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
