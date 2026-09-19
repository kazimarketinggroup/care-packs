"use client";

import React from "react";
import CustomVideoPlayer from "./CustomVideoPlayer";

interface LandingVideoSectionProps {
  tag?: string;
  title?: string;
  description?: string;
  videoSrc?: string;
  poster?: string;
}

export default function LandingVideoSection({
  tag = "See The Impact",
  title = "Every Pack Tells a Story of Hope and Dignity",
  description = "Watch how our volunteers, corporate partners, and frontline teams work together to create and deliver essential care packages directly to families who need them most.",
  videoSrc = "/assets/videos/landing-page-video.mp4",
  poster = "/assets/images/landing-video-poster.webp",
}: LandingVideoSectionProps) {
  return (
    <section className="w-full bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20 border-b border-black/[0.04]">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-[820px] mb-7 sm:mb-9">
          {/* Tag: Pink Square + Label */}
          <div className="inline-flex items-center gap-2.5 mb-2.5">
            <span className="w-[9px] h-[9px] bg-[#ec008c] rounded-[1px] shrink-0" />
            <span className="text-[13px] font-medium text-[#1b1b1b] tracking-wide uppercase">
              {tag}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.25] font-medium text-[#1b1b1b] tracking-normal">
            {title}
          </h2>

          {/* Subtitle Description */}
          {description && (
            <p className="mt-3 text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] text-[#4a4a53]">
              {description}
            </p>
          )}
        </div>

        {/* Video Player Card Container */}
        <div className="relative w-full rounded-2xl md:rounded-[24px] overflow-hidden shadow-[0_16px_45px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.06] bg-[#0d0d0f]">
          <CustomVideoPlayer
            src={videoSrc}
            poster={poster}
            title={title}
          />
        </div>
      </div>
    </section>
  );
}
