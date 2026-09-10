import React from "react";
import Image from "next/image";

export function CorporatePartnershipsSection() {
  const stats = [
    { value: "£92,010", label: "Raised in 2025" },
    { value: "144", label: "Companies involved" },
    { value: "2,163", label: "Volunteer hours" },
    { value: "5,273", label: "Packs built" },
  ];

  return (
    <section id="corporate-partnerships" className="w-full bg-white py-14 border-b border-[#f0f0f0] scroll-mt-24">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6">
        <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-2 block">
          PARTNER WITH US
        </span>
        <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1b1b1b] leading-tight mb-3">
          Corporate partnerships
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[#4a4a53] max-w-[800px] leading-relaxed mb-10">
          Governed by people who run operations at scale. Corporate partners fund pack runs, supply volunteer teams, or both and receive quarterly figures showing exactly what their contribution produced.
        </p>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white border border-[#e8e8ee] rounded-[14px] p-5 sm:p-6 shadow-sm"
            >
              <div className="text-[26px] sm:text-[32px] font-bold text-[#ec008c] leading-tight mb-1">
                {stat.value}
              </div>
              <div className="text-[13px] text-[#55555e] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Corporate donors & volunteering partners */}
        <div>
          <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1b1b1b] mb-6">
            Corporate donors &amp; volunteering partners
          </h3>
          <div className="relative w-full overflow-hidden bg-gray-50/50 rounded-[12px] py-4">
            <div className="animate-marquee-rtl flex items-center">
              <Image
                src="/assets/images/logos-strip.png"
                alt="Corporate partner logos"
                width={5586}
                height={236}
                className="h-[60px] sm:h-[70px] md:h-[76px] w-auto object-contain select-none pointer-events-none shrink-0"
                priority
              />
              <Image
                src="/assets/images/logos-strip.png"
                alt="Corporate partner logos"
                width={5586}
                height={236}
                className="h-[60px] sm:h-[70px] md:h-[76px] w-auto object-contain select-none pointer-events-none shrink-0"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ClosedVolunteeringDaysSection() {
  const cards = [
    {
      badge: "FORMAT",
      title: "Half day, 20-100 people",
      desc: "Two hours of packing plus a short briefing on where the packs go and who referred the families.",
    },
    {
      badge: "LOGISTICS",
      title: "We bring everything",
      desc: "Stock, tables, instructions and supervision. You provide the room and the team.",
    },
    {
      badge: "OUTPUT",
      title: "Counted on the day",
      desc: "The pack count is confirmed before everyone leaves, and appears in your quarterly report.",
    },
  ];

  return (
    <section id="closed-volunteering-days" className="w-full bg-[#fdfafc] py-14 border-b border-[#f0f0f0] scroll-mt-24">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6">
        <div className="max-w-[750px] mb-8">
          <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-2 block">
            PARTNER WITH US
          </span>
          <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1b1b1b] leading-tight mb-3">
            Closed volunteering days
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#4a4a53] leading-relaxed">
            A private session for one employer. A team of 20 assembles roughly 400 packs in a half day, at your office or a venue we arrange.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="bg-white border border-[#ececef] rounded-[14px] p-6 sm:p-7 shadow-sm"
            >
              <span className="text-[11px] font-bold tracking-[0.12em] text-[#ec008c] uppercase mb-2 block">
                {c.badge}
              </span>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1b1b1b] mb-3">
                {c.title}
              </h3>
              <p className="text-[14px] text-[#55555e] leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SponsorAPackRunSection() {
  const tiers = [
    {
      name: "Small run",
      detail: "Up to 100 packs · Company team day, 10–20 people",
      price: "~£1000",
    },
    {
      name: "Medium run",
      detail: "100–500 packs · Large team day, 20–100 people",
      price: "~£1000–£5,000",
    },
    {
      name: "Large run",
      detail: "500–1,000 packs · Packathon contribution or major event",
      price: "~£5,000–£10,000",
    },
    {
      name: "Full Packathon",
      detail: "1,000+ packs · Flagship event partnership",
      price: "From £10,000+",
    },
  ];

  const benefits = [
    "Named event sponsorship recognition",
    "Logo on event materials and photography",
    "Social media tagging and recognition",
    "Press release support",
    "Post event impact report (packs built, volunteer hours, distribution outcomes)",
    "Inclusion in Care Packs' annual impact statement",
    "Certificate of sponsorship",
    "Content assets for ESG reporting",
  ];

  return (
    <section id="sponsor-a-pack-run" className="w-full bg-white py-14 scroll-mt-24">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6">
        <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1b1b1b] leading-tight mb-8">
          Sponsor a Pack Run
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Column: Description + Tier cards */}
          <div>
            <p className="text-[15px] sm:text-[16px] text-[#4a4a53] leading-relaxed mb-6">
              Sponsoring a pack run means your organisation funds all the materials the baby wipes, shampoo, lotion, sponges and biodegradable bags that go into a set number of packs. On the day of the event, your team (and any others participating) assembles those packs.
            </p>

            <div className="space-y-3.5 mb-4">
              {tiers.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e8e8ee] hover:border-[#ec008c]/40 rounded-[12px] p-4 sm:p-5 flex items-center justify-between gap-4 transition-colors shadow-sm"
                >
                  <div>
                    <h4 className="text-[16px] font-bold text-[#1b1b1b]">
                      {t.name}
                    </h4>
                    <p className="text-[13px] text-[#6b6b75]">{t.detail}</p>
                  </div>
                  <div className="text-[16px] sm:text-[18px] font-bold text-[#ec008c] whitespace-nowrap">
                    {t.price}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[12px] text-[#787882] leading-relaxed">
              All figures approximate. Based on ~£10 per pack. Additional logistics and operational costs may apply for larger events.
            </p>
          </div>

          {/* Right Column: What sponsors receive */}
          <div>
            <h3 className="text-[20px] font-bold text-[#1b1b1b] mb-4">
              What sponsors receive
            </h3>
            <div className="space-y-2.5">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="bg-[#fff9fc] border border-[#ec008c]/20 rounded-[10px] px-4 py-3 text-[14px] text-[#2d2d32] font-medium flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ec008c] shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
