import React from "react";
import Image from "next/image";
import Link from "next/link";

export function PacksDistributedSection() {
  const statGrid = [
    { value: "£92,010", label: "Money raised", year: "2025" },
    { value: "5,273", label: "Packs built", year: "2025" },
    { value: "3,490", label: "Packs delivered", year: "2025" },
    { value: "34,271", label: "Essential items purchased", year: "2025" },
    { value: "8", label: "Distribution partners", year: "2025" },
    { value: "548", label: "Volunteers", year: "2025" },
    { value: "2,163", label: "Volunteer hours", year: "2025" },
    { value: "144", label: "Companies involved", year: "2025" },
    { value: "4", label: "Local authority partnerships", year: "2025" },
    { value: "3", label: "Charity partnerships", year: "2025" },
  ];

  const update2026 = [
    {
      value: "700",
      title: "Packs to Babyzone",
      desc: "Croydon, Barking & Dagenham, Barnet",
    },
    {
      value: "300",
      title: "Packs to Bow Food Bank",
      desc: "East London",
    },
    {
      value: "6 weeks",
      title: "Delivery timeline",
      desc: "From pack build to doorstep",
    },
  ];

  return (
    <section id="packs-distributed" className="w-full bg-white py-14 border-b border-[#f0f0f0] scroll-mt-24">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6">
        <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-2 block">
          OUR IMPACT
        </span>
        <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1b1b1b] leading-tight mb-3">
          Packs Distributed
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[#4a4a53] max-w-[800px] leading-relaxed mb-10">
          All figures below are from the Care Packs 2025 Impact Statement and cover activity carried out during 2025 our first full year of operation.
        </p>

        {/* 10 Stats Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
          {statGrid.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e8e8ee] rounded-[14px] p-5 shadow-sm"
            >
              <div className="text-[24px] sm:text-[28px] font-bold text-[#ec008c] leading-tight mb-1">
                {item.value}
              </div>
              <div className="text-[13px] font-semibold text-[#1b1b1b]">
                {item.label}
              </div>
              <div className="text-[11px] text-[#858590] mt-0.5">{item.year}</div>
            </div>
          ))}
        </div>

        {/* 2026 Update Subsection */}
        <div>
          <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1b1b1b] mb-2">
            2026 Update
          </h3>
          <p className="text-[15px] text-[#4a4a53] mb-6">
            In June/July 2026, Care Packs delivered 1,000 packs in just six weeks. This included:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            {update2026.map((u, i) => (
              <div
                key={i}
                className="bg-[#fafafa] border border-[#e8e8ee] rounded-[14px] p-6 shadow-sm"
              >
                <div className="text-[26px] sm:text-[30px] font-bold text-[#ec008c] leading-none mb-2">
                  {u.value}
                </div>
                <h4 className="text-[16px] font-semibold text-[#1b1b1b] mb-1">
                  {u.title}
                </h4>
                <p className="text-[13px] text-[#6b6b75]">{u.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-[13px] text-[#787882] italic">
            *This trajectory suggests Care Packs is shifting from event-based output to recurring distribution. A significant operational milestone.
          </p>
        </div>
      </div>
    </section>
  );
}

export function CostPerPackSection() {
  const items = [
    { name: "Baby wipes (full pack)", cost: "TBC" },
    { name: "Nappy sacks", cost: "TBC" },
    { name: "Cotton wool/pads", cost: "TBC" },
    { name: "Shampoo", cost: "TBC" },
    { name: "Lotion", cost: "TBC" },
    { name: "Body wash", cost: "TBC" },
    { name: "Sponge", cost: "TBC" },
    { name: "Biodegradable bags", cost: "TBC" },
  ];

  const multipliers = [
    { amount: "£10", packs: "1 pack" },
    { amount: "£30", packs: "3 packs" },
    { amount: "£120", packs: "12 packs" },
    { amount: "£600", packs: "60 packs" },
    { amount: "£1,250", packs: "125 packs" },
    { amount: "£6,250", packs: "625 packs" },
  ];

  return (
    <section id="cost-per-pack" className="w-full bg-[#fdfdfd] py-14 border-b border-[#f0f0f0] scroll-mt-24">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6">
        <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-2 block">
          OUR IMPACT
        </span>
        <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1b1b1b] leading-tight mb-8">
          Cost Per Pack
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Column: £10 Callout Box + Breakdown */}
          <div>
            <p className="text-[15px] sm:text-[16px] text-[#4a4a53] leading-relaxed mb-6">
              One of Care Packs' most powerful assets is its transparency around cost. Each baby care pack costs approximately £10 to build and deliver. This covers all eight items in the pack.
            </p>

            <div className="bg-[#fff4fa] border border-[#ec008c]/25 rounded-[16px] p-6 sm:p-8 text-center mb-6">
              <div className="text-[44px] sm:text-[52px] font-bold text-[#ec008c] leading-none mb-2">
                £10
              </div>
              <div className="text-[16px] font-bold text-[#1b1b1b] mb-1">
                per complete baby care pack
              </div>
              <div className="text-[13px] text-[#6b6b75]">
                including all 8 items, assembly and delivery
              </div>
            </div>

            <div className="bg-white border border-[#ececef] rounded-[14px] p-5 divide-y divide-[#f0f0f3]">
              {items.map((item, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between text-[14px]">
                  <span className="text-[#333339]">{item.name}</span>
                  <span className="text-[#787882] font-medium">{item.cost}</span>
                </div>
              ))}
              <div className="pt-3 flex items-center justify-between text-[15px] font-bold">
                <span className="text-[#1b1b1b]">Total per pack</span>
                <span className="text-[#ec008c]">~£10.00</span>
              </div>
            </div>
          </div>

          {/* Right Column: Multiplier Table + Donate CTA */}
          <div>
            <p className="text-[15px] sm:text-[16px] text-[#4a4a53] leading-relaxed mb-6">
              The simplicity of this cost model is one of Care Packs' strongest propositions. Donors and corporate partners can see exactly what their contribution creates.
            </p>

            <div className="bg-white border border-[#ececef] rounded-[14px] p-6 shadow-sm mb-6 divide-y divide-[#f0f0f3]">
              {multipliers.map((m, i) => (
                <div key={i} className="py-3 flex items-center justify-between">
                  <span className="text-[18px] font-bold text-[#ec008c]">
                    {m.amount}
                  </span>
                  <span className="text-[14px] text-[#6b6b75]">builds</span>
                  <span className="text-[15px] font-bold text-[#1b1b1b]">
                    {m.packs}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/get-involved/fundraise#fund-packs-directly"
              className="w-full py-3.5 bg-[#ec008c] hover:bg-[#d6007e] text-white font-bold text-[16px] rounded-[8px] flex items-center justify-center transition-colors shadow-sm"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ReportingCycleSection() {
  return (
    <section id="reporting-cycle" className="w-full bg-white py-14 scroll-mt-24">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6">
        <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-2 block">
          OUR IMPACT
        </span>
        <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1b1b1b] leading-tight mb-8">
          Reporting Cycle
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-5 text-[15px] sm:text-[16px] text-[#4a4a53] leading-relaxed">
            <p>
              Care Packs is newly registered and its first formal financial reporting period had not yet reached the Charity Commission filing threshold at the time of its first impact statement.
            </p>
            <p>
              The £92,010 figure published in the 2025 Impact Statement is useful operational evidence, but should not be treated as equivalent to a formally filed annual turnover figure.
            </p>
            <p>
              We are committed to full Charity Commission compliance as our reporting obligations mature, and to publishing our accounts when filed.
            </p>
          </div>

          <div className="relative h-[280px] sm:h-[340px] rounded-[16px] overflow-hidden shadow-md">
            <Image
              src="/assets/images/our_impact__care_packs_launch_event__58_1626.webp"
              alt="Care Packs team member holding a Care Pack box"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
