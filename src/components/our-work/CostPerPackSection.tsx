"use client";

import React from "react";

interface CostItem {
  name: string;
  cost: string;
}

const costItems: CostItem[] = [
  { name: "Baby wipes (full pack)", cost: "TBC" },
  { name: "Nappy sacks", cost: "TBC" },
  { name: "Cotton wool / pads", cost: "TBC" },
  { name: "Shampoo", cost: "TBC" },
  { name: "Lotion", cost: "TBC" },
  { name: "Body wash", cost: "TBC" },
  { name: "Sponge", cost: "TBC" },
  { name: "Biodegradable bags", cost: "TBC" },
];

interface DonationTier {
  amount: string;
  packs: string;
}

const donationTiers: DonationTier[] = [
  { amount: "£10", packs: "1 pack" },
  { amount: "£50", packs: "5 packs" },
  { amount: "£120", packs: "12 packs" },
  { amount: "£620", packs: "62 packs" },
  { amount: "£1,240", packs: "124 packs" },
  { amount: "£6,200", packs: "620 packs" },
];

export default function CostPerPackSection() {
  const handleDonateClick = () => {
    const widget = document.getElementById("donation-widget");
    if (widget) {
      widget.scrollIntoView({ behavior: "smooth", block: "center" });
      window.dispatchEvent(new CustomEvent("highlight-donation-widget"));
    } else {
      window.location.href = "/#donation-widget";
    }
  };

  return (
    <section
      id="how-it-is-costed"
      className="w-full bg-white py-14 sm:py-16 md:py-20 scroll-mt-20 border-t border-gray-100"
    >
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        {/* Section Header: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-10 sm:mb-12">
          <div>
            <h2 className="text-[28px] sm:text-[34px] md:text-[36px] font-bold text-[#1b1b1b] tracking-tight mb-4">
              Cost Per Pack
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#3a3a3f]">
              One of Care Packs&apos; most powerful aspects is full transparency around cost. Each baby care pack costs approximately £10, including delivery. This covers all eight items in the pack.
            </p>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#3a3a3f]">
              The simplicity of this cost model is one of Care Packs&apos; strongest propositions. Donors and corporate partners can see exactly what their contribution creates.
            </p>
          </div>
        </div>

        {/* 2-Column Content Grid: Cost Breakdown on Left, Donation Tiers on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Cost Breakdown */}
          <div className="flex flex-col">
            {/* Pink Highlight Card */}
            <div className="w-full bg-[#fff4fb] border border-[#fce2f3] rounded-[16px] p-6 text-center mb-6 shadow-sm">
              <div className="text-[40px] sm:text-[46px] font-bold text-[#ec008c] leading-none mb-2">
                £10
              </div>
              <div className="text-[15px] sm:text-[16px] font-bold text-[#1b1b1b] mb-1">
                per complete baby care pack
              </div>
              <div className="text-[12.5px] sm:text-[13px] text-[#666]">
                including the items, packaging and delivery
              </div>
            </div>

            {/* Cost Items Table */}
            <div className="w-full bg-white rounded-[14px] border border-gray-100 p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <div className="divide-y divide-gray-100">
                {costItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2.5 text-[14px]"
                  >
                    <span className="text-[#333] font-normal">{item.name}</span>
                    <span className="text-[#888] font-medium text-[13px] tracking-wide">
                      {item.cost}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total Row */}
              <div className="mt-2 pt-3.5 border-t border-gray-200 flex items-center justify-between text-[15px]">
                <span className="font-bold text-[#1b1b1b]">Total per pack</span>
                <span className="font-bold text-[#ec008c] text-[16px]">~£10.00</span>
              </div>
            </div>
          </div>

          {/* Right Column: Donation Tiers Table & CTA */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-3">
              {donationTiers.map((tier, index) => (
                <div
                  key={index}
                  className="w-full bg-white border border-[#eaeaea] hover:border-[#ec008c]/40 rounded-[10px] px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between shadow-[0_1px_4px_rgba(0,0,0,0.02)] transition-colors"
                >
                  <span className="text-[18px] sm:text-[20px] font-bold text-[#ec008c] min-w-[70px]">
                    {tier.amount}
                  </span>
                  <span className="text-[13px] sm:text-[14px] text-[#777] font-normal">
                    funds
                  </span>
                  <span className="text-[14.5px] sm:text-[15px] font-bold text-[#1b1b1b] min-w-[75px] text-right">
                    {tier.packs}
                  </span>
                </div>
              ))}
            </div>

            {/* Donate Now CTA Button */}
            <button
              type="button"
              onClick={handleDonateClick}
              className="mt-4 w-full bg-[#ec008c] hover:bg-[#d6007e] text-white font-semibold py-3.5 px-6 rounded-[8px] text-center text-[15px] leading-snug transition-colors shadow-sm cursor-pointer"
            >
              Donate now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
