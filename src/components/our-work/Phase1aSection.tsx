"use client";

import React from "react";
import Image from "next/image";

interface Metric {
  value: string;
  label: string;
}

const metrics: Metric[] = [
  { value: "5,273", label: "Packs built 2025" },
  { value: "£92,010", label: "Raised" },
  { value: "£10", label: "Target pack cost" },
  { value: "8", label: "Items per pack" },
  { value: "3,490", label: "Packs distributed 2025" },
  { value: "4", label: "Local authority partnerships" },
  { value: "8", label: "Distribution partners" },
  { value: "3", label: "Countries in the UK" },
];

const features = [
  {
    title: "Baby care items",
    description:
      "High-quality, dermatologically tested baby essentials: baby wash, shampoo, lotion, baby wipes and soft sponges.",
  },
  {
    title: "Organised around council",
    description:
      "Each pack contains essentials and information materials requested by partnering Family Hubs.",
  },
  {
    title: "Community distribution",
    description:
      "Packs are delivered through existing frontline partners, Family Hubs and food banks with established local relationships.",
  },
  {
    title: "Regular replenishments",
    description:
      "We coordinate with partners to ensure steady supply, replenishing stock as need dictates throughout the year.",
  },
  {
    title: "Zero eligibility friction",
    description:
      "No application forms or means-testing by Care Packs; partners distribute packs based on their professional judgment.",
  },
  {
    title: "Volunteering focus",
    description:
      "Every pack is assembled by corporate volunteers, creating direct connection between donors and frontline need.",
  },
];

export default function Phase1aSection() {
  return (
    <section id="phase-1a" className="w-full bg-white py-12 sm:py-16 md:py-20 scroll-mt-24">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1b1b1b] tracking-tight mb-8">
          Phase 1a: Early Years Programme
        </h2>

        {/* 8 Metric Cards Grid (2x4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14 sm:mb-16">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-[#fff1f8] rounded-[8px] border border-[#fde2f1] p-5 sm:p-6 flex flex-col justify-between hover:shadow-sm transition-shadow"
            >
              <div className="text-[26px] sm:text-[30px] font-bold text-[#ec008c] leading-none mb-2">
                {metric.value}
              </div>
              <div className="text-[13.5px] font-medium text-[#4a4a53]">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Why early years? Sub-block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Left Column: Baby Hand Image */}
          <div className="lg:col-span-5 w-full">
            <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] bg-gray-100">
              <Image
                src="/assets/images/our_work_programmes__baby_receiving_care__86_1651.webp"
                alt="Baby holding parent's hand"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Why early years text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#1b1b1b] mb-4">
              Why early years?
            </h3>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[25px] text-[#4a4a53] mb-4">
              Early childhood is the most developmentally significant period of life yet it is also the stage where low-income families experience the sharpest drop in disposable income, especially when a parent leaves employment or reduces hours to care for a baby.
            </p>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[25px] text-[#4a4a53] mb-4">
              Basic hygiene and care essentials are surprisingly expensive: a single pack of nappies, baby wash and wipes can cost £15–£20, creating genuine hardship.
            </p>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[25px] text-[#4a4a53]">
              Care Packs focuses on this window because early support delivers outsized benefits, not just preventing distress, but helping babies thrive and relieving parental anxiety.
            </p>
          </div>
        </div>

        {/* What Phase 1a includes */}
        <div>
          <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#1b1b1b] mb-6">
            What Phase 1a includes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-gray-200 rounded-[8px] p-6 shadow-[0_1px_4px_rgba(0,0,0,0.02)] hover:border-[#ec008c]/40 hover:shadow-md transition-all flex flex-col justify-start"
              >
                <h4 className="text-[16px] font-bold text-[#1b1b1b] mb-2">
                  {feature.title}
                </h4>
                <p className="text-[13.5px] sm:text-[14px] leading-[23px] text-[#555]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
