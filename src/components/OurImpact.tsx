"use client";

import React, { useEffect, useRef, useState } from "react";

interface ImpactStat {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  isWide?: boolean;
}

const impactStats: ImpactStat[] = [
  { target: 5273, label: "Care Packs built" },
  { target: 3490, label: "Packs delivered in 2025" },
  { target: 92010, prefix: "£", label: "Raised" },
  { target: 34271, label: "Essential items purchased", isWide: true },
  { target: 548, label: "Volunteers" },
  { target: 2163, label: "Volunteer hours" },
  { target: 144, label: "Companies involved" },
  { target: 15, label: "Council, charity & distribution partners", isWide: true },
];

function formatNumber(num: number, prefix = "", suffix = ""): string {
  return `${prefix}${num.toLocaleString()}${suffix}`;
}

export default function OurImpact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(() =>
    impactStats.map((s) => s.target)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Start counting up animation from 0
          const duration = 1800; // 1.8 seconds
          const startTime = performance.now();

          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out expo for smooth deceleration
            const easeProgress =
              progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCounts(
              impactStats.map((stat) => Math.floor(stat.target * easeProgress))
            );

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCounts(impactStats.map((stat) => stat.target));
            }
          };

          // Initialize to 0 then animate
          setCounts(impactStats.map(() => 0));
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} id="impact" className="w-full bg-white py-[40px] md:py-[50px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-[112px]">
        {/* Soft Pink Rounded Card Container (Frame 5 in Figma) */}
        <div className="w-full max-w-[1215px] mx-auto bg-[#fff4fb] rounded-[15px] pt-8 pb-10 px-5 sm:px-8 md:px-10 lg:px-[56px] lg:pt-[49px] lg:pb-[57px] shadow-sm">
          {/* Tag: Pink Square + Our Impact */}
          <div className="flex items-center gap-2">
            <span className="w-[10px] h-[10px] bg-[#ec008c] shrink-0" />
            <span className="text-[13px] leading-[17px] font-medium text-[#1b1b1b]">
              Our Impact
            </span>
          </div>

          {/* Section Heading */}
          <h2 className="mt-6 md:mt-[35px] text-[24px] sm:text-[28px] md:text-[30px] leading-[34px] sm:leading-[38px] md:leading-[40px] font-medium text-black tracking-normal">
            One year of activity. Published, counted, delivered.
          </h2>

          {/* Impact Stats Grid (2 rows of 4 on desktop, responsive on mobile & tablet) */}
          <div className="mt-8 md:mt-[51px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[230px_230px_230px_minmax(270px,1fr)] gap-4 sm:gap-6 lg:gap-x-[28px] lg:gap-y-[22px]">
            {impactStats.map((stat, idx) => (
              <div
                key={stat.label}
                className="bg-white rounded-[10px] min-h-[110px] md:h-[116px] p-5 sm:p-6 lg:p-[24px] flex flex-col justify-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="text-[26px] sm:text-[28px] md:text-[30px] leading-[36px] md:leading-[40px] font-semibold text-black tracking-tight font-[family-name:var(--font-inter)]">
                  {formatNumber(counts[idx], stat.prefix, stat.suffix)}
                </div>
                <div className="mt-1.5 md:mt-2 text-[14px] md:text-[15px] leading-[20px] font-normal text-black">
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
