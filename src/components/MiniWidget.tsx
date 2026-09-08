"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function MiniWidget() {
  const [selectedPack, setSelectedPack] = useState<"baby" | "tech" | "crisis">("baby");

  return (
    <div className="w-full max-w-[529px] bg-white/80 backdrop-blur-md rounded-[16px] pt-[44px] pb-[43px] px-[30px] shadow-[0_20px_45px_-12px_rgba(0,0,0,0.06),0_0_0_1px_rgba(222,222,226,0.5)] relative z-10 transition-all">
      {/* Top Row: Title & Secure Badge (No lock icon, exact Figma) */}
      <div className="flex items-center justify-between">
        <h2 className="text-[18.56px] leading-[22.5px] font-semibold text-[#1b1b1b] tracking-normal">
          Fund a pack today
        </h2>
        <span className="text-[11.6px] leading-[14px] text-[#6f6f77] font-normal">
          Secure donation
        </span>
      </div>

      {/* Tabs Row: Pack Selector (gap 10px, height 36px) */}
      <div className="flex items-center gap-[10px] mt-[29px] overflow-x-auto pb-1 no-scrollbar">
        {/* P1 - Baby Pack (Active) */}
        <button
          type="button"
          onClick={() => setSelectedPack("baby")}
          className={`h-[36px] px-5 rounded-full flex items-center justify-center gap-3 transition-all ${
            selectedPack === "baby"
              ? "bg-[#ec008c] text-white shadow-sm"
              : "bg-[#454545]/5 text-[#6f6f77] hover:text-[#1b1b1b]"
          }`}
        >
          <span className="text-[13px] font-bold tracking-normal">P1-Baby Pack</span>
          <span className="text-[8px] font-medium tracking-normal text-white">
            Active
          </span>
        </button>

        {/* P2 - Tech Pack (Coming Soon) */}
        <button
          type="button"
          className="h-[36px] px-4 rounded-full bg-[#454545]/5 text-[#6f6f77] flex items-center justify-center gap-2 cursor-not-allowed"
          title="Coming soon"
        >
          <span className="text-[12px] font-medium tracking-normal">P2-Tech Pack</span>
          <span className="text-[8px] font-medium text-[#6f6f77]/40 tracking-normal">
            soon
          </span>
        </button>

        {/* P3 - Crisis Pack (Coming Soon) */}
        <button
          type="button"
          className="h-[36px] px-4 rounded-full bg-[#454545]/5 text-[#6f6f77] flex items-center justify-center gap-2 cursor-not-allowed"
          title="Coming soon"
        >
          <span className="text-[12px] font-medium tracking-normal">P3-Crisis Pack</span>
          <span className="text-[8px] font-medium text-[#6f6f77]/40 tracking-normal">
            soon
          </span>
        </button>
      </div>

      {/* Pack Info & Pricing Row */}
      <div className="flex items-center gap-[9px] mt-[55px]">
        <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
          <Image
            src="/assets/icons/baby-carriage.svg"
            alt="Baby pack icon"
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
        </div>
        <div className="text-[20px] leading-[19px] font-semibold text-[#1b1b1b] tracking-normal">
          £7.89 funds a baby pack
        </div>
      </div>

      {/* Description (exact 2-line break) */}
      <p className="text-[12px] leading-[20px] text-[#6f6f77] mt-[29px] max-w-[395px]">
        Wipes, cotton wool, shampoo and more, for a family who needs them.<br />
        Assembles 1 baby pack every month. Cancel any time.
      </p>

      {/* Bottom CTA Button */}
      <button
        type="button"
        className="w-full bg-[#ec008c] hover:bg-[#d6007e] active:scale-[0.99] text-white font-bold text-[14.85px] leading-[18px] h-[42px] mt-[35px] rounded-[5px] shadow-sm transition-all flex items-center justify-center cursor-pointer"
      >
        Fund a pack
      </button>
    </div>
  );
}
