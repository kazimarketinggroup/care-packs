"use client";

import React from "react";
import Link from "next/link";

interface WhoWeHelpHeroProps {
  activeTab?: "Families in the referral route" | "Referring authorities" | "Where we operate";
}

export default function WhoWeHelpHero({
  activeTab = "Families in the referral route",
}: WhoWeHelpHeroProps) {
  const tabs = [
    {
      label: "Families in the referral route",
      href: "/our-work/families-in-the-referral-route",
      id: "families-in-referral-route",
    },
    {
      label: "Referring authorities",
      href: "/our-work/referring-authorities",
      id: "referring-authorities",
    },
    {
      label: "Where we operate",
      href: "/our-work/where-we-operate",
      id: "where-we-operate",
    },
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
      if (activeTab === "Referring authorities") {
        const el = document.getElementById("referring-authorities");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (activeTab === "Where we operate") {
        const el = document.getElementById("where-we-operate");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [activeTab]);

  const handleDonateClick = () => {
    const widget = document.getElementById("donation-widget");
    if (widget) {
      widget.scrollIntoView({ behavior: "smooth", block: "center" });
      window.dispatchEvent(new CustomEvent("highlight-donation-widget"));
    } else {
      window.location.href = "/#donation-widget";
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#fff9fc] min-h-[440px] sm:min-h-[470px] flex flex-col justify-between">
      {/* Background Decorative Gradient Wave Patterns */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden -z-0">
        <div className="absolute -top-[50%] -left-[10%] w-[120%] h-[200%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ffd9f1]/35 via-[#fff3fb]/20 to-transparent" />
      </div>

      {/* Main Content Container (Centered) */}
      <div className="max-w-[1247px] w-full mx-auto px-4 md:px-6 relative z-10 pt-12 sm:pt-16 md:pt-20 flex-1 flex flex-col items-center justify-center text-center pb-12 sm:pb-16">
        {/* Eyebrow Tag */}
        <span className="block text-[12px] sm:text-[12.5px] font-semibold tracking-[0.1em] text-[#ec008c] uppercase mb-3">
          OUR WORK
        </span>

        {/* Hero Title */}
        <h1 className="text-[36px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-bold text-[#1b1b1b] leading-[1.16] tracking-tight mb-4 max-w-[700px]">
          Who we help
        </h1>

        {/* Hero Description */}
        <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53] max-w-[620px] mb-8">
          Behind every Care Pack is a family facing a moment of real hardship. These are some of the stories with names changed or anonymised that explain why Care Packs exists.
        </p>

        {/* Action Button: Donate a Pack */}
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={handleDonateClick}
            className="px-8 h-[44px] bg-[#ec008c] hover:bg-[#d6007e] text-white text-[14px] sm:text-[14.5px] font-semibold rounded-[6px] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
          >
            Donate a Pack
          </button>
        </div>
      </div>

      {/* Full-width Solid Magenta Sub-navigation Tab Bar */}
      <div className="w-full bg-[#ec008c] py-2.5 sm:py-3 shadow-sm">
        <div className="max-w-[1247px] mx-auto px-4 md:px-6 flex items-center justify-start sm:justify-start gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
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
                className={`text-[13px] sm:text-[14px] font-medium px-4 sm:px-5 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer ${
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
