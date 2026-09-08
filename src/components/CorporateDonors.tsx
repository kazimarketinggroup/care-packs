import React from "react";
import Image from "next/image";

const donorLogos = [
  {
    name: "Cisco",
    src: "/assets/icons/partner-cisco.svg",
    width: 79,
    height: 42,
  },
  {
    name: "Gibbs Consulting",
    src: "/assets/icons/partner-logo-2.svg",
    width: 124,
    height: 48,
  },
  {
    name: "Lloyds Banking Group",
    src: "/assets/icons/partner-logo-3.svg",
    width: 108,
    height: 42,
  },
  {
    name: "NHS",
    src: "/assets/icons/partner-logo-4.svg",
    width: 102,
    height: 39,
  },
  {
    name: "Infosys",
    src: "/assets/icons/partner-logo-5.svg",
    width: 86,
    height: 33,
  },
  {
    name: "Lenovo",
    src: "/assets/icons/partner-logo-6.svg",
    width: 124,
    height: 48,
  },
  {
    name: "World Wide Technology",
    src: "/assets/icons/partner-logo-7.svg",
    width: 112,
    height: 43,
  },
  {
    name: "Softcat",
    src: "/assets/icons/partner-logo-8.svg",
    width: 105,
    height: 35,
  },
];

export default function CorporateDonors() {
  // Duplicate the list 4 times for an infinite, gapless, seamless loop on all screen sizes
  const repeatedDonors = [
    ...donorLogos,
    ...donorLogos,
    ...donorLogos,
    ...donorLogos,
  ];

  return (
    <section className="w-full bg-white pt-[25px] pb-[26px]">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6 lg:px-0">
        {/* Section Heading */}
        <h2 className="text-[30px] leading-[40px] font-medium text-[#1b1b1b] tracking-normal mb-7">
          Corporate donors funding packs at scale
        </h2>
      </div>

      {/* Infinite Carousel / Marquee Container with Left-to-Right Loop */}
      <div className="relative w-full max-w-[1220px] mx-auto overflow-hidden">
        {/* Left Linear Gradient Mask (Rectangle 9 in Figma) */}
        <div className="absolute left-0 top-0 bottom-0 w-[84px] md:w-[110px] bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />

        {/* Right Linear Gradient Mask (Rectangle 10 in Figma) */}
        <div className="absolute right-0 top-0 bottom-0 w-[84px] md:w-[112px] bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />

        {/* Scrolling Track: Left to Right infinite marquee */}
        <div className="animate-marquee-ltr flex items-center">
          {repeatedDonors.map((donor, idx) => (
            <div
              key={`${donor.name}-${idx}`}
              className="flex items-center justify-center h-[118px] min-w-[130px] sm:min-w-[150px] px-6 sm:px-8 shrink-0 group transition-transform duration-200 hover:scale-105"
            >
              <Image
                src={donor.src}
                alt={donor.name}
                width={donor.width}
                height={donor.height}
                className="max-h-[48px] w-auto object-contain select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
