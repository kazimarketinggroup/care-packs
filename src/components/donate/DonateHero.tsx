"use client";

import React from "react";
import Image from "next/image";

export default function DonateHero() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#fae7f2] via-[#fbf0f6] to-[#faeaf4] overflow-hidden border-b border-[#f3deeb]/60">
      {/* Botanical Leaf Branch SVG Decoration (Top Right, matching Figma) */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-80 z-0 hidden sm:block">
        <svg
          width="320"
          height="220"
          viewBox="0 0 320 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[240px] md:w-[320px] h-auto text-[#f9a8d4]/70"
        >
          {/* Main stem */}
          <path
            d="M320 10 C260 40 200 90 150 160 C130 188 110 215 90 220"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Secondary branch */}
          <path
            d="M230 65 C200 95 180 125 170 140"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Leaves */}
          <ellipse cx="280" cy="28" rx="22" ry="12" transform="rotate(-30 280 28)" fill="currentColor" opacity="0.85" />
          <ellipse cx="300" cy="55" rx="20" ry="11" transform="rotate(20 300 55)" fill="currentColor" opacity="0.85" />
          <ellipse cx="245" cy="45" rx="24" ry="13" transform="rotate(-40 245 45)" fill="currentColor" opacity="0.9" />
          <ellipse cx="255" cy="85" rx="22" ry="12" transform="rotate(25 255 85)" fill="currentColor" opacity="0.85" />
          <ellipse cx="210" cy="75" rx="25" ry="13" transform="rotate(-35 210 75)" fill="currentColor" opacity="0.9" />
          <ellipse cx="215" cy="115" rx="22" ry="12" transform="rotate(30 215 115)" fill="currentColor" opacity="0.85" />
          <ellipse cx="175" cy="110" rx="24" ry="13" transform="rotate(-30 175 110)" fill="currentColor" opacity="0.9" />
          <ellipse cx="180" cy="150" rx="21" ry="11" transform="rotate(35 180 150)" fill="currentColor" opacity="0.85" />
          <ellipse cx="140" cy="155" rx="22" ry="12" transform="rotate(-25 140 155)" fill="currentColor" opacity="0.9" />
          <ellipse cx="145" cy="185" rx="18" ry="10" transform="rotate(35 145 185)" fill="currentColor" opacity="0.8" />
          <ellipse cx="110" cy="195" rx="19" ry="10" transform="rotate(-20 110 195)" fill="currentColor" opacity="0.85" />
          <ellipse cx="85" cy="215" rx="15" ry="8" transform="rotate(-10 85 215)" fill="currentColor" opacity="0.8" />
        </svg>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12 items-center min-h-[320px] md:min-h-[380px] lg:min-h-[420px] py-8 md:py-0">
          
          {/* Left Column: Smiling child holding Care Packs box with magenta curves */}
          <div className="md:col-span-5 lg:col-span-5 flex justify-center md:justify-start">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-[1.07/1] rounded-r-[32px] md:rounded-r-[48px] overflow-hidden shadow-[0_12px_36px_rgba(236,0,140,0.12)]">
              <Image
                src="/assets/images/donate-hero-child@2x.png"
                alt="Smiling child receiving a Care Pack - A gift of hope with every pack"
                fill
                priority
                className="object-cover object-left-center"
              />
            </div>
          </div>

          {/* Right Column: Hero copy matching Figma typography */}
          <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-center text-left md:pl-4 lg:pl-8">
            <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] leading-[1.12] font-bold text-[#1b1b1b] tracking-tight">
              £10 funds one complete <br className="hidden sm:inline" />
              baby care pack
            </h1>
            <p className="mt-4 sm:mt-5 text-[15px] sm:text-[17px] md:text-[18px] leading-[1.55] text-[#4a4a53] max-w-[540px]">
              Every donation goes directly to essential items for families
              experiencing poverty. No ambiguity. Just packs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
