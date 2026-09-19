"use client";

import React from "react";
import Image from "next/image";

export default function DonateHero() {
  return (
    <section className="relative w-full bg-[#ffe4f3] bg-gradient-to-b from-[#fef8fb] via-[#ffe4f3] to-[#ffeaf5] overflow-hidden min-h-[440px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[540px] flex flex-col justify-center">
      {/* Botanical Leaf Branch Decoration (Top Right, matching Figma 1-to-1) */}
      <div className="absolute top-0 right-0 pointer-events-none z-0 select-none">
        <div className="relative w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px] xl:w-[420px] aspect-[531/492]">
          <Image
            src="/assets/images/donate-hero-leaves-clean.png"
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 260px, (max-width: 1280px) 380px, 420px"
            className="object-contain object-top-right"
          />
        </div>
      </div>

      {/* Left Graphic on Desktop: Smiling child holding Care Packs box, flush to top, bottom, and left edge */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 h-full aspect-[600/562] pointer-events-none z-0">
        <Image
          src="/assets/images/donate-hero-child@2x.png"
          alt="Smiling child receiving a Care Pack - A gift of hope with every pack"
          fill
          priority
          sizes="(max-width: 1024px) 48vw, 600px"
          className="object-contain object-left"
        />
        {/* Soft edge blend into #ffe4f3 to ensure 100% seamless transition */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-[#ffe4f3] pointer-events-none" />
      </div>

      {/* Main Container */}
      <div className="max-w-[1247px] w-full mx-auto px-4 md:px-6 relative z-10">
        {/* Mobile-only child graphic */}
        <div className="block md:hidden w-full pt-4 pb-2">
          <div className="relative w-full max-w-[420px] mx-auto aspect-[600/520] overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(236,0,140,0.08)]">
            <Image
              src="/assets/images/donate-hero-child@2x.png"
              alt="Smiling child receiving a Care Pack - A gift of hope with every pack"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover object-left-center"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-center py-6 sm:py-8 md:py-16 lg:py-20">
          {/* Left spacer matching desktop child graphic */}
          <div className="hidden md:block md:col-span-5 lg:col-span-5 xl:col-span-5 pointer-events-none" />

          {/* Right Column: Hero copy matching Figma typography */}
          <div className="col-span-1 md:col-span-7 lg:col-span-7 xl:col-span-7 flex flex-col justify-center text-left md:pl-6 lg:pl-10 xl:pl-12">
            <h1 className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[54px] leading-[1.12] font-bold text-[#1a1a1a] tracking-[-0.02em]">
              £10 funds one complete <br className="hidden sm:inline" />
              baby care pack
            </h1>
            <p className="mt-4 sm:mt-5 md:mt-6 text-[15px] sm:text-[16.5px] md:text-[17.5px] lg:text-[18.5px] leading-[1.6] text-[#4a4a52] max-w-[540px]">
              Every donation goes directly to essential items for families
              experiencing poverty. No ambiguity. Just packs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

