"use client";

import React from "react";
import Image from "next/image";

export default function NewsEventsHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[380px] lg:min-h-[460px] py-10 lg:py-0">
          
          {/* Left Column: Headings & Subtitle */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left z-10">
            <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-3">
              NEWS &amp; EVENTS
            </span>
            <h1 className="text-[36px] sm:text-[46px] md:text-[54px] lg:text-[58px] leading-[1.12] font-bold text-[#1b1b1b] tracking-tight">
              What&apos;s happening <br className="hidden sm:inline" />
              at Care Packs
            </h1>
            <p className="mt-5 text-[16px] sm:text-[17px] md:text-[18px] leading-[1.6] text-[#4a4a53] max-w-[540px]">
              The latest news, events and milestones from Care Packs and our partner network.
            </p>
          </div>

          {/* Right Column: Mother & Baby Image */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-[24px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)]">
              <Image
                src="/assets/images/events-hero-mother-baby@2x.png"
                alt="Mother smiling down at baby receiving a care pack - Care Packs news and events"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
