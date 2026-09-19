"use client";

import React from "react";
import Link from "next/link";

interface PreFooterCTAProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function PreFooterCTA({
  title = "Every Pack Starts With Someone Who Cares.",
  subtitle = "Whether you donate, volunteer, fundraise or partner with us, your support can become something tangible for someone experiencing hardship.",
  primaryButtonText = "Donate Now",
  primaryButtonHref = "#donate",
  secondaryButtonText = "Get Involved",
  secondaryButtonHref = "#get-involved",
}: PreFooterCTAProps) {
  return (
    <section className="w-full bg-[#fff6fc]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-[50px] flex flex-col items-center">
        <div className="w-full max-w-[602px] flex flex-col items-center text-center">
          {/* Headline */}
          <h2 className="text-[26px] sm:text-[30px] leading-[36px] sm:leading-[40px] font-semibold text-[#1b1b1b] max-w-[620px]">
            {title}
          </h2>

          {/* Subtitle */}
          {subtitle ? (
            <p className="mt-[24px] sm:mt-[40px] text-[16px] leading-[26.4px] font-normal text-[#3a3a3f]">
              {subtitle}
            </p>
          ) : null}

          {/* Action Buttons */}
          <div className={`${subtitle ? "mt-[32px] sm:mt-[46px]" : "mt-[32px]"} flex flex-wrap items-center justify-center gap-3`}>
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-donation-modal", { detail: { amount: 10 } }));
              }}
              className="w-[160px] h-[42px] bg-[#ec008c] hover:bg-[#d6007e] text-white text-[16px] leading-[19.4px] font-bold rounded-[5px] flex items-center justify-center transition-colors shadow-sm hover:shadow cursor-pointer"
            >
              {primaryButtonText}
            </button>
            <Link
              href={secondaryButtonHref}
              className="w-[164px] h-[42px] bg-transparent hover:bg-white/60 border border-[#4a4a53] text-[#1b1b1b] text-[16px] leading-[19.4px] font-bold rounded-[5px] flex items-center justify-center transition-colors"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
