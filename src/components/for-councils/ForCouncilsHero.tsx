"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export type ForCouncilsVariant = "working-with-us" | "for-council-officers" | "new-authorities";

interface TabItem {
  label: string;
  id: string;
}

interface ForCouncilsHeroProps {
  variant: ForCouncilsVariant;
  activeSubTab?: string;
}

interface HeroConfigItem {
  eyebrow: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  tabs: TabItem[];
  bgImage: string;
  bgPosition?: string;
}

const HERO_CONFIG: Record<ForCouncilsVariant, HeroConfigItem> = {
  "working-with-us": {
    eyebrow: "WORKING WITH US",
    title: "A partnership that costs your authority nothing",
    description:
      "No procurement onboarding, no contract value, no charge per pack. Here's exactly how the partnership works, what data changes hands, and what you can expect from every pack.",
    ctaText: "Become a partner authority",
    ctaHref: "/for-councils/new-authorities#speak-to-the-team",
    tabs: [
      { label: "The Partnership Model", id: "partnership-model" },
      { label: "Data and Safeguarding", id: "data-and-safeguarding" },
      { label: "Service specification", id: "service-specification" },
    ],
    bgImage:
      "/assets/images/for_councils_working_with_us__screenshot_2026-07-25_190912_2__107_462.webp",
    bgPosition: "object-cover object-right",
  },
  "for-council-officers": {
    eyebrow: "FOR COUNCIL OFFICERS",
    title: "Everything you need before you refer a family",
    description:
      "Check who is eligible, what information we need, and how quickly packs can reach a family in hardship.",
    ctaText: "Refer a Family",
    ctaHref: "#refer-a-family",
    tabs: [
      { label: "Refer a family", id: "refer-a-family" },
      { label: "Eligibility criteria", id: "eligibility-criteria" },
      { label: "Who can refer", id: "who-can-refer" },
      { label: "Timescales & logistics", id: "timescales-logistics" },
    ],
    bgImage:
      "/assets/images/for_councils_for_council_officers__screenshot_2026-07-25_190912_2__107_867.webp",
    bgPosition: "object-cover object-[center_bottom] sm:object-right",
  },
  "new-authorities": {
    eyebrow: "NEW AUTHORITIES",
    title: "Bringing Care Packs to your authority",
    description:
      "What it takes to get set up as a partner authority, from first conversation to your first referral.",
    ctaText: "Become a partner authority",
    ctaHref: "#speak-to-the-team",
    tabs: [
      { label: "Become a partner authority", id: "why-partner" },
      { label: "Onboarding steps", id: "onboarding-steps" },
      { label: "Speak to the team", id: "speak-to-the-team" },
    ],
    bgImage:
      "/assets/images/for_councils_new_authorities__screenshot_2026-07-25_190912_2__107_1151.webp",
    bgPosition: "object-cover object-right",
  },
};

export default function ForCouncilsHero({
  variant,
  activeSubTab,
}: ForCouncilsHeroProps) {
  const config = HERO_CONFIG[variant];
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

  const handleCtaClick = () => {
    if (config.ctaHref.startsWith("#")) {
      const id = config.ctaHref.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", `#${id}`);
      }
    } else if (config.ctaText === "Donate a Pack") {
      const widget = document.getElementById("donation-widget");
      if (widget) {
        widget.scrollIntoView({ behavior: "smooth", block: "center" });
        window.dispatchEvent(new CustomEvent("highlight-donation-widget"));
      } else {
        window.location.href = config.ctaHref;
      }
    } else {
      window.location.href = config.ctaHref;
    }
  };

  const handleTabClick = (tab: TabItem) => {
    setSelectedTab(tab.label);
    const el = document.getElementById(tab.id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${tab.id}`);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-white min-h-[440px] sm:min-h-[480px] lg:min-h-[510px] flex flex-col justify-between">
      {/* Background Hero Image from Figma */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <Image
          src={config.bgImage}
          alt=""
          fill
          priority
          className={`${config.bgPosition || "object-cover object-right"} select-none`}
        />
        {/* Smooth gradient fade: left side is clean white matching Figma so text is 100% crisp without background clutter */}
        <div className="absolute inset-0 bg-gradient-to-r from-white from-20% via-white/85 via-50% to-transparent sm:from-white sm:from-30% sm:via-white/75 sm:via-55% sm:to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1247px] w-full mx-auto px-4 md:px-6 relative z-10 pt-12 sm:pt-16 md:pt-20 flex-1 flex flex-col justify-center pb-10 sm:pb-14">
        {/* Eyebrow */}
        <span className="block text-[12px] sm:text-[12.5px] font-medium tracking-[0.1em] text-[#ec008c] uppercase mb-3">
          {config.eyebrow}
        </span>

        {/* Title */}
        <h1 className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[45px] font-medium text-[#1b1b1b] leading-[1.2] lg:leading-[56px] tracking-normal mb-4 max-w-[620px]">
          {config.title}
        </h1>

        {/* Description */}
        <p className="text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] text-[#4a4a53] max-w-[580px] mb-8 font-normal">
          {config.description}
        </p>

        {/* Action Button */}
        <div>
          <button
            type="button"
            onClick={handleCtaClick}
            className="px-6 sm:px-7 h-[42px] bg-[#ec008c] hover:bg-[#d6007e] text-white text-[14px] font-medium rounded-[6px] inline-flex items-center justify-center transition-colors shadow-sm cursor-pointer"
          >
            {config.ctaText}
          </button>
        </div>
      </div>

      {/* Full-width Magenta Sub-navigation Tab Bar */}
      <div className="w-full bg-[#ec008c] py-2.5 sm:py-3 shadow-sm">
        <div className="max-w-[1247px] mx-auto px-4 md:px-6 flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
          {config.tabs.map((tab) => {
            const isActive = selectedTab.toLowerCase() === tab.label.toLowerCase();
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab)}
                className={`text-[13px] sm:text-[14px] font-medium px-4 sm:px-5 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-white text-[#ec008c] shadow-sm font-semibold"
                    : "text-white hover:text-white/90 hover:bg-white/10"
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
