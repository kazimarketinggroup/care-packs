"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AccountabilityHeroProps {
  activeTab?: "Governance" | "Annual Report" | "Fundraising Standards";
}

export default function AccountabilityHero({
  activeTab = "Governance",
}: AccountabilityHeroProps) {
  const tabs = [
    { label: "Governance", href: "/about/governance-and-policies", id: "governance" },
    { label: "Annual Report", href: "/about/annual-report", id: "annual-report" },
    { label: "Fundraising Standards", href: "/about/fundraising-standard", id: "fundraising-standards" },
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
      if (activeTab === "Annual Report") {
        const el = document.getElementById("annual-report");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (activeTab === "Fundraising Standards") {
        const el = document.getElementById("fundraising-standards");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [activeTab]);

  return (
    <section className="relative w-full overflow-hidden bg-[#fdfafc] min-h-[480px] sm:min-h-[510px] md:min-h-[530px] flex flex-col justify-between">
      {/* Background Graphic on Right with Pink Arched Glass Artwork */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] pointer-events-none z-0">
        <div className="relative w-full h-full">
          <Image
            src="/assets/images/accountability__screenshot_2026-07-27_201038_1__58_3815.webp"
            alt="Care Packs - Accountability and Governance"
            fill
            priority
            className="object-cover object-right opacity-80"
          />
          {/* Pink wash & gradient overlays to achieve exact thematic aesthetic */}
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
            Built to be checked,<br />not just trusted
          </h1>

          {/* Hero Description */}
          <p className="text-[15.5px] sm:text-[16px] leading-[28px] text-[#3a3a3f] max-w-[580px] mb-8 sm:mb-12">
            Our registration, our governance, our fundraising standards, and exactly where every pound goes published in full, not just claimed.
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
