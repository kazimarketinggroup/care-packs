"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PackingDaysSection() {
  return (
    <section id="packing-days" className="w-full bg-white py-12 sm:py-16 md:py-20 scroll-mt-24">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Volunteers Packing Day Photo */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full aspect-[4/3.4] sm:aspect-[4/3.2] rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.07)] bg-gray-100">
              <Image
                src="/assets/images/how_we_work__volunteers_on_packing_day__76_1530.webp"
                alt="Volunteers assembling baby care packs on packing day"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Text and Booking CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.1em] text-[#ec008c] uppercase mb-2 block">
              HOW WE WORK
            </span>

            {/* Heading */}
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-semibold text-[#1b1b1b] leading-[1.2] tracking-tight mb-5">
              Packing Days
            </h2>

            {/* Paragraph 1 */}
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53] mb-4">
              Packing Days are the heart of the Care Packs model turning corporate goodwill into physical packs, and generating some of the strongest content for employee engagement, CSR reporting and social media.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53] mb-4">
              A corporate team arrives, gets briefed by Care Packs, and assembles packs at speed. The 2025 launch produced 300 packs in under an hour; the 2025 Packathon brought together Lloyds Banking Group, Allegis Global Solutions, Cisco, Computacenter, Softcat and Check Point Software.
            </p>

            {/* Paragraph 3 */}
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53] mb-8">
              Because they&apos;re so visual, a single afternoon generates photography, short-form video, leadership content, internal comms, LinkedIn posts and case studies.
            </p>

            {/* CTA Button */}
            <div>
              <Link
                href="/get-involved/packing-days"
                className="inline-flex items-center justify-center px-7 h-[44px] bg-[#ec008c] hover:bg-[#d6007e] text-white text-[14.5px] font-semibold rounded-[5px] shadow-sm hover:shadow transition-all cursor-pointer"
              >
                Book a packing day
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
