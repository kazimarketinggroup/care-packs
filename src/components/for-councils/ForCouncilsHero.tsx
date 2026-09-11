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
      "No procurement exercise, no contract value, no charge per pack. Here's exactly how the partnership works, what data changes hands, and what you can expect from every pack.",
    ctaText: "Become a partner authority",
    ctaHref: "/for-councils/new-authorities#speak-to-the-team",
    tabs: [
      { label: "The Partnership Model", id: "partnership-model" },
      { label: "Data and Safeguarding", id: "data-and-safeguarding" },
      { label: "Service specification", id: "service-specification" },
    ],
    bgImage:
      "/assets/images/for_councils_working_with_us__screenshot_2026-07-25_190912_2__107_462.webp",
    bgPosition: "object-cover object-center",
  },
  "for-council-officers": {
    eyebrow: "FOR COUNCIL OFFICERS",
    title: "Everything you need before you refer a family",
    description:
      "Who qualifies, what happens after you submit a referral, and how long it takes to reach the family you're supporting.",
    ctaText: "Donate a Pack",
    ctaHref: "#donate",
    tabs: [
      { label: "Refer a family", id: "refer-a-family" },
      { label: "Referral criteria", id: "eligibility-criteria" },
      { label: "Delivery timescales", id: "timescales-logistics" },
    ],
    bgImage:
      "/assets/images/for_councils_for_council_officers__screenshot_2026-07-25_190912_2__107_867.webp",
    bgPosition: "object-cover object-[53%_bottom]",
  },
  "new-authorities": {
    eyebrow: "NEW AUTHORITIES",
    title: "Bringing Care Packs to your authority",
    description:
      "What it takes to get set up as a partner authority, from first conversation to your first referral.",
    ctaText: "Donate a Pack",
    ctaHref: "#donate",
    tabs: [
      { label: "Become a partner authority", id: "why-partner" },
      { label: "Onboarding steps", id: "onboarding-steps" },
      { label: "Speak to the team", id: "speak-to-the-team" },
    ],
    bgImage:
      "/assets/images/for_councils_new_authorities__screenshot_2026-07-25_190912_2__107_1151.webp",
    bgPosition: "object-cover object-center",
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
      window.dispatchEvent(new CustomEvent("open-donation-modal", { detail: { amount: 10 } }));
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

/* ── Truly Transparent Vector Petals for Council Officers Hero ── */
function CouncilOfficersPetals() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 flex items-end justify-center">
      <svg
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full min-w-[1000px] object-cover object-bottom select-none pointer-events-none"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          {/* Base Petal Shape: continuous smooth organic curve with beautiful rounded tip */}
          <path
            id="officer-petal-shape"
            d="M 0 0 C -35 -130 -80 -280 -55 -400 C -35 -480 35 -480 55 -400 C 80 -280 35 -130 0 0 Z"
          />

          <linearGradient id="officer-petal-grad-1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
            <stop offset="35%" stopColor="#fde4f2" stopOpacity="0.45" />
            <stop offset="85%" stopColor="#fff5fa" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
          </linearGradient>

          <linearGradient id="officer-petal-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="35%" stopColor="#fcd8ec" stopOpacity="0.5" />
            <stop offset="85%" stopColor="#fff5fa" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
          </linearGradient>

          <linearGradient id="officer-petal-grad-center" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
            <stop offset="35%" stopColor="#fbcfe7" stopOpacity="0.55" />
            <stop offset="85%" stopColor="#fff5fa" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* Group of 5 fan petals radiating upwards from bottom */}
        <g transform="translate(760, 610)">
          {/* Petal 1 (Far Left) */}
          <use
            href="#officer-petal-shape"
            transform="rotate(-47) scale(0.95, 0.90)"
            fill="url(#officer-petal-grad-1)"
            stroke="#ec008c"
            strokeOpacity="0.18"
            strokeWidth="1.2"
          />

          {/* Petal 5 (Far Right) */}
          <use
            href="#officer-petal-shape"
            transform="rotate(47) scale(0.95, 0.90)"
            fill="url(#officer-petal-grad-1)"
            stroke="#ec008c"
            strokeOpacity="0.18"
            strokeWidth="1.2"
          />

          {/* Petal 2 (Mid Left) */}
          <use
            href="#officer-petal-shape"
            transform="rotate(-23.5) scale(0.98, 0.96)"
            fill="url(#officer-petal-grad-2)"
            stroke="#ec008c"
            strokeOpacity="0.18"
            strokeWidth="1.2"
          />

          {/* Petal 4 (Mid Right) */}
          <use
            href="#officer-petal-shape"
            transform="rotate(23.5) scale(0.98, 0.96)"
            fill="url(#officer-petal-grad-2)"
            stroke="#ec008c"
            strokeOpacity="0.18"
            strokeWidth="1.2"
          />

          {/* Petal 3 (Center - Front) */}
          <use
            href="#officer-petal-shape"
            transform="rotate(0) scale(1, 1)"
            fill="url(#officer-petal-grad-center)"
            stroke="#ec008c"
            strokeOpacity="0.18"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    </div>
  );
}

  const isCouncilOfficers = variant === "for-council-officers";

  return (
    <section
      className={`relative w-full overflow-hidden min-h-[440px] sm:min-h-[480px] lg:min-h-[510px] flex flex-col justify-between ${
        isCouncilOfficers ? "bg-[#fff5fa]" : "bg-white"
      }`}
    >
      {/* Background Graphic */}
      {isCouncilOfficers ? (
        <CouncilOfficersPetals />
      ) : (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <Image
            src={config.bgImage}
            alt=""
            fill
            priority
            className={`${config.bgPosition || "object-cover object-center"} ${
              variant === "working-with-us"
                ? "opacity-75 sm:opacity-85"
                : "opacity-90 sm:opacity-100"
            } select-none`}
          />
          {/* Subtle mobile fade only to ensure mobile text readability without washing out desktop shapes */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent sm:hidden" />
        </div>
      )}

      {/* Main Content Container */}
      <div className="max-w-[1247px] w-full mx-auto px-4 md:px-6 relative z-10 pt-12 sm:pt-16 md:pt-20 flex-1 flex flex-col justify-center pb-10 sm:pb-14">
        {/* Eyebrow */}
        <span className="block text-[12px] sm:text-[12.5px] font-medium tracking-[0.1em] text-[#ec008c] uppercase mb-3">
          {config.eyebrow}
        </span>

        {/* Title */}
        <h1
          className={`text-[32px] sm:text-[38px] md:text-[42px] lg:text-[45px] font-medium text-[#1b1b1b] leading-[1.2] lg:leading-[56px] tracking-normal mb-4 ${
            isCouncilOfficers ? "max-w-[560px]" : "max-w-[620px]"
          }`}
        >
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
                className={`text-[13px] sm:text-[14px] font-medium px-4 sm:px-5 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer ${isActive
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
