import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WhyCarePacks() {
  return (
    <section className="w-full bg-white pt-[40px] pb-[40px]">
      <div className="max-w-[1216px] mx-auto px-4 md:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[597px_559px] gap-8 lg:gap-[60px] items-start">
          {/* Left Column: Text & Content */}
          <div className="flex flex-col items-start">
            {/* Tag Badge */}
            <div className="flex items-center gap-2">
              <span className="w-[10px] h-[10px] bg-[#ec008c] shrink-0" />
              <span className="text-[13px] leading-[17px] font-medium text-[#1b1b1b]">
                Why Care Packs
              </span>
            </div>

            {/* Headline */}
            <h2 className="mt-[37px] text-[30px] leading-[40px] font-medium text-[#1b1b1b] tracking-normal">
              For Many Families, Everyday Essentials Aren&apos;t Always Essential.
            </h2>

            {/* Subtitle / Paragraph */}
            <p className="mt-[17px] text-[16px] leading-[28px] font-normal text-[#3a3a3f]">
              When families are experiencing financial hardship, everyday items can become difficult choices. Care Packs helps relieve some of that immediate pressure by providing practical essentials that families can use every day.
            </p>

            {/* Button */}
            <Link
              href="#our-work"
              className="mt-[36px] w-[119px] h-[42px] bg-[#ec008c] hover:bg-[#d6007e] text-white text-[14.5px] leading-[18px] font-semibold rounded-[5px] flex items-center justify-center transition-colors shadow-sm"
            >
              Our Work
            </Link>

            {/* Highlighted Quote in Pink Italic */}
            <blockquote className="mt-[51px] text-[30px] leading-[40px] font-medium italic text-[#ec008c]">
              &ldquo;Small interventions can provide practical support, dignity and hope.&rdquo;
            </blockquote>
          </div>

          {/* Right Column: Family & Baby Photo */}
          <div className="w-full">
            <div className="w-full rounded-[10px] overflow-hidden shadow-sm">
              <Image
                src="/assets/images/Rectangle_12_21_1632.webp"
                alt="Family with baby playing with xylophone"
                width={559}
                height={452}
                className="w-full h-auto object-cover rounded-[10px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
