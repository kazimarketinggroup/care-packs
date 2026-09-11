"use client";

import React from "react";

interface AnnouncementItem {
  date: string;
  title: string;
  description: string;
  badge: "Distribution" | "Events" | "Partner" | "News";
}

const announcements: AnnouncementItem[] = [
  {
    date: "June 2026",
    title: "1,000 packs delivered in six weeks",
    description:
      "Care Packs delivers 700 packs to five boroughs across Croydon, Barking & Dagenham and Barnet, and 300 packs to New Food Bank, in a landmark six-week distribution period.",
    badge: "Distribution",
  },
  {
    date: "2026",
    title: "Packathon 2026 announced - 13 October, Porchester Hall",
    description:
      "Dr Colin Williams announces Packathon 2026 at Porchester Hall, Paddington. Targets more than 4,500 packs. Capacity for approximately 15 corporate organisations.",
    badge: "Events",
  },
  {
    date: "2025/26",
    title: "Infosys features Care Packs in its ESG Report",
    description:
      "Infosys's 2025/26 ESG Report highlights two Care Packs activations: a Techathon producing 250 packs and a second activity creating 300 packs for families in Coventry.",
    badge: "Partner",
  },
  {
    date: "December 2025",
    title: "500+ packs distributed through Walsall",
    description:
      "Walsall Council confirms that over 500 Care Packs have been distributed through its Family Hubs and community shops including 320 to four Family Hubs and 180 to community shops.",
    badge: "Distribution",
  },
  {
    date: "May 2025",
    title: "Care Packs launches publicly in London",
    description:
      "Care Packs makes its public launch in London with 300 packs assembled in under an hour. Cisco, Lloyds Banking Group, Computacenter, HCL, Softcat and Check Point Software participate.",
    badge: "News",
  },
  {
    date: "September 2024",
    title: "Care Packs registers as a CIO",
    description:
      "Care Packs formally registers as a Charitable Incorporated Organisation with the Charity Commission for England and Wales. Charity number 1209874.",
    badge: "News",
  },
];

export default function NewsEventsAnnouncements() {
  return (
    <section id="announcements" className="w-full bg-white py-16 md:py-20 scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title */}
        <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-2 block">
          NEWS
        </span>
        <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-bold text-[#1b1b1b] tracking-tight mb-8">
          Announcements
        </h2>

        {/* Announcements List */}
        <div className="space-y-4">
          {announcements.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[14px] p-6 sm:p-7 border border-[#ede8eb] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-sm transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                
                {/* Left: Date & Title */}
                <div className="lg:col-span-4">
                  <span className="text-[12px] text-[#8e8e93] font-medium block mb-1">
                    {item.date}
                  </span>
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-[#1b1b1b] leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Center: Description */}
                <div className="lg:col-span-6">
                  <p className="text-[14px] sm:text-[15px] leading-[1.65] text-[#4a4a53]">
                    {item.description}
                  </p>
                </div>

                {/* Right: Category Badge */}
                <div className="lg:col-span-2 flex justify-start lg:justify-end">
                  <span className="px-3 py-1 rounded-full bg-[#fef0f7] text-[#ec008c] font-semibold text-[11.5px] border border-[#fce7f3] whitespace-nowrap">
                    {item.badge}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
