"use client";

import React from "react";
import { Handshake, PackageCheck, Truck, Users } from "lucide-react";

export default function ReferralModelSection() {
  const steps = [
    {
      title: "Care Packs coordinates",
      description:
        "We receive funding, coordinate Packathon and team-day events, manage relationships with all partners, and ensure transparency throughout.",
      icon: Handshake,
    },
    {
      title: "Pack assembly",
      description:
        "Volunteers assemble baby care packs at organised events. Items are sourced, quality-checked and packed to a consistent specification.",
      icon: PackageCheck,
    },
    {
      title: "Distribution partners",
      description:
        "Local authorities, Family Hubs, food banks and registered charities receive packs and distribute them to families in their networks.",
      icon: Truck,
    },
    {
      title: "Families in hardship",
      description:
        "Vulnerable families particularly those with babies and young children receive essential items with dignity and without bureaucracy.",
      icon: Users,
    },
  ];

  return (
    <section id="referral-model" className="w-full bg-white py-12 sm:py-16 md:py-20 scroll-mt-24">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        {/* Eyebrow */}
        <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.1em] text-[#ec008c] uppercase mb-2 block">
          HOW WE WORK
        </span>

        {/* Heading */}
        <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-semibold text-[#1b1b1b] leading-[1.2] tracking-tight mb-4">
          Referral Model
        </h2>

        {/* Subtitle / Intro */}
        <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53] max-w-[880px] mb-10 sm:mb-12">
          Care Packs operates as a network orchestrator rather than a direct-to-beneficiary charity. We work through established organisations that already have relationships with vulnerable communities.
        </p>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: 2 Magenta Supporter Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* Card 1: Business & Corporate Partners */}
            <div className="bg-[#9f005c] rounded-[10px] p-6 sm:p-7 text-white shadow-sm flex flex-col justify-center flex-1">
              <h3 className="text-[18px] sm:text-[19px] font-bold leading-snug mb-2.5">
                Business &amp; Corporate Partners
              </h3>
              <p className="text-[13.5px] sm:text-[14px] leading-[22px] text-white/95">
                Corporates fund packs, donate essential products at scale, or sponsor employee volunteering team days. Every interaction creates measurable social value.
              </p>
            </div>

            {/* Card 2: Individual & Community Supporters */}
            <div className="bg-[#9f005c] rounded-[10px] p-6 sm:p-7 text-white shadow-sm flex flex-col justify-center flex-1">
              <h3 className="text-[18px] sm:text-[19px] font-bold leading-snug mb-2.5">
                Individual &amp; Community Supporters
              </h3>
              <p className="text-[13.5px] sm:text-[14px] leading-[22px] text-white/95">
                Individuals and local communities power our mission through personal donations, gifting baby essentials, or volunteering their time.
              </p>
            </div>
          </div>

          {/* Right Column: 4-Step Connected Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <div key={step.title} className="relative flex items-start gap-4 sm:gap-5">
                  {/* Indicator Column with line */}
                  <div className="relative flex flex-col items-center shrink-0">
                    <div className="w-[36px] h-[36px] sm:w-[38px] sm:h-[38px] rounded-full bg-[#ec008c] text-white flex items-center justify-center shrink-0 shadow-sm z-10">
                      <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                    </div>
                    {!isLast && (
                      <div className="w-[2px] bg-[#ec008c]/25 flex-1 min-h-[36px] mt-1" />
                    )}
                  </div>

                  {/* Step Card */}
                  <div className="bg-white rounded-[8px] border border-gray-100 shadow-[0_2px_14px_rgba(0,0,0,0.04)] p-5 sm:p-6 flex-1 hover:border-[#ec008c]/20 hover:shadow-md transition-all">
                    <h4 className="text-[15.5px] sm:text-[16px] font-bold text-[#1b1b1b] mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-[13px] sm:text-[13.5px] leading-[22px] text-[#555]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
