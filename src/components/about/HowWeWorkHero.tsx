"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HowWeWorkHeroProps {
  activeTab?: "Referral Model" | "Packing Days" | "Baby Pack Spec";
}

export default function HowWeWorkHero({
  activeTab = "Referral Model",
}: HowWeWorkHeroProps) {
  const tabs = [
    { label: "Referral Model", href: "/about/referral-model", id: "referral-model" },
    { label: "Packing Days", href: "/about/packing-days", id: "packing-days" },
    { label: "Baby Pack Spec", href: "/about/baby-pack-spec", id: "baby-pack-spec" },
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
      if (activeTab === "Packing Days") {
        const el = document.getElementById("packing-days");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (activeTab === "Baby Pack Spec") {
        const el = document.getElementById("baby-pack-spec");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [activeTab]);

  return (
    <section className="relative w-full overflow-hidden bg-[#fdfafc] min-h-[480px] sm:min-h-[510px] md:min-h-[530px] flex flex-col justify-between">
      {/* Background Graphic on Right with Pink Lens Artwork */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] pointer-events-none z-0">
        <div className="relative w-full h-full">
          <Image
            src="/assets/images/how_we_work__screenshot_2026-07-25_190912_2__58_3813.webp"
            alt="How We Work - Glass prisms"
            fill
            priority
            className="object-cover object-right opacity-80"
          />
          {/* Pink wash & gradient overlays to achieve exact Figma aesthetic */}
          <div className="absolute inset-0 bg-[#ec008c]/15 mix-blend-color" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdfafc] via-[#fdfafc]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fdfafc]/30 via-transparent to-[#fdfafc]" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1247px] w-full mx-auto px-4 md:px-6 relative z-10 pt-14 sm:pt-16 md:pt-20 flex-1 flex flex-col justify-between">
        {/* Top Text Content */}
        <div>
          {/* Eyebrow Tag */}
          <span className="block text-[12px] sm:text-[12.5px] font-semibold tracking-[0.1em] text-[#ec008c] uppercase mb-4">
            ABOUT CARE PACKS
          </span>

          {/* Hero Title */}
          <h1 className="text-[34px] sm:text-[40px] md:text-[46px] lg:text-[48px] font-medium text-[#1b1b1b] leading-[1.18] tracking-tight mb-5 max-w-[620px]">
            From corporate goodwill<br />to a family&apos;s front door
          </h1>

          {/* Hero Description */}
          <p className="text-[15.5px] sm:text-[16px] leading-[28px] text-[#3a3a3f] max-w-[580px] mb-8 sm:mb-12">
            See how a council referral becomes a packing day, and a packing day becomes a pack in someone&apos;s hands the model behind every number on this site.
          </p>
        </div>

        {/* Sticky Sub-navigation Tabs */}
        <div className="w-full border-b border-[#ec008c] pb-3 flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar mt-auto">
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
                className={`text-[14px] font-medium px-4 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#ec008c] text-white shadow-sm"
                    : "text-[#1b1b1b] hover:text-[#ec008c] hover:bg-black/[0.03]"
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
