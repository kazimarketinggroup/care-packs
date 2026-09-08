import React from "react";
import Image from "next/image";
import Link from "next/link";

const involvedCards = [
  {
    category: "DONATE",
    image: "/assets/images/DSC08980_1_21_1648.webp",
    title: "Give Essentials. Give Hope.",
    description:
      "Your support helps provide practical essentials to people and families experiencing poverty.",
    linkText: "Donate Now →",
    href: "#donation-widget",
  },
  {
    category: "VOLUNTEER",
    image: "/assets/images/Copy_of_DSC08607_1_21_1659.webp",
    title: "Show Up. Pack Up. Make an Impact.",
    description:
      "Bring your time and energy together with others to build Care Packs and create tangible support.",
    linkText: "Volunteer With Us →",
    href: "#volunteer",
  },
  {
    category: "FUNDRAISE",
    image: "/assets/images/IMG-20251128-WA0012_1_21_1671.webp",
    title: "Turn Your Network Into Impact.",
    description:
      "Raise funds that can be transformed into essential Care Packs for people who need them.",
    linkText: "Start Fundraising →",
    href: "#fundraise",
  },
  {
    category: "PARTNER",
    image: "/assets/images/IMG-20251128-WA0014_1_21_1684.webp",
    title: "Make Organisation Part of the Solution.",
    description:
      "Create meaningful social impact through volunteering, fundraising, sponsorship & Care Packs partnerships.",
    linkText: "Partner With Us →",
    href: "#partner",
  },
];

export default function GetInvolvedSection() {
  return (
    <section className="w-full bg-white pt-[50px] pb-[60px]">
      <div className="max-w-[1216px] mx-auto px-4 md:px-6 lg:px-0">
        {/* Top Tag */}
        <div className="flex items-center gap-2">
          <span className="w-[10px] h-[10px] bg-[#ec008c] shrink-0" />
          <span className="text-[13px] leading-[17px] font-medium text-[#1b1b1b]">
            Get Involved
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-[14px] text-[30px] leading-[40px] font-medium text-[#1b1b1b]">
          There Are Many Ways to Make a Difference.
        </h2>

        {/* 4 Cards Grid */}
        <div className="mt-[44px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[28px]">
          {involvedCards.map((card) => (
            <div key={card.category} className="flex flex-col h-full group">
              {/* Card Image with Pink Top Badge */}
              <div className="w-full rounded-[10px] overflow-hidden shadow-sm">
                <div className="bg-[#ec008c] px-4 py-2 text-white font-bold text-[14px] tracking-wider uppercase">
                  {card.category}
                </div>
                <div className="relative w-full h-[265px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Text Info */}
              <div className="mt-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-[18px] leading-[24px] font-semibold text-[#1b1b1b]">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-[24px] font-normal text-[#3a3a3f]">
                    {card.description}
                  </p>
                </div>
                <div className="mt-5">
                  <Link
                    href={card.href}
                    className="text-[15px] font-semibold text-[#ec008c] hover:text-[#d6007e] inline-flex items-center gap-1 transition-colors"
                  >
                    {card.linkText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
