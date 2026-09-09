"use client";

import React from "react";

interface StandardCard {
  title: string;
  description: string;
}

const standards: StandardCard[] = [
  {
    title: "Transparent reporting",
    description:
      "We publish impact data annually. Every stat on this site relates to verified 2025 activity.",
  },
  {
    title: "Ethical fundraising",
    description:
      "We will never use high-pressure tactics, misleading statements or unauthorised data sharing.",
  },
  {
    title: "Clear gift tracking",
    description:
      "Donations can be tracked to pack costs. £8 = one baby care pack delivered.",
  },
  {
    title: "Complaints process",
    description:
      "We welcome feedback and will respond to all complaints within 14 working days.",
  },
];

export default function FundraisingStandardsSection() {
  return (
    <section id="fundraising-standards" className="w-full bg-white py-12 sm:py-16 md:py-20 scroll-mt-24">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Mission & Compliance Text */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.1em] text-[#ec008c] uppercase mb-2 block">
              ACCOUNTABILITY
            </span>

            {/* Heading */}
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-semibold text-[#1b1b1b] leading-[1.2] tracking-tight mb-5">
              Fundraising Standards
            </h2>

            {/* Paragraph 1 */}
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53] mb-4">
              Care Packs is committed to transparent, ethical fundraising. We ensure that every pound raised is used effectively and accounted for, and that our donors, partners and beneficiaries can trust us completely.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53]">
              We operate in accordance with the Code of Fundraising Practice published by the Fundraising Regulator and the guidance of the Charity Commission for England and Wales.
            </p>
          </div>

          {/* Right Column: 4 Policy Cards */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4">
            {standards.map((item) => (
              <div
                key={item.title}
                className="bg-[#fafafc] border border-gray-100 rounded-[8px] p-4 sm:p-5 flex items-start gap-3 hover:border-[#ec008c]/25 hover:shadow-sm transition-all"
              >
                {/* Pink Bullet Dot */}
                <span className="w-2 h-2 rounded-full bg-[#ec008c] mt-2 shrink-0" />

                <div>
                  <h3 className="text-[15.5px] sm:text-[16px] font-bold text-[#1b1b1b] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[22px] text-[#555]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
