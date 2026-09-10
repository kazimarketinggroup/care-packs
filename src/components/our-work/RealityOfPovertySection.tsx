"use client";

import React from "react";
import Image from "next/image";

export default function RealityOfPovertySection() {
  return (
    <section
      id="families-in-referral-route"
      className="w-full bg-white py-14 sm:py-16 md:py-20 scroll-mt-20"
    >
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Context, Narrative & Quote */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-[28px] sm:text-[34px] md:text-[36px] font-bold text-[#1b1b1b] tracking-tight mb-6">
              The reality of early years poverty
            </h2>

            <div className="space-y-4 text-[15px] sm:text-[16px] leading-[26px] text-[#3a3a3f]">
              <p>
                Hygiene poverty is often invisible. Families may go without essentials like nappies, wipes and baby wash rather than ask for help.
              </p>

              <p>
                Care Packs works through trusted Family Hubs, food banks and community organisations, ensuring support reaches families with dignity, not stigma.
              </p>

              <p>
                Each pack costs around £10 to build and deliver helping families avoid impossible choices between baby essentials and food.
              </p>
            </div>

            {/* Testimonial Quote Callout Box */}
            <div className="border-l-[3.5px] border-[#ec008c] pl-5 py-1 mt-7">
              <blockquote className="text-[15px] sm:text-[16px] italic font-semibold text-[#1b1b1b] leading-[1.5] mb-2">
                &ldquo;Walsall Council is delighted to continue working with Care Packs. The support they provide to families experiencing financial hardship in our borough has been outstanding.&rdquo;
              </blockquote>
              <cite className="text-[13px] sm:text-[13.5px] text-[#777] font-normal not-italic block">
                &mdash; Walsall Council, Family Hubs
              </cite>
            </div>
          </div>

          {/* Right Column: Family Photo */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px] aspect-[4/3] rounded-[18px] sm:rounded-[22px] overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.06)] bg-gray-100 border border-black/[0.04]">
              <Image
                src="/assets/images/our_work_who_we_help__family_receiving_support__101_267.webp"
                alt="Mother holding a newborn baby alongside her young child reading a book in an armchair"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
