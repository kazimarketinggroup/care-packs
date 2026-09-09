"use client";

import React from "react";
import Link from "next/link";

interface SpecItem {
  title: string;
  subtitle: string;
}

const specItems: SpecItem[] = [
  { title: "Baby wipes", subtitle: "Full pack, unscented" },
  { title: "Nappy sacks", subtitle: "Biodegradable preferred" },
  { title: "Cotton wool / pads", subtitle: "For sensitive skin" },
  { title: "Shampoo", subtitle: "Baby-formula, fragrance-free" },
  { title: "Lotion", subtitle: "Hypoallergenic" },
  { title: "Body wash", subtitle: "Gentle, no SLS" },
  { title: "Sponges", subtitle: "Soft bath sponge" },
  { title: "Biodegradable bags", subtitle: "Nappy disposal" },
];

export default function BabyPackSpecSection() {
  return (
    <section id="baby-pack-spec" className="w-full bg-white py-12 sm:py-16 md:py-20 scroll-mt-24">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        {/* Eyebrow */}
        <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.1em] text-[#ec008c] uppercase mb-2 block">
          HOW WE WORK
        </span>

        {/* Heading */}
        <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-semibold text-[#1b1b1b] leading-[1.2] tracking-tight mb-4">
          Baby Pack Specification
        </h2>

        {/* Description */}
        <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53] max-w-[920px] mb-8 sm:mb-10">
          Our Phase 1a packs are designed to provide essential hygiene items for babies and young children. Every item is selected for safety, utility and value. The cost of one complete baby pack is approximately £7.80–£8.00.
        </p>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {specItems.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-200 rounded-[8px] p-5 shadow-[0_1px_4px_rgba(0,0,0,0.02)] hover:border-[#ec008c]/40 hover:shadow-md transition-all flex flex-col justify-center"
            >
              <h3 className="text-[15.5px] sm:text-[16px] font-bold text-[#1b1b1b] mb-1">
                {item.title}
              </h3>
              <p className="text-[13px] sm:text-[13.5px] text-[#6b7280]">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-[13.5px] sm:text-[14px] leading-[22px] text-[#555]">
          Future phases will include personal care, food, sleep, cleaning and technology packs. See{" "}
          <Link
            href="/our-work/programmes"
            className="text-[#ec008c] hover:text-[#d6007e] font-medium underline underline-offset-2 transition-colors"
          >
            programme roadmap.
          </Link>
        </p>
      </div>
    </section>
  );
}
