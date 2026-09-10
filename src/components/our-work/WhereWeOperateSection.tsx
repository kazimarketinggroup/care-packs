"use client";

import React from "react";

interface AreaEntry {
  name: string;
  tag: string;
  detail: string;
}

const currentAreas: AreaEntry[] = [
  {
    name: "Walsall",
    tag: "Active",
    detail:
      "Our longest-running delivery area with 530+ packs distributed across four Family Hub networks.",
  },
  {
    name: "Croydon",
    tag: "Active",
    detail:
      "700 packs delivered to Babyzone in Croydon and surrounding three boroughs.",
  },
  {
    name: "Barking & Dagenham",
    tag: "Active",
    detail:
      "Part of the 2025 Babyzone delivery across three boroughs.",
  },
  {
    name: "Barnet",
    tag: "Active",
    detail:
      "Part of the 2025 Babyzone delivery across three boroughs.",
  },
  {
    name: "East London (Bow)",
    tag: "Active",
    detail:
      "350 packs to Bow Food Bank on the A12 corridor, one of the city's most pressured areas.",
  },
  {
    name: "Coventry",
    tag: "Active",
    detail:
      "200 packs built with refugee and asylum-seeker families via community partnerships in Coventry.",
  },
  {
    name: "Scotland",
    tag: "Planned",
    detail:
      "Operational scope expanding via Charity Commission registration. Partnership development under way.",
  },
  {
    name: "Northern Ireland",
    tag: "Planned",
    detail:
      "Mirroring the Charity Commission registration. Partnership and logistics scoping in progress.",
  },
];

export default function WhereWeOperateSection() {
  return (
    <section
      id="where-we-operate"
      className="w-full bg-white py-14 sm:py-16 md:py-20 scroll-mt-20 border-t border-gray-100"
    >
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <h2 className="text-[28px] sm:text-[34px] md:text-[36px] font-bold text-[#1b1b1b] tracking-tight mb-4">
          Where We Operate
        </h2>

        <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#3a3a3f] max-w-[900px] mb-10 sm:mb-12">
          Care Packs began its delivery operations in the West Midlands, working on referral. Through existing partnerships with organisations like Babyzone and Bow Food Bank, we have extended reach into London and Coventry. Our geographic expansion is informed by local-authority-partner relationships. We grow by building trusted relationships with frontline partners, Family Hubs, food banks and other trusted community organisations.
        </p>

        {/* Sub-heading */}
        <h3 className="text-[20px] sm:text-[22px] font-bold text-[#1b1b1b] tracking-tight mb-6">
          Current and planned areas
        </h3>

        {/* Areas Grid: 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {currentAreas.map((area, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white rounded-[12px] px-5 py-4 border border-gray-100 shadow-[0_1px_6px_rgba(0,0,0,0.02)] hover:border-[#ec008c]/30 hover:shadow-[0_4px_14px_rgba(236,0,140,0.04)] transition-all"
            >
              {/* Dot indicator */}
              <span
                className={`mt-1.5 w-[9px] h-[9px] rounded-full shrink-0 ${
                  area.tag === "Active" ? "bg-[#ec008c]" : "bg-[#bbb]"
                }`}
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[15px] sm:text-[16px] font-bold text-[#1b1b1b]">
                    {area.name}
                  </span>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-2 py-[2px] rounded-full ${
                      area.tag === "Active"
                        ? "bg-[#ec008c]/10 text-[#ec008c]"
                        : "bg-gray-100 text-[#888]"
                    }`}
                  >
                    {area.tag}
                  </span>
                </div>
                <p className="text-[13px] sm:text-[13.5px] leading-[21px] text-[#666]">
                  {area.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
