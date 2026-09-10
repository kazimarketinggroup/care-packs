"use client";

import React from "react";
import Image from "next/image";

interface ReferringPartner {
  name: string;
  tag: string;
  description: string;
  image: string;
}

const partners: ReferringPartner[] = [
  {
    name: "Walsall Council",
    tag: "Local Authority · West Midlands",
    description:
      "Our longest-running local authority partner. In July 2025, Care Packs donated 50 baby care packages to Walsall Council. By December 2025, more than 530 packs had been distributed through Walsall.",
    image: "/assets/images/our_work_programmes__dsc08980_1__86_2007.webp",
  },
  {
    name: "Babyzone",
    tag: "Community Organisation · London",
    description:
      "In 2025, Care Packs delivered 700 packs to Babyzone across three London boroughs. Babyzone works directly with families who need support, making it an efficient last-mile partner.",
    image: "/assets/images/our_work_programmes__copy_of_dsc08607_1__86_2013.webp",
  },
  {
    name: "The Bow Foodbank Ltd",
    tag: "Food Bank · East London",
    description:
      "350 packs were delivered to Bow Food Bank during the same six-week window in 2025. Food banks are a natural distribution point: families who need food support also benefit from hygiene pack access.",
    image: "/assets/images/our_work_programmes__img-20251128-wa0012_1__86_2021.webp",
  },
];

export default function ReferringAuthoritiesSection() {
  return (
    <section
      id="referring-authorities"
      className="w-full bg-white py-14 sm:py-16 md:py-20 scroll-mt-20 border-t border-gray-100"
    >
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <h2 className="text-[28px] sm:text-[34px] md:text-[36px] font-bold text-[#1b1b1b] tracking-tight mb-8 sm:mb-10">
          Current referring authorities
        </h2>

        {/* 3 Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col rounded-[14px] overflow-hidden border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_22px_rgba(236,0,140,0.06)] hover:border-[#ec008c]/30 transition-all duration-200 bg-white"
            >
              {/* Pink Header Ribbon */}
              <div className="bg-[#ec008c] text-white px-5 py-3.5">
                <h3 className="text-[16px] sm:text-[17px] font-bold">
                  {partner.name}
                </h3>
              </div>

              {/* Partner Image */}
              <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-start">
                <span className="text-[13px] font-bold text-[#1b1b1b] mb-2.5">
                  {partner.tag}
                </span>
                <p className="text-[13.5px] sm:text-[14px] leading-[23px] text-[#555]">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
