import React from "react";
import Image from "next/image";
import Link from "next/link";

export function PublicPackingDaysSection() {
  const bulletPoints = [
    "Half-day sessions, typically 30–60 volunteers",
    "All stock, tables and packing instructions provided",
    "Quality check and sealing done in the room",
    "Community venues with step-free access",
    "Suitable for volunteers aged 16 and over",
    "Pack count confirmed to the room at the end of the session",
  ];

  return (
    <section id="public-packing-days" className="w-full bg-white py-14 border-b border-[#f0f0f0] scroll-mt-24">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
          {/* Left Text & Details */}
          <div className="w-full lg:w-7/12">
            <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-2 block">
              VOLUNTEER WITH US
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1b1b1b] leading-tight mb-4">
              Public packing days
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4a4a53] leading-relaxed mb-8">
              Open sessions anyone can book onto. No experience needed, no minimum commitment, and the whole thing is done in a half day.
            </p>

            {/* 2-Column Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#ec008c] mt-2 shrink-0" />
                  <span className="text-[14px] sm:text-[15px] text-[#2d2d32] leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-5/12 relative h-[280px] sm:h-[340px] rounded-[16px] overflow-hidden shadow-sm">
            <Image
              src="/assets/images/volunteer_with_us__dsc00064__1__1__155_6206.webp"
              alt="Volunteers packing care items at a community session"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Upcoming events Callout Card */}
        <div className="mt-12">
          <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1b1b1b] mb-4">
            Upcoming events
          </h3>
          <div className="w-full bg-[#fff9fc] border border-[#ec008c]/40 rounded-[14px] p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h4 className="text-[22px] sm:text-[24px] font-bold text-[#1b1b1b]">
                  Packathon 2026
                </h4>
                <span className="bg-[#ec008c] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Registration open
                </span>
              </div>
              <p className="text-[14px] font-medium text-[#4a4a53] mb-3">
                13 October 2026 &nbsp;|&nbsp; Porchester Hall, Paddington, London
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-[#6b6b75]">
                <span><strong>Type:</strong> Major event</span>
                <span>•</span>
                <span><strong>Target:</strong> 4,500+ packs</span>
                <span>•</span>
                <span><strong>Capacity:</strong> ~15 corporate teams</span>
              </div>
            </div>

            <Link
              href="/news-events#upcoming-event"
              className="px-6 py-3 bg-[#ec008c] hover:bg-[#d6007e] text-white font-semibold text-[14px] rounded-[8px] transition-colors whitespace-nowrap shadow-sm"
            >
              Register your company
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CollectionDrivesSection() {
  const drives = [
    {
      badge: "WORKPLACE",
      title: "Office collection point",
      desc: "We supply the item list, posters and a collection box. You tell us when it is full.",
    },
    {
      badge: "COMMUNITY",
      title: "School and group drives",
      desc: "Run over a set fortnight against the published list, then dropped at the next packing session.",
    },
    {
      badge: "IMPORTANT",
      title: "Specification items only",
      desc: "We can only accept new, unopened items from the pack list. Anything else has to be turned away.",
    },
  ];

  return (
    <section id="collection-drives" className="w-full bg-[#fcfcfc] py-14 border-b border-[#f0f0f0] scroll-mt-24">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6">
        <div className="max-w-[700px] mb-8">
          <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-2 block">
            VOLUNTEER WITH US
          </span>
          <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1b1b1b] leading-tight mb-3">
            Collection drives
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#4a4a53] leading-relaxed">
            Community and workplace collections bring in stock at the specification we publish, so donated items go straight into packs rather than into storage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {drives.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[#e8e8ee] rounded-[14px] p-6 sm:p-7 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold tracking-[0.12em] text-[#ec008c] uppercase mb-2 block">
                  {item.badge}
                </span>
                <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1b1b1b] mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#55555e] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VolunteerEnquiriesSection() {
  return (
    <section id="volunteer-enquiries" className="w-full bg-white py-14 scroll-mt-24">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6">
        <div className="max-w-[700px] mb-8">
          <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-2 block">
            VOLUNTEER WITH US
          </span>
          <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1b1b1b] leading-tight mb-3">
            Volunteer enquiries
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#4a4a53] leading-relaxed">
            Tell us roughly when you are free and where you are based, and we will put you on the list for the next session in reach. Individual volunteers, families and small groups are all welcome.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#fff9fc] border border-[#ec008c]/30 rounded-[14px] p-6 sm:p-7">
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#ec008c] uppercase mb-2 block">
              VOLUNTEERS
            </span>
            <a
              href="mailto:jay.rohman@care-packs.org.uk"
              className="text-[20px] sm:text-[22px] font-bold text-[#ec008c] hover:underline break-all block mb-2"
            >
              jay.rohman@care-packs.org.uk
            </a>
            <p className="text-[14px] text-[#55555e]">
              Include your location and general availability.
            </p>
          </div>

          <div className="bg-white border border-[#e8e8ee] rounded-[14px] p-6 sm:p-7 shadow-sm">
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#ec008c] uppercase mb-2 block">
              NEXT PUBLIC DAY
            </span>
            <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1b1b1b] mb-2">
              Packathon 2026 · 13 October 2026 · Porchester Hall
            </h3>
            <p className="text-[14px] text-[#55555e]">
              14 volunteer places remaining.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
