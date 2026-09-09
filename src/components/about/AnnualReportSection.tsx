"use client";

import React from "react";

interface ReportMetric {
  value: string;
  label: string;
  year: string;
}

const metrics: ReportMetric[] = [
  { value: "£92,010", label: "Money raised", year: "2025" },
  { value: "5,273", label: "Packs built", year: "2025" },
  { value: "3,490", label: "Packs delivered", year: "2025" },
  { value: "34,271", label: "Essential items purchased", year: "2025" },
];

export default function AnnualReportSection() {
  return (
    <section id="annual-report" className="w-full bg-white py-12 sm:py-16 md:py-20 scroll-mt-24">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        {/* Eyebrow */}
        <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.1em] text-[#ec008c] uppercase mb-2 block">
          ACCOUNTABILITY
        </span>

        {/* Heading */}
        <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-semibold text-[#1b1b1b] leading-[1.2] tracking-tight mb-4">
          Annual Report
        </h2>

        {/* Description */}
        <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53] max-w-[920px] mb-8 sm:mb-10">
          Care Packs published its first impact statement in 2026, covering activity during 2025. Because the charity was newly registered, its first formal financial reporting period had not yet reached the Charity Commission filing threshold at the time of publication.
        </p>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-[#fff1f8] rounded-[8px] border border-[#fde2f1] p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="text-[32px] sm:text-[36px] lg:text-[38px] font-bold text-[#ec008c] leading-none mb-3">
                {metric.value}
              </div>
              <div>
                <p className="text-[14.5px] sm:text-[15px] font-semibold text-[#1b1b1b] mb-1">
                  {metric.label}
                </p>
                <p className="text-[13px] text-[#6b7280]">
                  {metric.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
