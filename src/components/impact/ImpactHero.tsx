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
      "/assets/images/our_impact__care_packs_launch_event__58_1626.webp",
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
      {/* Hero Header with Background Image & Dark Overlay */}
      <div className="relative w-full bg-[#1b1b1b] min-h-[380px] sm:min-h-[440px] md:min-h-[480px] flex flex-col justify-center">
        <Image
          src={config.bgImage}
          alt={config.title}
          fill
          className="object-cover object-center opacity-45 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85" />

        <div className="relative z-10 max-w-[1220px] mx-auto px-4 md:px-6 py-12 md:py-16 w-full flex flex-col items-center text-center">
          <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-3">
            {config.eyebrow}
          </span>
          <h1 className="text-[32px] sm:text-[42px] md:text-[48px] leading-[1.15] font-semibold text-white max-w-[850px] mb-4">
            {config.title}
          </h1>
          <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-[1.6] text-white/80 max-w-[700px]">
            {config.subtitle}
          </p>
        </div>
      </div>

      {/* Sub-tab Pill Navigation Bar */}
      <div className="w-full bg-white border-b border-[#ececec] py-3 sticky top-[72px] z-30 shadow-sm">
        <div className="max-w-[1220px] mx-auto px-4 md:px-6 flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
          {config.tabs.map((tab) => {
            const isActive = selectedTab === tab.label;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`px-4 sm:px-5 py-2 rounded-full text-[13px] sm:text-[14px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#ec008c] text-white shadow-sm"
                    : "bg-transparent hover:bg-gray-100 text-[#4a4a53]"
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
