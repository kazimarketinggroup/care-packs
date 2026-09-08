import React from "react";

const steps = [
  {
    step: "Step 01",
    title: "Generous donations power the mission",
    description:
      "Contributions from both individuals and businesses provide the essential resources needed to build every pack.",
  },
  {
    step: "Step 02",
    title: "Volunteers assemble the pack",
    description:
      "Packs are built to a fixed specification at a packing day, run either publicly or as a closed corporate volunteering session.",
  },
  {
    step: "Step 03",
    title: "Packs are delivered to the council",
    description:
      "Completed packs are transported directly to local council partners for official processing.",
  },
  {
    step: "Step 04",
    title: "Councils distribute to families in need",
    description:
      "Council officers hand-deliver the completed packs directly to the local families they already support.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white pt-[39px] pb-[50px]">
      <div className="max-w-[1216px] mx-auto px-4 md:px-6 lg:px-0">
        {/* Top Tag */}
        <div className="flex items-center gap-2">
          <span className="w-[10px] h-[10px] bg-[#ec008c] shrink-0" />
          <span className="text-[13px] leading-[17px] font-medium text-[#1b1b1b]">
            How it works
          </span>
        </div>

        {/* Section Header: Title on left, referral note on right */}
        <div className="mt-[14px] flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2 className="text-[30px] leading-[40px] font-medium text-[#1b1b1b] max-w-[349px]">
            From Good Intentions to Real-World Impact.
          </h2>
          <p className="text-[16px] leading-[28px] font-normal text-[#3a3a3f] max-w-[522px] lg:text-right">
            Distribution runs exclusively through local authority referral. Families cannot apply to us directly, and we hold no public waiting list.
          </p>
        </div>

        {/* 4 Step Columns */}
        <div className="mt-[44px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[40px]">
          {steps.map((item) => (
            <div
              key={item.step}
              className="border-t-2 border-[#1b1b1b] pt-[24px] flex flex-col"
            >
              <span className="text-[15px] leading-[18px] font-bold text-[#ec008c]">
                {item.step}
              </span>
              <h3 className="mt-[20px] text-[20px] leading-[26.4px] font-semibold text-[#1b1b1b]">
                {item.title}
              </h3>
              <p className="mt-[20px] text-[16px] leading-[28px] font-normal text-[#3a3a3f]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
