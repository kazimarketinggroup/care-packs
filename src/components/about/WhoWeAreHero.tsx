"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface WhoWeAreHeroProps {
  activeTab?: "Our Purpose" | "Board of Trustees" | "Founding Story";
}

export default function WhoWeAreHero({ activeTab = "Our Purpose" }: WhoWeAreHeroProps) {
  const tabs = [
    { label: "Our Purpose", href: "/about/our-purpose" },
    { label: "Board of Trustees", href: "/about/board-of-trustees" },
    { label: "Founding Story", href: "/about/founding-story" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#fdfafc]">
      {/* Background Image on Right with Smooth Fade */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] pointer-events-none z-0">
        <Image
          src="/assets/images/who-we-are-hero-bg.webp"
          alt="Care Packs - The people behind the packs"
          fill
          priority
          className="object-cover object-right opacity-90"
        />
        {/* Gradients to seamlessly blend image into background and text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdfafc] via-[#fdfafc]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfafc]/30 via-transparent to-[#fdfafc]" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1247px] mx-auto px-4 md:px-6 relative z-10 pt-14 sm:pt-16 md:pt-20">
        {/* Eyebrow Tag */}
        <span className="block text-[12px] sm:text-[12.5px] font-semibold tracking-[0.1em] text-[#ec008c] uppercase mb-4">
          ABOUT CARE PACKS
        </span>

        {/* Hero Title */}
        <h1 className="text-[34px] sm:text-[40px] md:text-[46px] lg:text-[48px] font-medium text-[#1b1b1b] leading-[1.18] tracking-tight mb-5 max-w-[620px]">
          The people behind<br />the packs
        </h1>

        {/* Hero Description */}
        <p className="text-[15.5px] sm:text-[16px] leading-[28px] text-[#3a3a3f] max-w-[580px] mb-16 sm:mb-20 md:mb-24">
          Care Packs was founded by senior professionals from banking, technology, law and healthcare who wanted a more direct way to turn corporate goodwill into everyday support. Meet the trustees and the story behind the charity.
        </p>

        {/* Sticky Sub-navigation Tabs */}
        <div className="w-full border-b border-[#ec008c] pb-3 flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.label;
            return (
              <Link
                key={tab.label}
                href={tab.href}
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
