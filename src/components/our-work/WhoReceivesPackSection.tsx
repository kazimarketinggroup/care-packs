"use client";

import React from "react";

interface RecipientGroup {
  title: string;
  description: string;
}

const recipientGroups: RecipientGroup[] = [
  {
    title: "Families with babies",
    description:
      "Our Phase 1a focus is on support for families with babies and young children providing the hygiene essentials that are often the first to go when money is tight.",
  },
  {
    title: "Elderly individuals",
    description:
      "Older people experiencing poverty or isolation can receive practical care packs in future phases. We work with referral partners who already know these communities.",
  },
  {
    title: "Disabled people",
    description:
      "Disabled individuals who need additional support accessing basic essentials and personalised packaging adapted for specific limitations.",
  },
  {
    title: "Households in crisis",
    description:
      "Sudden financial shock (job loss, relationship breakdown, eviction) can leave families with nothing. We work through vetted referral partners.",
  },
];

export default function WhoReceivesPackSection() {
  return (
    <section
      id="who-receives-it"
      className="w-full bg-white py-14 sm:py-16 md:py-20 scroll-mt-20 border-t border-gray-100"
    >
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <h2 className="text-[28px] sm:text-[34px] md:text-[36px] font-bold text-[#1b1b1b] tracking-tight mb-8 sm:mb-10">
          Who Receives the Pack
        </h2>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {recipientGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white rounded-[16px] p-6 sm:p-7 md:p-8 border border-[#eaeaea] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#ec008c]/40 hover:shadow-[0_4px_18px_rgba(236,0,140,0.05)] transition-all"
            >
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#1b1b1b] mb-3">
                {group.title}
              </h3>
              <p className="text-[14px] sm:text-[14.5px] leading-[25px] text-[#555]">
                {group.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
