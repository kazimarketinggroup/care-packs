"use client";

import React from "react";
import Link from "next/link";
import MiniWidget from "./MiniWidget";

export default function Hero() {
  const handleFundPackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const widget = document.getElementById("donation-widget");
    if (widget) {
      widget.scrollIntoView({ behavior: "smooth", block: "center" });
      window.dispatchEvent(new CustomEvent("highlight-donation-widget"));
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[620px] lg:min-h-[640px] flex items-center bg-[#fefafc]">
      {/* Background with watercolor texture on the right */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-right md:bg-[right_-120px_center] lg:bg-right bg-no-repeat pointer-events-none opacity-90 transition-opacity duration-1000"
        style={{
          backgroundImage: "url('/assets/images/hero-bg.webp')",
        }}
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1247px] w-full mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 xl:gap-[72px]">
          {/* Left Column: Headlines & CTAs (Exact Figma width: 586px) */}
          <div className="w-full lg:w-[586px] flex-shrink-0 flex flex-col justify-center">
            {/* Tag Badge */}
            <div
              className="inline-flex items-center gap-3 mb-[31px] animate-hero-down opacity-0"
              style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
            >
              <span className="w-[10px] h-[10px] bg-[#ec008c] rounded-[1px] flex-shrink-0" />
              <span className="text-[13px] font-medium text-[#3a3a3f] tracking-normal leading-[16px]">
                A Gift of Hope with Every Pack
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-3xl sm:text-4xl lg:text-[45px] leading-[1.25] lg:leading-[60px] font-medium text-[#1b1b1b] tracking-normal mb-[46px] animate-hero-up opacity-0"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              Turn corporate goodwill<br className="hidden sm:inline" />{" "}
              into something a family<br className="hidden sm:inline" />{" "}
              can hold in their hands.
            </h1>

            {/* Subtitle Description */}
            <p
              className="text-[16px] leading-[28px] text-[#4a4a53] mb-[65px] max-w-[567px] animate-hero-up opacity-0"
              style={{ animationDelay: "350ms", animationFillMode: "forwards" }}
            >
              Care Packs gives organisations a practical way to create measurable, hands-on
              impact. Your people build the packs. Councils, family hubs and food banks put them
              straight into the hands of families who need them.
            </p>

            {/* Dual CTA Buttons */}
            <div
              className="flex flex-wrap items-center gap-[22px] animate-hero-up opacity-0"
              style={{ animationDelay: "450ms", animationFillMode: "forwards" }}
            >
              <Link
                href="#partner"
                className="w-[162px] h-[42px] inline-flex items-center justify-center bg-[#ec008c] hover:bg-[#d6007e] active:scale-[0.98] text-white font-semibold text-[14.5px] rounded-[6px] shadow-sm transition-all duration-150"
              >
                Partner with us
              </Link>
              <button
                type="button"
                onClick={handleFundPackClick}
                className="w-[162px] h-[42px] inline-flex items-center justify-center bg-white hover:bg-[#f8f8f9] active:scale-[0.98] text-[#1b1b1b] border border-[#1b1b1b] font-semibold text-[14.5px] rounded-[6px] shadow-sm transition-all duration-150 cursor-pointer"
              >
                Fund a pack - £8
              </button>
            </div>
          </div>

          {/* Right Column: Mini Donation Widget (Exact Figma width: 529px) */}
          <div
            className="w-full lg:w-[529px] flex-shrink-0 flex justify-center lg:justify-end animate-hero-up opacity-0"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            <MiniWidget />
          </div>
        </div>
      </div>
    </section>
  );
}

