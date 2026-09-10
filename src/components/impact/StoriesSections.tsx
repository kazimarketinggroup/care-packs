"use client";

import React, { useState } from "react";
import Image from "next/image";

export function StoriesHero() {
  const [selectedTab, setSelectedTab] = useState("Council Stories");

  const tabs = [
    { label: "Council Stories", id: "council-stories" },
    { label: "Volunteer Stories", id: "volunteer-stories" },
    { label: "Partner Stories", id: "partner-stories" },
  ];

  const handleTabClick = (tab: { label: string; id: string }) => {
    setSelectedTab(tab.label);
    const el = document.getElementById(tab.id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="w-full relative overflow-hidden">
      {/* Hero Header */}
      <div className="relative w-full bg-[#1b1b1b] min-h-[420px] md:min-h-[480px] flex flex-col justify-center">
        <Image
          src="/assets/images/stories__community_impact__58_4745.webp"
          alt="In the words of the people who were there"
          fill
          className="object-cover object-center opacity-45 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black/85" />

        <div className="relative z-10 max-w-[1220px] mx-auto px-4 md:px-6 py-12 md:py-16 w-full flex flex-col items-center text-center">
          <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-3">
            OUR IMPACT
          </span>
          <h1 className="text-[32px] sm:text-[42px] md:text-[48px] leading-[1.15] font-semibold text-white max-w-[850px] mb-4">
            In the words of the people who were there
          </h1>
          <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-[1.6] text-white/80 max-w-[700px]">
            Councils, volunteers and corporate partners on what a packing day and a delivery actually looked like.
          </p>
        </div>
      </div>

      {/* Pill Navigation Bar */}
      <div className="w-full bg-white border-b border-[#ececec] py-3 sticky top-[72px] z-30 shadow-sm">
        <div className="max-w-[1220px] mx-auto px-4 md:px-6 flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const isActive = selectedTab === tab.label;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`px-4 sm:px-5 py-2 rounded-full text-[13px] sm:text-[14px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#ec008c] text-white shadow-sm"
                    : "bg-transparent hover:bg-gray-100 text-[#4a4a53]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FromCouncilOfficersSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      council: "Walsall Council",
      quote:
        "We are grateful to Care Packs for this thoughtful donation which will make a real difference to families in our community who are facing financial hardship. We work tirelessly to support vulnerable families, and these care packages will provide immediate practical help with essential baby care items. This partnership demonstrates the power of working together between local authorities and charitable organisations in addressing child poverty and supporting our most vulnerable residents.",
      author:
        "Councillor Mark Statham, Portfolio Holder for Children, Families and Lifelong Learning at Walsall Council.",
      summary:
        "More than 500 packs have been distributed through Walsall, with 330 delivered to four Family Hubs and another 180 to community shops by December 2025.",
    },
    {
      council: "Croydon Family Hubs",
      quote:
        "Receiving pre-packed, sealed, and fully standardized baby care packs allows our social care teams to deliver immediate relief directly to mothers without any administrative bottleneck or inventory delay.",
      author: "Early Years Lead, Croydon Borough Council",
      summary:
        "Distributed across Family Hub networks providing critical newborn support across southern London.",
    },
  ];

  const current = testimonials[activeSlide % testimonials.length];

  return (
    <section id="council-stories" className="w-full bg-white py-14 border-b border-[#f0f0f0] scroll-mt-24">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6">
        <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-2 block">
          STORIES
        </span>
        <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1b1b1b] leading-tight mb-8">
          From Council Officers
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Testimonial Card */}
          <div className="bg-white border border-[#e8e8ee] rounded-[16px] p-6 sm:p-8 shadow-sm flex flex-col justify-between min-h-[380px]">
            <div>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#1b1b1b] mb-4">
                {current.council}
              </h3>

              <div className="border-l-2 border-[#ec008c] pl-4 sm:pl-5 mb-5">
                <p className="text-[14px] sm:text-[15px] italic text-[#33333b] leading-relaxed mb-3">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <p className="text-[13px] font-semibold text-[#1b1b1b]">
                  {current.author}
                </p>
              </div>

              <p className="text-[13px] sm:text-[14px] text-[#6b6b75] leading-relaxed">
                {current.summary}
              </p>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2 mt-6 pt-4 border-t border-gray-100">
              {[0, 1, 2, 3, 4].map((dot) => (
                <button
                  key={dot}
                  onClick={() => setActiveSlide(dot % testimonials.length)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    dot === (activeSlide % 5)
                      ? "bg-[#ec008c] w-5"
                      : "bg-[#f5c6e5] hover:bg-[#ec008c]/60"
                  }`}
                  aria-label={`Slide ${dot + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Council Photo */}
          <div className="relative h-[340px] sm:h-[400px] rounded-[18px] overflow-hidden shadow-md">
            <Image
              src="/assets/images/stories__care_packs_family_hubs_1__58_4698.webp"
              alt="Walsall Family Hub representatives holding Care Packs"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FromVolunteersSection() {
  const volunteers = [
    {
      quote:
        "Our team spent the afternoon loading, transporting and delivering more than 350 packs to Family Hubs. It was one of the most meaningful days we have done as a leadership team.",
      org: "Cisco UK & Ireland",
      detail: "Leadership volunteer day, Walsall",
    },
    {
      quote:
        "More than 150 volunteers from 30+ organisations assembled over 440 baby care packs in a single afternoon. The energy in the room was extraordinary.",
      org: "Allegis Global Solutions",
      detail: "Packathon volunteer event",
    },
    {
      quote:
        "Our employees participated in a Care Packathon producing 230 packs. Another activity created 300 packs for families in Coventry. It directly feeds into our ESG programme.",
      org: "Infosys",
      detail: "Referenced in Infosys ESG Report 2025/26",
    },
  ];

  return (
    <section id="volunteer-stories" className="w-full bg-[#fdfafc] py-14 border-b border-[#f0f0f0] scroll-mt-24">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6">
        <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-2 block">
          STORIES
        </span>
        <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1b1b1b] leading-tight mb-8">
          From Volunteers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {volunteers.map((v, i) => (
            <div
              key={i}
              className="bg-white border border-[#ececef] rounded-[14px] p-6 sm:p-7 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[28px] font-serif font-bold text-[#ec008c] leading-none mb-2 block">
                  &ldquo;
                </span>
                <p className="text-[14px] text-[#33333b] leading-relaxed mb-6">
                  {v.quote}
                </p>
              </div>

              <div>
                <h4 className="text-[15px] font-bold text-[#ec008c]">
                  {v.org}
                </h4>
                <p className="text-[12px] text-[#6b6b75] mt-0.5">{v.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FromPartnersSection() {
  const partners = [
    {
      title: "Allegis Global Solutions",
      desc: "Allegis has described Care Packs as a formal charity partner and uses Care Packs activities for employee and community engagement. A recent activation involved 20 colleagues contributing 40+ volunteer hours to build 200 baby care packs for Walsall Council.",
    },
    {
      title: "Babyzone",
      desc: "Babyzone received 700 packs across Croydon, Barking & Dagenham and Barnet in 2026. The partnership demonstrates Care Packs' growing geographic reach into London boroughs with significant early-years need.",
    },
  ];

  return (
    <section id="partner-stories" className="w-full bg-white py-14 scroll-mt-24">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6">
        <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-2 block">
          STORIES
        </span>
        <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1b1b1b] leading-tight mb-8">
          From Partners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partners.map((p, i) => (
            <div
              key={i}
              className="bg-[#fafafa] border border-[#ececef] rounded-[14px] p-6 sm:p-7 shadow-sm"
            >
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#1b1b1b] mb-3">
                {p.title}
              </h3>
              <p className="text-[14px] text-[#4a4a53] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
