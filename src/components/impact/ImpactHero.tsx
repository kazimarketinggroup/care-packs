"use client";

import React from "react";
import Image from "next/image";

export type ImpactVariant = "our-impact" | "evidence";

interface TabItem {
  label: string;
  id: string;
}

interface ImpactHeroProps {
  variant: ImpactVariant;
  activeSubTab?: string;
}

interface VariantConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  bgImage: string;
  tabs: TabItem[];
}

const HERO_CONFIGS: Record<ImpactVariant, VariantConfig> = {
  "our-impact": {
    eyebrow: "OUR IMPACT",
    title: "What your money actually builds",
    subtitle:
      "£92,010 raised, 5,273 packs built, and exactly what it costs to build one. See the full 2025 numbers and where every pound goes.",
    bgImage:
      "/assets/images/our_impact__community_impact__58_1800.webp",
    tabs: [
      { label: "Packs Distributed", id: "packs-distributed" },
      { label: "Cost Per Pack", id: "cost-per-pack" },
      { label: "Reporting Cycle", id: "reporting-cycle" },
    ],
  },
  evidence: {
    eyebrow: "OUR IMPACT",
    title: "The need, and the numbers behind our answer to it",
    subtitle:
      "From national hygiene-poverty data to what we track ourselves including where our own measurement is still maturing.",
    bgImage:
      "/assets/images/evidence__community_impact__58_4210.webp",
    tabs: [
      { label: "Early Years Data", id: "early-years-poverty-data" },
      { label: "Referral Outcomes", id: "referral-outcomes" },
      { label: "Method & Limitations", id: "method-and-limitations" },
    ],
  },
};

export default function ImpactHero({ variant, activeSubTab }: ImpactHeroProps) {
  const config = HERO_CONFIGS[variant];
  const [selectedTab, setSelectedTab] = React.useState<string>(
    activeSubTab || config.tabs[0]?.label || ""
  );

  React.useEffect(() => {
    if (activeSubTab) {
      setSelectedTab(activeSubTab);
    }
  }, [activeSubTab]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const found = config.tabs.find((t) => t.id === hash);
        if (found) {
          setSelectedTab(found.label);
        }
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  }, [config.tabs]);

  const handleTabClick = (tab: TabItem) => {
    setSelectedTab(tab.label);
    const element = document.getElementById(tab.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="w-full relative overflow-hidden">
      {/* Hero Header with Background Image & Dark Gradient Overlay */}
      <div className="relative w-full bg-[#1b1b1b] min-h-[380px] sm:min-h-[440px] md:min-h-[490px] flex flex-col justify-center">
        <Image
          src={config.bgImage}
          alt={config.title}
          fill
          className="object-cover object-center select-none"
          priority
        />
        {/* Subtle dark gradient overlay preserving full image color and ensuring text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/40" />

        <div className="relative z-10 max-w-[1220px] mx-auto px-4 md:px-6 py-12 md:py-16 w-full flex flex-col items-start text-left">
          <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-white/90 uppercase mb-3 sm:mb-4">
            {config.eyebrow}
          </span>
          <h1 className="text-[32px] sm:text-[42px] md:text-[48px] leading-[1.15] font-semibold text-white max-w-[560px] mb-4">
            {config.title}
          </h1>
          <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[1.6] text-white/90 max-w-[580px]">
            {config.subtitle}
          </p>
        </div>
      </div>

      {/* Sub-tab Pill Navigation Bar */}
      <div className="w-full bg-white border-b border-[#ec008c] py-3 sm:py-3.5 sticky top-[72px] z-30 shadow-xs">
        <div className="max-w-[1220px] mx-auto px-4 md:px-6 flex items-center justify-start gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
          {config.tabs.map((tab) => {
            const isActive = selectedTab === tab.label;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`px-5 py-2 rounded-full text-[13.5px] sm:text-[14px] font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#ec008c] text-white shadow-sm"
                    : "bg-transparent hover:bg-pink-50/50 text-[#1b1b1b] hover:text-[#ec008c]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
