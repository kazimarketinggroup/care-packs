"use client";

import React from "react";
import Image from "next/image";

export default function OurPurposeSection() {
  return (
    <section id="our-purpose" className="w-full bg-white py-12 sm:py-16 md:py-20 scroll-mt-24">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 w-full">
            <div className="relative w-full aspect-[4/4.6] sm:aspect-[4/4.5] rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.07)] bg-gray-100">
              <Image
                src="/assets/images/care-packs-launch-event-1.webp"
                alt="Care Packs founders and team holding care package at launch event"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Pink Eyebrow */}
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.1em] text-[#ec008c] uppercase mb-2 block">
              WHO WE ARE
            </span>

            {/* Main Title */}
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-semibold text-[#1b1b1b] leading-[1.2] tracking-tight mb-6">
              Our Purpose
            </h2>

            {/* Paragraph 1 */}
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53] mb-5">
              Care Packs is a Charitable Incorporated Organisation (CIO No. 1209874, registered 4 September 2024) operating across England, Scotland, and Northern Ireland.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53] mb-6">
              Our mission is to relieve poverty by providing essential care packages, with a primary focus on supporting parents and carers struggling to afford basic baby essentials. We also support children, young people, elderly individuals, and disabled people facing financial hardship.
            </p>

            {/* Bullet Section Header */}
            <p className="text-[15px] sm:text-[16px] font-bold text-[#1b1b1b] mb-3">
              Our model is simple and practical:
            </p>

            {/* Bullets */}
            <ul className="space-y-2.5 text-[15px] sm:text-[15.5px] leading-[26px] text-[#4a4a53]">
              <li className="flex items-start gap-2.5">
                <span className="text-[#1b1b1b] font-bold text-[18px] leading-none select-none mt-[4px]">•</span>
                <span>
                  <strong className="font-semibold text-[#1b1b1b]">Give:</strong> Individuals and businesses contribute money, products, or time.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#1b1b1b] font-bold text-[18px] leading-none select-none mt-[4px]">•</span>
                <span>
                  <strong className="font-semibold text-[#1b1b1b]">Build:</strong> We convert these resources into essential physical packs.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#1b1b1b] font-bold text-[18px] leading-none select-none mt-[4px]">•</span>
                <span>
                  <strong className="font-semibold text-[#1b1b1b]">Deliver:</strong> Frontline partners and councils distribute packs directly to families needing immediate support.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
