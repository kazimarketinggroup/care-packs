"use client";

import React from "react";
import Link from "next/link";

export default function NewsEventsUpcoming() {
  return (
    <section id="upcoming-event" className="w-full bg-[#fbf9fa] py-14 md:py-20 border-b border-gray-100 scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title */}
        <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-2 block">
          UPCOMING EVENT
        </span>
        <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-bold text-[#1b1b1b] tracking-tight mb-8">
          Packathon 2026
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Event details & CTA buttons */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Event bullets */}
            <ul className="space-y-2.5 text-[15px] sm:text-[16px] text-[#3a3a3f]">
              <li className="flex items-start gap-2.5">
                <span className="text-[#ec008c] font-bold mt-1">•</span>
                <span className="font-semibold text-[#1b1b1b]">13 October 2026</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#ec008c] font-bold mt-1">•</span>
                <span>Porchester Hall, Porchester Road, Paddington, London, W2 5HS</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#ec008c] font-bold mt-1">•</span>
                <span>Target: 4,500+ packs in one afternoon</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#ec008c] font-bold mt-1">•</span>
                <span>Capacity for approximately 15 corporate organisations</span>
              </li>
            </ul>

            {/* Paragraph */}
            <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.65] text-[#4a4a53]">
              Packathon 2026 is Care Packs&apos; biggest event of the year. Multiple corporate teams
              compete and collaborate to build as many packs as possible in one afternoon. Each pack
              goes directly to a family experiencing poverty.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/get-involved/partner-with-us"
                className="h-[44px] px-6 rounded-[6px] bg-[#ec008c] hover:bg-[#d6007e] text-white font-bold text-[14.5px] inline-flex items-center justify-center transition-all shadow-sm active:scale-[0.98]"
              >
                Register your company
              </Link>
              <Link
                href="/get-involved/partner-with-us"
                className="h-[44px] px-6 rounded-[6px] bg-white hover:bg-gray-50 text-[#1b1b1b] border border-[#1b1b1b] font-bold text-[14.5px] inline-flex items-center justify-center transition-all shadow-sm active:scale-[0.98]"
              >
                Sponsor the event
              </Link>
            </div>
          </div>

          {/* Right Column: 2x2 Stat Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-5">
            {/* Stat 1 */}
            <div className="bg-white rounded-[16px] p-6 sm:p-7 text-center shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-[#ece8eb]">
              <div className="text-[30px] sm:text-[36px] font-bold text-[#ec008c] leading-tight">
                4,500+
              </div>
              <div className="text-[12.5px] sm:text-[13px] text-[#6f6f77] mt-1.5 font-medium">
                Target packs
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-[16px] p-6 sm:p-7 text-center shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-[#ece8eb]">
              <div className="text-[30px] sm:text-[36px] font-bold text-[#ec008c] leading-tight">
                ~15
              </div>
              <div className="text-[12.5px] sm:text-[13px] text-[#6f6f77] mt-1.5 font-medium">
                Corporate teams
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-[16px] p-6 sm:p-7 text-center shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-[#ece8eb]">
              <div className="text-[30px] sm:text-[36px] font-bold text-[#ec008c] leading-tight">
                £10
              </div>
              <div className="text-[12.5px] sm:text-[13px] text-[#6f6f77] mt-1.5 font-medium">
                Per pack
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-white rounded-[16px] p-6 sm:p-7 text-center shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-[#ece8eb]">
              <div className="text-[30px] sm:text-[36px] font-bold text-[#ec008c] leading-tight">
                Oct 13
              </div>
              <div className="text-[12.5px] sm:text-[13px] text-[#6f6f77] mt-1.5 font-medium">
                Date 2026
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
