import React from "react";

interface ImpactStat {
  value: string;
  label: string;
  isWide?: boolean;
}

const impactStats: ImpactStat[] = [
  { value: "5,273", label: "Care Packs built" },
  { value: "3,490", label: "Packs delivered in 2025" },
  { value: "£92,010", label: "Raised" },
  { value: "34,271", label: "Essential items purchased", isWide: true },
  { value: "548", label: "Volunteers" },
  { value: "2,163", label: "Volunteer hours" },
  { value: "144", label: "Companies involved" },
  { value: "15", label: "Council, charity & distribution partners", isWide: true },
];

export default function OurImpact() {
  return (
    <section className="w-full bg-white py-[50px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-[112px]">
        {/* Soft Pink Rounded Card Container (Frame 5 in Figma) */}
        <div className="w-full max-w-[1215px] mx-auto bg-[#fff4fb] rounded-[15px] pt-[49px] pb-[57px] px-6 sm:px-8 md:px-10 lg:px-[56px] shadow-sm">
          {/* Tag: Pink Square + Our Impact */}
          <div className="flex items-center gap-2">
            <span className="w-[10px] h-[10px] bg-[#ec008c] shrink-0" />
            <span className="text-[13px] leading-[17px] font-medium text-[#1b1b1b]">
              Our Impact
            </span>
          </div>

          {/* Section Heading */}
          <h2 className="mt-[35px] text-[30px] leading-[40px] font-medium text-black tracking-normal">
            One year of activity. Published, counted, delivered.
          </h2>

          {/* Impact Stats Grid (2 rows of 4 on desktop, exact 28px horizontal & 22px vertical gap) */}
          <div className="mt-[51px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[230px_230px_230px_minmax(270px,1fr)] gap-x-[28px] gap-y-[22px]">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-[10px] h-[116px] p-[24px] flex flex-col justify-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-200"
              >
                <div className="text-[30px] leading-[40px] font-semibold text-black tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-2 text-[15px] leading-[20px] font-normal text-black line-clamp-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
