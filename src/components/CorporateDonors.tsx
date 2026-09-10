import React from "react";
import Image from "next/image";

export default function CorporateDonors() {
  return (
    <section className="w-full bg-white pt-[25px] pb-[26px]">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6 lg:px-0">
        {/* Section Heading */}
        <h2 className="text-[30px] leading-[40px] font-medium text-[#1b1b1b] tracking-normal mb-7">
          Corporate partners &amp; sponsors funding packs at scale
        </h2>
      </div>

      {/* Infinite Carousel / Marquee Container with Leftwards (RTL) Loop */}
      <div className="relative w-full max-w-[1220px] mx-auto overflow-hidden">
        {/* Left Linear Gradient Mask (Rectangle 9 in Figma) */}
        <div className="absolute left-0 top-0 bottom-0 w-[84px] md:w-[110px] bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />

        {/* Right Linear Gradient Mask (Rectangle 10 in Figma) */}
        <div className="absolute right-0 top-0 bottom-0 w-[84px] md:w-[112px] bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />

        {/* Scrolling Track: Two copies of the strip for seamless loop */}
        <div className="animate-marquee-rtl flex items-center">
          <Image
            src="/assets/images/logos-strip.png"
            alt="Corporate partner logos"
            width={5586}
            height={236}
            className="h-[76px] md:h-[84px] w-auto object-contain select-none pointer-events-none shrink-0"
            priority
          />
          <Image
            src="/assets/images/logos-strip.png"
            alt="Corporate partner logos"
            width={5586}
            height={236}
            className="h-[76px] md:h-[84px] w-auto object-contain select-none pointer-events-none shrink-0"
            priority
          />
        </div>
      </div>
    </section>
  );
}
