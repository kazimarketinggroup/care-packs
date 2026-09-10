"use client";

import React from "react";
import Image from "next/image";

export default function FoundingStorySection() {
  return (
    <section id="founding-story" className="w-full bg-white py-12 sm:py-16 md:py-20 scroll-mt-24">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Content & Quote */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Pink Eyebrow */}
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.1em] text-[#ec008c] uppercase mb-2 block">
              WHO WE ARE
            </span>

            {/* Main Title */}
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-semibold text-[#1b1b1b] leading-[1.2] tracking-tight mb-6">
              Founding Story
            </h2>

            {/* Paragraph 1 */}
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53] mb-5">
              Care Packs was founded by Jay Rohman with Dr Colin Williams, Farida Gibbs and Karyn Sheridan senior professionals who saw that their networks and corporate access could deliver practical, tangible support to people in poverty.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53] mb-5">
              Registered as a CIO in September 2024, the charity launched publicly in London in May 2025, assembling roughly 300 packs in under an hour proof the model worked from day one.
            </p>

            {/* Paragraph 3 */}
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53] mb-8">
              By the end of 2025, Care Packs had raised £92,010, built 5,273 packs, and mobilised 548 volunteers from 144 companies across four local authority partnerships. Packathon 2026, on 13 October at Porchester Hall, now targets over 4,500 packs in a single afternoon.
            </p>

            {/* Strategic Assessment Quote Callout */}
            <div className="border-l-[3.5px] border-[#ec008c] pl-4 sm:pl-5 py-1">
              <blockquote className="text-[17px] sm:text-[19px] italic font-semibold text-[#ec008c] leading-[1.4] mb-2">
                &ldquo;You already have something that works. The challenge is turning it into a repeatable growth system.&rdquo;
              </blockquote>
              <cite className="text-[13.5px] sm:text-[14px] text-[#555] font-normal not-italic block">
                &mdash; Care Packs strategic assessment, 2026
              </cite>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 w-full">
            <div className="relative w-full aspect-[4/4.6] sm:aspect-[4/4.5] rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.07)] bg-gray-100">
              <Image
                src="/assets/images/care-packs-launch-event-2.webp"
                alt="Jay Rohman holding stacked Care Packs boxes with 100 milestone at launch event"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
