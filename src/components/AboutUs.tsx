import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AboutUsProps {
  tag?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function AboutUs({
  tag = "About Us",
  title = "Supporting Parents When It Matters Most",
  description = "Care Packs provides essential everyday items to parents in the early stages of parenthood who are experiencing financial hardship. By bringing together businesses, volunteers, charities and community organisations, we create and distribute care packages that offer practical support, dignity and reassurance when families need it most.",
  buttonText = "Read More",
  buttonHref = "#about",
}: AboutUsProps) {
  return (
    <section id="about" className="w-full bg-white pt-[26px] pb-[26px]">
      <div className="max-w-[1201px] mx-auto px-4 md:px-6 lg:px-0">
        {/* Banner Team Image with 15px rounded corners */}
        <div className="w-full rounded-[15px] overflow-hidden shadow-sm">
          <Image
            src="/assets/images/Copy_of_DSC08711_1_21_1753.webp"
            alt="Care Packs team and corporate partners at pack building event"
            width={1201}
            height={362}
            className="w-full h-auto max-h-[362px] object-cover"
            priority
          />
        </div>

        {/* Content Section below image */}
        <div className="mt-[51px] flex flex-col items-start">
          {/* Tag: Pink Square + Text */}
          <div className="flex items-center gap-2">
            <span className="w-[10px] h-[10px] bg-[#ec008c] shrink-0" />
            <span className="text-[13px] leading-[17px] font-medium text-[#1b1b1b]">
              {tag}
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-[6px] text-[30px] leading-[40px] font-medium text-[#1b1b1b] tracking-normal">
            {title}
          </h2>

          {/* Body Description */}
          <p className="mt-[17px] text-[16px] leading-[28px] font-normal text-[#3a3a3f] max-w-[1201px]">
            {description}
          </p>

          {/* Read More Button */}
          <Link
            href={buttonHref}
            className="mt-[22px] w-[119px] h-[42px] bg-[#ec008c] hover:bg-[#d6007e] text-white text-[14.5px] leading-[18px] font-semibold rounded-[5px] flex items-center justify-center transition-colors shadow-sm"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
