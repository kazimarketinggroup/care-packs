"use client";

import React from "react";
import Image from "next/image";

export type GetInvolvedVariant = "volunteer-with-us" | "fundraise" | "partner-with-us";

interface TabItem {
  label: string;
  id: string;
}

interface GetInvolvedHeroProps {
  variant: GetInvolvedVariant;
  activeSubTab?: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface VariantConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  stats: StatItem[];
  tabs: TabItem[];
  bgImage?: string;
  rightImage?: string;
}

const HERO_CONFIGS: Record<GetInvolvedVariant, VariantConfig> = {
  "volunteer-with-us": {
    eyebrow: "GET INVOLVED",
    title: "Two hours of your team's time is roughly four hundred packs",
    subtitle:
      "No experience needed, no minimum commitment. Join a public packing day, run a collection point, or just tell us when you're free.",
    bgImage:
      "/assets/images/volunteer_with_us__volunteers_assembling_care_packs_at_a_packing_day__126_323.webp",
    stats: [
      { value: "548", label: "Volunteers in 2025" },
      { value: "2,163", label: "Volunteer hours" },
      { value: "144", label: "Companies involved" },
      { value: "~400", label: "Packs from a team of 20" },
    ],
    tabs: [
      { label: "Public packing days", id: "public-packing-days" },
      { label: "Collection drives", id: "collection-drives" },
      { label: "Volunteer enquiries", id: "volunteer-enquiries" },
    ],
  },
  fundraise: {
    eyebrow: "GET INVOLVED",
    title: "£10 in, one pack out no ambiguity",
    subtitle:
      "Whether it's a one-off gift, a payroll scheme, or a collection run by your community group, every pound goes straight into a pack.",
    rightImage: "/assets/images/fundraise__dsc00064__1__1__155_6207.webp",
    stats: [
      { value: "£92,010", label: "Raised" },
      { value: "548", label: "Volunteers" },
      { value: "144", label: "Companies involved" },
    ],
    tabs: [
      { label: "Fund packs directly", id: "fund-packs-directly" },
      { label: "Workplace fundraising", id: "workplace-fundraising" },
      { label: "Community collections", id: "community-collections" },
    ],
  },
  "partner-with-us": {
    eyebrow: "GET INVOLVED",
    title: "Turn your organisation into a distribution partner",
    subtitle:
      "Book a team day, sponsor a pack run, or become a year-round corporate partner governed by people who run this at scale, reported back to you every quarter.",
    bgImage:
      "/assets/images/partner_with_us__copy-space-pink-shades-background_1__155_6273.webp",
    stats: [
      { value: "548", label: "Volunteers in 2025" },
      { value: "2,163", label: "Volunteer hours" },
      { value: "144", label: "Companies involved" },
      { value: "~400", label: "Packs from a team of 20" },
    ],
    tabs: [
      { label: "Corporate partnerships", id: "corporate-partnerships" },
      { label: "Closed volunteering days", id: "closed-volunteering-days" },
      { label: "Sponsor a Pack Run", id: "sponsor-a-pack-run" },
    ],
  },
};

export default function GetInvolvedHero({
  variant,
  activeSubTab,
}: GetInvolvedHeroProps) {
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
      {/* Variant 1: Volunteer With Us (Dark full image background) */}
      {variant === "volunteer-with-us" && (
        <div className="relative w-full bg-[#1b1b1b] min-h-[440px] md:min-h-[500px] flex flex-col justify-center">
          {config.bgImage && (
            <Image
              src={config.bgImage}
              alt="Volunteers assembling care packs"
              fill
              className="object-cover object-center opacity-40 mix-blend-luminosity"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

          <div className="relative z-10 max-w-[1220px] mx-auto px-4 md:px-6 py-12 md:py-16 w-full flex flex-col items-center text-center">
            <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-4">
              {config.eyebrow}
            </span>
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] leading-[1.15] font-semibold text-white max-w-[850px] mb-4">
              {config.title}
            </h1>
            <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-[1.6] text-white/80 max-w-[720px] mb-8">
              {config.subtitle}
            </p>

            {/* Translucent Glass Stat Bar */}
            <div className="w-full max-w-[780px] bg-white/10 backdrop-blur-md rounded-[12px] border border-white/20 p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white">
              {config.stats.map((stat, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center justify-center ${
                    i !== config.stats.length - 1
                      ? "sm:border-r sm:border-white/20"
                      : ""
                  }`}
                >
                  <span className="text-[28px] sm:text-[32px] font-bold leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[12px] sm:text-[13px] text-white/80 font-medium text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Variant 2: Fundraise (Split Hero layout) */}
      {variant === "fundraise" && (
        <div className="relative w-full bg-white pt-10 pb-8 md:py-14">
          <div className="max-w-[1220px] mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-3">
                {config.eyebrow}
              </span>
              <h1 className="text-[32px] sm:text-[42px] md:text-[46px] leading-[1.15] font-semibold text-[#1b1b1b] mb-4">
                {config.title}
              </h1>
              <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#4a4a53] mb-8 max-w-[540px]">
                {config.subtitle}
              </p>

              {/* Solid Magenta Stat Block */}
              <div className="w-full max-w-[500px] bg-[#ec008c] rounded-[10px] p-5 grid grid-cols-3 gap-3 text-white text-center shadow-sm">
                {config.stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center ${
                      i !== config.stats.length - 1 ? "border-r border-white/25" : ""
                    }`}
                  >
                    <span className="text-[24px] sm:text-[28px] font-bold leading-tight mb-1">
                      {stat.value}
                    </span>
                    <span className="text-[12px] sm:text-[13px] text-white/90">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Photo */}
            <div className="w-full lg:w-1/2 relative h-[280px] sm:h-[340px] md:h-[380px] rounded-[18px] overflow-hidden shadow-md">
              {config.rightImage && (
                <Image
                  src={config.rightImage}
                  alt="Packing Care Packs by hand"
                  fill
                  className="object-cover object-center"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Variant 3: Partner With Us (Soft Pink ambient hero) */}
      {variant === "partner-with-us" && (
        <div className="relative w-full bg-gradient-to-b from-[#fff0f6] via-[#ffe8f2]/60 to-white pt-12 pb-10 md:py-16 flex flex-col justify-center">
          <div className="max-w-[1220px] mx-auto px-4 md:px-6 w-full flex flex-col items-center text-center">
            <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-3">
              {config.eyebrow}
            </span>
            <h1 className="text-[32px] sm:text-[42px] md:text-[48px] leading-[1.15] font-semibold text-[#1b1b1b] max-w-[780px] mb-4">
              {config.title}
            </h1>
            <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[1.6] text-[#4a4a53] max-w-[680px] mb-8">
              {config.subtitle}
            </p>

            {/* Solid Magenta Stat Block */}
            <div className="w-full max-w-[720px] bg-[#ec008c] rounded-[10px] p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white text-center shadow-md">
              {config.stats.map((stat, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center justify-center ${
                    i !== config.stats.length - 1
                      ? "sm:border-r sm:border-white/25"
                      : ""
                  }`}
                >
                  <span className="text-[26px] sm:text-[30px] font-bold leading-tight mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[12px] sm:text-[13px] text-white/90">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
