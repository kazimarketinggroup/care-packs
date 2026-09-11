"use client";

import React from "react";
import Link from "next/link";

export default function NewsEventsPublicSessions() {
  return (
    <section id="public-sessions" className="w-full bg-[#fff4fb] py-16 md:py-20 scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title */}
        <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.14em] text-[#ec008c] uppercase mb-3 block">
          PUBLIC SESSIONS
        </span>
        <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-[#18181b] tracking-tight leading-[1.2] mb-9">
          Public corporate days are arranged on request.
        </h2>

        {/* 2 Session Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[880px]">
          
          {/* Card 1: Corporate Team Days */}
          <div className="bg-white rounded-[20px] p-7 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-black/[0.02] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="text-[13px] font-semibold text-[#ec008c] block mb-2.5">
                Book any time
              </span>
              <h3 className="text-[20px] sm:text-[21px] font-bold text-[#18181b] mb-2 tracking-tight">
                Corporate Team Days
              </h3>
              <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-[#52525b]">
                Private packing days for your organisation any size, any location.
              </p>
            </div>
            <div className="mt-7">
              <Link
                href="/get-involved/partner-with-us"
                className="text-[14px] font-semibold text-[#ec008c] hover:text-[#d6007e] inline-flex items-center gap-1.5 transition-colors group"
              >
                <span>Book now</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Community Collections */}
          <div className="bg-white rounded-[20px] p-7 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-black/[0.02] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="text-[13px] font-semibold text-[#ec008c] block mb-2.5">
                Ongoing
              </span>
              <h3 className="text-[20px] sm:text-[21px] font-bold text-[#18181b] mb-2 tracking-tight">
                Community Collections
              </h3>
              <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-[#52525b]">
                Run a collection drive in your community, school or workplace.
              </p>
            </div>
            <div className="mt-7">
              <Link
                href="/get-involved/fundraise"
                className="text-[14px] font-semibold text-[#ec008c] hover:text-[#d6007e] inline-flex items-center gap-1.5 transition-colors group"
              >
                <span>Get started</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
