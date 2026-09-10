"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RoadmapItem {
  title: string;
  description: string;
}

const futurePacks: RoadmapItem[] = [
  {
    title: "Personal Care Pack",
    description: "Additional personal care products for the future",
  },
  {
    title: "Food Pack",
    description: "Nutritional essentials for early years nutrition",
  },
  {
    title: "Pre-K Pack",
    description: "Developmental and learning items for older babies",
  },
  {
    title: "Bedding Pack",
    description: "Warm layers, blankets, waterproof covers",
  },
  {
    title: "Technology Pack",
    description: "Educational devices, connectivity support",
  },
];

export default function WhyTheseItemsSection() {
  return (
    <section id="why-these-items" className="w-full bg-white pb-14 sm:pb-16 md:pb-20">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Explanation + Image */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="text-[28px] sm:text-[34px] md:text-[36px] font-bold text-[#1b1b1b] tracking-tight mb-5">
              Why these eight items?
            </h2>

            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#3a3a3f] mb-4">
              These eight essentials were chosen based on what families with babies most often go without when money is tight. Frontline organisations confirmed they are among the most requested items.
            </p>

            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#3a3a3f] mb-7">
              Future phases will expand into Pre-K, personal care, sleep, crowding and technology.
            </p>

            {/* Pack Assembly Image */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[16px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] bg-gray-100 border border-black/[0.04]">
              <Image
                src="/assets/images/our_work_the_baby_pack__ea9f26e7-06a7-4450-a215-8b2655207947_1__91_2151.webp"
                alt="Volunteers assembling essential baby care items into packs"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: "What comes next" Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#fff6fc] border border-[#fce4f3] rounded-[20px] p-6 sm:p-7 md:p-8 shadow-[0_2px_12px_rgba(236,0,140,0.03)]">
              <h3 className="text-[18px] sm:text-[19px] font-bold text-[#1b1b1b] mb-5">
                What comes next
              </h3>

              <div className="flex flex-col gap-3">
                {futurePacks.map((pack, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-[10px] p-3.5 sm:p-4 border border-[#f5e1ee] shadow-sm hover:border-[#ec008c]/40 transition-colors"
                  >
                    <h4 className="text-[14px] sm:text-[14.5px] font-bold text-[#ec008c]">
                      {pack.title}
                    </h4>
                    <p className="text-[12px] sm:text-[12.5px] leading-[18px] text-[#666] mt-0.5">
                      {pack.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Roadmap Link */}
              <div className="mt-5 pt-1">
                <Link
                  href="/our-work/programme-roadmap"
                  className="inline-flex items-center gap-1.5 text-[13.5px] sm:text-[14px] font-semibold text-[#ec008c] hover:text-[#d6007e] transition-colors group"
                >
                  <span>See full roadmap</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
