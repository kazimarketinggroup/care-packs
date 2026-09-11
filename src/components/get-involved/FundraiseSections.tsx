"use client";

import React, { useState } from "react";
import Image from "next/image";

export function FundPacksDirectlySection() {
  const [selectedAmount, setSelectedAmount] = useState<number>(10);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustom, setIsCustom] = useState<boolean>(false);

  const tiers = [
    { amount: 10, packs: "1 pack" },
    { amount: 30, packs: "3 packs" },
    { amount: 60, packs: "6 packs" },
    { amount: 120, packs: "12 packs" },
    { amount: 310, packs: "31 packs" },
  ];

  const handleSelectTier = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    setIsCustom(true);
    const num = parseInt(val, 10);
    if (!isNaN(num) && num > 0) {
      setSelectedAmount(num);
    }
  };

  const calculatedPacks = Math.max(1, Math.floor(selectedAmount / 10));

  const items = [
    { name: "Baby wipes", cost: "~£TBC" },
    { name: "Nappy sacks", cost: "~£TBC" },
    { name: "Cotton wool/pads", cost: "~£TBC" },
    { name: "Shampoo", cost: "~£TBC" },
    { name: "Lotion", cost: "~£TBC" },
    { name: "Body wash", cost: "~£TBC" },
    { name: "Sponge", cost: "~£TBC" },
    { name: "Biodegradable bags", cost: "~£TBC" },
  ];

  const handleDonate = () => {
    window.dispatchEvent(new CustomEvent("open-donation-modal", { detail: { amount: selectedAmount } }));
  };

  return (
    <section id="fund-packs-directly" className="w-full bg-white py-14 border-b border-[#f0f0f0] scroll-mt-24">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6">
        <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-2 block">
          FUNDRAISE
        </span>
        <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1b1b1b] leading-tight mb-8">
          Fund packs directly
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Interactive Donation Form */}
          <div className="w-full">
            <h3 className="text-[16px] font-semibold text-[#1b1b1b] mb-4">
              Choose your amount
            </h3>

            {/* Amount Buttons Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {tiers.map((t) => {
                const active = !isCustom && selectedAmount === t.amount;
                return (
                  <button
                    key={t.amount}
                    type="button"
                    onClick={() => handleSelectTier(t.amount)}
                    className={`p-3.5 rounded-[10px] text-center border transition-all cursor-pointer ${
                      active
                        ? "border-[#ec008c] bg-[#fff5fa] shadow-sm"
                        : "border-[#e2e2e8] bg-white hover:border-gray-400"
                    }`}
                  >
                    <div className={`text-[18px] font-bold ${active ? "text-[#ec008c]" : "text-[#1b1b1b]"}`}>
                      £{t.amount}
                    </div>
                    <div className="text-[12px] text-[#6b6b75]">{t.packs}</div>
                  </button>
                );
              })}

              {/* Custom Input */}
              <div
                className={`p-2.5 rounded-[10px] border flex flex-col justify-center transition-all ${
                  isCustom
                    ? "border-[#ec008c] bg-[#fff5fa]"
                    : "border-[#e2e2e8] bg-white"
                }`}
              >
                <span className="text-[10px] font-medium text-[#6b6b75] uppercase">Custom</span>
                <div className="flex items-center text-[15px] font-bold text-[#1b1b1b]">
                  <span className="text-[#ec008c] mr-1">£</span>
                  <input
                    type="number"
                    placeholder="Amount"
                    value={customAmount}
                    onChange={handleCustomChange}
                    onFocus={() => setIsCustom(true)}
                    className="w-full bg-transparent outline-none font-bold text-[15px]"
                  />
                </div>
              </div>
            </div>

            {/* Summary callout */}
            <div className="mb-5">
              <span className="text-[24px] font-bold text-[#ec008c]">
                £{selectedAmount}
              </span>
              <span className="text-[14px] text-[#55555e] ml-2">
                Funds {calculatedPacks} {calculatedPacks === 1 ? "pack" : "packs"}
              </span>
            </div>

            {/* Donate CTA */}
            <button
              type="button"
              onClick={handleDonate}
              className="w-full py-3.5 bg-[#ec008c] hover:bg-[#d6007e] text-white font-bold text-[16px] rounded-[8px] transition-colors shadow-sm mb-3 cursor-pointer"
            >
              Donate £{selectedAmount}
            </button>

            <button
              type="button"
              className="w-full py-3 bg-transparent hover:bg-gray-50 border border-[#4a4a53] text-[#1b1b1b] font-semibold text-[14px] rounded-[8px] transition-colors cursor-pointer mb-5"
            >
              Set up a monthly gift
            </button>

            <p className="text-[12px] text-[#787882] leading-relaxed">
              Care Packs is a registered UK charity (no. 1208974). Gift Aid increases your donation by 25% at no extra cost.
            </p>
          </div>

          {/* Right Column: Where your money goes */}
          <div className="w-full bg-[#fafafa] rounded-[16px] border border-[#ebebee] p-6 sm:p-8">
            <h3 className="text-[20px] sm:text-[22px] font-bold text-[#1b1b1b] mb-2">
              Where your money goes
            </h3>
            <p className="text-[14px] text-[#55555e] leading-relaxed mb-6">
              Every pound donated to Fund a Pack goes directly to purchasing the items that make up a baby care pack. There is no ambiguity: £10 = one pack = one family supported.
            </p>

            <div className="divide-y divide-[#ececed] mb-6">
              {items.map((item, i) => (
                <div key={i} className="py-2.5 flex items-center justify-between text-[14px]">
                  <span className="text-[#333339]">{item.name}</span>
                  <span className="text-[#787882] font-medium">{item.cost}</span>
                </div>
              ))}
              <div className="pt-3.5 flex items-center justify-between text-[16px] font-bold">
                <span className="text-[#1b1b1b]">Total</span>
                <span className="text-[#ec008c]">~£10.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WorkplaceFundraisingSection() {
  const pointsLeft = [
    "Payroll giving and matched funding schemes",
    "Charity of the year partnerships with quarterly reporting",
    "£10 = one pack · £1000 = one hundred packs · £10,000 = a full pack run",
  ];

  const pointsRight = [
    "Team challenges costed in packs rather than pounds",
    "Gift Aid adds 25% to every eligible individual donation",
  ];

  return (
    <section id="workplace-fundraising" className="w-full bg-[#111111] text-white py-16 scroll-mt-24">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6">
        <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-2 block">
          FUNDRAISE
        </span>
        <h2 className="text-[28px] sm:text-[34px] font-semibold text-white leading-tight mb-4">
          Workplace fundraising
        </h2>
        <p className="text-[15px] sm:text-[16px] text-white/80 max-w-[760px] leading-relaxed mb-10">
          Because the pack has a published unit cost, workplace fundraising converts cleanly into output: every £1000 raised is one hundred packs, matched to referrals before the stock is ordered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <div className="space-y-4">
            {pointsLeft.map((pt, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#ec008c] mt-2 shrink-0" />
                <span className="text-[14px] sm:text-[15px] text-white/90 leading-snug">
                  {pt}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {pointsRight.map((pt, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#ec008c] mt-2 shrink-0" />
                <span className="text-[14px] sm:text-[15px] text-white/90 leading-snug">
                  {pt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CommunityCollectionsSection() {
  const venues = [
    "Places of worship (churches, mosques, synagogues, temples)",
    "Community centres and village halls",
    "Sports clubs and leisure centres",
    "Schools, colleges and universities",
    "Parent and toddler groups",
    "Neighbourhood associations",
    "Book clubs, social groups and hobby societies",
  ];

  return (
    <section id="community-collections" className="w-full bg-white py-14 scroll-mt-24">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6">
        <div className="max-w-[700px] mb-10">
          <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-2 block">
            FUNDRAISE
          </span>
          <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1b1b1b] leading-tight mb-3">
            Who organises community collections
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#4a4a53] leading-relaxed">
            Community collections are organised by individuals and community groups who want to help. You don't need a company behind you just a community that cares.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column: Venues list */}
          <div className="space-y-2.5">
            {venues.map((venue, idx) => (
              <div
                key={idx}
                className="bg-[#f8f8fb] hover:bg-[#f1f1f7] border border-[#e8e8ee] rounded-[10px] px-4 py-3 text-[14px] font-medium text-[#2d2d32] transition-colors flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#ec008c] shrink-0" />
                <span>{venue}</span>
              </div>
            ))}
          </div>

          {/* Right Column: Stat Card + Photo */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#fff6fb] border border-[#ec008c]/25 rounded-[16px] p-6 sm:p-7">
              <h4 className="text-[16px] font-semibold text-[#1b1b1b] mb-2">
                The impact of community giving
              </h4>
              <div className="text-[38px] font-bold text-[#ec008c] leading-none mb-1">
                548
              </div>
              <div className="text-[13px] font-semibold text-[#4a4a53] uppercase tracking-wider mb-3">
                volunteers in 2025
              </div>
              <p className="text-[13px] sm:text-[14px] text-[#55555e] leading-relaxed">
                Care Packs' volunteer base is made up of individuals from corporate teams, community groups and independent volunteers. Your community's time and donations matter as much as any corporate partnership.
              </p>
            </div>

            <div className="relative h-[220px] sm:h-[260px] rounded-[16px] overflow-hidden shadow-sm">
              <Image
                src="/assets/images/fundraise__volunteers_assembling_care_packs_at_a_packing_day__154_5459.webp"
                alt="Community volunteers packing in hall"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
