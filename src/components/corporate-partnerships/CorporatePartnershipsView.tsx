"use client";

import React, { useState } from "react";
import Image from "next/image";

interface PartnerCard {
  tag: string;
  name: string;
  description: string;
  image?: string;
  isGreyPlaceholder?: boolean;
}

interface DistributionPartnerCard {
  tag: string;
  name: string;
  description: string;
  logo: string;
}

const corporatePartners: PartnerCard[] = [
  {
    tag: "CORPORATE PARTNER",
    name: "Cisco",
    description: "A leadership team that swapped the boardroom for a delivery van.",
    image: "/assets/images/care-packs-launch-event-1.webp",
  },
  {
    tag: "CORPORATE PARTNER",
    name: "Allegis Global Solutions",
    description: "A charity partner who brought their whole supplier network with them.",
    image: "/assets/images/partner-allegis-global.webp",
  },
];

const sponsors: PartnerCard[] = [
  {
    tag: "SPONSOR",
    name: "Lloyds Banking Group",
    description: "Founding-level support and a Packathon challenger team.",
    image: "/assets/images/sponsor-lloyds.webp",
  },
  {
    tag: "SPONSOR",
    name: "Computacenter",
    description: "Technology leadership turned into hands-on community delivery.",
    image: "/assets/images/sponsor-computacenter.webp",
  },
  {
    tag: "SPONSOR",
    name: "Hewlett Packard Enterprise",
    description: "A joint challenger team at the 2025 Packathon.",
    isGreyPlaceholder: true,
  },
  {
    tag: "SPONSOR",
    name: "Softcat",
    description: "Competitive pack-building with a serious purpose.",
    isGreyPlaceholder: true,
  },
  {
    tag: "SPONSOR",
    name: "Check Point Software",
    description: "A cybersecurity team building security of a different kind.",
    isGreyPlaceholder: true,
  },
  {
    tag: "SPONSOR",
    name: "Infosys",
    description: "Care Packs activity recognised in Infosys ESG reporting.",
    image: "/assets/images/sponsor-infosys.webp",
  },
  {
    tag: "SPONSOR",
    name: "NTT DATA",
    description: "Employee volunteering with a measurable, physical result.",
    isGreyPlaceholder: true,
  },
  {
    tag: "SPONSOR",
    name: "Mimecast",
    description: "Part of the 440-pack multi-organisation build.",
    image: "/assets/images/sponsor-mimecast.webp",
  },
  {
    tag: "CORPORATE PARTNER",
    name: "Lenovo",
    description: "Governance strength and hands-on support from day one.",
    isGreyPlaceholder: true,
  },
  {
    tag: "SPONSOR",
    name: "World Wide Technology",
    description: "A team that chose challenge over a golf day.",
    image: "/assets/images/sponsor-wwt.webp",
  },
];

const distributionPartners: DistributionPartnerCard[] = [
  {
    logo: "/assets/images/partner-walsall-council.webp",
    tag: "LOCAL AUTHORITY · WEST MIDLANDS",
    name: "Walsall Council",
    description: "From 50 packs to more than 500, through Family Hubs and community shops.",
  },
  {
    logo: "/assets/images/partner-babyzone.webp",
    tag: "CHARITY PARTNER · LONDON",
    name: "Babyzone",
    description: "700 packs across Croydon, Barking & Dagenham and Barnet.",
  },
  {
    logo: "/assets/images/partner-bow-foodbank.webp",
    tag: "FOOD BANK · EAST LONDON",
    name: "Bow Food Bank",
    description: "300 packs supporting families alongside emergency food provision.",
  },
];

export default function CorporatePartnershipsView() {
  const [activeTab, setActiveTab] = useState<"corporate" | "distribution">("corporate");

  const scrollToSection = (id: string, tab: "corporate" | "distribution") => {
    setActiveTab(tab);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full bg-white overflow-hidden border-b border-gray-100">
        <div className="max-w-[1220px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[400px] lg:min-h-[460px] py-10 lg:py-0">
            
            {/* Left Column: Eyebrow, Title, Subtitle & Sub-Tabs */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left z-10">
              <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-3 block">
                OUR PARTNERS
              </span>
              <h1 className="text-[34px] sm:text-[44px] md:text-[50px] font-bold text-[#1b1b1b] tracking-tight leading-[1.12] mb-5">
                A Gift of Hope with <br />
                Every Pack
              </h1>
              <p className="text-[15px] sm:text-[16px] md:text-[16.5px] leading-[1.65] text-[#4a4a53] max-w-[500px] mb-8">
                Care Packs turns corporate goodwill into visible, measurable support for families experiencing poverty across the UK. Explore the partners making it happen.
              </p>

              {/* Sub-Tabs */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => scrollToSection("corporate-partners", "corporate")}
                  className={`px-5 sm:px-6 py-2 rounded-full text-[13px] sm:text-[13.5px] font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === "corporate"
                      ? "bg-[#ec008c] text-white shadow-sm"
                      : "bg-transparent text-[#4a4a53] hover:text-[#1b1b1b] hover:bg-gray-100/70"
                  }`}
                >
                  Corporate Partners/Sponsors
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("distribution-partners", "distribution")}
                  className={`px-5 sm:px-6 py-2 rounded-full text-[13px] sm:text-[13.5px] font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === "distribution"
                      ? "bg-[#ec008c] text-white shadow-sm"
                      : "bg-transparent text-[#4a4a53] hover:text-[#1b1b1b] hover:bg-gray-100/70"
                  }`}
                >
                  Distribution Partners
                </button>
              </div>
            </div>

            {/* Right Column: Hero Photo of Girls Packing Box with Teddy Bear */}
            <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[520px] aspect-[1.55/1] rounded-[24px] overflow-hidden">
                <Image
                  src="/assets/images/corporate-partnerships-hero-clean-fade.webp"
                  alt="Care Packs volunteers packing gift of hope boxes"
                  fill
                  priority
                  className="object-cover object-right"
                />
                {/* Soft inward blend from the left and bottom */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Corporate Partners Section */}
      <section id="corporate-partners" className="w-full bg-[#fbf9fa] py-14 md:py-20 scroll-mt-20 border-b border-gray-100">
        <div className="max-w-[1220px] mx-auto px-4 md:px-6">
          
          {/* Pink Accent Line & Section Title */}
          <div className="w-8 h-[3.5px] bg-[#ec008c] mb-3.5 rounded-full" />
          <h2 className="text-[26px] sm:text-[30px] font-bold text-[#1b1b1b] tracking-tight mb-8">
            Corporate Partners
          </h2>

          {/* 2 Big Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {corporatePartners.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[18px] overflow-hidden border border-black/[0.04] shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col"
              >
                {/* Card Top Image */}
                <div className="relative w-full aspect-[1.8/1] bg-gray-100 overflow-hidden">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11.5px] sm:text-[12px] font-bold tracking-wider text-[#ec008c] uppercase block mb-2">
                      {item.tag}
                    </span>
                    <h3 className="text-[20px] sm:text-[22px] font-bold text-[#1b1b1b] mb-2 tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-[#52525b]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Sponsors Section */}
      <section id="sponsors" className="w-full bg-[#fbf9fa] py-14 md:py-20 scroll-mt-20 border-b border-gray-100">
        <div className="max-w-[1220px] mx-auto px-4 md:px-6">
          
          {/* Pink Accent Line & Section Title */}
          <div className="w-8 h-[3.5px] bg-[#ec008c] mb-3.5 rounded-full" />
          <h2 className="text-[26px] sm:text-[30px] font-bold text-[#1b1b1b] tracking-tight mb-8">
            Sponsors
          </h2>

          {/* 3 Columns Grid of Sponsors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {sponsors.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[18px] overflow-hidden border border-black/[0.04] shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col"
              >
                {/* Top Image or Blank Grey Placeholder */}
                <div className="relative w-full aspect-[16/10] bg-[#e8eaed] overflow-hidden">
                  {item.image && !item.isGreyPlaceholder ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#e8eaed]" />
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11.5px] sm:text-[12px] font-bold tracking-wider text-[#ec008c] uppercase block mb-2">
                      {item.tag}
                    </span>
                    <h3 className="text-[18px] sm:text-[19.5px] font-bold text-[#1b1b1b] mb-2 tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#52525b]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Current Distribution Partners Section */}
      <section id="distribution-partners" className="w-full bg-[#fbf9fa] py-14 md:py-20 scroll-mt-20">
        <div className="max-w-[1220px] mx-auto px-4 md:px-6">
          
          {/* Pink Accent Line & Section Title */}
          <div className="w-8 h-[3.5px] bg-[#ec008c] mb-3.5 rounded-full" />
          <h2 className="text-[26px] sm:text-[30px] font-bold text-[#1b1b1b] tracking-tight mb-8">
            Current distribution partners
          </h2>

          {/* 3 Logo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
            {distributionPartners.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[20px] p-7 sm:p-8 border border-black/[0.03] shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  {/* Partner Logo */}
                  <div className="h-[44px] mb-6 flex items-center justify-start">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={130}
                      height={42}
                      className="object-contain object-left max-h-[42px] w-auto"
                    />
                  </div>

                  {/* Partner Details */}
                  <span className="text-[11px] sm:text-[11.5px] font-bold tracking-wider text-[#ec008c] uppercase block mb-2">
                    {item.tag}
                  </span>
                  <h3 className="text-[18px] sm:text-[19px] font-bold text-[#1b1b1b] mb-2 tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#52525b]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
