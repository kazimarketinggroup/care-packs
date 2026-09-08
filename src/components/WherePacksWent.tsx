import React from "react";

const distributions = [
  {
    count: "500+",
    partner: "Walsall Council",
    description:
      "Packs distributed through four Family Hubs and community shops across 2025, starting from an initial donation of 50 baby care packages.",
  },
  {
    count: "350+",
    partner: "Cisco UK & Ireland",
    description:
      "The UKI leadership team spent a volunteer day loading, transporting and hand-delivering packs to Family Hubs in Walsall.",
  },
  {
    count: "440+",
    partner: "Allegis Global Solutions",
    description:
      "Over 100 volunteers from 30+ recruitment suppliers, Mimecast and Bridge of Hope Careers assembled baby care packs in a single activation.",
  },
  {
    count: "1,000",
    partner: "Babyzone & Bow Food Bank",
    description:
      "Packs delivered in six weeks across Croydon, Barking & Dagenham, Barnet and East London — recurring distribution, not one-off events.",
  },
];

export default function WherePacksWent() {
  return (
    <section className="w-full bg-[#fff6fc] pt-[50px] pb-[60px]">
      <div className="max-w-[1216px] mx-auto px-4 md:px-6 lg:px-0">
        {/* Top Tag */}
        <div className="flex items-center gap-2">
          <span className="w-[10px] h-[10px] bg-[#ec008c] shrink-0" />
          <span className="text-[13px] leading-[17px] font-medium text-[#1b1b1b]">
            Where the packs went
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-[14px] text-[30px] leading-[40px] font-medium text-[#1b1b1b] max-w-[650px]">
          We don&apos;t distribute alone. We work through the people already trusted locally.
        </h2>

        {/* 2x2 Grid Card Box with light pink header accent */}
        <div className="mt-[44px] rounded-[10px] overflow-hidden border border-[#fcdfed] shadow-sm bg-white">
          {/* Subtle Pink Header Bar Accent */}
          <div className="h-[24px] bg-[#fce5f1] w-full border-b border-[#fcdfed]" />

          {/* 2x2 Grid of Distribution Reports */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#fcdfed]">
            {/* Column 1 (Left 2 items) */}
            <div className="divide-y divide-[#fcdfed]">
              {/* Item 1: Walsall Council */}
              <div className="p-8 lg:p-10 flex flex-col justify-start">
                <div className="text-[48px] leading-[48px] font-bold text-[#e6009b] tracking-tight">
                  {distributions[0].count}
                </div>
                <h3 className="mt-4 text-[18px] leading-[28px] font-semibold text-[#1b1b1b]">
                  {distributions[0].partner}
                </h3>
                <p className="mt-3 text-[16px] leading-[28px] font-normal text-[#4a4a53]">
                  {distributions[0].description}
                </p>
              </div>

              {/* Item 3: Allegis Global Solutions */}
              <div className="p-8 lg:p-10 flex flex-col justify-start">
                <div className="text-[48px] leading-[48px] font-bold text-[#e6009b] tracking-tight">
                  {distributions[2].count}
                </div>
                <h3 className="mt-4 text-[18px] leading-[28px] font-semibold text-[#1b1b1b]">
                  {distributions[2].partner}
                </h3>
                <p className="mt-3 text-[16px] leading-[28px] font-normal text-[#4a4a53]">
                  {distributions[2].description}
                </p>
              </div>
            </div>

            {/* Column 2 (Right 2 items) */}
            <div className="divide-y divide-[#fcdfed]">
              {/* Item 2: Cisco UK & Ireland */}
              <div className="p-8 lg:p-10 flex flex-col justify-start">
                <div className="text-[48px] leading-[48px] font-bold text-[#e6009b] tracking-tight">
                  {distributions[1].count}
                </div>
                <h3 className="mt-4 text-[18px] leading-[28px] font-semibold text-[#1b1b1b]">
                  {distributions[1].partner}
                </h3>
                <p className="mt-3 text-[16px] leading-[28px] font-normal text-[#4a4a53]">
                  {distributions[1].description}
                </p>
              </div>

              {/* Item 4: Babyzone & Bow Food Bank */}
              <div className="p-8 lg:p-10 flex flex-col justify-start">
                <div className="text-[48px] leading-[48px] font-bold text-[#e6009b] tracking-tight">
                  {distributions[3].count}
                </div>
                <h3 className="mt-4 text-[18px] leading-[28px] font-semibold text-[#1b1b1b]">
                  {distributions[3].partner}
                </h3>
                <p className="mt-3 text-[16px] leading-[28px] font-normal text-[#4a4a53]">
                  {distributions[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
