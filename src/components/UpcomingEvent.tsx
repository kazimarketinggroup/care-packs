import React from "react";
import Link from "next/link";

export default function UpcomingEvent() {
  return (
    <section id="news-events" className="w-full bg-white pt-[50px] pb-[50px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-[105px]">
        {/* Soft Pink Rounded Box (Frame 18 / Section 21:1233) */}
        <div className="w-full max-w-[1230px] mx-auto bg-[#fff6fc] rounded-[15px] p-6 sm:p-8 md:p-10 lg:p-[48px] shadow-sm">
          {/* Top Tag Badge */}
          <div className="flex items-center gap-2">
            <span className="w-[10px] h-[10px] bg-[#ec008c] shrink-0" />
            <span className="text-[13px] leading-[17px] font-medium text-[#1b1b1b]">
              Upcoming Event
            </span>
          </div>

          {/* Content Row: Details on left, Dark Stat Box & CTA on right */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_437px] gap-8 lg:gap-12 items-center">
            {/* Left: Event Details */}
            <div className="flex flex-col">
              <span className="text-[16px] leading-[17px] font-bold text-[#1b1b1b] uppercase tracking-wide">
                13 OCTOBER 2026 · PORCHESTER HALL
              </span>
              <h2 className="mt-4 text-[40px] leading-[48px] font-bold text-[#1b1b1b] tracking-tight">
                Packathon 2026
              </h2>
              <p className="mt-4 text-[16px] leading-[28px] font-normal text-[#1b1b1b] max-w-[580px]">
                Fifteen organisations. One hall in Paddington. A target of more than 4,500 packs in a single day. Team places are allocated on a first-come basis.
              </p>
            </div>

            {/* Right: Dark Metric Widget + CTA */}
            <div className="flex flex-col w-full max-w-[437px] lg:justify-self-end">
              {/* Dark Box with 3 Stats */}
              <div className="bg-[#1b1b1b] text-white rounded-[10px] px-3.5 sm:px-6 py-5 flex items-center justify-between shadow-sm">
                {/* Stat 1: 4,500+ */}
                <div className="flex flex-col">
                  <span className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] font-bold">
                    4,500+
                  </span>
                  <span className="text-[10.5px] sm:text-[12px] leading-[14px] sm:leading-[16px] font-normal text-gray-300 uppercase tracking-wider">
                    pack target
                  </span>
                </div>

                {/* Vertical Divider */}
                <div className="h-9 w-[1px] bg-white/20 mx-1 sm:mx-2" />

                {/* Stat 2: 15 */}
                <div className="flex flex-col">
                  <span className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] font-bold">
                    15
                  </span>
                  <span className="text-[10.5px] sm:text-[12px] leading-[14px] sm:leading-[16px] font-normal text-gray-300 uppercase tracking-wider">
                    company places
                  </span>
                </div>

                {/* Vertical Divider */}
                <div className="h-9 w-[1px] bg-white/20 mx-1 sm:mx-2" />

                {/* Stat 3: 1 */}
                <div className="flex flex-col">
                  <span className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] font-bold">
                    1
                  </span>
                  <span className="text-[10.5px] sm:text-[12px] leading-[14px] sm:leading-[16px] font-normal text-gray-300 uppercase tracking-wider">
                    day
                  </span>
                </div>
              </div>

              {/* Reserve button */}
              <Link
                href="#reserve"
                className="mt-3 w-full bg-[#ec008c] hover:bg-[#d6007e] text-white font-semibold py-3 px-6 rounded-[10px] text-center text-[14px] leading-[20px] transition-colors shadow-sm"
              >
                Reserve your team&apos;s place
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
