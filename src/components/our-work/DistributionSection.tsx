"use client";

import React from "react";
import Image from "next/image";

interface PartnerCard {
  name: string;
  subheading: string;
  description: string;
  image: string;
}

const partners: PartnerCard[] = [
  {
    name: "Walsall Council",
    subheading: "Four local Family Hub networks",
    description:
      "Over 500 packs distributed across four Family Hubs in Walsall, through recurring distribution channels supporting parents referred through health visitors and council teams.",
    image: "/assets/images/our_work_programmes__dsc08980_1__86_2007.webp",
  },
  {
    name: "Babyzone",
    subheading: "Across four London boroughs",
    description:
      "1,000 packs delivered across six weeks in Croydon, Barking & Dagenham, Barnet and East London — recurring distribution, not one-off events, supporting early years family hubs.",
    image: "/assets/images/our_work_programmes__copy_of_dsc08607_1__86_2013.webp",
  },
  {
    name: "The Bow Foodbank Ltd",
    subheading: "East London distribution",
    description:
      "350 packs distributed to families in financial hardship. Frontline volunteers distribute care packs alongside existing food parcels, ensuring immediate and dignified support.",
    image: "/assets/images/our_work_programmes__img-20251128-wa0012_1__86_2021.webp",
  },
];

export default function DistributionSection() {
  return (
    <section id="distribution" className="w-full bg-white py-12 sm:py-16 md:py-20 scroll-mt-24">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        {/* Top: How distribution works */}
        <div className="mb-14 sm:mb-16">
          <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1b1b1b] tracking-tight mb-4">
            How distribution works
          </h2>
          <div className="max-w-[960px] space-y-3.5 text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53]">
            <p>
              Care Packs does not operate an independent referral process that competes with existing frontline organisations. Instead, we supply our packs directly to partners who already know their communities &mdash; Family Hubs, local authority teams, food banks and registered charities.
            </p>
            <p>
              Our model ensures packs reach the people who need them fastest, through the professionals and volunteers they already trust, with no additional bureaucracy or assessment required.
            </p>
          </div>
        </div>

        {/* Bottom: Current distribution partners */}
        <div>
          <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#1b1b1b] mb-6">
            Current distribution partners
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-[10px] overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Pink Title Bar Header */}
                  <div className="bg-[#ec008c] px-5 py-3 text-white font-bold text-[16px] tracking-wide">
                    {partner.name}
                  </div>

                  {/* Partner Photo */}
                  <div className="relative w-full aspect-[16/11] bg-gray-100 overflow-hidden">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <h4 className="text-[16px] font-bold text-[#1b1b1b] mb-2">
                      {partner.subheading}
                    </h4>
                    <p className="text-[13.5px] sm:text-[14px] leading-[22px] text-[#555]">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
