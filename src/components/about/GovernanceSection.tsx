"use client";

import React from "react";
import Image from "next/image";

interface GovernanceItem {
  label: string;
  value: string;
}

const governanceDetails: GovernanceItem[] = [
  { label: "Charity name", value: "CARE PACKS" },
  { label: "Registration number", value: "1209874" },
  { label: "Organisation type", value: "CIO - Foundation" },
  { label: "Registration date", value: "4 September 2024" },
  { label: "Operating area", value: "England, Scotland and Northern Ireland" },
  { label: "Charitable purpose", value: "Prevention or relief of poverty" },
  {
    label: "Registered address",
    value: "10 Blue Cedar Drive, Streetly, Sutton Coldfield, B74 2AE",
  },
];

export default function GovernanceSection() {
  return (
    <section id="governance" className="w-full bg-white py-12 sm:py-16 md:py-20 scroll-mt-24">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Information & Details Table */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.1em] text-[#ec008c] uppercase mb-2 block">
              ACCOUNTABILITY
            </span>

            {/* Heading */}
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-semibold text-[#1b1b1b] leading-[1.2] tracking-tight mb-4">
              Governance &amp; Policies
            </h2>

            {/* Description */}
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53] mb-8 max-w-[650px]">
              Care Packs is constituted as a Charitable Incorporated Organisation under the Charities Act 2011. Its governing document is its CIO constitution filed with the Charity Commission for England and Wales.
            </p>

            {/* Structured Details Table */}
            <div className="w-full divide-y divide-gray-100 border-t border-b border-gray-100">
              {governanceDetails.map((item) => (
                <div
                  key={item.label}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 text-[13.5px] sm:text-[14px]"
                >
                  <span className="text-[#6b7280] font-normal sm:w-[180px] shrink-0">
                    {item.label}
                  </span>
                  <span className="text-[#1b1b1b] font-medium sm:text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Volunteers & Leadership Packaging Photo */}
          <div className="lg:col-span-5 w-full">
            <div className="relative w-full aspect-[4/4.3] sm:aspect-[4/4] rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.07)] bg-gray-100">
              <Image
                src="/assets/images/accountability__volunteers_on_packing_day__58_3063.webp"
                alt="Care Packs volunteers and leadership assembling care packages"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
