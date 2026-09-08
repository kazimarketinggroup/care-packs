"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Lock } from "lucide-react";

export default function MiniWidget() {
  const [selectedPack, setSelectedPack] = useState<"baby" | "tech" | "crisis">("baby");

  return (
    <div className="w-full max-w-[529px] bg-white rounded-[24px] p-6 sm:p-7 md:p-8 border border-[#dedee2]/80 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.08)] relative z-10 transition-all">
      {/* Top Row: Title & Secure Badge */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[18.5px] font-semibold text-[#1b1b1b] tracking-tight">
          Fund a pack today
        </h2>
        <div className="flex items-center gap-1.5 text-[11.6px] text-[#6f6f77] font-normal">
          <Lock className="w-3.5 h-3.5 text-[#6f6f77]" />
          <span>Secure donation</span>
        </div>
      </div>

      {/* Tabs Row: Pack Selector */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1 no-scrollbar">
        {/* P1 - Baby Pack (Active) */}
        <button
          type="button"
          onClick={() => setSelectedPack("baby")}
          className={`h-9 px-3.5 rounded-full flex items-center gap-2 text-[13px] font-bold transition-all ${
            selectedPack === "baby"
              ? "bg-[#ec008c] text-white shadow-sm"
              : "bg-[#f4f4f6] text-[#6f6f77] hover:text-[#1b1b1b]"
          }`}
        >
          <span>P1-Baby Pack</span>
          <span
            className={`text-[8px] font-medium tracking-wide uppercase px-1.5 py-0.5 rounded-full ${
              selectedPack === "baby" ? "bg-white/25 text-white" : "bg-[#e5e5ea] text-[#6f6f77]"
            }`}
          >
            Active
          </span>
        </button>

        {/* P2 - Tech Pack (Coming Soon) */}
        <button
          type="button"
          className="h-9 px-3.5 rounded-full bg-[#f4f4f6] text-[#6f6f77] flex items-center gap-2 text-[12px] font-medium cursor-not-allowed opacity-90"
          title="Coming soon"
        >
          <span>P2-Tech Pack</span>
          <span className="text-[8px] font-medium text-[#8e8e93] bg-[#e5e5ea] px-1.5 py-0.5 rounded-full">
            soon
          </span>
        </button>

        {/* P3 - Crisis Pack (Coming Soon) */}
        <button
          type="button"
          className="h-9 px-3.5 rounded-full bg-[#f4f4f6] text-[#6f6f77] flex items-center gap-2 text-[12px] font-medium cursor-not-allowed opacity-90"
          title="Coming soon"
        >
          <span>P3-Crisis Pack</span>
          <span className="text-[8px] font-medium text-[#8e8e93] bg-[#e5e5ea] px-1.5 py-0.5 rounded-full">
            soon
          </span>
        </button>
      </div>

      {/* Pack Info & Pricing Row */}
      <div className="flex items-center gap-3 mb-2.5">
        <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
          <Image
            src="/assets/icons/baby-carriage.svg"
            alt="Baby pack icon"
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
        </div>
        <div className="text-[20px] font-semibold text-[#1b1b1b] tracking-tight">
          £7.89 funds a baby pack
        </div>
      </div>

      {/* Description */}
      <p className="text-[12px] leading-[20px] text-[#6f6f77] mb-6">
        Wipes, cotton wool, shampoo and more, for a family who needs them. Assembles 1 baby pack
        every month. Cancel any time.
      </p>

      {/* Bottom CTA Button */}
      <button
        type="button"
        className="w-full bg-[#ec008c] hover:bg-[#d6007e] active:scale-[0.99] text-white font-bold text-[15px] h-[44px] rounded-[6px] shadow-[0_8px_16px_-4px_rgba(236,0,140,0.3)] transition-all flex items-center justify-center cursor-pointer"
      >
        Fund a pack
      </button>
    </div>
  );
}
