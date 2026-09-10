"use client";

import React from "react";

interface PackItem {
  name: string;
  description: string;
}

const packItems: PackItem[] = [
  {
    name: "Baby wipes",
    description: "Fragrance-free, hypoallergenic, suitable for sensitive skin.",
  },
  {
    name: "Nappy sacks",
    description: "Hygienic disposal, perfumed, tie handles for easy use.",
  },
  {
    name: "Cotton wool / pads",
    description: "For gentle cleansing of sensitive baby skin.",
  },
  {
    name: "Shampoo",
    description: "Baby formula, tear-free, free from dyes.",
  },
  {
    name: "Lotion",
    description: "Hypoallergenic, moisturising lotion for baby skin.",
  },
  {
    name: "Body wash",
    description: "Gentle formula, no SLS or harsh chemicals.",
  },
  {
    name: "Sponge",
    description: "Soft bath sponge, suitable for newborns and infants.",
  },
  {
    name: "Biodegradable bags",
    description: "For nappy disposal. Eco-friendly where possible.",
  },
];

export default function WhatIsInThePackSection() {
  return (
    <section id="what-is-in-the-pack" className="w-full bg-white py-14 sm:py-16 md:py-20 scroll-mt-20">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <h2 className="text-[28px] sm:text-[34px] md:text-[36px] font-bold text-[#1b1b1b] tracking-tight mb-8 sm:mb-10">
          What is in the pack
        </h2>

        {/* 8 Items Grid (4 columns on lg, 2 on sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {packItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[14px] sm:rounded-[16px] p-5 sm:p-6 border border-[#f0e6ed] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#ec008c]/40 hover:shadow-[0_6px_20px_rgba(236,0,140,0.06)] transition-all duration-200 flex flex-col justify-start"
            >
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#1b1b1b] mb-2.5">
                {item.name}
              </h3>
              <p className="text-[13px] sm:text-[14px] leading-[22px] text-[#555]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
