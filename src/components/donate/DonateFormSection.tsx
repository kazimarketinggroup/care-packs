"use client";

import React, { useState } from "react";
import Link from "next/link";

const presetAmounts = [
  { value: 10, packs: 1 },
  { value: 20, packs: 2 },
  { value: 30, packs: 3 },
  { value: 60, packs: 6 },
  { value: 120, packs: 12 },
  { value: 310, packs: 31 },
];

const packItems = [
  "Baby wipes",
  "Nappy sacks",
  "Cotton wool",
  "Shampoo",
  "Lotion",
  "Body wash",
  "Sponge",
  "Biodegradable bags",
];

export default function DonateFormSection() {
  const [selectedPack, setSelectedPack] = useState<"baby" | "tech" | "crisis">("baby");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<number>(30);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [giftAid, setGiftAid] = useState<boolean>(true);

  const handleSelectPreset = (val: number) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9.]/g, "");
    setCustomAmount(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num > 0) {
      setAmount(num);
    } else if (!val) {
      setAmount(0);
    }
  };

  const packsCount = Math.max(1, Math.floor(amount / 10));

  const handleDonateClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount <= 0) return;
    window.dispatchEvent(
      new CustomEvent("open-donation-modal", {
        detail: { amount: amount > 0 ? amount : 10 },
      })
    );
  };

  return (
    <section className="w-full bg-[#faf7f9] py-10 sm:py-14 md:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT COLUMN: DONATION CARD ================= */}
          <div className="lg:col-span-7 xl:col-span-8 bg-white rounded-[16px] p-6 sm:p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-[#ede8ec]">
            
            {/* Pack Selector Pills */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none">
              <button
                type="button"
                onClick={() => setSelectedPack("baby")}
                className={`h-[36px] px-5 rounded-full flex items-center gap-2 text-[13px] font-bold transition-all ${
                  selectedPack === "baby"
                    ? "bg-[#ec008c] text-white shadow-sm"
                    : "bg-[#454545]/5 text-[#6f6f77] hover:text-[#1b1b1b]"
                }`}
              >
                <span>P1-Baby Pack</span>
                <span className="text-[9px] font-semibold uppercase tracking-wider bg-white/20 px-1.5 py-0.5 rounded-full">
                  Active
                </span>
              </button>

              <button
                type="button"
                className="h-[36px] px-4 rounded-full bg-[#f4f4f5] text-[#8e8e93] text-[12px] font-medium flex items-center gap-1.5 cursor-not-allowed"
                disabled
              >
                <span>P2-Tech Pack</span>
                <span className="text-[8px] text-[#8e8e93]/60">soon</span>
              </button>

              <button
                type="button"
                className="h-[36px] px-4 rounded-full bg-[#f4f4f5] text-[#8e8e93] text-[12px] font-medium flex items-center gap-1.5 cursor-not-allowed"
                disabled
              >
                <span>P3-TBC</span>
                <span className="text-[8px] text-[#8e8e93]/60">soon</span>
              </button>
            </div>

            {/* Frequency Selector: Give once | Give monthly */}
            <div className="mt-6 grid grid-cols-2 p-1 bg-[#f4f4f5] rounded-[8px]">
              <button
                type="button"
                onClick={() => setFrequency("once")}
                className={`py-2.5 text-[14px] font-bold rounded-[6px] transition-all cursor-pointer ${
                  frequency === "once"
                    ? "bg-[#ec008c] text-white shadow-sm"
                    : "text-[#6f6f77] hover:text-[#1b1b1b]"
                }`}
              >
                Give once
              </button>
              <button
                type="button"
                onClick={() => setFrequency("monthly")}
                className={`py-2.5 text-[14px] font-bold rounded-[6px] transition-all cursor-pointer ${
                  frequency === "monthly"
                    ? "bg-[#ec008c] text-white shadow-sm"
                    : "text-[#6f6f77] hover:text-[#1b1b1b]"
                }`}
              >
                Give monthly
              </button>
            </div>

            {/* "Choose an amount" */}
            <div className="mt-8">
              <h2 className="text-[15px] font-bold text-[#1b1b1b]">
                Choose an amount
              </h2>

              {/* 3x2 Amount Grid */}
              <div className="mt-3.5 grid grid-cols-3 gap-3 sm:gap-3.5">
                {presetAmounts.map((item) => {
                  const isSelected = amount === item.value && !customAmount;
                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => handleSelectPreset(item.value)}
                      className={`py-3 sm:py-3.5 px-3 rounded-[8px] text-center border-2 transition-all cursor-pointer ${
                        isSelected
                          ? "border-[#ec008c] bg-[#fff4fb] shadow-sm"
                          : "border-gray-200/80 bg-white hover:border-gray-300"
                      }`}
                    >
                      <div
                        className={`text-[17px] sm:text-[18px] font-bold leading-tight ${
                          isSelected ? "text-[#ec008c]" : "text-[#1b1b1b]"
                        }`}
                      >
                        £{item.value}
                      </div>
                      <div className="text-[11.5px] sm:text-[12px] text-[#6f6f77] mt-0.5 font-normal">
                        {item.packs} {item.packs === 1 ? "pack" : "packs"}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Custom amount field */}
              <div className="mt-4 p-3.5 bg-white border border-gray-200/80 rounded-[8px] focus-within:border-[#ec008c] focus-within:ring-1 focus-within:ring-[#ec008c] transition-all">
                <label className="block text-[11px] text-[#6f6f77] font-medium mb-1">
                  Or enter your own amount
                </label>
                <div className="flex items-center gap-1.5">
                  <span className="text-[15px] font-bold text-[#ec008c]">£</span>
                  <input
                    type="text"
                    inputMode="decimal"
                    placeholder="Other amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="w-full text-[15px] font-semibold text-[#1b1b1b] placeholder:text-[#9a9aa2] placeholder:font-normal focus:outline-none bg-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Gift Aid Box */}
            <div className="mt-6 p-4 sm:p-5 bg-[#f8fafc] border border-[#e8ecf1] rounded-[10px]">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={giftAid}
                  onChange={(e) => setGiftAid(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded text-[#ec008c] focus:ring-[#ec008c] accent-[#ec008c] cursor-pointer"
                />
                <div>
                  <span className="text-[13.5px] font-bold text-[#1b1b1b]">
                    Yes, I&apos;d like to add Gift Aid
                  </span>
                  <p className="text-[11.5px] leading-[17px] text-[#6f6f77] mt-1 font-normal">
                    I am a UK taxpayer and understand that if I pay less Income Tax and/or Capital Gains Tax in the current tax year than the amount of Gift Aid claimed on all my donations it is my responsibility to pay any difference.
                  </p>
                </div>
              </label>
            </div>

            {/* Summary Box */}
            <div className="mt-6 p-4 sm:p-5 bg-[#fff4fb] border border-[#fce7f3] rounded-[10px] space-y-2">
              <div className="flex items-center justify-between text-[14px]">
                <span className="text-[#6f6f77] font-medium">Your donation</span>
                <span className="text-[17px] font-bold text-[#ec008c]">
                  £{amount > 0 ? amount : 0}
                </span>
              </div>
              <div className="flex items-center justify-between text-[14px]">
                <span className="text-[#1b1b1b] font-semibold">Packs funded</span>
                <span className="text-[15px] font-bold text-[#ec008c]">
                  {amount > 0 ? packsCount : 0} {packsCount === 1 ? "pack" : "packs"}
                </span>
              </div>
            </div>

            {/* Primary Action Button */}
            <form onSubmit={handleDonateClick} className="mt-6">
              <button
                type="submit"
                disabled={amount <= 0}
                className="w-full h-[50px] bg-[#ec008c] hover:bg-[#d6007e] active:scale-[0.99] text-white font-bold text-[16px] rounded-[6px] shadow-sm hover:shadow transition-all flex items-center justify-center cursor-pointer disabled:opacity-50"
              >
                Donate £{amount > 0 ? amount : 0}
              </button>
            </form>

            {/* Subtext */}
            <p className="text-center text-[11.5px] text-[#8e8e93] mt-3 font-normal">
              Secure payment via Stripe. Care Packs is a registered UK charity no. 1209874.
            </p>
          </div>

          {/* ================= RIGHT COLUMN: SIDEBAR ================= */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            
            {/* Card 1: What's in a pack */}
            <div className="bg-white rounded-[16px] p-6 sm:p-7 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-[#ede8ec]">
              <h3 className="text-[17px] font-bold text-[#1b1b1b] mb-4">
                What&apos;s in a pack
              </h3>
              <ul className="space-y-2.5">
                {packItems.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#4a4a53]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ec008c] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[16px] font-bold text-[#ec008c]">
                  Total cost: ~£10
                </span>
              </div>
            </div>

            {/* Card 2: 2025 impact */}
            <div className="bg-white rounded-[16px] p-6 sm:p-7 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-[#ede8ec]">
              <h3 className="text-[17px] font-bold text-[#1b1b1b] mb-4">
                2025 impact
              </h3>
              <div className="divide-y divide-gray-100">
                <div className="py-3 flex items-center justify-between text-[14px]">
                  <span className="text-[#6f6f77]">Packs built</span>
                  <span className="font-bold text-[#ec008c] text-[15px]">5,273</span>
                </div>
                <div className="py-3 flex items-center justify-between text-[14px]">
                  <span className="text-[#6f6f77]">Packs delivered</span>
                  <span className="font-bold text-[#ec008c] text-[15px]">3,480</span>
                </div>
                <div className="py-3 flex items-center justify-between text-[14px]">
                  <span className="text-[#6f6f77]">Raised</span>
                  <span className="font-bold text-[#ec008c] text-[15px]">£92,010</span>
                </div>
              </div>
            </div>

            {/* Card 3: Other ways to give */}
            <div className="bg-white rounded-[16px] p-6 sm:p-7 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-[#ede8ec]">
              <h3 className="text-[15px] font-bold text-[#1b1b1b] mb-3">
                Other ways to give
              </h3>
              <div className="flex flex-col space-y-2">
                <Link
                  href="/get-involved/fundraise"
                  className="text-[13.5px] font-medium text-[#ec008c] hover:underline"
                >
                  Workplace fundraising
                </Link>
                <Link
                  href="/get-involved/partner-with-us"
                  className="text-[13.5px] font-medium text-[#ec008c] hover:underline"
                >
                  Corporate partnerships
                </Link>
                <Link
                  href="/get-involved/volunteer-with-us"
                  className="text-[13.5px] font-medium text-[#ec008c] hover:underline"
                >
                  Sponsor a pack run
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
