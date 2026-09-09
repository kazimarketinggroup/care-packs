"use client";

import React from "react";
import Image from "next/image";

export default function WhoWeAreVideoBanner() {
  return (
    <section className="w-full bg-white pt-8 pb-10 sm:pt-10 sm:pb-14">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        <div className="relative w-full rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-black/[0.04] bg-[#e6007e] group">
          <Image
            src="/assets/images/video-thumb-who-we-are.webp"
            alt="Care Packs - A Gift of Hope with Every Pack"
            width={1247}
            height={640}
            priority
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </div>
      </div>
    </section>
  );
}
