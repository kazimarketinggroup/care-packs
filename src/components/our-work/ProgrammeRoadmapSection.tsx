"use client";

import React from "react";

interface RoadmapPhase {
  phase: string;
  badge: string;
  isActive?: boolean;
  title: string;
  items: string[];
}

const phases: RoadmapPhase[] = [
  {
    phase: "Phase 1a",
    badge: "Active",
    isActive: true,
    title: "Early years",
    items: [
      "Hygiene essentials",
      "Nappy sacks",
      "Bath items",
      "Sponges",
      "Lotion",
      "Baby wash",
      "Shampoo",
      "Under-fives focus",
    ],
  },
  {
    phase: "Phase 1b",
    badge: "Q3 2026",
    title: "Personal care",
    items: [
      "Adult hygiene items",
      "Dental care",
      "Soap",
      "Shampoo",
      "Deodorant",
      "Sanitary products",
      "Frontline requested",
    ],
  },
  {
    phase: "Phase 2",
    badge: "2027",
    title: "Food",
    items: [
      "Non-perishables",
      "Staple foods",
      "Tea",
      "Biscuits",
      "Family nutrition",
    ],
  },
  {
    phase: "Phase 3",
    badge: "Planned",
    title: "Sleep",
    items: [
      "Bedding essentials",
      "Blankets",
      "Pyjamas",
      "Warm layers",
      "Cots",
    ],
  },
  {
    phase: "Phase 4",
    badge: "Planned",
    title: "Cleaning",
    items: [
      "Home hygiene items",
      "Washing powder",
      "Surface cleaner",
      "Cloths",
    ],
  },
  {
    phase: "Phase 5",
    badge: "Planned",
    title: "Technology",
    items: [
      "Refurbished laptops",
      "SIM connectivity",
      "Digital inclusion kits",
    ],
  },
];

export default function ProgrammeRoadmapSection() {
  return (
    <section id="programme-roadmap" className="w-full bg-white py-12 sm:py-16 md:py-20 scroll-mt-24">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        {/* Heading */}
        <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1b1b1b] tracking-tight mb-3">
          Programme Roadmap
        </h2>

        {/* Subtitle */}
        <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53] max-w-[920px] mb-8 sm:mb-12">
          Care Packs is developing a phased approach to expand beyond early years, creating a comprehensive platform for essential support.
        </p>

        {/* 6 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {phases.map((phase) => (
            <div
              key={phase.phase}
              className={`rounded-[8px] p-6 flex flex-col justify-start transition-all ${
                phase.isActive
                  ? "bg-white border-2 border-[#ec008c] shadow-[0_4px_20px_rgba(236,0,140,0.12)]"
                  : "bg-white border border-gray-200 shadow-sm hover:border-gray-300"
              }`}
            >
              {/* Header: Phase label & Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[13.5px] font-semibold text-[#6b7280]">
                  {phase.phase}
                </span>
                <span
                  className={`text-[11.5px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                    phase.isActive
                      ? "bg-[#ec008c] text-white"
                      : "bg-gray-100 text-[#555]"
                  }`}
                >
                  {phase.badge}
                </span>
              </div>

              {/* Phase Title */}
              <h3 className="text-[18px] font-bold text-[#1b1b1b] mb-4">
                {phase.title}
              </h3>

              {/* Items bullet list */}
              <ul className="space-y-1.5 text-[13.5px] sm:text-[14px] text-[#4a4a53]">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ec008c] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
