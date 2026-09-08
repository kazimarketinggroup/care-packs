"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StoryCard {
  id: string;
  partner: string;
  title: string;
  description: string;
  image: string;
}

const stories: StoryCard[] = [
  {
    id: "walsall",
    partner: "WALSALL COUNCIL",
    title: "500+ Care Packs Distributed",
    description:
      "Supporting families experiencing financial hardship through Family Hubs and community shops.",
    image:
      "/assets/images/business-team-collaborating-on-a-tablet-outdoors-2026-01-09-01-10-21-utc_1_21_1718.webp",
  },
  {
    id: "cisco",
    partner: "CISCO",
    title: "350+ Packs Delivered",
    description:
      "The UKI leadership team spent a volunteer day loading, transporting and hand-delivering packs to Family Hubs in Walsall.",
    image: "/assets/images/IMG-20251128-WA0012_1_21_1671.webp",
  },
  {
    id: "infosys",
    partner: "INFOSYS",
    title: "Pack Assembly in Action",
    description:
      "Teams assembled baby care packs in a collaborative activation creating direct local community support.",
    image: "/assets/images/IMG-20251128-WA0014_1_21_1684.webp",
  },
  {
    id: "allegis",
    partner: "ALLEGIS GLOBAL SOLUTIONS",
    title: "440+ Baby Care Packages",
    description:
      "Over 100 volunteers from 30+ recruitment suppliers, Mimecast and Bridge of Hope assembled packs in a single activation.",
    image: "/assets/images/Copy_of_DSC08607_1_21_1659.webp",
  },
  {
    id: "babyzone",
    partner: "BABYZONE & BOW FOOD BANK",
    title: "1,000 Packs Distributed",
    description:
      "Packs delivered in six weeks across Croydon, Barking & Dagenham, Barnet and East London — recurring distribution.",
    image: "/assets/images/DSC08980_1_21_1648.webp",
  },
  {
    id: "community",
    partner: "COMMUNITY PARTNERS",
    title: "Multi-Organisation Impact",
    description:
      "Fifteen organisations collaborating in Paddington with a target of more than 5,000 packs in a single day.",
    image: "/assets/images/Copy_of_DSC08711_1_21_1753.webp",
  },
];

export default function ImpactInAction() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 360; // Approximate card width + gap
    scrollContainerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const scrollPrev = () => {
    const nextIndex = Math.max(0, activeIndex - 1);
    scrollToIndex(nextIndex);
  };

  const scrollNext = () => {
    const nextIndex = Math.min(stories.length - 1, activeIndex + 1);
    scrollToIndex(nextIndex);
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    const cardWidth = 360;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < stories.length) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="w-full bg-white pt-[50px] pb-[60px] overflow-hidden">
      <div className="max-w-[1216px] mx-auto px-4 md:px-6 lg:px-0">
        {/* Top Tag Badge */}
        <div className="flex items-center gap-2">
          <span className="w-[10px] h-[10px] bg-[#ec008c] shrink-0" />
          <span className="text-[13px] leading-[17px] font-medium text-[#1b1b1b]">
            Impact in Action
          </span>
        </div>

        {/* Section Header: Title & "See All Stories" Button */}
        <div className="mt-[14px] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-[30px] leading-[40px] font-medium text-[#0d0d0d] max-w-[720px]">
            When People Show Up, Communities Feel the Difference.
          </h2>
          <div className="flex items-center gap-3 self-start md:self-end">
            {/* Prev/Next Buttons */}
            <button
              onClick={scrollPrev}
              disabled={activeIndex === 0}
              aria-label="Previous story"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={activeIndex === stories.length - 1}
              aria-label="Next story"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <Link
              href="#stories"
              className="bg-[#ec008c] hover:bg-[#d6007e] text-white font-semibold text-[14px] px-6 py-2.5 rounded-[7px] transition-colors shadow-sm ml-2"
            >
              See All Stories
            </Link>
          </div>
        </div>

        {/* Stories Horizontal Carousel */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="mt-[44px] flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {stories.map((story) => (
            <div
              key={story.id}
              className="relative shrink-0 w-[290px] sm:w-[340px] md:w-[380px] h-[452px] rounded-[15px] overflow-hidden shadow-sm group snap-start"
            >
              {/* Photo */}
              <Image
                src={story.image}
                alt={story.title}
                fill
                sizes="(max-width: 640px) 290px, (max-width: 768px) 340px, 380px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Bottom Dark Gradient Mask for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

              {/* Text Content Overlay at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end text-white">
                {/* Circle Badge Indicator + Partner Name */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-4 h-4 rounded-full border-2 border-white/90 shrink-0" />
                  <span className="text-[14px] leading-[20px] font-semibold tracking-wider text-white uppercase">
                    {story.partner}
                  </span>
                </div>

                {/* Story Title */}
                <h3 className="text-[17px] leading-[24px] font-semibold text-white">
                  {story.title}
                </h3>

                {/* Story Description */}
                <p className="mt-1.5 text-[13.5px] leading-[21px] text-white/85 line-clamp-3">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to story ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === index
                  ? "w-8 h-2 bg-[#ec008c]"
                  : "w-2 h-2 bg-[#ec008c]/30 hover:bg-[#ec008c]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
